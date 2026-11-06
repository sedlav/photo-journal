// Dark/light toggle. The initial theme is applied by an inline script in
// baseof.html (before paint) so there's no flash; this file wires up the button.
(function () {
  var root = document.documentElement;
  var button = document.querySelector('.theme-toggle');
  if (!button) return;

  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  function saved() {
    try { return localStorage.getItem('theme'); } catch (e) { return null; }
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    var next = theme === 'dark' ? 'light' : 'dark';
    button.textContent = next;
    button.setAttribute('aria-label', 'Switch to ' + next + ' theme');
  }

  button.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', next); } catch (e) {}
    apply(next);
  });

  // Follow OS changes only until the visitor picks a theme themselves.
  systemDark.addEventListener('change', function (e) {
    var s = saved();
    if (s !== 'light' && s !== 'dark') apply(e.matches ? 'dark' : 'light');
  });

  apply(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  button.hidden = false; // only shown when JS is available
})();
