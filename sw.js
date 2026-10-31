/* I LIKE EXAM — offline cache. Version badhao jab content badle. */
var V = "ile-v3";
var CORE = ["./", "./index.html", "./css/style.css", "./js/data.js", "./js/icons.js", "./js/app.js", "./manifest.webmanifest", "./icons/icon.svg"];

/* js/, css/ aur HTML hamesha pehle network se lena, warna data.js me naya
   data dalne ke baad browser purana cached data dikhata rehta hai.
   questions.js CORE me nahi hai — vo MCQ page khulte hi lazy load hota hai aur
   usi waqt cache me bhar jata hai, isliye offline me bhi mil jata hai. */
function isCode(rawUrl) {
  var p = new URL(rawUrl).pathname;
  return /\/(js|css)\//.test(p) || /\.(html?)$/.test(p) || p.endsWith("/");
}

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(V).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== V; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var nav = req.mode === "navigate";
  e.respondWith(
    caches.match(req).then(function (hit) {
      if (hit && !nav && !isCode(req.url)) return hit;
      return fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(V).then(function (c) { c.put(req, copy); });
        return res;
      }).catch(function () { return hit || caches.match("./index.html"); });
    })
  );
});
