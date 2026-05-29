(() => {
  const storageKey = 'color-theme';
  const installCommand = 'npm install -g paste-as-code';
  const root = document.documentElement;
  const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const copyButton = document.getElementById('copy-command');
  const copyIcon = document.getElementById('copy-icon');
  const checkIcon = document.getElementById('check-icon');
  const copyStatus = document.getElementById('copy-status');
  let copyTimer;

  function setThemeIcon() {
    const isDark = root.classList.contains('dark');
    themeToggleDarkIcon.classList.toggle('hidden', isDark);
    themeToggleLightIcon.classList.toggle('hidden', !isDark);
    themeToggleBtn.setAttribute('aria-pressed', String(isDark));
  }

  function setStoredTheme(theme) {
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(storageKey, theme);
    setThemeIcon();
  }

  function getNextTheme() {
    return root.classList.contains('dark') ? 'light' : 'dark';
  }

  function showCopySuccess() {
    clearTimeout(copyTimer);
    copyIcon.classList.add('hidden');
    checkIcon.classList.remove('hidden');
    copyStatus.textContent = 'Installation command copied';
    copyTimer = setTimeout(() => {
      copyIcon.classList.remove('hidden');
      checkIcon.classList.add('hidden');
      copyStatus.textContent = '';
    }, 2000);
  }

  function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.className = 'copy-buffer';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
    showCopySuccess();
  }

  function copyInstallCommand() {
    if (navigator.clipboard && window.isSecureContext) {
      Promise.race([
        navigator.clipboard.writeText(installCommand),
        new Promise((_resolve, reject) => {
          setTimeout(reject, 500);
        })
      ]).then(showCopySuccess).catch(() => {
        fallbackCopy(installCommand);
      });
    } else {
      fallbackCopy(installCommand);
    }
  }

  setThemeIcon();
  themeToggleBtn.addEventListener('click', () => {
    setStoredTheme(getNextTheme());
  });
  copyButton.addEventListener('click', copyInstallCommand);
})();
