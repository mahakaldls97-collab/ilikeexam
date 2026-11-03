/* Admin panel ka "Publish" button yahan aata hai.
   Do files (js/data.js + js/questions.js) aur panel me chuni gayi photos
   ek hi commit me GitHub par daalte hain — iske baad Vercel khud site bana deta hai.
   Token sirf server ke environment me rehta hai (GH_TOKEN), browser me kabhi nahi jaata. */

var crypto = require("crypto");

var REPO = process.env.GH_REPO || "mahakaldls97-collab/ilikeexam";
var BRANCH = "main";
var MAX_BYTES = 2 * 1024 * 1024;

/* sirf yahi do path likhe ja sakte hain — koi aur file is endpoint se nahi badal sakti */
var ALLOWED = {
  "js/data.js": "window.DATA",
  "js/questions.js": "window.QUESTIONS"
};

/* photos: sirf images/ folder, sirf asli photo files, itni hi maatra */
var IMG_MAX_COUNT = 12;
var IMG_MAX_BYTES = 1500000;
var IMG_MAX_TOTAL = 3000000;
var IMG_PATH = /^images\/[a-z0-9][a-z0-9._-]{0,90}\.(?:jpg|jpeg|png|gif|webp)$/;
var B64 = /^[A-Za-z0-9+/]+={0,2}$/;

function isPhoto(buf) {
  if (buf.length < 13) return false;
  var h = buf.slice(0, 4).toString("latin1");
  if (h[0] === "\xff" && h[1] === "\xd8" && h[2] === "\xff") return true;
  if (h === "\x89PNG") return true;
  if (h === "GIF8") return true;
  return h === "RIFF" && buf.slice(8, 12).toString("latin1") === "WEBP";
}

var HITS = {};

function same(a, b) {
  var x = Buffer.from(String(a)), y = Buffer.from(String(b));
  if (x.length !== y.length) return false;
  return crypto.timingSafeEqual(x, y);
}

async function gh(token, path, body) {
  var init = {
    headers: {
      accept: "application/vnd.github+json",
      authorization: "Bearer " + token,
      "user-agent": "ilikeexam-publish",
      "x-github-api-version": "2022-11-28"
    }
  };
  if (body) {
    init.method = "POST";
    init.headers["content-type"] = "application/json";
    init.body = JSON.stringify(body);
  }
  var r = await fetch("https://api.github.com" + path, init);
  var txt = await r.text();
  var json = null;
  try { json = txt ? JSON.parse(txt) : null; } catch (e) { json = null; }
  if (!r.ok) {
    var e = new Error("GitHub " + r.status + ": " + ((json && json.message) || txt.slice(0, 160)));
    e.code = r.status;
    throw e;
  }
  return json;
}

module.exports = async function (req, res) {
  res.setHeader("cache-control", "no-store");
  res.setHeader("content-type", "application/json; charset=utf-8");

  function out(code, obj) {
    res.statusCode = code;
    res.end(JSON.stringify(obj));
  }

  if (req.method !== "POST") return out(405, { ok: false, error: "Sirf POST chalta hai" });
  if (typeof fetch !== "function") return out(500, { ok: false, error: "Server purana hai (Node 18+ chahiye)" });

  var token = process.env.GH_TOKEN;
  var pass = process.env.PUBLISH_PASS;
  if (!token || !pass) return out(500, { ok: false, error: "Vercel me GH_TOKEN ya PUBLISH_PASS set nahi hai" });

  var body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch (e) { return out(400, { ok: false, error: "JSON galat hai" }); }
  }
  if (!body || typeof body !== "object") return out(400, { ok: false, error: "Body khali hai" });

  if (typeof body.pass !== "string" || !same(body.pass.trim(), pass)) {
    var ip = String((req.headers && (req.headers["x-forwarded-for"] || "")) || "").split(",")[0].trim() || "?";
    var now = Date.now();
    HITS[ip] = (HITS[ip] || []).filter(function (t) { return now - t < 600000; });
    HITS[ip].push(now);
    if (HITS[ip].length > 12) return out(429, { ok: false, error: "Bahut galat koshish. 10 minute baad try karo." });
    return out(401, { ok: false, error: "Publish passcode galat hai" });
  }

  var files = body.files;
  if (!files || typeof files !== "object") return out(400, { ok: false, error: "files nahi mile" });

  var names = Object.keys(files);
  for (var i = 0; i < names.length; i++) {
    var p = names[i];
    if (!ALLOWED[p]) return out(400, { ok: false, error: "Is file ko publish nahi kar sakte: " + p });
    var txt = files[p];
    if (typeof txt !== "string" || txt.length < 200) return out(400, { ok: false, error: p + " khali ya adhoori hai" });
    if (Buffer.byteLength(txt, "utf8") > MAX_BYTES) return out(413, { ok: false, error: p + " bahut badi hai" });
    if (txt.indexOf(ALLOWED[p]) < 0) return out(400, { ok: false, error: p + " me " + ALLOWED[p] + " nahi mila — galat file lag rahi hai" });
  }

  var imgs = (body.images && typeof body.images === "object" && !Array.isArray(body.images)) ? body.images : {};
  var imgNames = Object.keys(imgs).sort();
  if (imgNames.length > IMG_MAX_COUNT) return out(413, { ok: false, error: "Ek saath " + IMG_MAX_COUNT + " se zyada photo nahi bhej sakte" });
  var photoBytes = 0;
  for (var n2 = 0; n2 < imgNames.length; n2++) {
    var ip = imgNames[n2], b64 = String(imgs[ip]);
    if (!IMG_PATH.test(ip)) return out(400, { ok: false, error: "Photo ka path galat: " + ip });
    if (b64.length % 4 || !B64.test(b64)) return out(400, { ok: false, error: ip + " ka data kharab hai" });
    var buf = Buffer.from(b64, "base64");
    if (!isPhoto(buf)) return out(400, { ok: false, error: ip + " file photo nahi hai" });
    if (buf.length > IMG_MAX_BYTES) return out(413, { ok: false, error: ip + " bahut badi photo hai (1.5 MB se zyada)" });
    photoBytes += buf.length;
    if (photoBytes > IMG_MAX_TOTAL) return out(413, { ok: false, error: "Photo ka total size bahut zyada hai — pehle publish karo" });
  }

  try {
    var ref = await gh(token, "/repos/" + REPO + "/git/ref/heads/" + BRANCH);
    var parentSha = ref.object.sha;
    var parent = await gh(token, "/repos/" + REPO + "/git/commits/" + parentSha);

    var tree = [];
    for (var k = 0; k < names.length; k++) {
      var path = names[k];
      var blob = await gh(token, "/repos/" + REPO + "/git/blobs", {
        content: Buffer.from(files[path], "utf8").toString("base64"),
        encoding: "base64"
      });
      tree.push({ path: path, mode: "100644", type: "blob", sha: blob.sha });
    }
    for (var m2 = 0; m2 < imgNames.length; m2++) {
      var ipath = imgNames[m2];
      var iblob = await gh(token, "/repos/" + REPO + "/git/blobs", {
        content: String(imgs[ipath]),
        encoding: "base64"
      });
      tree.push({ path: ipath, mode: "100644", type: "blob", sha: iblob.sha });
    }

    var newTree = await gh(token, "/repos/" + REPO + "/git/trees", { base_tree: parent.tree.sha, tree: tree });
    var commit = await gh(token, "/repos/" + REPO + "/git/commits", {
      message: "Publish from admin panel — " + new Date().toISOString().slice(0, 16).replace("T", " ") + " UTC" +
        (imgNames.length ? " (+" + imgNames.length + " photo)" : ""),
      tree: newTree.sha,
      parents: [parentSha]
    });
    await gh(token, "/repos/" + REPO + "/git/refs/heads/" + BRANCH, { sha: commit.sha, force: false });

    return out(200, {
      ok: true,
      commit: commit.sha.slice(0, 7),
      files: names,
      photos: imgNames,
      bytes: names.map(function (n) { return Buffer.byteLength(files[n], "utf8"); })
    });
  } catch (e) {
    var msg = e && e.message ? e.message : "Publish fail";
    return out(500, { ok: false, error: msg });
  }
};
