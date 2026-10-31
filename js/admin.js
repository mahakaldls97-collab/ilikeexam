/* =============================================================
   I LIKE EXAM — admin.js : content panel (no server, no build)
   - js/data.js (notes) + js/questions.js (MCQ sets) ka load hua data edit hota hai
   - har badlav turant browser ke localStorage me "draft" ban jaata hai
   - Publish tab se data.js aur questions.js download hote hain (wahi asli publish step)
   ============================================================= */
(function () {
  "use strict";

  var DRAFT_KEY = "ile:draft";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var main = $("#admMain");
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var clone = function (o) { return JSON.parse(JSON.stringify(o)); };

  /* ---------------- state ---------------- */
  var D = load();
  var ui = { tab: "notes", subj: (D.subjects[0] || {}).id, note: null, set: null, deck: "rajasthan", month: "January", geo: "districts", game: "crossword", bulk: [] };
  var saveTimer = null, dirty = false;

  function load() {
    try {
      var raw = localStorage.getItem(DRAFT_KEY);
      if (raw) {
        var j = JSON.parse(raw);
        if (j && j.subjects && j.site) return j;
      }
    } catch (e) { }
    var d = clone(window.DATA || { site: {}, subjects: [], districts: [], states: [], exams: [], tricks: [], calendar: {}, tools: [], flashcards: {}, crossword: { clues: [] }, jokes: [] });
    /* prashn alag file (js/questions.js) me hain — yahan jod lete hain taaki
       panel me ek hi object dikhe, aur export par dono files ban jayein */
    var QS = window.QUESTIONS || {};
    d.subjects.forEach(function (s) { s.sets = QS[s.id] || []; });
    return d;
  }

  function saveNow() {
    var st = $("#admStatus");
    if (!dirty) { if (st) { st.textContent = "Auto-save chalu — pehla badlav karte hi save hoga"; st.className = "adm-status"; } return; }
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(D));
      if (st) { st.textContent = "Auto-save hua " + new Date().toLocaleTimeString() + " (is browser me)"; st.className = "adm-status saved"; }
    } catch (e) {
      if (st) { st.textContent = "SAVE FAIL — draft bahut bara ho gaya. Publish tab se data.js + questions.js download karke backup lo."; st.className = "adm-status warn"; }
    }
    counts();
  }
  function touch() { dirty = true; clearTimeout(saveTimer); saveTimer = setTimeout(saveNow, 500); }
  window.addEventListener("beforeunload", function () { clearTimeout(saveTimer); saveNow(); });
  document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === "s") { e.preventDefault(); clearTimeout(saveTimer); saveNow(); }
  });

  /* ---------------- small builders ---------------- */
  function counts() {
    var c = tally();
    $("#admCounts").innerHTML = [["Subjects", c.subj], ["Notes", c.notes], ["MCQ", c.mcq], ["Sets", c.sets], ["Tricks", c.tricks], ["Cards", c.cards], ["Jile", c.dist]]
      .map(function (x) { return "<i>" + x[1] + " " + x[0] + "</i>"; }).join("");
  }
  function tally() {
    var t = { subj: D.subjects.length, notes: 0, mcq: 0, sets: 0, tricks: (D.tricks || []).length, dist: (D.districts || []).length, states: (D.states || []).length, exams: (D.exams || []).length, cards: 0, days: 0, months: Object.keys(D.calendar || {}).length };
    D.subjects.forEach(function (s) {
      t.notes += (s.notes || []).length; t.sets += (s.sets || []).length;
      s.sets.forEach(function (x) { t.mcq += (x.qs || []).length; });
    });
    Object.keys(D.flashcards || {}).forEach(function (k) { t.cards += (D.flashcards[k] || []).length; });
    Object.keys(D.calendar || {}).forEach(function (k) { t.days += (D.calendar[k] || []).length; });
    return t;
  }
  function subject() {
    if (!D.subjects || !D.subjects.length) { D.subjects = [{ id: "rajasthan", name: "Rajasthan GK", hi: "राजस्थान", icon: "rajasthan", notes: [], sets: [] }]; ui.subj = "rajasthan"; }
    for (var i = 0; i < D.subjects.length; i++) if (D.subjects[i].id === ui.subj) return D.subjects[i];
    ui.subj = D.subjects[0].id;
    return D.subjects[0];
  }
  function slug(s) {
    return String(s || "").toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-").slice(0, 46) || "x";
  }
  function uniqId(base, used) { var id = base, n = 2; while (used[id]) { id = base + "-" + n; n++; } used[id] = 1; return id; }
  function allIds() {
    var used = {};
    D.subjects.forEach(function (s) { used[s.id] = 1; (s.notes || []).forEach(function (n) { used[n.id] = 1; }); });
    (D.tricks || []).forEach(function (t) { used["t-" + t.id] = 1; });
    return used;
  }
  function btn(label, cls, fn) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "adm-btn " + (cls || ""); b.textContent = label; b.onclick = fn; return b;
  }
  function mini(label, cls, fn, title) {
    var b = btn(label, (cls || "ghost") + " mini", fn); if (title) b.title = title; return b;
  }

  /* ---------------- HTML sanitizer (paste + save) ---------------- */
  var KEEP = { P: 1, UL: 1, OL: 1, LI: 1, B: 1, I: 1, U: 1, BR: 1, H2: 2, H3: 2, H4: 2, DL: 1, DT: 1, DD: 1, TABLE: 1, THEAD: 1, TBODY: 1, TR: 1, TH: 1, TD: 1, SUP: 1, SUB: 1, CODE: 1, SMALL: 1 };
  var MAP = { H1: "h3", H5: "h3", H6: "h3", STRONG: "b", EM: "i", STRIKE: "s", FONT: "span", SECTION: "div", ARTICLE: "div", MAIN: "div", HEADER: "div", FOOTER: "div", BLOCKQUOTE: "div", SPAN: "span", DIV: "div" };
  var DROP = { IMG: 1, SVG: 1, VIDEO: 1, AUDIO: 1, IFRAME: 1, OBJECT: 1, EMBED: 1, SCRIPT: 1, STYLE: 1, LINK: 1, META: 1, FORM: 1, INPUT: 1, BUTTON: 1, SELECT: 1, TEXTAREA: 1, CANVAS: 1, NOSCRIPT: 1, PICTURE: 1, SOURCE: 1, IFRAME: 1 };
  var CLS = { box: 1, notice: 1, kv: 1 };

  function safeHref(h) {
    h = String(h || "").trim();
    if (/^(https?:|mailto:|#|\/)/i.test(h) && !/^javascript:/i.test(h)) return h;
    return "";
  }
  function sanitize(html) {
    var host = document.createElement("div");
    host.innerHTML = String(html || "");
    var dropped = { img: 0, other: 0 };
    function walk(node, out) {
      for (var i = 0; i < node.childNodes.length; i++) {
        var c = node.childNodes[i];
        if (c.nodeType === 3) { out.appendChild(document.createTextNode(c.nodeValue.replace(/\u00a0/g, " "))); continue; }
        if (c.nodeType !== 1) continue;
        var tag = c.tagName.toUpperCase();
        if (DROP[tag]) { if (tag === "IMG") dropped.img++; else dropped.other++; continue; }
        if (tag === "A") {
          var href = safeHref(c.getAttribute("href"));
          if (!href) { walk(c, out); continue; }
          var a = document.createElement("a"); a.href = href; a.target = "_blank"; a.rel = "noopener noreferrer";
          walk(c, a); out.appendChild(a); continue;
        }
        var keepTag = KEEP[tag] ? tag.toLowerCase() : (MAP[tag] || null);
        if (tag === "S" || tag === "STRIKE") keepTag = "s";
        if (!keepTag) { walk(c, out); continue; }
        /* class sirf whitelist wale hi chalte hain; div bina class = p */
        var cls = String(c.className || "").split(/\s+/).filter(function (k) { return CLS[k]; });
        if (keepTag === "div") keepTag = cls.length ? "div" : "p";
        if (keepTag === "span") { walk(c, out); continue; }
        var el = document.createElement(keepTag);
        if (cls.length) el.className = cls.join(" ");
        if ((keepTag === "th" || keepTag === "td") && c.colSpan > 1) el.colSpan = c.colSpan;
        walk(c, el);
        out.appendChild(el);
      }
    }
    var box = document.createElement("div");
    walk(host, box);
    /* khaali paragraph / nesting cleanup */
    Array.prototype.forEach.call(box.querySelectorAll("p"), function (p) {
      if (!p.textContent.trim() && !p.querySelector("br,img")) p.parentNode.removeChild(p);
      if (p.querySelector("p,ul,ol,table,div")) { /* block ke andar block */ }
    });
    return { html: box.innerHTML.replace(/\s*\n\s*/g, "\n").trim(), dropped: dropped };
  }

  /* ---------------- rich text editor ---------------- */
  function richEditor(host, value, onChange) {
    var tools = [
      ["h2", "Heading", "block", "h2"], ["h3", "upla shirshak", "block", "h3"], ["p", "Para", "block", "p"],
      ["b", "Bold", "cmd", "bold"], ["i", "Italic", "cmd", "italic"],
      ["ul", "• List", "cmd", "insertUnorderedList"], ["ol", "1. List", "cmd", "insertOrderedList"],
      ["box", "Info box", "ins", '<div class="box">Yahan box ka text likho.</div>'],
      ["notice", "Khaas tip", "ins", '<div class="notice">Yahan tip likho.</div>'],
      ["kv", "Key : Value table", "ins", '<dl class="kv"><dt>Label</dt><dd>Value</dd><dt>Label 2</dt><dd>Value 2</dd></dl>'],
      ["tbl", "Table (3 khana)", "ins", "<table><tr><th>Naam</th><th>Hal</th><th>Tafsil</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>"],
      ["a", "Link", "link", ""], ["clean", "Format hatao", "cmd", "removeFormat"]
    ];
    host.innerHTML = '<div class="adm-bar"></div><div class="adm-rt" contenteditable="true" spellcheck="false"></div>' +
      '<p class="adm-hint">Word, PDF ya kisi bhi website se copy karke yahan paste kar do — khud saaf ho jayega. Chitra (image) paste nahi honge, sirf likhai.</p>';
    var bar = host.querySelector(".adm-bar"), rt = host.querySelector(".adm-rt");
    rt.innerHTML = value || "";
    tools.forEach(function (t) {
      var b = document.createElement("button"); b.type = "button"; b.textContent = t[1]; b.title = t[1];
      b.onmousedown = function (e) { e.preventDefault(); };
      b.onclick = function () {
        rt.focus();
        try {
          if (t[2] === "block") document.execCommand("formatBlock", false, "<" + t[3] + ">");
          else if (t[2] === "cmd") document.execCommand(t[3], false, null);
          else if (t[2] === "ins") document.execCommand("insertHTML", false, t[3]);
          else if (t[2] === "link") {
            var u = prompt("Link ka URL (https://…):", "https://");
            if (u && safeHref(u)) document.execCommand("createLink", false, u);
          }
        } catch (e) { }
        emit();
      };
      bar.appendChild(b);
    });
    function emit() {
      var s = sanitize(rt.innerHTML);
      onChange(s.html);
      if (s.dropped.img) flashStatus(s.dropped.img + " image hataya gaya (site text-only hai)", "warn");
    }
    rt.addEventListener("input", emit);
    rt.addEventListener("paste", function (e) {
      e.preventDefault();
      var html = (e.clipboardData || window.clipboardData).getData("text/html");
      var text = (e.clipboardData || window.clipboardData).getData("text/plain");
      var src = html ? html : (text || "").replace(/\r/g, "").split(/\n{2,}/).map(function (p) { return "<p>" + esc(p.replace(/\n/g, " ")) + "</p>"; }).join("");
      var clean = sanitize(src).html;
      document.execCommand("insertHTML", false, clean);
      emit();
    });
    return rt;
  }
  function flashStatus(msg, cls) {
    var st = $("#admStatus"); if (!st) return;
    st.textContent = msg; st.className = "adm-status " + (cls || "saved");
  }

  /* ---------------- generic row/table editor ---------------- */
  /* spec: [{k, l, type:'text|num|area', w}] */
  function tableEditor(host, rows, spec, opts) {
    opts = opts || {};
    host.innerHTML = "";
    rows.forEach(function (row, i) {
      var d = document.createElement("div"); d.className = "adm-row";
      if (opts.index) d.appendChild(spanIdx(i + 1));
      spec.forEach(function (f) {
        var w = document.createElement("div");
        w.className = "f" + (f.type === "num" ? " num" : "");
        var lab = document.createElement("label"); lab.className = "adm-l"; lab.textContent = f.l;
        var inp = document.createElement("input");
        inp.className = "adm-in"; inp.type = f.type === "num" ? "number" : "text";
        if (f.w) inp.style.flexBasis = f.w;
        inp.value = row[f.k] == null ? "" : row[f.k];
        inp.placeholder = f.ph || "";
        inp.oninput = function () {
          row[f.k] = f.type === "num" ? (inp.value === "" ? "" : +inp.value) : inp.value;
          touch(); if (opts.after) opts.after();
        };
        w.appendChild(lab); w.appendChild(inp); d.appendChild(w);
      });
      var ops = document.createElement("div"); ops.className = "ops";
      if (opts.move) {
        ops.appendChild(mini("↑", "ghost", function () { if (i > 0) { rows.splice(i - 1, 0, rows.splice(i, 1)[0]); touch(); render(); } }, "Upar le jao"));
        ops.appendChild(mini("↓", "ghost", function () { if (i < rows.length - 1) { rows.splice(i + 1, 0, rows.splice(i, 1)[0]); touch(); render(); } }, "Neeche le jao"));
      }
      ops.appendChild(mini("✕", "danger", function () {
        if (!confirm((opts.what || "Ye line") + " mitaaye? " + (opts.warn ? "(" + opts.warn + ") " : "") + "Data.js download karne tak wapas la sakte ho (undo sirf refresh se pehle).")) return;
        rows.splice(i, 1); touch(); render();
      }, "Delete"));
      d.appendChild(ops);
      host.appendChild(d);
    });
    if (!rows.length) {
      var p = document.createElement("p"); p.className = "adm-lead"; p.textContent = "Abhi kuch nahi hai — neeche ka button dabao.";
      host.appendChild(p);
    }
  }
  function spanIdx(n) { var s = document.createElement("div"); s.className = "idx"; s.textContent = n; return s; }

  function card(title, lead) {
    var c = document.createElement("div"); c.className = "card";
    if (title) { var h = document.createElement("h3"); h.textContent = title; c.appendChild(h); }
    if (lead) { var p = document.createElement("p"); p.className = "adm-lead"; p.textContent = lead; c.appendChild(p); }
    return c;
  }
  function field(labelText, el) {
    var w = document.createElement("div"); w.style.margin = "0 0 10px";
    var l = document.createElement("label"); l.className = "adm-l"; l.textContent = labelText;
    w.appendChild(l); w.appendChild(el); return w;
  }
  function input(value, ph, fn) {
    var i = document.createElement("input"); i.className = "adm-in"; i.type = "text"; i.value = value || ""; i.placeholder = ph || "";
    i.oninput = function () { fn(i.value); touch(); }; return i;
  }

  /* ---------------- TABS ---------------- */
  var TABS = [
    ["subjects", "Subjects"], ["notes", "Notes"], ["mcq", "MCQ prashn"], ["tricks", "Tricks"],
    ["flash", "Flashcards"], ["days", "Important Days"], ["exams", "Exam groups"],
    ["geo", "Jile / Rajya"], ["games", "Games data"], ["site", "Site settings"], ["publish", "Save & Publish"]
  ];

  function buildTabs() {
    var n = $("#admTabs");
    n.innerHTML = TABS.map(function (t) { return '<button type="button" data-tab="' + t[0] + '" class="' + (ui.tab === t[0] ? "on" : "") + '">' + t[1] + "</button>"; }).join("");
    Array.prototype.forEach.call(n.querySelectorAll("button"), function (b) {
      b.onclick = function () { ui.tab = b.getAttribute("data-tab"); buildTabs(); render(); window.scrollTo(0, 0); };
    });
  }

  function render() {
    main.innerHTML = "";
    ({ subjects: tabSubjects, notes: tabNotes, mcq: tabMcq, tricks: tabTricks, flash: tabFlash, days: tabDays, exams: tabExams, geo: tabGeo, games: tabGames, site: tabSite, publish: tabPublish }[ui.tab] || tabSubjects)();
  }

  /* ---------- Subjects ---------- */
  function tabSubjects() {
    var c = card("Subjects — kitni list hai", null);
    c.querySelector("h3").insertAdjacentHTML("afterend", '<p class="adm-lead">Har subject ka <b>id</b> link ka hissa hai (#/subject/rajasthan). Id badalne par purane link tootenge — naya subject banane ke liye hi id chhune ki zaroorat padti hai.</p>');
    var host = document.createElement("div"); c.appendChild(host);
    tableEditor(host, D.subjects, [
      { k: "id", l: "id (link me use hota hai)", w: "150px" },
      { k: "name", l: "Naam (English/Hinglish)" },
      { k: "hi", l: "Naam (हिंदी)" }
    ], { index: true, what: "Subject", warn: "iske saare notes aur MCQ set bhi mit jayenge", after: counts });
    main.appendChild(c);
    /* notes/sets ka hisaab */
    var stats = card("Har subject me kya hai");
    var t = document.createElement("table"); t.className = "adm-in"; t.style.boxShadow = "none";
    t.innerHTML = "<tr><th>Subject</th><th>Notes</th><th>Sets</th><th>MCQ</th></tr>" + D.subjects.map(function (s) {
      return "<tr><td>" + esc(s.name) + "</td><td>" + (s.notes || []).length + "</td><td>" + (s.sets || []).length + "</td><td>" + (s.sets || []).reduce(function (a, x) { return a + (x.qs || []).length; }, 0) + "</td></tr>";
    }).join("");
    stats.appendChild(t); main.appendChild(stats);
    var row = document.createElement("div"); row.className = "adm-btnrow";
    row.appendChild(btn("+ Naya subject", "", function () {
      var used = allIds();
      var id = uniqId("naya-subject", used);
      D.subjects.push({ id: id, name: "Naya Subject", hi: "नया विषय", icon: id, notes: [], sets: [] });
      touch(); render();
    }));
    main.appendChild(row);
  }

  /* ---------- Notes ---------- */
  function noteList() { return subject().notes || (subject().notes = []); }
  function tabNotes() {
    var wrap = document.createElement("div"); wrap.className = "adm-grid2";
    var left = card("Notes — " + subject().name);
    var sel = document.createElement("select"); sel.className = "adm-in";
    D.subjects.forEach(function (s) {
      var o = document.createElement("option"); o.value = s.id; o.textContent = s.name + " (" + (s.notes || []).length + ")";
      if (s.id === ui.subj) o.selected = true; sel.appendChild(o);
    });
    sel.onchange = function () { ui.subj = sel.value; ui.note = null; render(); };
    left.appendChild(field("Subject badlo", sel));
    var ul = document.createElement("ul"); ul.className = "adm-list";
    noteList().forEach(function (n, i) {
      var li = document.createElement("li"); if (ui.note === n.id) li.className = "on";
      var b = document.createElement("b"); b.textContent = n.title || "(bina naam)"; b.onclick = function () { ui.note = n.id; render(); };
      li.appendChild(b);
      var m = document.createElement("span"); m.className = "meta"; m.textContent = (n.mins || "?") + " min"; li.appendChild(m);
      li.appendChild(mini("↑", "ghost", function () { var a = noteList(); if (i > 0) { a.splice(i - 1, 0, a.splice(i, 1)[0]); touch(); render(); } }));
      li.appendChild(mini("↓", "ghost", function () { var a = noteList(); if (i < a.length - 1) { a.splice(i + 1, 0, a.splice(i, 1)[0]); touch(); render(); } }));
      li.appendChild(mini("✕", "danger", function () {
        if (!confirm('Note "' + (n.title || "") + '" mitaaye?')) return;
        noteList().splice(i, 1); if (ui.note === n.id) ui.note = null; touch(); render();
      }));
      ul.appendChild(li);
    });
    if (!noteList().length) { var p = document.createElement("p"); p.className = "adm-lead"; p.textContent = "Is subject me abhi koi note nahi. Neeche wala button dabao."; ul.appendChild(p); }
    left.appendChild(ul);
    left.appendChild(btn("+ Naya note", "", function () {
      var used = allIds();
      var n = { id: uniqId(subject().id + "-n" + (noteList().length + 1), used), title: "", hi: "", mins: 5, html: "<p></p>" };
      noteList().push(n); ui.note = n.id; touch(); render();
      setTimeout(function () { var t = $("#admNoteTitle"); if (t) t.focus(); }, 30);
    }));
    if (!ui.note || !noteList().some(function (x) { return x.id === ui.note; })) ui.note = (noteList()[0] || {}).id || null;
    wrap.appendChild(left);
    main.appendChild(wrap);

    var right = card(null);
    var list = noteList().filter(function (n) { return n.id === ui.note; });
    var n = list[0];
    if (!n) {
      right.appendChild(Object.assign(document.createElement("p"), { className: "adm-lead", textContent: "Is subject me abhi koi note nahi — “+ Naya note” dabao." }));
      wrap.appendChild(right); return;
    }
    var h = document.createElement("h3"); h.innerHTML = "Note edit — <code>" + esc(n.id) + "</code>"; right.appendChild(h);
    var ti = input(n.title, "Jaise: Rajasthan ka Bhugol — Nadiyan", function (v) {
      n.title = v; touch();
      var lbl = left.querySelectorAll(".adm-list li b")[noteList().indexOf(n)];
      if (lbl) lbl.textContent = v || "(bina naam)";
      var pv = $("#admPrevTitle"); if (pv) pv.textContent = v || "(bina naam)";
    });
    ti.id = "admNoteTitle";
    right.appendChild(field("Title (shirshak)", ti));
    right.appendChild(field("Upsar line (हिंदी me)", input(n.hi, "राजस्थान का भूगोल — नदियाँ", function (v) { n.hi = v; })));
    var mi = input(String(n.mins || 5), "5", function (v) { n.mins = +v || 1; }); mi.type = "number";
    right.appendChild(field("Padhne ka samay (minutes)", mi));
    right.appendChild(field("Body (jo page par dikhega)", (function () {
      var host = document.createElement("div");
      richEditor(host, n.html, function (html) { n.html = html; touch(); });
      return host;
    })()));
    var prev = card("Site par kaisa dikhega");
    prev.style.marginTop = "14px";
    var art = document.createElement("article"); art.className = "article";
    art.innerHTML = '<h1 id="admPrevTitle">' + esc(n.title || "(bina naam)") + "</h1>" + (n.html || "");
    prev.appendChild(art);
    wrap.appendChild(right);
    main.appendChild(prev);
  }

  /* ---------- MCQ ---------- */
  function setList() { return subject().sets || (subject().sets = []); }
  function currentSet() {
    var l = setList().filter(function (t) { return t.id === ui.set; });
    return l[0] || null;
  }
  function tabMcq() {
    var wrap = document.createElement("div"); wrap.className = "adm-grid2";
    var left = card("Sets — " + subject().name);
    var sel = document.createElement("select"); sel.className = "adm-in";
    D.subjects.forEach(function (s) {
      var o = document.createElement("option"); o.value = s.id; o.textContent = s.name + " (" + (s.sets || []).length + " set)";
      if (s.id === ui.subj) o.selected = true; sel.appendChild(o);
    });
    sel.onchange = function () { ui.subj = sel.value; ui.set = null; render(); };
    left.appendChild(field("Subject badlo", sel));
    var ul = document.createElement("ul"); ul.className = "adm-list";
    setList().forEach(function (t) {
      var li = document.createElement("li"); if (ui.set === t.id) li.className = "on";
      var b = document.createElement("b"); b.textContent = t.title || "(bina naam)"; b.onclick = function () { ui.set = t.id; render(); };
      li.appendChild(b);
      var m = document.createElement("span"); m.className = "meta"; m.textContent = (t.qs || []).length + " · exam: " + (t.exam || "-"); li.appendChild(m);
      li.appendChild(mini("✕", "danger", function () {
        if (!confirm('Set "' + (t.title || "") + '" aur ' + (t.qs || []).length + " prashn mit jayenge. Theek?")) return;
        setList().splice(setList().indexOf(t), 1); if (ui.set === t.id) ui.set = null; touch(); render();
      }));
      ul.appendChild(li);
    });
    left.appendChild(ul);
    left.appendChild(btn("+ Naya set", "", function () {
      var t = { id: subject().id + "-set" + (setList().length + 1), title: "Naya Set", exam: "general", qs: [] };
      setList().push(t); ui.set = t.id; touch(); render();
    }));
    wrap.appendChild(left);
    var right = card(null);
    if (!ui.set || !setList().some(function (x) { return x.id === ui.set; })) ui.set = (setList()[0] || {}).id || null;
    var st = currentSet();
    if (!st) right.appendChild(Object.assign(document.createElement("p"), { className: "adm-lead", textContent: "Left me set chuno ya naya set banao." }));
    else {
      var h = document.createElement("h3"); h.innerHTML = "Set — <code>" + esc(st.id) + "</code>"; right.appendChild(h);
      right.appendChild(field("Set ka title", input(st.title, "Rajasthan GK Set 3 — itihas", function (v) { st.title = v; })));
      var es = document.createElement("select"); es.className = "adm-in";
      (D.exams || []).forEach(function (e) {
        var o = document.createElement("option"); o.value = e.id; o.textContent = e.id + " — " + (e.name || "");
        if (e.id === st.exam) o.selected = true; es.appendChild(o);
      });
      if (!es.querySelector('option[value="' + st.exam + '"]')) { var oo = document.createElement("option"); oo.value = st.exam; oo.textContent = st.exam + " (exam list me nahi)"; oo.selected = true; es.appendChild(oo); }
      es.onchange = function () { st.exam = es.value; touch(); render(); };
      right.appendChild(field("Kaunsa exam group (is set ko us exam ke page par dikhata hai)", es));
      var qh = document.createElement("div"); right.appendChild(qh);
      (st.qs || []).forEach(function (q, i) { qh.appendChild(qCard(st, q, i)); });
      var row = document.createElement("div"); row.className = "adm-btnrow";
      row.appendChild(btn("+ Naya prashn", "", function () {
        if (!st.qs) st.qs = [];
        st.qs.push({ q: "", o: ["", "", "", ""], a: 0, x: "" }); touch(); render();
      }));
      right.appendChild(row);
    }
    wrap.appendChild(right);
    main.appendChild(wrap);

    /* bulk paste */
    var bulk = card("Dher saare prashn ek saath paste karo", null);
    bulk.querySelector("h3").insertAdjacentHTML("afterend",
      '<p class="adm-lead">Ek prashn ka format (prashn ke baad khaali line):<br><code style="background:#f2f5f9;padding:2px 6px;border-radius:4px;display:inline-block;margin-top:6px">' +
      "Rajasthan ki rajdhani kya hai?<br>A. Jodhpur<br>B. Jaipur<br>C. Udaipur<br>D. Ajmer<br>Ans: B<br>Explain: 1947 me Jaipur rajdhani bani.</code></p>");
    var ta = document.createElement("textarea"); ta.className = "adm-ta"; ta.style.minHeight = "170px";
    ta.placeholder = "Yahan apne prashn paste karo… (A./B./C./D. optional hai — sirf 4 lines bhi chalegi. Sahi jawab ke age * bhi lag sakta hai.)";
    bulk.appendChild(ta);
    var out = document.createElement("div"); bulk.appendChild(out);
    var rowb = document.createElement("div"); rowb.className = "adm-btnrow";
    rowb.appendChild(btn("Check karo", "blue", function () { ui.bulk = parseBulk(ta.value); showBulk(out, null); }));
    rowb.appendChild(btn("+ Is set me daalo", "", function () {
      var st = currentSet();
      if (!st) { alert("Pehle left me koi set chuno."); return; }
      var list = ui.bulk.length ? ui.bulk : parseBulk(ta.value);
      var ok = list.filter(function (x) { return x.err; });
      if (ok.length && !confirm(ok.length + " prashn adhoore hain. Sirf theek wale daale jayein?")) return;
      list.filter(function (x) { return !x.err; }).forEach(function (x) { st.qs.push({ q: x.q, o: x.o, a: x.a, x: x.x }); });
      ui.bulk = []; ta.value = ""; out.innerHTML = ""; touch(); render();
      flashStatus((list.length - ok.length) + " prashn “" + st.title + "” me jud gaye", "saved");
    }));
    bulk.appendChild(rowb);
    main.appendChild(bulk);
  }
  function qCard(st, q, i) {
    var d = document.createElement("div"); d.className = "adm-q";
    var head = document.createElement("div"); head.className = "head";
    head.innerHTML = "<b>Prashn " + (i + 1) + "</b>";
    head.appendChild(mini("↑", "ghost", function () { if (i > 0) { st.qs.splice(i - 1, 0, st.qs.splice(i, 1)[0]); touch(); render(); } }));
    head.appendChild(mini("↓", "ghost", function () { if (i < st.qs.length - 1) { st.qs.splice(i + 1, 0, st.qs.splice(i, 1)[0]); touch(); render(); } }));
    head.appendChild(mini("Copy", "ghost", function () { st.qs.splice(i + 1, 0, clone(q)); touch(); render(); }, "Is prashn ki ek aur copy"));
    head.appendChild(mini("✕", "danger", function () { if (!confirm("Prashn " + (i + 1) + " mitaaye?")) return; st.qs.splice(i, 1); touch(); render(); }));
    d.appendChild(head);
    var qt = document.createElement("textarea"); qt.className = "adm-ta"; qt.style.minHeight = "56px"; qt.value = q.q || "";
    qt.placeholder = "Prashn yahan…";
    qt.oninput = function () { q.q = qt.value; touch(); };
    d.appendChild(qt);
    var opts = document.createElement("div"); opts.className = "opts";
    if (!q.o || q.o.length < 2) q.o = ["", "", "", ""].slice(0, Math.max(4, (q.o || []).length));
    q.o.forEach(function (o, k) {
      var w = document.createElement("div"); w.className = "opt";
      var r = document.createElement("input"); r.type = "radio"; r.name = "ans-" + st.id + "-" + i; r.checked = (+q.a === k);
      r.onchange = function () { q.a = k; touch(); };
      var t = document.createElement("input"); t.className = "adm-in"; t.type = "text"; t.value = o; t.placeholder = "Option " + "ABCD"[k];
      t.oninput = function () { q.o[k] = t.value; touch(); };
      w.appendChild(r); w.appendChild(t);
      w.appendChild(mini("✕", "danger", function () {
        if (q.o.length <= 2) { alert("Kam se kam 2 option chahiye."); return; }
        q.o.splice(k, 1); if (q.a >= q.o.length) q.a = q.o.length - 1; touch(); render();
      }));
      opts.appendChild(w);
    });
    d.appendChild(opts);
    d.appendChild(mini("+ option", "ghost", function () { if (q.o.length >= 6) { alert("6 se zyada option page par bikhrenge."); return; } q.o.push(""); touch(); render(); }));
    var x = document.createElement("input"); x.className = "adm-in"; x.type = "text"; x.value = q.x || ""; x.placeholder = "Explaination (optional) — jawab kyu sahi hai";
    x.oninput = function () { q.x = x.value; touch(); };
    x.style.marginTop = "7px"; d.appendChild(x);
    return d;
  }

  /* bulk question parser */
  var OPT_RE = /^(\*|[*•\-])\s+|^[A-Fa-f][.):\-]\s+|^[(\[]?[A-Fa-f][)\]]\s+/;
  var ANS_RE = /^(ans|answer|jawab|sahi\s*jawab|uttar)\b[:.\-)]?\s*/i;
  var EXP_RE = /^(exp|explain|explanation|karan|vyakhya|note)\b[:.\-)]?\s*/i;
  function parseBulk(text) {
    var blocks = String(text || "").replace(/\r/g, "").split(/\n[ \t]*\n/).filter(function (b) { return b.trim(); });
    var out = [];
    blocks.forEach(function (b) {
      var lines = b.split("\n").map(function (l) { return l.trim(); }).filter(function (l) { return l.length; });
      if (!lines.length) return;
      var q = lines[0].replace(/^(q(?:uestion)?\s*\d*)[:.)\-]\s*/i, ""), o = [], a = 0, x = "", mark = -1, i = 1;
      while (i < lines.length) {
        var l = lines[i];
        if (ANS_RE.test(l)) {
          var v = l.replace(ANS_RE, "").replace(/[.)]/g, "").trim();
          if (/^[a-fA-F]$/.test(v)) a = v.toUpperCase().charCodeAt(0) - 65;
          else { var f = o.map(function (z) { return z.toLowerCase(); }).indexOf(v.toLowerCase()); if (f >= 0) a = f; }
          i++; continue;
        }
        if (EXP_RE.test(l)) { x += (x ? " " : "") + l.replace(EXP_RE, ""); i++; continue; }
        /* option: jab tak 4 option pure na ho, ya line option jaisi dikhe */
        if (o.length < 4 || OPT_RE.test(l)) {
          var star = /^\*/.test(l);
          var cleaned = l.replace(/^(\*|[*•\-])\s*/, "").replace(/^[A-Fa-f][.):\-]\s*/, "").replace(/^[(\[]?[A-Fa-f][)\]]\s*/, "").replace(/\s+/g, " ").trim();
          if (cleaned) { if (star) mark = o.length; o.push(cleaned); }
          i++; continue;
        }
        x += (x ? " " : "") + l; i++;
      }
      if (mark >= 0) a = mark;
      var err = "";
      if (!q) err = "prashn khali";
      else if (o.length < 2) err = "option kam (" + o.length + ")";
      else if (o.length > 6) err = "option zyada";
      if (a >= o.length) a = 0;
      out.push({ q: q, o: o, a: a, x: x, err: err });
    });
    return out;
  }
  function showBulk(host, _) {
    host.innerHTML = "";
    if (!ui.bulk.length) { host.innerHTML = '<p class="adm-lead">Kuch nahi mila — ek khaali line se prashn alag karo.</p>'; return; }
    var bad = ui.bulk.filter(function (x) { return x.err; }).length;
    host.innerHTML = '<p class="adm-lead"><b>' + (ui.bulk.length - bad) + "</b> prashn taiyar" + (bad ? ", <b>" + bad + "</b> me dikkat (neeche laal)" : "") + ".</p>";
    ui.bulk.forEach(function (x, i) {
      var d = document.createElement("div"); d.className = "adm-q";
      d.innerHTML = '<div class="head"><b style="color:' + (x.err ? "var(--bad)" : "var(--ok)") + '">' + (i + 1) + ". " + esc(x.q.slice(0, 90)) + (x.err ? " — " + esc(x.err) : "") + "</b></div>" +
        "<div>" + x.o.map(function (o, k) { return '<span style="display:inline-block;margin:2px 10px 2px 0;font-size:13px">' + "ABCD"[k] + ") " + esc(o) + (k === x.a ? " ✓" : "") + "</span>"; }).join("") + "</div>" +
        (x.x ? '<p style="font-size:12.5px;color:var(--muted);margin:5px 0 0">' + esc(x.x) + "</p>" : "");
      host.appendChild(d);
    });
  }

  /* ---------- Tricks ---------- */
  function tabTricks() {
    if (!D.tricks) D.tricks = [];
    var wrap = document.createElement("div"); wrap.className = "adm-grid2";
    var left = card("Tricks / shortcuts");
    var ul = document.createElement("ul"); ul.className = "adm-list";
    D.tricks.forEach(function (t, i) {
      var li = document.createElement("li"); if (ui.note === "t-" + t.id) li.className = "on";
      var b = document.createElement("b"); b.textContent = t.title || "(bina naam)"; b.onclick = function () { ui.note = "t-" + t.id; render(); };
      li.appendChild(b);
      li.appendChild(mini("✕", "danger", function () { if (!confirm("Trick mitaaye?")) return; D.tricks.splice(i, 1); touch(); render(); }));
      ul.appendChild(li);
    });
    left.appendChild(ul);
    left.appendChild(btn("+ Nayi trick", "", function () {
      var t = { id: Date.now() % 100000000, sub: subject().name, title: "", html: "<p></p>" };
      D.tricks.push(t); ui.note = "t-" + t.id; touch(); render();
    }));
    wrap.appendChild(left);
    var right = card(null);
    if (!ui.note || !D.tricks.some(function (x) { return "t-" + x.id === ui.note; })) ui.note = D.tricks.length ? "t-" + D.tricks[0].id : null;
    var t = D.tricks.filter(function (x) { return "t-" + x.id === ui.note; })[0];
    if (!t) right.appendChild(Object.assign(document.createElement("p"), { className: "adm-lead", textContent: "Kisi trick ka naam click karo ya nayi banao." }));
    else {
      right.appendChild(field("Shirshak", input(t.title, "Pratishat ko bhinn me badalna", function (v) { t.title = v; })));
      right.appendChild(field("Subject ka naam", input(t.sub, "Maths", function (v) { t.sub = v; })));
      var host = document.createElement("div");
      right.appendChild(field("Body", (richEditor(host, t.html, function (h) { t.html = h; touch(); }), host)));
    }
    wrap.appendChild(right);
    main.appendChild(wrap);
  }

  /* ---------- Flashcards ---------- */
  function tabFlash() {
    if (!D.flashcards) D.flashcards = {};
    var decks = Object.keys(D.flashcards);
    if (!decks.length) { D.flashcards.rajasthan = []; decks = ["rajasthan"]; }
    if (decks.indexOf(ui.deck) < 0) ui.deck = decks[0];
    var c = card("Flashcards — palat kar yaad karne wale patte");
    var sel = document.createElement("select"); sel.className = "adm-in";
    decks.forEach(function (d) { var o = document.createElement("option"); o.value = d; o.textContent = d + " (" + D.flashcards[d].length + ")"; if (d === ui.deck) o.selected = true; sel.appendChild(o); });
    sel.onchange = function () { ui.deck = sel.value; render(); };
    c.appendChild(field("Deck (list)", sel));
    var host = document.createElement("div"); c.appendChild(host);
    tableEditor(host, D.flashcards[ui.deck], [{ k: 0, l: "Aage (sawal)", w: "260px" }, { k: 1, l: "Peeche (jawab)" }],
      { index: true, what: "Card", after: counts });
    var row = document.createElement("div"); row.className = "adm-btnrow";
    row.appendChild(btn("+ Naya card", "", function () { D.flashcards[ui.deck].push(["", ""]); touch(); render(); }));
    row.appendChild(btn("+ Naya deck", "ghost", function () {
      var name = prompt("Naye deck ka id (chhota, bina space): jaise \"maths\"", "naya");
      if (!name) return; name = slug(name); D.flashcards[name] = []; ui.deck = name; touch(); render();
    }));
    c.appendChild(row);
    main.appendChild(c);
  }

  /* ---------- Important Days / Current affairs ---------- */
  function tabDays() {
    if (!D.calendar) D.calendar = {};
    var months = Object.keys(D.calendar);
    if (!months.length) { D.calendar.January = []; months = ["January"]; }
    if (months.indexOf(ui.month) < 0) ui.month = months[0];
    var c = card("Important Days — mahine hisaab se (Current Affairs yahi se jayenge)");
    var sel = document.createElement("select"); sel.className = "adm-in";
    months.forEach(function (m) { var o = document.createElement("option"); o.value = m; o.textContent = m + " (" + D.calendar[m].length + ")"; if (m === ui.month) o.selected = true; sel.appendChild(o); });
    sel.onchange = function () { ui.month = sel.value; render(); };
    c.appendChild(field("Mahina", sel));
    var host = document.createElement("div"); c.appendChild(host);
    tableEditor(host, D.calendar[ui.month], [{ k: "d", l: "Tarikh (din)", type: "num" }, { k: "t", l: "Kya hota hai" }],
      { index: true, move: true, what: "Line", after: counts });
    var row = document.createElement("div"); row.className = "adm-btnrow";
    row.appendChild(btn("+ Nayi line", "", function () { D.calendar[ui.month].push({ d: 1, t: "" }); touch(); render(); }));
    c.appendChild(row);
    main.appendChild(c);
  }

  /* ---------- Exams ---------- */
  function tabExams() {
    if (!D.exams) D.exams = [];
    var used = {};
    D.subjects.forEach(function (s) { (s.sets || []).forEach(function (t) { used[t.exam] = (used[t.exam] || 0) + 1; }); });
    var c = card("Exam groups (REET, Patwar, Constable…)", null);
    c.querySelector("h3").insertAdjacentHTML("afterend",
      '<p class="adm-lead">MCQ set ke andar “Kaunsa exam group” chuno — usi ke page par set apne aap dikh jayega. Jis group me 0 set hain wo page khaali dikhega.</p>');
    var host = document.createElement("div"); c.appendChild(host);
    tableEditor(host, D.exams, [{ k: "id", l: "id", w: "140px" }, { k: "name", l: "Naam" }, { k: "hi", l: "हिंदी" }],
      { index: true, what: "Exam group", after: counts });
    host.insertAdjacentHTML("beforeend", '<p class="adm-hint">Abhi ' + D.exams.filter(function (e) { return !used[e.id]; }).length +
      " khali group hain, " + D.exams.filter(function (e) { return used[e.id]; }).length + " me set jude hain.</p>");
    var row = document.createElement("div"); row.className = "adm-btnrow";
    row.appendChild(btn("+ Naya exam group", "", function () {
      D.exams.push({ id: "exam-" + (D.exams.length + 1), name: "Naya Exam", hi: "नया परीक्षा" }); touch(); render();
    }));
    c.appendChild(row);
    main.appendChild(c);
  }

  /* ---------- Jile / Rajya ---------- */
  function tabGeo() {
    var c = card(null);
    var h = document.createElement("h3"); c.appendChild(h);
    var sel = document.createElement("select"); sel.className = "adm-in";
    [["districts", "Jile (" + D.districts.length + ")"], ["states", "Rajya (" + D.states.length + ")"]].forEach(function (o) {
      var e = document.createElement("option"); e.value = o[0]; e.textContent = o[1]; if (ui.geo === o[0]) e.selected = true; sel.appendChild(e);
    });
    c.appendChild(field("Kya dikhaaye", sel));
    var host = document.createElement("div"); c.appendChild(host);
    sel.onchange = function () { ui.geo = sel.value; render(); };
    if (ui.geo === "districts") {
      h.textContent = "Jile — map ke liye";
      host.insertAdjacentHTML("beforebegin", '<p class="adm-lead">Map ek grid hai: <b>x = 0 se 8</b> (bara number = poorab/east) aur <b>y = 0 se 7</b> (bara number = dakshin/south). Naya jila jodo to x/y zaroor bharo, warna tile map se bahar chala jayega.</p>');
      tableEditor(host, D.districts, [{ k: "n", l: "Naam" }, { k: "hi", l: "हिंदी" }, { k: "hq", l: "HQ" }, { k: "div", l: "Division" }, { k: "x", l: "x", type: "num" }, { k: "y", l: "y", type: "num" }],
        { index: true, what: "Jila", after: counts });
      var r = document.createElement("div"); r.className = "adm-btnrow";
      r.appendChild(btn("+ Naya jila", "", function () { D.districts.push({ n: "", hi: "", hq: "", div: "", x: 4, y: 4 }); touch(); render(); }));
      c.appendChild(r);
    } else {
      h.textContent = "Rajya / Kendrashashit kshetra";
      tableEditor(host, D.states, [{ k: "n", l: "Naam" }, { k: "hi", l: "हिंदी" }, { k: "cap", l: "Rajdhani" }, { k: "region", l: "Bhag (North/South…)" }],
        { index: true, what: "Rajya", after: counts });
      var r2 = document.createElement("div"); r2.className = "adm-btnrow";
      r2.appendChild(btn("+ Naya rajya", "", function () { D.states.push({ n: "", hi: "", cap: "", region: "" }); touch(); render(); }));
      c.appendChild(r2);
    }
    main.appendChild(c);
  }

  /* ---------- Games data ---------- */
  function tabGames() {
    var c = card("Games ka data", null);
    var sel = document.createElement("select"); sel.className = "adm-in";
    [["crossword", "Crossword ke clues"], ["jokes", "Pappu jokes"], ["tools", "Tools list"]].forEach(function (o) {
      var e = document.createElement("option"); e.value = o[0]; e.textContent = o[1]; if (ui.game === o[0]) e.selected = true; sel.appendChild(e);
    });
    c.appendChild(field("Kya", sel));
    sel.onchange = function () { ui.game = sel.value; render(); };
    var host = document.createElement("div"); c.appendChild(host);
    if (ui.game === "crossword") {
      if (!D.crossword) D.crossword = { title: "", clues: [] };
      c.appendChild(field("Paheli ka title", input(D.crossword.title, "Rajasthan GK — 6 terms", function (v) { D.crossword.title = v; })));
      tableEditor(host, D.crossword.clues, [{ k: "a", l: "Jawab (bade akshar)", w: "180px" }, { k: "c", l: "Clue" }], { index: true, what: "Clue" });
      var r = document.createElement("div"); r.className = "adm-btnrow";
      r.appendChild(btn("+ Nayi clue", "", function () { D.crossword.clues.push({ a: "", c: "" }); touch(); render(); }));
      c.appendChild(r);
    } else if (ui.game === "jokes") {
      if (!D.jokes) D.jokes = [];
      D.jokes.forEach(function (j, i) {
        var row = document.createElement("div"); row.className = "adm-row";
        row.appendChild(spanIdx(i + 1));
        var w = document.createElement("div"); w.className = "f";
        var lab = document.createElement("label"); lab.className = "adm-l"; lab.textContent = "Chutkula";
        var inp = document.createElement("input"); inp.className = "adm-in"; inp.value = j;
        inp.oninput = function () { D.jokes[i] = inp.value; touch(); };
        w.appendChild(lab); w.appendChild(inp); row.appendChild(w);
        var ops = document.createElement("div"); ops.className = "ops";
        ops.appendChild(mini("✕", "danger", function () { if (!confirm("Chutkula mitaaye?")) return; D.jokes.splice(i, 1); touch(); render(); }));
        row.appendChild(ops);
        host.appendChild(row);
      });
      if (!D.jokes.length) host.innerHTML = '<p class="adm-lead">Abhi koi chutkula nahi.</p>';
      var r2 = document.createElement("div"); r2.className = "adm-btnrow";
      r2.appendChild(btn("+ Naya chutkula", "", function () { D.jokes.push(""); touch(); render(); }));
      c.appendChild(r2);
    } else {
      host.insertAdjacentHTML("beforebegin", '<div class="adm-note">Tools ke andar ka hisaab (percent, SI, average…) code me likha hai — yahan sirf naam aur description badal sakte ho. Naya tool jodne ke liye code chhuna padega, wo main kar dunga.</div>');
      tableEditor(host, D.tools, [{ k: "id", l: "id", w: "120px" }, { k: "name", l: "Naam" }, { k: "hi", l: "हिंदी" }, { k: "desc", l: "Description" }], { index: true, what: "Tool" });    }
    main.appendChild(c);
  }

  /* ---------- Site settings ---------- */
  function tabSite() {
    var c = card("Site ki upar ki lines");
    c.appendChild(field("Site ka naam (title aur header)", input(D.site.name, "I LIKE EXAM", function (v) { D.site.name = v; counts(); })));
    c.appendChild(field("Tag line", input(D.site.tag, "Taiyari ka bharosemand saathi", function (v) { D.site.tag = v; })));
    c.appendChild(field("Footer me ek line", (function () {
      var t = document.createElement("textarea"); t.className = "adm-ta"; t.value = D.site.notes || "";
      t.oninput = function () { D.site.notes = t.value; touch(); }; return t;
    })()));
    main.appendChild(c);
  }

  /* ---------- Publish ---------- */
  /* Panel ek hi object dikhata hai, par publish par do files banti hain:
     data.js  = notes, map, exams, tricks (hamesha load hoti hai)
     questions.js = MCQ sets (MCQ/quiz/exam page khule tabhi load hoti hai) */
  function splitData() {
    var QS = {}, content = clone(D);
    content.subjects.forEach(function (s) {
      var sets = s.sets || [];
      if (sets.length) QS[s.id] = sets;
      s.sets = [];
      s.nsets = sets.length;
      s.nq = sets.reduce(function (a, t) { return a + (t.qs || []).length; }, 0);
    });
    return { content: content, qs: QS };
  }
  function ser(obj, head, name) {
    return head + "window." + name + " = " + JSON.stringify(obj, null, 1).replace(/</g, "\\u003c") + ";\n";
  }
  function buildFile() {
    return ser(splitData().content,
      "/* ============================================================\n" +
      "   I LIKE EXAM — content store (admin panel se bani)\n" +
      "   Notes, jile, rajya, exams, tricks — prashn js/questions.js me hain.\n" +
      "   ============================================================ */\n", "DATA");
  }
  function buildQFile() {
    return ser(splitData().qs,
      "/* ============================================================\n" +
      "   I LIKE EXAM — MCQ sets (admin panel se bani)\n" +
      "   Site ye file tabhi download karti hai jab koi MCQ/quiz/exam page khule.\n" +
      "   ============================================================ */\n", "QUESTIONS");
  }
  function runChecks() {
    var res = [], t = tally();
    var ids = {}, dup = 0, badNote = 0, emptyBody = 0;
    D.subjects.forEach(function (s) {
      if (ids[s.id]) dup++; ids[s.id] = 1;
      (s.notes || []).forEach(function (n) {
        if (ids[n.id]) dup++; ids[n.id] = 1;
        if (!String(n.title || "").trim()) badNote++;
        if (!String(n.html || "").replace(/<[^>]*>|\s/g, "")) emptyBody++;
      });
    });
    res.push([dup ? "bad" : "ok", dup ? dup + " duplicate id mil gaya — data.js me do baar same id ka matlab tuta hua link" : "Sab id (subject + note) alag-alag hain"]);
    res.push([badNote ? "warn" : "ok", badNote ? badNote + " note bina title ke hain (page par khali shirshak dikhega)" : "Sab " + t.notes + " notes ke title hain"]);
    res.push([emptyBody ? "warn" : "ok", emptyBody ? emptyBody + " note ka body khali hai" : "Sab notes me kuch na kuch likha hai"]);
    var examIds = {}; (D.exams || []).forEach(function (e) { examIds[e.id] = 1; });
    var orphan = []; var noAns = 0, shortOpt = 0, totalQ = 0;
    D.subjects.forEach(function (s) { (s.sets || []).forEach(function (x) {
      if (!examIds[x.exam]) orphan.push(s.id + "/" + x.id + " → " + x.exam);
      (x.qs || []).forEach(function (q) {
        totalQ++;
        if (!(q.o || []).length || q.a == null || q.a < 0 || q.a >= q.o.length) noAns++;
        if ((q.o || []).some(function (o) { return !String(o).trim(); })) shortOpt++;
      });
    }); });
    res.push([orphan.length ? "warn" : "ok", orphan.length ? orphan.length + " set ka exam id Exam groups list me nahi (" + orphan.slice(0, 3).join(", ") + "…)" : "Sab sets ka exam id sahi hai — exam pages bhare rahenge"]);
    res.push([noAns ? "bad" : "ok", noAns ? noAns + " prashn ka sahi jawab nahi chuna (quiz crash kar sakta hai)" : "Sab " + totalQ + " prashno ka jawab chuna hai"]);
    res.push([shortOpt ? "warn" : "ok", shortOpt ? shortOpt + " prashn me khaali option bhi hai" : "Koi khaali option nahi"]);
    var qtxt = {}, qdup = 0;
    D.subjects.forEach(function (s) { s.sets.forEach(function (x) { x.qs.forEach(function (q) { var k = String(q.q).trim().toLowerCase(); if (!k) return; if (qtxt[k]) qdup++; qtxt[k] = 1; }); }); });
    res.push([qdup ? "warn" : "ok", qdup ? qdup + " prashn ka same text do baar likha hai" : "Koi dohraya hua prashn nahi"]);
    var f1 = buildFile(), f2 = buildQFile();
    var bytes = new Blob([f1]).size, qbytes = new Blob([f2]).size;
    res.push([bytes > 1572864 ? "warn" : "ok", "<b>data.js</b> (notes waghera): <b>" + (bytes / 1024).toFixed(0) + " KB</b>" + (bytes > 1572864 ? " — 1.5 MB se upar, notes ke files baantne padenge" : " — phone ke liye aaram")]);
    res.push([qbytes > 1572864 ? "warn" : "ok", "<b>questions.js</b> (prashn): <b>" + (qbytes / 1024).toFixed(0) + " KB</b>" + (qbytes > 1572864 ? " — 1.5 MB se upar, subject-wise files me baantna hoga (mujhe bataiye)" : " — sirf MCQ page khulne par download hoti hai")]);
    try {
      var w1 = {}; new Function("window", f1)(w1);
      var w2 = {}; new Function("window", f2)(w2);
      var back = 0;
      (w1.DATA.subjects || []).forEach(function (s) { back += ((w2.QUESTIONS || {})[s.id] || []).length; });
      if (back !== tally().sets) throw new Error("prashn files me wapas nahi mile (" + back + "/" + tally().sets + " sets)");
      res.push(["ok", "Dono files valid script hain — site khulegi, prashn sahi jagah pahunchenge"]);
    }
    catch (e) { res.push(["bad", "File me syntax dikkat: " + esc(e.message)]); }
    return { res: res, bytes: bytes, qbytes: qbytes, tally: t };
  }
  function tabPublish() {
    var k = runChecks();
    var c = card("Abhi kitna data hai");
    var g = document.createElement("div"); g.className = "adm-kv-stats";
    [["Subjects", k.tally.subj], ["Notes", k.tally.notes], ["MCQ sets", k.tally.sets], ["Prashn", k.tally.mcq], ["Tricks", k.tally.tricks],
      ["Flashcards", k.tally.cards], ["Important Days", k.tally.days], ["Jile", k.tally.dist], ["Rajya", k.tally.states], ["Exam groups", k.tally.exams],
      ["data.js", (k.bytes / 1024).toFixed(0) + " KB"]].forEach(function (x) {
      g.insertAdjacentHTML("beforeend", "<div><b>" + x[1] + "</b><span>" + x[0] + "</span></div>");
    });
    c.appendChild(g); main.appendChild(c);

    var chk = card("Save karne se pehle jaanch");
    var ul = document.createElement("ul"); ul.className = "adm-check";
    k.res.forEach(function (r) { ul.insertAdjacentHTML("beforeend", '<li class="' + r[0] + '">' + r[1] + "</li>"); });
    chk.appendChild(ul); main.appendChild(chk);

    /* ---------- ek click publish (api/publish.js ke through) ---------- */
    var PKEY = "ile:pub:pass";
    var savedPass = ""; try { savedPass = localStorage.getItem(PKEY) || ""; } catch (e) {}
    var pc = card("Ek click me live karo", "Button dabao — dono files GitHub par ek hi commit me chali jayengi, Vercel khud site bana dega (40–60 second).");
    var prow = document.createElement("div"); prow.className = "adm-btnrow";
    var pin = document.createElement("input");
    pin.type = "password"; pin.className = "adm-in"; pin.value = savedPass;
    pin.placeholder = "Publish passcode"; pin.autocomplete = "current-password";
    pin.style.maxWidth = "300px"; pin.style.flex = "1 1 200px";
    var goBtn = btn("Publish karo — site par bhejo", "", function () { publish(); });
    prow.appendChild(pin); prow.appendChild(goBtn); pc.appendChild(prow);
    var pm = document.createElement("p"); pm.className = "adm-lead"; pm.style.minHeight = "18px"; pm.style.margin = "8px 0 0";
    pc.appendChild(pm);
    main.appendChild(pc);

    var busy = false;
    function say(t, kind) {
      pm.textContent = t || "";
      pm.style.fontWeight = kind ? "800" : "";
      pm.style.color = kind === "bad" ? "#b91c1c" : kind === "ok" ? "#166534" : "";
    }
    function publish() {
      if (busy) return;
      var host = location.hostname;
      if (host !== "ilikeexam.vercel.app" && !/^(localhost|127\.0\.0\.1)$/.test(host)) {
        say("Ye button sirf https://ilikeexam.vercel.app/admin.html par chalta hai.", "bad");
        return;
      }
      var pass = pin.value.trim();
      if (!pass) { say("Publish passcode daalo.", "bad"); pin.focus(); return; }
      var bad = k.res.filter(function (x) { return x[0] === "bad"; }).length;
      if (bad && !confirm(bad + " dikkat hain. Fir bhi publish karna hai?")) return;
      var dataTxt = buildFile(), qTxt = buildQFile();
      busy = true; goBtn.disabled = true;
      say("GitHub par bheja ja raha hai…");
      fetch("/api/publish", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ pass: pass, files: { "js/data.js": dataTxt, "js/questions.js": qTxt } })
      })
        .then(function (r) {
          return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; });
        })
        .then(function (r) {
          if (!r.ok || !r.j.ok) throw new Error(r.j.error || "Server ne jawab nahi diya — /api/publish live hai ya nahi, check karo");
          try { localStorage.setItem(PKEY, pass); } catch (e) {}
          say("GitHub par commit ho gaya (" + r.j.commit + "). Site build ho rahi hai…", "ok");
          flashStatus("Publish ho gaya — build chalu", "saved");
          var t0 = Date.now();
          (function poll() {
            fetch("https://ilikeexam.vercel.app/js/data.js?cb=" + Date.now(), { cache: "no-store" })
              .then(function (x) { return x.text(); })
              .then(function (txt) {
                if (txt === dataTxt) {
                  say("Live! Naya data site par pahunch gaya. Site khol ke Ctrl+Shift+R dabao.", "ok");
                  flashStatus("Site live ho gayi", "saved");
                  busy = false; goBtn.disabled = false; return;
                }
                if (Date.now() - t0 > 150000) {
                  say("Commit ho gaya, par build slow hai — 1 minute baad site khol ke dekho.", "ok");
                  busy = false; goBtn.disabled = false; return;
                }
                say("Site build ho rahi hai… " + Math.round((Date.now() - t0) / 1000) + "s");
                setTimeout(poll, 5000);
              })
              .catch(function () { setTimeout(poll, 5000); });
          })();
        })
        .catch(function (e) {
          busy = false; goBtn.disabled = false;
          say("Publish nahi hua: " + e.message, "bad");
        });
    }

    var act = card("Ya manually: dono files download karo");
    act.insertAdjacentHTML("beforeend", '<p class="adm-lead">Data do files me banta hai — <b>dono</b> download karo. Button dabate hi file aapke computer ke Download folder me aa jayegi.</p>');
    var r1 = document.createElement("div"); r1.className = "adm-btnrow";
    function guard() {
      var bad = k.res.filter(function (x) { return x[0] === "bad"; }).length;
      return !bad || confirm(bad + " gambhir dikkat hain. Fir bhi file banaayein?");
    }
    r1.appendChild(btn("⬇ data.js download karo (" + (k.bytes / 1024).toFixed(0) + " KB)", "", function () {
      if (!guard()) return;
      download("data.js", buildFile(), "text/javascript");
      flashStatus("data.js download ho gayi — ab questions.js bhi lo", "saved");
    }));
    r1.appendChild(btn("⬇ questions.js download karo (" + (k.qbytes / 1024).toFixed(0) + " KB)", "", function () {
      if (!guard()) return;
      download("questions.js", buildQFile(), "text/javascript");
      flashStatus("questions.js download ho gayi — ab step 2", "saved");
    }));
    r1.appendChild(btn("Backup (poora draft) download", "ghost", function () { download("ile-draft.json", JSON.stringify(D, null, 1), "application/json"); }));
    var fi = document.createElement("input"); fi.type = "file"; fi.accept = ".js,.json"; fi.style.display = "none";
    fi.onchange = function () {
      var f = fi.files[0]; if (!f) return;
      var fr = new FileReader();
      fr.onload = function () {
        var txt = String(fr.result);
        try {
          var w = {}; new Function("window", txt)(w);
          var src = w.DATA || (w.QUESTIONS ? null : null);
          if (!src) throw new Error("Is file me DATA nahi mila — ye questions.js ho sakti hai, usme sirf prashn hote hain");
          if (!src.subjects) throw new Error("Is file me DATA.subjects nahi mila");
          if (!confirm("Is file ka data panel me load ho jayega aur abhi ka draft badal dega. Theek?")) return;
          D = src;
          /* sets alag file me rehte hain — load ki gayi file me khali ho to
             browser me already khuli questions.js se jod lete hain */
          var QS = w.QUESTIONS || window.QUESTIONS || {};
          D.subjects.forEach(function (s) { if (!s.sets || !s.sets.length) s.sets = QS[s.id] || []; });
          if (!ui.subj || !subject()) ui.subj = D.subjects[0].id;
          saveNow(); buildTabs(); render();
        } catch (e) { alert("File padhi nahi ja saki: " + e.message); }
      };
      fr.readAsText(f);
    };
    r1.appendChild(btn("File se wapas load karo", "ghost", function () { fi.click(); }));
    r1.appendChild(fi);
    act.appendChild(r1);
    main.appendChild(act);

    var st2 = card("Manual tareeka: dono files GitHub par upload karo");
    st2.insertAdjacentHTML("beforeend", '<ol class="adm-steps">' +
      "<li>Ye address kholo (address bar me paste karo): <code>github.com/mahakaldls97-collab/ilikeexam/upload/main/js</code></li>" +
      "<li>Page par <b>choose your files</b> dabao → dono nayi files ek saath chuno → <b>Open</b>.</li>" +
      "<li>Neeche <b>Commit changes</b> dabao. Purani files hain, isliye GitHub <b>Replace</b> poochhega — haan dabao.</li>" +
      "<li>30–60 second ruko, phir site khol kar <b>Ctrl+Shift+R</b> dabao — nahi to purana data dikhega.</li></ol>" +
      '<div class="adm-note">Ye kadam aapko khud karne hain — aapke account ka password main mangta nahi aur na hi kiya ja sakta hai. Panel ka kaam files taiyar karke dena tak hi hai.</div>');
    main.appendChild(st2);

    var dn = card("Draft (aapke browser ka temporary copy)");
    dn.insertAdjacentHTML("beforeend", '<p class="adm-lead">Abhi panel jo dikhata hai wo draft hai — site par tab tak asli <code>js/data.js</code> hi chalega. Draft sirf isi browser me rehta hai; browser ka data clear kiya to draft bhi chala jayega, isliye har kaam ke baad download zaroor karo.</p>');
    var r3 = document.createElement("div"); r3.className = "adm-btnrow";
    r3.appendChild(btn("Draft hataa do (site wapas purane data par)", "danger", function () {
      if (!confirm("Draft mit jayega. Pehle download kar liya?")) return;
      localStorage.removeItem(DRAFT_KEY); location.reload();
    }));
    dn.appendChild(r3); main.appendChild(dn);

    var pv = card("Data.js ka pehla hissa (jaanch ke liye)");
    pv.insertAdjacentHTML("beforeend", '<div class="adm-out">' + esc(buildFile().slice(0, 700)) + "\n…</div>");
    main.appendChild(pv);
  }
  function download(name, text, mime) {
    var url = URL.createObjectURL(new Blob([text], { type: mime || "text/plain" }));
    var a = document.createElement("a"); a.href = url; a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 1500);
  }

  /* ---------------- boot ---------------- */
  buildTabs(); counts(); render(); saveNow();
})();
