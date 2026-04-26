// Client-side pagination for any `.entries.paginated` container.
// Reads page size from `data-page-size` (default 3). Syncs with `?page=N` query
// param so pages are bookmarkable; falls back gracefully if JS is disabled.
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var containers = document.querySelectorAll(".entries.paginated");
    containers.forEach(function (container) {
      var pageSize = parseInt(container.getAttribute("data-page-size"), 10) || 3;
      var entries = container.querySelectorAll(":scope > .entry");
      var total = entries.length;
      if (total <= pageSize) return;

      var totalPages = Math.ceil(total / pageSize);

      function readPage() {
        var p = parseInt(new URLSearchParams(window.location.search).get("page"), 10);
        if (isNaN(p) || p < 1) return 1;
        if (p > totalPages) return totalPages;
        return p;
      }

      function writePage(p) {
        var params = new URLSearchParams(window.location.search);
        if (p === 1) params.delete("page");
        else params.set("page", String(p));
        var qs = params.toString();
        var url = window.location.pathname + (qs ? "?" + qs : "") + window.location.hash;
        window.history.replaceState({}, "", url);
      }

      var currentPage = readPage();

      var nav = document.createElement("nav");
      nav.className = "pager";
      nav.setAttribute("aria-label", "Pagination");
      nav.innerHTML =
        '<button type="button" class="pager-btn" data-action="prev" aria-label="Previous page">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>' +
        '</button>' +
        '<span class="pager-status" aria-live="polite"></span>' +
        '<button type="button" class="pager-btn" data-action="next" aria-label="Next page">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>' +
        '</button>';
      container.parentNode.insertBefore(nav, container.nextSibling);

      var prevBtn = nav.querySelector('[data-action="prev"]');
      var nextBtn = nav.querySelector('[data-action="next"]');
      var status  = nav.querySelector(".pager-status");

      function render() {
        var start = (currentPage - 1) * pageSize;
        var end = start + pageSize;
        for (var i = 0; i < entries.length; i++) {
          entries[i].style.display = (i >= start && i < end) ? "" : "none";
        }
        status.textContent = "Page " + currentPage + " of " + totalPages;
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
      }

      function goTo(p, scroll) {
        currentPage = Math.max(1, Math.min(totalPages, p));
        render();
        writePage(currentPage);
        if (scroll) {
          var top = container.getBoundingClientRect().top + window.pageYOffset - 24;
          window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
        }
      }

      prevBtn.addEventListener("click", function () { goTo(currentPage - 1, true); });
      nextBtn.addEventListener("click", function () { goTo(currentPage + 1, true); });

      render();
    });
  });
})();

// Theme toggle: light/dark with localStorage + system preference fallback.
(function () {
  var STORAGE_KEY = "nl-theme";
  var root = document.documentElement;

  function getInitialTheme() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (saved === "light" || saved === "dark") return saved;
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0f1115" : "#ffffff");
  }

  // Apply ASAP to avoid FOUC.
  applyTheme(getInitialTheme());

  function toggle() {
    var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    var next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (btn) btn.addEventListener("click", toggle);
  });
})();
