// js/theme.js — load in <head> BEFORE styles to prevent flash
(function () {
  const KEY = 'viis_theme';
  const saved = localStorage.getItem(KEY) || 'dark';
  document.documentElement.setAttribute('data-theme', saved);

  function updateIcons(theme) {
    document.querySelectorAll('.theme-icon').forEach(function (el) {
      el.className = 'ti theme-icon ' + (theme === 'dark' ? 'ti-sun' : 'ti-moon');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateIcons(saved);
  });

  window.viisTheme = {
    toggle: function () {
      var curr = document.documentElement.getAttribute('data-theme') || 'dark';
      var next = curr === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem(KEY, next);
      updateIcons(next);
    }
  };
})();
