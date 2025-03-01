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
  
  // Apply the theme class to the root element
  document.documentElement.classList.add(mode);

  window.theme = {
    mode,
    setMode: function(newMode) {
      // Remove the old theme class and add the new one
      document.documentElement.classList.remove(window.theme.mode);
      document.documentElement.classList.add(newMode);
      
      window.theme.mode = newMode;
      window.localStorage.setItem('theme-mode', newMode);
    }
  };
})();
` 