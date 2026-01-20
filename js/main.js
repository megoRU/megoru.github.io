document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    const applyTheme = (theme) => {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    themeToggle.addEventListener('click', () => {
        const current = localStorage.getItem('theme') || 'auto';

        const next =
            current === 'auto' ? 'light' :
                current === 'light' ? 'dark' :
                    'auto';

        applyTheme(next);
    });
});
