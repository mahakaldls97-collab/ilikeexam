/* I LIKE EXAM — icons.js : inline SVG line icons (emoji ki jagah).
   Naya subject add karo to bas ek line: window.ICON["id"] = "<svg…>";
   Jo id yahan na mile uske liye "book" fallback chalta hai. */
(function () {
  var S = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">';
  function s(p) { return S + p + "</svg>"; }

  window.ICON = {
    /* subjects */
    rajasthan: s('<path d="M3 21V10h2V7h3v3h1.5V6h3v4H15V7h3v3h2v11z"/><path d="M3 21h18"/>'),
    india: s('<path d="M5 3v18"/><path d="M5 4h13l-2.6 3.5L18 11H5z"/><circle cx="11.5" cy="7.5" r="1.2"/>'),
    constitution: s('<path d="M7 3h9a3 3 0 0 1 3 3v13a2 2 0 0 1-2 2H8a3 3 0 0 1-3-3V5a2 2 0 0 1 2-2z"/><path d="M9 8h7M9 12h7M9 16h4"/>'),
    science: s('<path d="M9 3h6"/><path d="M10 3v6.5L5.4 18a2 2 0 0 0 1.8 3h9.6a2 2 0 0 0 1.8-3L14 9.5V3"/><path d="M7.6 14h8.8"/>'),
    computer: s('<rect x="3" y="5" width="18" height="11" rx="2"/><path d="M8 20h8M12 16v4"/>'),
    math: s('<path d="M5 12h14"/><circle cx="12" cy="6.5" r="1.8"/><circle cx="12" cy="17.5" r="1.8"/>'),
    reasoning: s('<path d="M12 3a6 6 0 0 1 3.4 10.9V17H8.6v-3.1A6 6 0 0 1 12 3z"/><path d="M9.5 20h5M10.5 22.5h3"/>'),
    hindi: s('<path d="M12 6C10 4.5 7 4 4 4v14c3 0 6 .5 8 2 2-1.5 5-2 8-2V4c-3 0-6 .5-8 2z"/><path d="M12 6v14"/>'),
    english: s('<path d="M3 19 7 6l4 13M4.5 15h5"/><path d="M17 10a3 3 0 0 0-3 3v6"/><path d="M14.5 14.5H19"/>'),
    current: s('<path d="M4 6h12v12H4z"/><path d="M16 10h4v8H4"/><path d="M7 9h6M7 12h6M7 15h4"/>'),
    rajca: s('<path d="M12 3a6 6 0 0 1 6 6v4l2 3H4l2-3v-4a6 6 0 0 1 6-6z"/><path d="M10 19a2 2 0 0 0 4 0"/>'),
    world: s('<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c3 3.6 3 14.4 0 18M12 3c-3 3.6-3 14.4 0 18"/>'),
    criminal: s('<path d="M12 4v16M8 20h8M6 8l-3 6a3 3 0 0 0 6 0zM18 8l-3 6a3 3 0 0 0 6 0z"/><path d="M4 8h16"/>'),
    crime_wc: s('<path d="M12 3l7 3v6c0 4.4-3 7.4-7 9-4-1.6-7-4.6-7-9V6z"/><path d="M9 12l2 2 4-4"/>'),
    education: s('<path d="M3 9l9-4 9 4-9 4z"/><path d="M7 11.5V16c0 1.6 2.2 3 5 3s5-1.4 5-3v-4.5"/><path d="M21 9v5"/>'),

    /* tools */
    percent: s('<circle cx="7.5" cy="8" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/><path d="M18 5 6 19"/>'),
    si: s('<rect x="6" y="3" width="12" height="18" rx="2"/><path d="M9 7h6M9 11h1.5M13.5 11H15M9 15h1.5M13.5 15H15"/>'),
    avg: s('<path d="M4 20h16"/><path d="M7 20v-5M12 20V8M17 20v-8"/>'),
    flash: s('<rect x="3" y="7" width="13" height="12" rx="2"/><path d="M7 4h11a2 2 0 0 1 2 2v10"/>'),
    flashraj: s('<rect x="3" y="7" width="13" height="12" rx="2"/><path d="M7 4h11a2 2 0 0 1 2 2v10"/><path d="M7 12h5"/>'),
    alphabet: s('<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>'),
    map: s('<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>'),
    crossword: s('<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 9.3h16M4 14.6h16M9.3 4v16M14.6 4v16"/>'),
    jokes: s('<circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01"/><path d="M8.5 14a4 4 0 0 0 7 0"/>'),

    /* generic + UI */
    book: s('<path d="M6 4h10a2 2 0 0 1 2 2v14H8a2 2 0 0 1-2-2z"/><path d="M6 17h12"/>'),
    search: s('<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.3-4.3"/>'),
    up: s('<path d="M12 19V6M6 12l6-6 6 6"/>'),
    clock: s('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>')
  };

  window.iconSvg = function (key, cls) {
    var svg = window.ICON[key] || window.ICON.book;
    return '<span class="ic' + (cls ? " " + cls : "") + '" aria-hidden="true">' + svg + "</span>";
  };
})();
