document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.querySelector('.theme-switcher');
    const root = document.documentElement;
    const body = document.body;

    const themes = ['light', 'dark', 'auto'];
    let currentThemeIndex = 0;

    function applyTheme(theme) {
        // иконки
        root.setAttribute('data-theme', theme);

        // сброс классов
        body.classList.remove('light-theme', 'dark-theme');

        if (theme === 'auto') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            body.classList.add(prefersDark ? 'dark-theme' : 'light-theme');
        } else {
            body.classList.add(`${theme}-theme`);
        }

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