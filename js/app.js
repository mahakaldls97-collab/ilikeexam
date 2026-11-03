/* I LIKE EXAM — app.js : router + page renderers + quiz engine */
(function () {
  /* admin panel ka draft (sirf isi browser me) ho to wahi chalo, warna data.js */
  var D = window.DATA, DRAFT = false;
  try {
    var _raw = localStorage.getItem("ile:draft");
    var _j = _raw ? JSON.parse(_raw) : null;
    if (_j && _j.subjects && _j.site) { D = _j; DRAFT = true; }
  } catch (e) { }
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var page = $("#main");

  /* panel me chuni gayi photo abhi GitHub par nahi — draft me uska preview dikhaao */
  var DRAFT_IMG = null;
  function draftImgs() {
    if (!DRAFT_IMG) { try { DRAFT_IMG = JSON.parse(localStorage.getItem("ile:img")) || {}; } catch (e) { DRAFT_IMG = {}; } }
    return DRAFT_IMG;
  }
  function paintDraftImgs(root) {
    var m = draftImgs();
    Array.prototype.forEach.call(root.querySelectorAll("img"), function (im) {
      var p = im.getAttribute("src");
      if (p && m[p]) im.src = m[p];
    });
  }

  /* Prashn (MCQ sets) ab js/questions.js me hain — ye file tabhi download hoti
     hai jab koi MCQ/quiz/exam page khule. Notes wale pages par iski zaroorat nahi,
     isliye pehla load chhota rehta hai. */
  var QLOADED = !!DRAFT, QWANTED = false, QFAILED = false;
  function mergeQ() {
    var QS = window.QUESTIONS || {};
    D.subjects.forEach(function (s) { s.sets = QS[s.id] || []; });
  }
  function ensureQ() {
    if (QLOADED) return true;
    if (window.QUESTIONS) { mergeQ(); QLOADED = true; return true; }
    if (!QWANTED) {
      QWANTED = true;
      var sc = document.createElement("script");
      sc.src = "js/questions.js";
      sc.onload = function () { mergeQ(); QLOADED = true; buildIndex(); route(); refreshSearch(); };
      sc.onerror = function () { QFAILED = true; route(); };
      document.body.appendChild(sc);
    }
    return false;
  }
  /* MCQ wale page: file aane tak placeholder, load fail ho to saaf message */
  function qGate() {
    if (ensureQ()) return null;
    return QFAILED
      ? '<div class="notice">Prashn wali file <code>js/questions.js</code> load nahi ho payi. Internet dekhiye ya page refresh kijiye.</div>'
      : '<div class="notice">Prashn load ho rahe hain…</div>';
  }
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var strip = function (h) { var t = document.createElement("div"); t.innerHTML = h; return t.textContent || ""; };
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem("ile:" + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem("ile:" + k, JSON.stringify(v)); } catch (e) { } }
  };
  var shuffle = function (a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
  var subj = function (id) { for (var i = 0; i < D.subjects.length; i++) if (D.subjects[i].id === id) return D.subjects[i]; return null; };
  var allSets = function () { var r = []; D.subjects.forEach(function (s) { s.sets.forEach(function (t) { r.push({ s: s, t: t }); }); }); return r; };
  var notesOf = function (s) { return s.notes || []; };
  /* sets bhari ho to asli ginti, warna data.js me rakhi hui cached ginti */
  var setCount = function (s) { return s.sets.length || s.nsets || 0; };
  var qCount = function (s) {
    return s.sets.length ? s.sets.reduce(function (a, t) { return a + t.qs.length; }, 0) : (s.nq || 0);
  };
  var iconFor = function (s, cls) { return window.iconSvg ? window.iconSvg(s.id, cls) : ""; };

  /* ---------- header / footer ---------- */
  var NAV = [
    ["#/ ", "Home"], ["#/notes", "Notes"], ["#/questions", "Questions"], ["#/quizzes", "Quizzes"],
    ["#/testseries", "Test Series"], ["#/exams", "Exams"], ["#/districts", "Districts"], ["#/states", "States"],
    ["#/tools", "Tools"], ["#/login", "Login"]
  ];
  function buildChrome() {
    $("#mainnav").innerHTML = NAV.map(function (n) {
      return '<a href="' + n[0].trim() + '" data-nav="' + n[0].trim() + '">' + n[1] + "</a>";
    }).join("");
    $("#footSubjects").innerHTML = D.subjects.map(function (s) {
      return '<li><a href="#/subject/' + s.id + '">' + esc(s.name) + "</a></li>";
    }).join("");
    $("#footTools").innerHTML = [
      ["districts", "District Map"], ["states", "States"], ["tricks", "Tricks"],
      ["calendar", "Important Days"], ["tools", "Tools & Games"], ["exams", "Exams"]
    ].map(function (t) { return '<li><a href="#/' + t[0] + '">' + t[1] + "</a></li>"; }).join("");
    $("#year").textContent = new Date().getFullYear();
    $("#navToggle").onclick = function () {
      var n = $("#mainnav"); var open = n.classList.toggle("open");
      this.setAttribute("aria-expanded", open ? "true" : "false");
    };
    var top = document.createElement("button");
    top.className = "totop"; top.type = "button"; top.setAttribute("aria-label", "Upar page par jao");
    top.innerHTML = window.ICON ? window.ICON.up : "↑";
    document.body.appendChild(top);
    top.onclick = function () { window.scrollTo({ top: 0, behavior: "smooth" }); };
    window.addEventListener("scroll", function () { top.classList.toggle("on", window.scrollY > 500); }, { passive: true });
  }

  /* ---------- search ---------- */
  var INDEX = [];
  function buildIndex() {
    INDEX.length = 0;
    D.subjects.forEach(function (s) {
      s.notes.forEach(function (n) { INDEX.push({ k: "note", t: n.title, s: s.name, h: "#/note/" + n.id, txt: (n.title + " " + strip(n.html)).toLowerCase() }); });
      s.sets.forEach(function (t) { INDEX.push({ k: "set", t: t.title, s: s.name, h: "#/quiz/" + s.id + "/" + t.id, txt: (t.title + " " + s.name).toLowerCase() }); });
    });
    D.districts.forEach(function (d) { INDEX.push({ k: "district", t: d.n + " (" + d.hi + ")", s: d.div + " division", h: "#/districts", txt: (d.n + " " + d.hi + " " + d.hq + " " + d.div).toLowerCase() }); });
    D.states.forEach(function (st) { INDEX.push({ k: "state", t: st.n + " (" + st.hi + ")", s: st.cap, h: "#/states", txt: (st.n + " " + st.hi + " " + st.cap).toLowerCase() }); });
    D.tricks.forEach(function (t) { INDEX.push({ k: "trick", t: t.title, s: t.sub, h: "#/trick/" + t.id, txt: (t.title + " " + strip(t.html)).toLowerCase() }); });
    D.exams.forEach(function (e) { INDEX.push({ k: "exam", t: e.name, s: e.hi, h: "#/exam/" + e.id, txt: (e.name + " " + e.hi).toLowerCase() }); });
    D.subjects.forEach(function (s) {
      s.sets.forEach(function (t) {
        t.qs.forEach(function (q, i) { INDEX.push({ k: "prashn", t: q.q, s: s.name + " · " + t.title, h: "#/practice/" + s.id + "/" + t.id, txt: q.q.toLowerCase(), n: i }); });
      });
    });
  }
  function runSearch(v) {
    var box = $("#searchResults");
    v = v.trim().toLowerCase();
    if (v.length < 2) { box.hidden = true; box.innerHTML = ""; return; }
    ensureQ(); /* prashn bhi search me chahiye, isliye file mangwa lete hain */
    var hits = INDEX.filter(function (e) { return e.txt.indexOf(v) >= 0; }).slice(0, 25);
    box.innerHTML = hits.length
      ? hits.map(function (e) { return '<a href="' + e.h + '"><span class="kind">' + e.k + "</span>" + esc(e.t) + "<br><small style='color:#5c6b7a'>" + esc(e.s) + "</small></a>"; }).join("")
      : '<div class="none">Kuch nahi mila — dusra word try karo.</div>';
    box.hidden = false;
  }
  function refreshSearch() {
    var sb = $("#siteSearch");
    if (sb && !$("#searchResults").hidden && sb.value.trim().length >= 2) runSearch(sb.value);
  }

  /* ---------- shared bits ---------- */
  function crumb(parts) {
    var up = parts.length > 1 ? parts[parts.length - 2][0] : "#/";
    return '<div class="crumb"><button type="button" class="backbtn" data-up="' + esc(up) + '" aria-label="Pichhle page par jao">&lsaquo; Back</button>' + parts.map(function (p, i) {
      return i === parts.length - 1 ? esc(p[1]) : '<a href="' + p[0] + '">' + esc(p[1]) + "</a> › ";
    }).join("") + "</div>";
  }
  function subjectTiles(list) {
    return '<div class="grid">' + list.map(function (s) {
      var n = notesOf(s).length, q = qCount(s), sets = setCount(s);
      if (!n && !sets) return "";
      return '<a class="tile" href="#/subject/' + s.id + '">' + iconFor(s) + "<b>" + esc(s.name) + "</b>" +
        '<span class="hi">' + esc(s.hi) + "</span>" +
        '<span class="meta"><i>' + n + " notes</i><i>" + sets + " sets</i><i>" + q + " MCQ</i></span></a>";
    }).join("") + "</div>";
  }
  function bestPill(key) {
    var b = store.get("best:" + key, null);
    return b ? '<span class="pill">Best: ' + b.score + "/" + b.total + "</span>" : "";
  }

  /* ---------- PAGES ---------- */
  var P = {};

  P.home = function () {
    var notes = D.subjects.reduce(function (a, s) { return a + notesOf(s).length; }, 0);
    var sets = D.subjects.reduce(function (a, s) { return a + setCount(s); }, 0);
    var qs = D.subjects.reduce(function (a, s) { return a + qCount(s); }, 0);
    var ic = function (k) { return window.iconSvg ? window.iconSvg(k, "inline") : ""; };
    return '<div class="hero"><div><h1>' + esc(D.site.name) + " — " + esc(D.site.tag) + "</h1>" +
      '<p class="lead">Notes, MCQ, quiz, district map aur exam-wise test series — sab ek jagah, mobile par bhi chalega.</p>' +
      '<div class="btnrow"><a class="btn" href="#/quizzes">Quiz shuru karo</a><a class="btn blue" href="#/notes">Notes padho</a><a class="btn ghost" href="#/districts">Map practice</a></div>' +
      '<div class="hero-stats">' +
      stat(D.subjects.length, "Subjects") + stat(notes, "Notes") + stat(sets, "MCQ sets") + stat(qs, "Prashn") + stat(D.districts.length, "Jile") + stat(D.exams.length, "Exam groups") +
      "</div></div>" + hero3d() + "</div>" +
      "<h2>" + ic("education") + "Subjects</h2>" + subjectTiles(D.subjects) +
      "<h2>" + ic("book") + "Exam-wise Test Series</h2>" + '<div class="grid">' + D.exams.slice(0, 12).map(function (e) {
        return '<a class="tile" href="#/exam/' + e.id + '"><b>' + esc(e.name) + '</b><span class="hi">' + esc(e.hi) + "</span></a>";
      }).join("") + '</div><p style="margin-top:10px"><a class="btn ghost" href="#/exams">Saare ' + D.exams.length + " exam groups dekho →</a></p>" +
      "<h2>" + ic("computer") + "Tools aur Games</h2>" + '<div class="grid">' + D.tools.map(function (t) {
        return '<a class="tile" href="#/tool/' + t.id + '">' + iconFor({ id: t.id }) + '<b>' + esc(t.name) + '</b><span class="hi">' + esc(t.desc) + "</span></a>";
      }).join("") + "</div>" +
      '<div class="notice">' + esc(D.site.notes) + "</div>";
  };
  /* Topi: ek SVG (isliye kabhi toot-ti nahi) + CSS 3D me jhoomti hai.
     Chips aur "+1 marks" card uske chaaron ore tairte hain. */
  function hero3d() {
    var cap =
      '<svg class="cap3d" viewBox="0 0 120 112" aria-hidden="true">' +
      '<defs>' +
      '<linearGradient id="ileTop" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff8a4c"/><stop offset="1" stop-color="#c9490f"/></linearGradient>' +
      '<linearGradient id="ileBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a7fd5"/><stop offset="1" stop-color="#0f2f5e"/></linearGradient>' +
      '<linearGradient id="ileTas" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd76a"/><stop offset="1" stop-color="#d99a12"/></linearGradient>' +
      "</defs>" +
      '<ellipse cx="60" cy="103" rx="33" ry="6.5" fill="#123a73" opacity=".15"/>' +
      '<path d="M40 50h40v12a20 17 0 0 1-40 0z" fill="url(#ileBody)"/>' +
      '<path d="M60 26 101 45 60 64 19 45z" fill="#a63a0b"/>' +
      '<path d="M60 22 101 41 60 60 19 41z" fill="url(#ileTop)"/>' +
      '<path d="M60 22 101 41 60 60z" fill="#fff" opacity=".10"/>' +
      '<circle cx="60" cy="41" r="3.6" fill="#ffd76a" stroke="#c68f10" stroke-width=".8"/>' +
      '<path d="M60 41 97 47v11" fill="none" stroke="url(#ileTas)" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M93.5 60h7l-2.5 15h-2z" fill="url(#ileTas)"/>' +
      '<circle cx="97" cy="58" r="3.4" fill="#ffd76a" stroke="#c68f10" stroke-width=".8"/>' +
      "</svg>";
    return '<div class="hero3d"><div class="tilt" id="heroTilt"><div class="stage">' + cap +
      '<span class="chip3d p1">A</span><span class="chip3d right p2">B</span>' +
      '<span class="chip3d wrongc p3">C</span><span class="chip3d p4">D</span>' +
      '<span class="floatcard">+1 marks</span>' +
      "</div></div></div>";
  }
  function stat(n, l) { return '<div class="stat"><b>' + n + "</b><span>" + l + "</span></div>"; }

  P.notes = function () {
    return crumb([["#/", "Home"], ["#/notes", "Notes"]]) + "<h1>Notes</h1>" +
      D.subjects.filter(function (s) { return notesOf(s).length; }).map(function (s) {
        return "<h2>" + iconFor(s, "inline") + esc(s.name) + "</h2>" + notesOf(s).map(function (n) {
          return '<div class="note"><a href="#/note/' + n.id + '">' + esc(n.title) + "</a><small>" + esc(n.hi) + " · " + n.mins + " min padhai</small></div>";
        }).join("");
      }).join("");
  };

  P.questions = function () {
    var g = qGate();
    return crumb([["#/", "Home"], ["#/questions", "Questions"]]) + "<h1>Questions (MCQ practice)</h1>" +
      '<p class="lead">Kisi bhi set par click karo — turant jawab ke sath practice hoti hai, score save rehta hai.</p>' +
      (g || allSets().map(function (x) {
        return '<div class="tile" style="margin-bottom:8px"><b>' + esc(x.t.title) + '</b><span class="hi">' + esc(x.s.name) + " · " + x.t.qs.length + " prashn</span>" +
          '<div class="btnrow"><a class="btn ghost" href="#/practice/' + x.s.id + "/" + x.t.id + '">Practice</a><a class="btn" href="#/quiz/' + x.s.id + "/" + x.t.id + '">Quiz khelo</a></div></div>';
      }).join(""));
  };

  P.quizzes = function () {
    var g = qGate();
    return crumb([["#/", "Home"], ["#/quizzes", "Quizzes"]]) + "<h1>Quizzes</h1>" +
      '<p class="lead">Har quiz me 10 prashn, 30 second per question. Score phone me save hota hai.</p>' +
      '<div class="grid">' + (g ? "" : D.subjects.filter(function (s) { return setCount(s); }).map(function (s) {
        return '<a class="tile" href="#/quiz/' + s.id + '">' + iconFor(s) + "<b>" + esc(s.name) + "</b>" +
          '<span class="meta"><i>' + qCount(s) + " MCQ</i><i>" + setCount(s) + " sets</i></span></a>";
      }).join("")) + "</div>" + (g || "");
  };

  P.subject = function (id) {
    var s = subj(id); if (!s) return notFound();
    var g = qGate();
    return crumb([["#/", "Home"], ["#/notes", "Subjects"], ["#/subject/" + s.id, s.name]]) +
      "<h1>" + iconFor(s, "inline") + esc(s.name) + ' <small style="font-size:15px;color:#5c6b7a;font-weight:400">' + esc(s.hi) + "</small></h1>" +
      '<div class="btnrow">' +
      (setCount(s) ? '<a class="btn" href="#/quiz/' + s.id + '">Quiz khelo</a><a class="btn ghost" href="#/practice/' + s.id + '">MCQ practice</a>' : "") + "</div>" +
      (notesOf(s).length ? "<h2>Notes</h2>" + notesOf(s).map(function (n) {
        return '<div class="note"><a href="#/note/' + n.id + '">' + esc(n.title) + "</a><small>" + esc(n.hi) + " · " + n.mins + " min</small></div>";
      }).join("") : "") +
      (setCount(s) ? "<h2>MCQ Sets</h2>" + (s.sets.length ? s.sets.map(function (t) {
        return '<div class="note"><a href="#/practice/' + s.id + "/" + t.id + '">' + esc(t.title) + "</a><small>" + t.qs.length + " prashn · " + examName(t.exam) + "</small></div>";
      }).join("") : g) : "");
  };
  function examName(id) { for (var i = 0; i < D.exams.length; i++) if (D.exams[i].id === id) return D.exams[i].name; return "General"; }

  P.note = function (id) {
    var found = null, s = null;
    D.subjects.forEach(function (x) { x.notes.forEach(function (n) { if (n.id === id) { found = n; s = x; } }); });
    if (!found) return notFound();
    return crumb([["#/", "Home"], ["#/subject/" + s.id, s.name], ["#/note/" + found.id, found.title]]) +
      '<article class="article"><h1>' + esc(found.title) + "</h1>" +
      '<p class="lead">' + esc(found.hi) + " · " + found.mins + " min padhai · " + esc(s.name) + "</p>" + found.html +
      '<div class="btnrow"><a class="btn" href="#/quiz/' + s.id + '">Is topic ka quiz</a><a class="btn ghost" href="#/subject/' + s.id + '">← ' + esc(s.name) + "</a></div></article>";
  };

  /* ---------- practice (reveal answer) ---------- */
  P.practice = function (sid, tid) {
    var s = subj(sid); if (!s) return notFound();
    var g = qGate(); if (g) return crumb([["#/", "Home"], ["#/subject/" + sid, s.name], ["#/practice/" + sid, "Practice"]]) + g;
    var sets = tid ? s.sets.filter(function (t) { return t.id === tid; }) : s.sets;
    if (!sets.length) return notFound();
    var html = crumb([["#/", "Home"], ["#/subject/" + sid, s.name], ["#/practice/" + sid, "Practice"]]) + "<h1>" + esc(sets[0].title) + "</h1>" +
      '<p class="lead">Jawab par click karo — sahi/galat turant dikhega, explanation bhi.</p>';
    var n = 0;
    sets.forEach(function (t) {
      html += "<h2>" + esc(t.title) + "</h2>";
      t.qs.forEach(function (q) {
        n++;
        html += '<div class="qcard" data-ans="' + q.a + '"><div class="qn">Prashn ' + n + "</div><div class=\"qt\">" + esc(q.q) + "</div>" +
          q.o.map(function (o, i) { return '<button class="opt" data-i="' + i + '">' + "ABCD"[i] + ". " + esc(o) + "</button>"; }).join("") +
          '<div class="explain" hidden>' + esc(q.x || "") + "</div></div>";
      });
    });
    html += '<p><a class="btn ghost" href="#/quiz/' + sid + (tid ? "/" + tid : "") + '">Isi se quiz khelo →</a></p>';
    setTimeout(function () {
      Array.prototype.forEach.call(document.querySelectorAll(".qcard .opt"), function (b) {
        b.onclick = function () {
          var card = b.parentNode, ans = +card.getAttribute("data-ans");
          Array.prototype.forEach.call(card.querySelectorAll(".opt"), function (x) { x.disabled = true; x.classList.remove("wrong"); });
          card.querySelectorAll(".opt")[ans].classList.add("right");
          if (+b.getAttribute("data-i") !== ans) b.classList.add("wrong");
          card.querySelector(".explain").hidden = false;
        };
      });
    }, 0);
    return html;
  };

  /* ---------- quiz runner ---------- */
  var Q = null;
  P.quiz = function (sid, tid) {
    var s = subj(sid); if (!s) return notFound();
    var g = qGate(); if (g) return crumb([["#/", "Home"], ["#/quizzes", "Quizzes"], ["#/quiz/" + sid, s.name]]) + g;
    if (!tid) {
      return crumb([["#/", "Home"], ["#/subject/" + sid, s.name], ["#/quiz/" + sid, "Quiz"]]) + "<h1>" + esc(s.name) + " — Quiz</h1>" +
        '<div class="grid wide">' + s.sets.map(function (t) {
          return '<a class="tile" href="#/quiz/' + sid + "/" + t.id + '"><b>' + esc(t.title) + "</b><span class=\"meta\"><i>" + t.qs.length + " prashn</i><i>" + examName(t.exam) + "</i></span></a>";
        }).join("") + '<a class="tile" href="#/quiz/' + sid + '/mix"><b>Mixed Quiz</b><span class="meta"><i>' + qCount(s) + " prashn me se 10</i></span></a></div>";
    }
    var qs;
    if (tid === "mix") { qs = s.sets.reduce(function (a, t) { return a.concat(t.qs); }, []); }
    else {
      var set = null; s.sets.forEach(function (t) { if (t.id === tid) set = t; });
      if (!set) return notFound();
      qs = set.qs;
    }
    Q = { key: sid + "/" + tid, name: s.name + " · " + (tid === "mix" ? "Mixed" : tid), qs: shuffle(qs).slice(0, 10), i: 0, score: 0, left: 30, timer: null };
    setTimeout(quizStart, 0);
    return '<div class="quizhead"><div class="row"><div><b id="qtitle">' + esc(Q.name) + '</b></div><div>' +
      '<span class="pill" id="qcount">1/' + Q.qs.length + '</span> <span class="pill" id="qtime">30s</span> ' + bestPill(Q.key) +
      ' <a class="btn ghost" href="#/quizzes">Quit</a></div></div><div class="bar"><i id="qbar"></i></div></div><div id="qbody"></div>';
  };
  function quizStart() {
    if (!Q) return;
    clearInterval(Q.timer);
    Q.timer = setInterval(function () {
      Q.left--;
      var el = $("#qtime"); if (!el) { clearInterval(Q.timer); return; }
      el.textContent = Q.left + "s";
      if (Q.left <= 0) quizAnswer(-1);
    }, 1000);
    quizRender();
  }
  function quizRender() {
    var q = Q.qs[Q.i]; Q.left = 30;
    $("#qcount").textContent = (Q.i + 1) + "/" + Q.qs.length;
    $("#qtime").textContent = "30s";
    $("#qbar").style.width = (Q.i / Q.qs.length * 100) + "%";
    $("#qbody").innerHTML = '<div class="qcard"><div class="qt">' + esc(q.q) + "</div>" +
      q.o.map(function (o, i) { return '<button class="opt" data-i="' + i + '">' + "ABCD"[i] + ". " + esc(o) + "</button>"; }).join("") +
      '<div class="explain" hidden>' + esc(q.x || "") + "</div></div>";
    Array.prototype.forEach.call(document.querySelectorAll("#qbody .opt"), function (b) {
      b.onclick = function () { quizAnswer(+b.getAttribute("data-i")); };
    });
  }
  function quizAnswer(choice) {
    var q = Q.qs[Q.i];
    Array.prototype.forEach.call(document.querySelectorAll("#qbody .opt"), function (x) { x.disabled = true; });
    document.querySelectorAll("#qbody .opt")[q.a].classList.add("right");
    if (choice >= 0 && choice !== q.a) document.querySelectorAll("#qbody .opt")[choice].classList.add("wrong");
    else if (choice < 0) $("#qbody .explain").innerHTML = "<b>Samay khatam!</b> " + esc(q.x || "");
    if (choice === q.a) Q.score++;
    $("#qbody .explain").hidden = false;
    $("#qbody").insertAdjacentHTML("beforeend", '<div class="btnrow"><button class="btn" id="qnext">' + (Q.i === Q.qs.length - 1 ? "Result dekho" : "Agle prashn →") + "</button></div>");
    clearInterval(Q.timer);
    $("#qnext").onclick = function () {
      $("#qnext").parentNode.remove();
      if (Q.i === Q.qs.length - 1) return quizFinish();
      Q.i++; quizRender();
    };
  }
  function quizFinish() {
    $("#qbar").style.width = "100%";
    var total = Q.qs.length, score = Q.score;
    var best = store.get("best:" + Q.key, null);
    if (!best || score / total > best.score / best.total) store.set("best:" + Q.key, { score: score, total: total });
    var pct = Math.round(score / total * 100);
    $("#qbody").innerHTML = '<div class="result"><div class="score">' + score + "/" + total + "</div>" +
      "<p>" + (pct >= 80 ? "Shandaar! Topic pakka hai." : pct >= 50 ? "Theek hai — galat prashn dobara padho." : "Koi baat nahi, notes padhke phir try karo.") + "</p>" +
      '<div class="btnrow"><button class="btn" id="qagain">Dobara khelo</button><a class="btn blue" href="#/notes">Notes</a><a class="btn ghost" href="#/quizzes">Aur quiz</a></div></div>';
    $("#qagain").onclick = function () { location.hash = "#/quiz/" + Q.key; };
    Q = null;
  }

  /* ---------- exams ---------- */
  P.exams = function () {
    var g = qGate();
    return crumb([["#/", "Home"], ["#/exams", "Exams"]]) + "<h1>Exam-wise Test Series</h1>" +
      '<p class="lead">Har exam ke liye alag page — usse juda MCQ set yahin filter ho jayega.</p>' + (g || '<div class="grid">' +
      D.exams.map(function (e) {
        var n = allSets().filter(function (x) { return x.t.exam === e.id; }).length;
        return '<a class="tile" href="#/exam/' + e.id + '"><b>' + esc(e.name) + '</b><span class="hi">' + esc(e.hi) + '</span><span class="meta"><i>' + n + " sets</i></span></a>";
      }).join("") + "</div>");
  };
  P.exam = function (id) {
    var e = null; D.exams.forEach(function (x) { if (x.id === id) e = x; });
    if (!e) return notFound();
    var g = qGate();
    var html = crumb([["#/", "Home"], ["#/exams", "Exams"], ["#/exam/" + id, e.name]]) + "<h1>" + esc(e.name) + "</h1><p class=\"lead\">" + esc(e.hi) + "</p>";
    if (g) return html + g;
    var mine = allSets().filter(function (x) { return x.t.exam === id; });
    if (!mine.length) {
      return html + '<div class="notice">Is exam ke liye abhi set Jude nahi gaye. <a href="#/questions">Saare MCQ sets</a> dekho, ya <code>js/questions.js</code> me set ke sath <code>exam: "' + id + '"</code> daal do — ye page apne aap bhar jayega.</div>';
    }
    return html + mine.map(function (x) {
      return '<div class="tile" style="margin-bottom:8px"><b>' + esc(x.t.title) + '</b><span class="hi">' + esc(x.s.name) + " · " + x.t.qs.length + " prashn</span>" +
        '<div class="btnrow"><a class="btn ghost" href="#/practice/' + x.s.id + "/" + x.t.id + '">Practice</a><a class="btn" href="#/quiz/' + x.s.id + "/" + x.t.id + '">Quiz</a></div></div>';
    }).join("");
  };
  P.testseries = function () {
    var g = qGate();
    return crumb([["#/", "Home"], ["#/testseries", "Test Series"]]) + "<h1>Test Series</h1>" +
      '<p class="lead">Free test series — poore syllabus par timed quiz. Naya set add karne ke liye <code>js/questions.js</code> me <code>sets</code> daikhun.</p>' +
      (g || '<div class="grid wide">' + allSets().map(function (x) {
        return '<a class="tile" href="#/quiz/' + x.s.id + "/" + x.t.id + '"><b>' + esc(x.t.title) + '</b><span class="hi">' + esc(x.s.name) + "</span><span class=\"meta\"><i>" + x.t.qs.length + " prashn</i><i>" + examName(x.t.exam) + "</i></span></a>";
      }).join("") + "</div>" +
      "<h2>Subject-wise mixed quiz</h2><div class=\"grid\">" + D.subjects.filter(function (s) { return setCount(s); }).map(function (s) {
        return '<a class="tile" href="#/quiz/' + s.id + '/mix">' + iconFor(s) + "<b>" + esc(s.name) + " Mixed</b><span class=\"meta\"><i>" + qCount(s) + " MCQ</i></span></a>";
      }).join("") + "</div>");
  };

  /* ---------- districts ---------- */
  P.districts = function () {
    var byDiv = {};
    D.districts.forEach(function (d) { (byDiv[d.div] = byDiv[d.div] || []).push(d); });
    return crumb([["#/", "Home"], ["#/districts", "Districts"]]) + "<h1>Rajasthan — " + D.districts.length + " Jile, " + Object.keys(byDiv).length + " Division</h1>" +
      '<p class="lead">Sarkari list ke anusaar 2025 ke baad 41 jile aur 7 divisions hain. Purani kitabo me 33 likha milega — wo ab purana ho gaya.</p>' +
      '<div class="btnrow"><a class="btn" href="#/tool/map">Map practice khelo</a><a class="btn ghost" href="#/raj-ca-tricks">Tricks dekho</a></div>' +
      mapSvg(null) +
      "<h2>Division-wise</h2>" + Object.keys(byDiv).sort().map(function (k) {
        return '<div class="table-scroll"><table class="tb"><tr><th>' + esc(k) + " division (" + byDiv[k].length + ")</th><th>Headquarters</th></tr>" +
          byDiv[k].map(function (d) { return "<tr><td>" + esc(d.n) + " — " + esc(d.hi) + "</td><td>" + esc(d.hq) + "</td></tr>"; }).join("") + "</table></div>";
      }).join("");
  };
  function mapSvg(target) {
    var W = 420, H = 340;
    var cells = D.districts.map(function (d, i) {
      var x = 8 + d.x * 46, y = 8 + d.y * 40;
      return '<rect class="dcell" data-i="' + i + '" x="' + x + '" y="' + y + '" width="44" height="38" rx="6"></rect>' +
        '<text class="dlabel" x="' + (x + 22) + '" y="' + (y + 23) + '">' + esc(d.n.length > 9 ? d.n.slice(0, 8) + "…" : d.n) + "</text>";
    }).join("");
    return '<div class="mapwrap"><div class="mapbox"><svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Rajasthan districts schematic map">' + cells + "</svg>" +
      '<p style="font-size:12px;color:#5c6b7a;margin:6px 0 0">Schematic map — sirf approximate position, exact boundary ke liye survey map dekhein.</p></div>' +
      '<div class="tool" id="mapgame"><h3 style="margin-top:0">Map Drill</h3><p id="mapask" style="font-size:15px">Neeche button dabao — jila naam aayega, map par us par click karo.</p>' +
      '<div class="btnrow"><button class="btn" id="mapstart">Shuru karo</button><span class="pill" id="mapscore">0/0</span></div></div></div>';
  }

  /* ---------- states ---------- */
  P.states = function () {
    var reg = {};
    D.states.forEach(function (s) { (reg[s.region] = reg[s.region] || []).push(s); });
    return crumb([["#/", "Home"], ["#/states", "States"]]) + "<h1>Bharat — " + D.states.filter(function (s) { return s.region !== "UT"; }).length + " Rajya + " +
      D.states.filter(function (s) { return s.region === "UT"; }).length + " Kendrashit Kshetra</h1>" +
      Object.keys(reg).map(function (k) {
        return "<h2>" + esc(k) + "</h2><div class=\"grid\">" + reg[k].map(function (s) {
          return '<div class="tile"><b>' + esc(s.n) + '</b><span class="hi">' + esc(s.hi) + '</span><span class="meta"><i>' + esc(s.cap) + "</i></span></div>";
        }).join("") + "</div>";
      }).join("");
  };

  /* ---------- tricks ---------- */
  P.tricks = function () {
    return crumb([["#/", "Home"], ["#/tricks", "Tricks"]]) + "<h1>Tricks aur Short-cuts</h1>" +
      D.tricks.map(function (t) {
        return '<div class="note"><a href="#/trick/' + t.id + '">' + esc(t.title) + "</a><small>" + esc(t.sub) + "</small></div>";
      }).join("");
  };
  P.trick = function (id) {
    var t = null; D.tricks.forEach(function (x) { if (x.id === +id) t = x; });
    if (!t) return notFound();
    return crumb([["#/", "Home"], ["#/tricks", "Tricks"], ["#/trick/" + t.id, t.title]]) +
      '<article class="article"><h1>' + esc(t.title) + '</h1><p class="lead">' + esc(t.sub) + "</p>" + t.html +
      '<p><a class="btn ghost" href="#/tricks">← Saari tricks</a></p></article>';
  };

  /* ---------- calendar ---------- */
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  P.calendar = function (m) {
    m = MONTHS.indexOf(m) >= 0 ? m : MONTHS[new Date().getMonth()];
    var ev = {}; (D.calendar[m] || []).forEach(function (e) { ev[e.d] = e.t; });
    var first = new Date(2026, MONTHS.indexOf(m), 1).getDay();
    var days = new Date(2026, MONTHS.indexOf(m) + 1, 0).getDate();
    var cells = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(function (d) { return '<div class="h">' + d + "</div>"; }).join("");
    for (var i = 0; i < first; i++) cells += '<div class="d"></div>';
    for (var d = 1; d <= days; d++) {
      cells += '<div class="d' + (ev[d] ? " ev" : "") + '"><b>' + d + "</b>" + (ev[d] ? "<span>" + esc(ev[d]) + "</span>" : "") + "</div>";
    }
    return crumb([["#/", "Home"], ["#/calendar", "Important Days"]]) + "<h1>Important Days — " + esc(m) + "</h1>" +
      '<div class="optbar">' + MONTHS.map(function (x) { return '<a class="chip' + (x === m ? " on" : "") + '" href="#/calendar/' + x + '">' + x.slice(0, 3) + "</a>"; }).join("") + "</div>" +
      '<div class="cal">' + cells + "</div>" +
      "<h2>Is mahine ki list</h2><div class=\"table-scroll\"><table class=\"tb\"><tr><th>Tareekh</th><th>Din</th></tr>" +
      (D.calendar[m] || []).map(function (e) { return "<tr><td>" + m.slice(0, 3) + " " + e.d + ", 2026</td><td>" + esc(e.t) + "</td></tr>"; }).join("") + "</table></div>";
  };

  /* ---------- tools ---------- */
  P.tools = function () {
    return crumb([["#/", "Home"], ["#/tools", "Tools"]]) + "<h1>Tools aur Games</h1><div class=\"grid wide\">" +
      D.tools.map(function (t) {
        return '<a class="tile" href="#/tool/' + t.id + '">' + iconFor({ id: t.id }) + '<b>' + esc(t.name) + '</b><span class="hi">' + esc(t.hi) + "</span><span class=\"meta\"><i>" + esc(t.desc) + "</i></span></a>";
      }).join("") + "</div>";
  };
  P.tool = function (id) {
    var head = crumb([["#/", "Home"], ["#/tools", "Tools"], ["#/tool/" + id, id]]) + "<h1>" + iconFor({ id: id }, "inline") + esc(toolName(id)) + "</h1>";
    if (id === "percent") return head + toolPercent();
    if (id === "si") return head + toolSI();
    if (id === "avg") return head + toolAvg();
    if (id === "flash") return head + toolFlash("india");
    if (id === "flashraj") return head + toolFlash("rajasthan");
    if (id === "alphabet") return head + toolAlphabet();
    if (id === "map") return head + '<div class="table-scroll">' + mapSvg() + "</div>";
    if (id === "crossword") return head + toolCross();
    if (id === "jokes") return head + toolJokes();
    return notFound();
  };
  function toolName(id) { for (var i = 0; i < D.tools.length; i++) if (D.tools[i].id === id) return D.tools[i].name; return id; }

  function toolPercent() {
    return '<div class="tool"><label class="f">Percent daalo (jaise 12.5)</label><input id="p1" value="12.5">' +
      '<div class="out" id="o1"></div><label class="f">Fraction daalo (jaise 1/8)</label><input id="p2" value="1/8"><div class="out" id="o2"></div></div>' +
      '<div class="notice">Common pairs: 1/8=12.5% · 1/6≈16.67% · 1/12≈8.33% · 1/16=6.25%</div>';
  }
  function toolSI() {
    return '<div class="tool"><label class="f">Principal (₹)</label><input id="si_p" value="25000">' +
      '<label class="f">Rate % per year</label><input id="si_r" value="8"><label class="f">Time (years)</label><input id="si_t" value="3">' +
      '<div class="out" id="si_o"></div></div>';
  }
  function toolAvg() {
    return '<div class="tool"><label class="f">Numbers comma se alag karo</label><input id="av_in" value="45, 60, 72, 88">' +
      '<div class="out" id="av_o"></div><label class="f">Percentage change: A → B</label><input id="ch_a" value="240"> <input id="ch_b" value="300">' +
      '<div class="out" id="ch_o"></div></div>';
  }
  function toolFlash(which) {
    var cards = D.flashcards[which] || [];
    return '<div class="tool"><div class="flash" id="fl"><div><div class="big">' + esc(cards[0][0]) + '</div><div class="small">answer dekhne ke liye tap karo</div></div></div>' +
      '<div class="btnrow"><button class="btn" id="flprev">← Pichla</button><button class="btn blue" id="flnext">Agle →</button><span class="pill" id="flcount">1/' + cards.length + "</span></div></div>";
  }
  function toolAlphabet() {
    return '<div class="tool"><p>Position batao (A=1 … Z=26). 10 sawaal, timer chalta rahega.</p>' +
      '<div class="flash" id="alq"><div class="big">?</div></div><label class="f">Tumhara jawab</label><input id="alin" placeholder="e.g. 13">' +
      '<div class="btnrow"><button class="btn" id="alcheck">Check</button><button class="btn ghost" id="alnew">Naya</button><span class="pill" id="alscore">0/0</span></div><div class="out" id="alout"></div></div>';
  }
  function toolCross() {
    return '<div class="tool"><p>Clue padho, word likho. Chhota aaram — dimaag fresh rahega.</p>' +
      D.crossword.clues.map(function (c, i) {
        return '<label class="f">' + (i + 1) + ". " + esc(c.c) + " (" + c.a.length + ' letters)</label><input class="cw" data-a="' + c.a + '" placeholder="">';
      }).join("") + '<div class="btnrow"><button class="btn" id="cwcheck">Check karo</button><span class="pill" id="cwscore"></span></div></div>';
  }
  function toolJokes() {
    return '<div class="tool"><div class="flash"><div class="big" id="joke">' + esc(D.jokes[0]) + '</div></div><div class="btnrow"><button class="btn" id="jnext">Aur sunao</button></div></div>';
  }

  /* ---------- static pages ---------- */
  var MAIL = "iloveexam2026@gmail.com";
  P.about = function () {
    return "<h1>About Us</h1>" +
      "<p><b>I LIKE EXAM</b> ek free study portal hai — Rajasthan aur India ki competitive exam ki taiyari ke liye notes, MCQ, quiz, test series, jile ka map aur short tricks. Site ka maqsad simple hai: ek hi jagah par saaf-suthra, padhne layak aur befaltu bakwaas se bhari hui material mile.</p>" +
      "<h2>Ye site kis ke liye hai</h2>" +
      "<p>REET aur Grade-3 Teacher, Patwar, VDO, Rajasthan Police Constable, CET (12th/graduation level), LDC/Junior Accountant, RAS, Police SI, Vanrakshak, Jail Prahari, Gram Sevak, Computer Instructor, Lab Assistant aur aise hi doosre state-level exam. Jin exams me Rajasthan GK, India GK, Samvidhan, Science, Maths, Reasoning, Hindi aur English puchhe jate hain — un sabki taiyari yahan se ho sakti hai.</p>" +
      "<h2>Yahan kya milta hai</h2>" +
      "<ul><li><b>Notes</b> — topic-wise, headings aur table ke saath, exam ke point of view se.</li>" +
      "<li><b>MCQ set</b> — har set ka answer aur chhota explanation, quiz mode me timer ke saath.</li>" +
      "<li><b>Test series</b> — subject-wise aur exam-wise timed quiz.</li>" +
      "<li><b>Jile aur rajya</b> — ek page par poora data, talash karne layak table.</li>" +
      "<li><b>Short tricks aur flashcards</b> — ratne wali cheezein jaldi yaad karne ke liye.</li></ul>" +
      "<h2>Content kaise banta hai</h2>" +
      "<p>Har note haath se likha jata hai aur exam ke syllabus ke hisab se baantа hai. Factual aankde (jile, division, samvidhan ke anuched, yojnayein) sarkari website, official notification aur standard reference books se liye jate hain, phir do jagah se cross-check kiye jate hain. Kisi kitaab ka scan ya kisi doosri site ka likha hua content yahan copy nahi kiya jata.</p>" +
      "<h2>Site kaun chalata hai</h2>" +
      "<p>Ye ek independent site hai — kisi coaching sansthan, sarkari vibhag ya board se juda hua nahi hai. Ise ek exam-taiyari karne wale ne shuru kiya hai aur abhi bhi khud hi content likhta hai. Isi liye aap yahan apna sujhav bhej sakte ho — jo galat mile wo theek karne ki koshish hoti hai.</p>" +
      "<h2>Free hai?</h2>" +
      "<p>Haan. Padhne, quiz khelne aur test dene ke liye na login chahiye, na paisa. Aage chal kar site par vigyapan (ads) aa sakte hain, jisse site chalti rahegi — us waqt bhi content free rahega.</p>" +
      "<h2>Galti dikhe to</h2>" +
      "<p>Kisi prashn ka jawab galat lage, purana aankda ho, ya koi link tute — hume likh bhejo. Har message padha jata hai.</p>" +
      '<p><a class="btn ghost" href="#/contact">Contact</a> <a class="btn ghost" href="#/privacy">Privacy</a> <a class="btn ghost" href="#/disclaimer">Disclaimer</a></p>';
  };
  P.contact = function () {
    return "<h1>Contact Us</h1>" +
      "<p>Site se juda koi bhi sawal, sujhav ya shikayat — seedha email par bhejo. Hum khud padhte hain.</p>" +
      '<h2>Email</h2><p style="font-size:17px"><a href="mailto:' + MAIL + '">' + MAIL + '</a></p>' +
      "<h2>Kitne din me jawab</h2><p>Aam taur par <b>2-3 din</b> me. Chhutti ke dinon me thoda late ho sakta hai.</p>" +
      "<h2>Email me kya likhein</h2>" +
      "<ul><li>Kis page ka sawal hai — page ka link ya note ka naam.</li>" +
      "<li>Kya galat hai — aur agar pata ho to sahi jawab kya hona chahiye.</li>" +
      "<li>Naya note/MCQ bhejna hai to uski file ya text.</li></ul>" +
      '<h2>Yahan se bhejo</h2><p>Neeche form bharo — bhejte hi aapka email app khulega, message pehle se likha hua hoga. Bas <b>Send</b> dabana hai.</p>' +
      '<form class="f" id="cform"><label class="f" for="cn">Aapka naam</label><input id="cn" name="n" required>' +
      '<label class="f" for="ce">Aapka email</label><input id="ce" name="e" type="email" required>' +
      '<label class="f" for="cm">Sandesh</label><textarea id="cm" rows="5" required name="m"></textarea>' +
      '<div class="btnrow"><button class="btn" type="submit">Email app me kholo</button></div>' +
      '<div class="msg" id="cmsg" hidden>Email app khul gaya hoga. Nahi khula to upar wale email address par seedha likh bhejo.</div></form>' +
      '<div class="notice">I LIKE EXAM kabhi bhi paise, OTP, ya bank detail nahi maangta. Koi aapko is site ke naam par paise bhejne ko kahe to wo hum nahi hain — seedha ' + MAIL + ' par batayein.</div>';
  };
  P.contribute = function () {
    return "<h1>Write for us</h1>" +
      "<p>Apna note, MCQ set ya short trick bhejo — sahi format me site par aapke naam ke saath publish kiya jayega. Arz yahi hai ki material <b>original</b> ho.</p>" +
      "<h2>Note ka format</h2>" +
      "<ul><li><b>Title</b> — ek line me topic (jaise \u201cRajasthan ki Nadiyan\u201d).</li>" +
      "<li><b>Lambai</b> — 300 se 800 shabd. Lamba hone par topic ke hisab se 2-3 note me baant denge.</li>" +
      "<li><b>Headings</b> — chhote-chhote hisson me (itihas, mukhya nadiyan, exam point).</li>" +
      "<li><b>Table</b> — jahan list ho (nadi, udgam sthal, kinare ke jile) wahan table me likho.</li>" +
      "<li><b>Bhasha</b> — Hindi ya Hinglish, dono chalega. Simple aur seedhi bhasha rakho.</li></ul>" +
      "<h2>MCQ ka format</h2>" +
      "<p>Bhejne se pehle is shakl me likh do — hum aage khud site ke format me daal lenge:</p>" +
      '<div class="tool"><pre style="white-space:pre-wrap;margin:0;font-size:13px">1. Rajasthan ka rajya-pakshi kaunsa hai?\n   A) Mor  B) Godawan  C) Chinkara  D) Sars\n   Ans: B\n   Vyakhya: Godawan (great Indian bustard) 1981 se Rajasthan ka rajya-pakshi hai.</pre></div>' +
      "<h2>Rules — ye zaroor padh lo</h2>" +
      "<ul><li>Content <b>aapka khud ka</b> ho. Kisi kitaab, PDF, Telegram channel ya doosri site se copy kiya hua material mat bhejo.</li>" +
      "<li>Kisi copyrighted kitaab ka scan ya photo mat bhejo.</li>" +
      "<li>Agar kisi fact ka source sarkari website hai to link sath likh do — jaldi publish hoga.</li>" +
      "<li>Ek saath 20-50 prashn tak ka set bhejo, poora paper ek baar me nahi.</li></ul>" +
      "<h2>Credit</h2><p>Publish hone par note ke neeche aapka naam (ya jo naam aap bolo) likha jayega. Abhi hum paise nahi de sakte — ye voluntary kaam hai.</p>" +
      "<h2>Kaise bhejein</h2><p><a href=\"mailto:" + MAIL + "?subject=Content%20for%20I%20LIKE%20EXAM\">" + MAIL + "</a> par subject me <b>\u201cContent for I LIKE EXAM\u201d</b> likh kar bhejo.</p>" +
      '<p><a class="btn" href="#/contact">Contact page</a></p>';
  };
  P.privacy = function () {
    return "<h1>Privacy Policy</h1>" +
      "<p>Ye page batata hai ki I LIKE EXAM aapki kis information ko kaise use karta hai. Site use karne ka matlab hai ki aap is policy se sehmat hain.</p>" +
      "<h2>Hum kya save karte hain</h2>" +
      "<p>Site par koi login, koi account aur koi server-side database nahi hai. Jo cheezein save hoti hain wo <b>sirf aapke browser</b> (localStorage) me rehti hain: quiz ka score aur progress, admin panel ka draft, aur \u2014 agar aap demo login ya contact form bharte ho \u2014 aapka likha hua naam/message. Ye data humare paas nahi jata aur kisi doosre ko nahi dikhta. Browser ki settings se site ka data delete karte hi ye sab mit jata hai.</p>" +
      "<h2>Cookies</h2>" +
      "<p>Site khud koi tracking cookie nahi lagati. Hosting provider (Vercel, GitHub Pages) normal server logs rakh sakta hai — jaise IP address, browser ka naam aur page kholne ka samay — security aur speed ke liye.</p>" +
      "<h2>Vigyapan (Google AdSense)</h2>" +
      "<p>Site par aage Google AdSense ke ads aa sakte hain. Us surat me:</p>" +
      "<ul><li>Google aur uske partners cookies ka use karke aapko ads dikhate hain, jo aapki pehle ki visits ke hisab se ho sakte hain.</li>" +
      "<li>Google advertising cookie ke istemal se aapko is site aur doosri sites par ads dikhaye jate hain.</li>" +
      "<li>Aap <a href=\"https://www.google.com/settings/ads\" target=\"_blank\" rel=\"noopener\">Google Ads Settings</a> par jaakar personalised ads band kar sakte ho, ya <a href=\"https://www.aboutads.info/choices/\" target=\"_blank\" rel=\"noopener\">aboutads.info</a> par doosre providers ke liye opt out kar sakte ho.</li></ul>" +
      "<h2>Bachche</h2><p>Ye site 13 saal se chhote bachchon se jaan-boojh kar koi personal detail nahi maangti. Agar kisi abhibhavak ko lage ki bachche ne koi detail di hai to hume likh bhejein, wo hata di jayegi.</p>" +
      "<h2>Badlav</h2><p>Policy me badlav hone par isi page par nayi tarikh ke saath likha jayega. Ads ya naya feature judne par ye page pehle update hoga.</p>" +
      "<h2>Sampark</h2><p>Privacy se juda koi sawal ho to <a href=\"mailto:" + MAIL + "\">" + MAIL + "</a> par likh bhejein.</p>" +
      "<p>Last updated: 31 October 2026</p>";
  };
  P.copyright = function () {
    return "<h1>Copyright</h1>" +
      "<p>\u00a9 2026 I LIKE EXAM. Site par likhe gaye notes, MCQ prashn, explanation, tricks aur page ka design — sab original kaam hai.</p>" +
      "<h2>Kya kar sakte ho</h2>" +
      "<ul><li>Site ko padhna, quiz khelna aur exam ki taiyari me use karna — bilkul free.</li>" +
      "<li>Chhota hissa (2-3 line ya ek prashn) \u2014 apne notes, school assignment ya kisi post me \u2014 lekin <b>source ka link zaroor</b> lagana.</li>" +
      "<li>Link share karna — WhatsApp group, Telegram, doston ko. Iske liye koi anumati ki zaroorat nahi.</li></ul>" +
      "<h2>Kya nahi kar sakte</h2>" +
      "<ul><li>Poora note ya poora MCQ set copy karke apni site, app, book, PDF ya paid course me dalna.</li>" +
      "<li>Content ko badal kar apna batana, ya site ka design copy karke doosri site banana.</li>" +
      "<li>Automatic tools se site ka poora data utha lena (scraping).</li></ul>" +
      "<h2>Agar aapka content yahan dikh raha hai</h2>" +
      "<p>Agar aapko lage ki aapka koi copyrighted kaam bina anumati ke is site par hai, to <a href=\"mailto:" + MAIL + "?subject=Copyright%20notice\">" + MAIL + "</a> par likh bhejein. Email me ye likhna:</p>" +
      "<ul><li>Us content ka link (site ka pura URL),</li>" +
      "<li>aapke original kaam ka link ya us par aapka adhikar,</li>" +
      "<li>aapka naam aur sampark.</li></ul>" +
      "<p>Jaanch ke baad sahi paaye jane par wo content <b>7 din ke andar</b> hata diya jayega.</p>" +
      "<h2>Sarkari aankde</h2><p>Jile, division, rajya, samvidhan ke anuched, yojnayein — ye factual aankde hain aur kisi ek site ke maalik nahi. Inka ullekh jaanch-padtal ke baad hi kiya jata hai.</p>";
  };
  P.disclaimer = function () {
    return "<h1>Disclaimer</h1>" +
      "<p>I LIKE EXAM ek <b>independent</b> exam-taiyari site hai. Ye Rajasthan Sarkar, RSSB, RPSC, RSMSSB, Police Bharti Board, Board of Secondary Education ya kisi bhi sarkari vibhag se judi hui nahi hai aur unki aadhikarik website nahi hai.</p>" +
      "<h2>Exam aur bharti ki jankari</h2>" +
      "<p>Yahan di gayi exam date, vacancy, syllabus aur yogyata purani ho sakti hai. Kisi bhi form, fee ya date se pehle <b>official notification aur sarkari website</b> par jaanch karna aapki zimmedari hai. Hum kisi form, document ya date ke bare me final jawab nahi dete.</p>" +
      "<h2>Content \u201cas is\u201d</h2>" +
      "<p>Notes aur prashn poori koshish aur jaanch ke saath likhe jate hain, lekin galti ka bilkul na hona hamare hath me nahi. Koi prashn ya tathya galat lage to hume batayein — hum jaldi theek karte hain. Is content par poora bharosa karke kiya gaya koi nuksan humari zimmedari nahi hoga.</p>" +
      "<h2>Result ki koi guarantee nahi</h2>" +
      "<p>Site par padhne se exam pass hone, rank aane ya naukri milne ki koi guarantee nahi hai. Ye sirf taiyari me madad karne wala zariya hai.</p>" +
      "<h2>Bahar ke link</h2>" +
      "<p>Kahin-kahin doosri websites ke link ho sakte hain (sarkari portal, Google settings). Un sites ke content aur unki policy ke liye hum zimmedar nahi hain.</p>" +
      "<h2>Vigyapan</h2><p>Site par ads aane par un ads ke product ya service ke liye hum zimmedar nahi honge. Kisi bhi paid course ya app ko kharidne se pehle khud jaanch karein.</p>" +
      "<p>Sawal ho to <a href=\"#/contact\">Contact page</a> se likh bhejein.</p>";
  };
  P.login = function () {
    var u = store.get("user", null);
    if (u) return "<h1>Welcome, " + esc(u) + "</h1><div class=\"btnrow\"><button class=\"btn ghost\" id=\"logout\">Logout</button><a class=\"btn\" href=\"#/\">Home</a></div>" +
      '<div class="notice">Ye demo login hai — data sirf isi phone/browser me save hota hai. Real accounts ke liye backend chahiye (Firebase/Supabase), wo alag kaam hai.</div>';
    return "<h1>Login / Register</h1>" +
      '<form class="f" id="lform"><label class="f">Naam</label><input required name="n"><label class="f">Mobile / Email</label><input required name="e">' +
      '<div class="btnrow"><button class="btn">Save karo</button></div></form>' +
      '<div class="notice">Progress (quiz score) already bina login ke bhi save hota hai. Login ka fayda: naam se welcome aur baad me bookmark feature.</div>';
  };
  function notFound() {
    return "<h1>Page nahi mila</h1><p>Duplicate link ho sakta hai. Home se shuru karo.</p><p><a class=\"btn\" href=\"#/\">Home</a></p>";
  }

  /* ---------- router ---------- */
  /* "Back" button ke liye apni chhoti list — browser ke back se alag, isliye ye
    kabhi site se bahar nahi le jati. Pehla page direct khula ho to button
    khud parent par chala jata hai. */
  var BACK = [], LAST = "", SKIP_PUSH = false;
  function trackBack(cur) {
    if (cur === LAST) return;
    if (SKIP_PUSH) { SKIP_PUSH = false; LAST = cur; return; }
    if (BACK.length && BACK[BACK.length - 1] === cur) { BACK.pop(); LAST = cur; return; }
    if (LAST) { BACK.push(LAST); if (BACK.length > 25) BACK.shift(); }
    LAST = cur;
  }
  function goBack(up) {
    var t = BACK.length ? BACK.pop() : (up || "#/");
    if (t === LAST) t = BACK.length ? BACK.pop() : "#/";
    SKIP_PUSH = true;
    location.hash = t;
  }
  function route() {
    var h = (location.hash || "#/").replace(/^#\/?/, "");
    trackBack("#/" + h);
    var p = h.split("/").filter(Boolean);
    var out;
    stopTimers();
    if (!p.length) out = P.home();
    else if (p[0] === "notes") out = P.notes();
    else if (p[0] === "questions") out = P.questions();
    else if (p[0] === "quizzes") out = P.quizzes();
    else if (p[0] === "testseries") out = P.testseries();
    else if (p[0] === "subject") out = P.subject(p[1]);
    else if (p[0] === "note") out = P.note(p[1]);
    else if (p[0] === "practice") out = P.practice(p[1], p[2]);
    else if (p[0] === "quiz") out = P.quiz(p[1], p[2]);
    else if (p[0] === "exams") out = P.exams();
    else if (p[0] === "exam") out = P.exam(p[1]);
    else if (p[0] === "districts") out = P.districts();
    else if (p[0] === "states") out = P.states();
    else if (p[0] === "tricks") out = P.tricks();
    else if (p[0] === "raj-ca-tricks") out = P.tricks();
    else if (p[0] === "trick") out = P.trick(p[1]);
    else if (p[0] === "calendar") out = P.calendar(p[1]);
    else if (p[0] === "tools") out = P.tools();
    else if (p[0] === "tool") out = P.tool(p[1]);
    else if (p[0] === "about") out = P.about();
    else if (p[0] === "contact") out = P.contact();
    else if (p[0] === "contribute") out = P.contribute();
    else if (p[0] === "privacy") out = P.privacy();
    else if (p[0] === "copyright") out = P.copyright();
    else if (p[0] === "disclaimer") out = P.disclaimer();
    else if (p[0] === "login") out = P.login();
    else out = notFound();
    page.innerHTML = out;
    if (DRAFT) paintDraftImgs(page);
    page.classList.remove("enter");
    /* animation class rAF ke andar: paused/background tab me class hi na lage
       to page pura dikhta rahega, "opacity:0" par atakkar nahi rahega */
    if (!reduceMotion()) requestAnimationFrame(function () { page.classList.add("enter"); });
    wire(p);
    if (!p.length) { wireHero(); countUp(); }
    Array.prototype.forEach.call(document.querySelectorAll("[data-nav]"), function (a) {
      a.classList.toggle("on", "#/" + (p[0] || "") === a.getAttribute("data-nav").replace(/^#\/?/, "#/"));
    });
    $("#mainnav").classList.remove("open");
    $("#searchResults").hidden = true;
    window.scrollTo(0, 0);
  }
  var timers = [];
  function stopTimers() { timers.forEach(clearInterval); timers = []; if (Q) { clearInterval(Q.timer); } }

  /* ---------- page wiring ---------- */
  function reduceMotion() { return window.matchMedia && matchMedia("(prefers-reduced-motion:reduce)").matches; }
  function wireHero() {
    var host = $(".hero3d"), tilt = $("#heroTilt");
    if (!host || !tilt || reduceMotion()) return;
    host.addEventListener("pointermove", function (e) {
      if (e.pointerType === "touch") return;
      var r = host.getBoundingClientRect();
      tilt.style.setProperty("--tx", (((e.clientX - r.left) / r.width - 0.5) * 30).toFixed(2));
      tilt.style.setProperty("--ty", (-((e.clientY - r.top) / r.height - 0.5) * 20).toFixed(2));
    });
    host.addEventListener("pointerleave", function () { tilt.style.setProperty("--tx", 0); tilt.style.setProperty("--ty", 0); });
  }
  function countUp() {
    if (reduceMotion()) return;
    Array.prototype.forEach.call(page.querySelectorAll(".stat b"), function (el) {
      var to = parseInt(el.textContent, 10);
      if (!to) return;
      /* pehla write rAF ke andar — tab tak asli number dikhta rahe,
         warna background tab me "0 Subjects" jaisa galat number freeze ho jata */
      requestAnimationFrame(function (t0) {
        (function step(t) {
          var k = Math.min(1, (t - t0) / 750);
          el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3)));
          if (k < 1) requestAnimationFrame(step);
        })(t0);
      });
    });
  }
  function flip(el) {
    if (!el || reduceMotion()) return;
    el.classList.remove("flip");
    requestAnimationFrame(function () { el.classList.add("flip"); });
  }
  function wire(p) {
    if (p[0] === "districts" || (p[0] === "tool" && p[1] === "map")) wireMap();
    if (p[0] === "tool") wireTool(p[1]);
    if (p[0] === "contact") wireContact();
    if (p[0] === "login") wireLogin();
    var t = $("#qtitle");
    if (!t && Q) { /* left quiz page */ Q = null; }
  }
  function wireMap() {
    var ask = $("#mapask"), score = $("#mapscore"), start = $("#mapstart");
    if (!start) return;
    var target = -1, right = 0, total = 0;
    start.onclick = function () { next(); };
    function next() {
      target = Math.floor(Math.random() * D.districts.length);
      ask.innerHTML = "Kahan hai: <b>" + esc(D.districts[target].n) + "</b> <span style='color:#5c6b7a'>(" + esc(D.districts[target].hi) + ")</span>";
    }
    Array.prototype.forEach.call(document.querySelectorAll(".dcell"), function (c) {
      c.onclick = function () {
        if (target < 0) { ask.textContent = "Pehle Shuru karo dabao."; return; }
        var i = +c.getAttribute("data-i"); total++;
        document.querySelectorAll(".dcell").forEach(function (x) { x.classList.remove("hit", "miss"); });
        if (i === target) { c.classList.add("hit"); right++; ask.innerHTML = "<b>Sahi! " + esc(D.districts[i].n) + " — " + esc(D.districts[i].hq) + " (" + esc(D.districts[i].div) + ")</b>"; }
        else { c.classList.add("miss"); document.querySelectorAll(".dcell")[target].classList.add("hit"); ask.innerHTML = "Galat — ye <b>" + esc(D.districts[i].n) + "</b> tha. Sahi: <b>" + esc(D.districts[target].n) + "</b>"; }
        score.textContent = right + "/" + total;
        setTimeout(next, 1100);
      };
    });
  }
  function wireTool(id) {
    if (id === "percent") {
      var f1 = function () {
        var v = parseFloat($("#p1").value); if (isNaN(v)) return;
        $("#o1").innerHTML = v + "% = <b>" + (v / 100).toFixed(4) + "</b> (decimal) · fraction me ≈ <b>" + frac(v / 100) + "</b>";
      };
      var f2 = function () {
        var s = $("#p2").value.split("/"); var a = parseFloat(s[0]), b = parseFloat(s.length > 1 ? s[1] : 1);
        if (isNaN(a) || isNaN(b) || !b) return;
        $("#o2").innerHTML = s.join("/") + " = <b>" + (a / b * 100).toFixed(2) + "%</b>";
      };
      $("#p1").oninput = f1; $("#p2").oninput = f2; f1(); f2();
    }
    if (id === "si") {
      var calc = function () {
        var p = +$("#si_p").value || 0, r = +$("#si_r").value || 0, t = +$("#si_t").value || 0;
        var si = p * r * t / 100;
        var ci = p * Math.pow(1 + r / 100, t) - p;
        $("#si_o").innerHTML = "SI = <b>₹" + si.toFixed(2) + "</b> · CI = <b>₹" + ci.toFixed(2) + "</b> · antar ₹" + (ci - si).toFixed(2) + "<br>Total amount (SI) = <b>₹" + (p + si).toFixed(2) + "</b>";
      };
      ["si_p", "si_r", "si_t"].forEach(function (k) { $("#" + k).oninput = calc; }); calc();
    }
    if (id === "avg") {
      var ca = function () {
        var a = $("#av_in").value.split(/[,\s]+/).map(Number).filter(function (n) { return !isNaN(n) && n !== 0 || n === 0; });
        if (!a.length) return;
        var s = a.reduce(function (x, y) { return x + y; }, 0);
        $("#av_o").innerHTML = "Average = <b>" + (s / a.length).toFixed(2) + "</b> · total " + s + " · count " + a.length;
      };
      var cc = function () {
        var a = +$("#ch_a").value, b = +$("#ch_b").value; if (!a) return;
        var pc = (b - a) / a * 100;
        $("#ch_o").innerHTML = "Change = <b>" + (pc >= 0 ? "+" : "") + pc.toFixed(2) + "%</b> " + (pc >= 0 ? "(vriddhi)" : "(kami)") + " · factor <b>" + (b / a).toFixed(4) + "</b>";
      };
      $("#av_in").oninput = ca; $("#ch_a").oninput = cc; $("#ch_b").oninput = cc; ca(); cc();
    }
    if (id === "flash" || id === "flashraj") {
      var which = id === "flash" ? "india" : "rajasthan";
      var cards = D.flashcards[which], i = 0;
      var show = function () {
        $("#fl").innerHTML = "<div><div class=\"big\">" + esc(cards[i][0]) + "</div><div class=\"small\">answer dekhne ke liye tap karo</div></div>";
        $("#flcount").textContent = (i + 1) + "/" + cards.length;
        flip($("#fl"));
      };
      $("#fl").onclick = function () {
        $("#fl").innerHTML = "<div><div class=\"big\">" + esc(cards[i][0]) + "</div><div style=\"font-size:22px;font-weight:bold;color:#f26522;margin-top:6px\">" + esc(cards[i][1]) + "</div></div>";
        flip($("#fl"));
      };
      $("#flnext").onclick = function () { i = (i + 1) % cards.length; show(); };
      $("#flprev").onclick = function () { i = (i - 1 + cards.length) % cards.length; show(); };
    }
    if (id === "alphabet") {
      var q = null, right = 0, total = 0;
      var newQ = function () {
        var n = 1 + Math.floor(Math.random() * 26);
        q = { n: n, L: String.fromCharCode(64 + n) };
        $("#alq").innerHTML = "<div class=\"big\">" + (Math.random() < 0.5 ? q.L + " = ?" : n + " = ?") + "</div>";
        flip($("#alq"));
        $("#alin").value = ""; $("#alout").textContent = ""; $("#alin").focus();
      };
      var check = function () {
        if (!q) return;
        var given = $("#alin").value.trim().toUpperCase();
        var wantLetter = /\d/.test($("#alq").textContent) === false;
        var ok = wantLetter ? given === q.L : given === String(q.n);
        total++; if (ok) right++;
        $("#alout").innerHTML = (ok ? "<b>Sahi!</b> " : "Galat — ") + q.L + " = " + q.n + " (reverse: " + (27 - q.n) + ")";
        $("#alscore").textContent = right + "/" + total;
        setTimeout(newQ, 900);
      };
      $("#alcheck").onclick = check; $("#alnew").onclick = newQ;
      $("#alin").onkeydown = function (e) { if (e.key === "Enter") check(); };
      newQ();
    }
    if (id === "crossword") {
      $("#cwcheck").onclick = function () {
        var ok = 0;
        Array.prototype.forEach.call(document.querySelectorAll(".cw"), function (x) {
          var good = x.value.trim().toUpperCase() === x.getAttribute("data-a");
          x.style.borderColor = good ? "#1c8a4a" : "#c62828"; if (good) ok++;
        });
        $("#cwscore").textContent = ok + "/" + D.crossword.clues.length;
      };
    }
    if (id === "jokes") {
      var i = 0;
      $("#jnext").onclick = function () { i = (i + 1) % D.jokes.length; $("#joke").textContent = D.jokes[i]; flip($("#joke").parentNode); };
    }
  }
  function frac(x) {
    for (var d = 1; d <= 50; d++) { var n = x * d; if (Math.abs(n - Math.round(n)) < 1e-6) return Math.round(n) + "/" + d; }
    return (x * 100).toFixed(2) + "/100";
  }
  function wireContact() {
    var cf = $("#cform");
    if (!cf) return;
    /* koi backend nahi — form seedha email app me message taiyar karke khol deta hai */
    cf.onsubmit = function (e) {
      e.preventDefault();
      var f = new FormData(cf);
      var body = "Naam: " + (f.get("n") || "") + "\nEmail: " + (f.get("e") || "") + "\n\n" + (f.get("m") || "");
      var a = document.createElement("a");
      a.href = "mailto:" + MAIL + "?subject=" + encodeURIComponent("Message from I LIKE EXAM site") + "&body=" + encodeURIComponent(body);
      a.click();
      $("#cmsg").hidden = false;
    };
  }
  function wireLogin() {
    var lf = $("#lform");
    if (lf) lf.onsubmit = function (e) {
      e.preventDefault();
      store.set("user", new FormData(e.target).get("n"));
      location.hash = "#/"; route();
    };
    var lo = $("#logout");
    if (lo) lo.onclick = function () { store.set("user", null); route(); };
  }

  /* ---------- boot ---------- */
  buildChrome(); buildIndex();
  $("#siteSearch").addEventListener("input", function () { runSearch(this.value); });
  $("#siteSearch").addEventListener("search", function () { runSearch(this.value); });
  document.addEventListener("click", function (e) { if (!e.target.closest(".searchbar")) $("#searchResults").hidden = true; });
  window.addEventListener("hashchange", route);
  /* Copy karne par neeche source line khud jud jati hai — isse content copy hota
     to hai, par "kiska hai" saath chalta hai. Chhoti copy (naam, option) par
     kuch nahi badalta, warna padhne wale ko chidh hoti hai. */
  document.addEventListener("copy", function (e) {
    if (!e.clipboardData || !window.getSelection) return;
    var sel = window.getSelection(), txt = String(sel || "");
    if (txt.replace(/\s/g, "").length < 60 || txt.indexOf("ilikeexam.vercel.app") >= 0) return;
    var node = sel.anchorNode;
    var host = node && (node.nodeType === 1 ? node : node.parentNode);
    if (!host || !host.closest || !host.closest("#main")) return;
    e.clipboardData.setData("text/plain", txt.replace(/\s+$/, "") + "\n\n\u2014 Source: I LIKE EXAM | https://ilikeexam.vercel.app");
    e.preventDefault();
  });
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest(".backbtn");
    if (!b) return;
    e.preventDefault();
    goBack(b.getAttribute("data-up"));
  });
  route();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () { }); });
  }
})();
