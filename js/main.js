document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.querySelector('.theme-switcher');
    const root = document.documentElement;
    const body = document.body;

    const themes = ['light', 'dark', 'auto'];
    let currentThemeIndex = 0;

    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        currentThemeIndex = themes.indexOf(theme);
    }

    themeSwitcher.addEventListener('click', () => {
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        applyTheme(themes[currentThemeIndex]);
    });

    applyTheme(localStorage.getItem('theme') || 'auto');

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (localStorage.getItem('theme') === 'auto') {
            applyTheme('auto');
        }
    });
});