document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    const applyTheme = (theme) => {
        if (theme === 'auto') {
            htmlElement.setAttribute('data-theme', 'auto');
            localStorage.setItem('theme', 'auto');
        } else {
            htmlElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        }
    };

    themeToggle.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme') || 'auto';
        let newTheme;
        if (currentTheme === 'auto') {
            newTheme = 'light';
        } else if (currentTheme === 'light') {
            newTheme = 'dark';
        } else {
            newTheme = 'auto';
        }
        applyTheme(newTheme);
    });

    // Set initial theme based on saved preference or system setting
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme('auto');
    }
});
