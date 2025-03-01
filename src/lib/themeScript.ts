export const themeScript = `
(function() {
  function getInitialTheme() {
    const persistedColorPreference = window.localStorage.getItem('theme-mode');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';

    if (hasPersistedPreference) {
      return persistedColorPreference;
    }

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';

    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }

    return 'dark';
  }

  const mode = getInitialTheme();

  window.theme = {
    mode,
    setMode: function(newMode) {
      window.theme.mode = newMode;
      window.localStorage.setItem('theme-mode', newMode);
    }
  };
})();
` 