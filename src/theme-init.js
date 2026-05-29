(() => {
  const storageKey = 'color-theme';

  try {
    const storedTheme = localStorage.getItem(storageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', storedTheme === 'dark' || (!storedTheme && prefersDark));
  } catch {
    document.documentElement.classList.toggle('dark', window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
})();
