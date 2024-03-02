document.addEventListener('DOMContentLoaded', (event) => {
    const themeButton = document.getElementById('mode');
    const themeIcon = themeButton.querySelector('i');
    const themeText = themeButton.querySelector('span');

    const savedTheme = localStorage.getItem('theme') || 'clair';
    setTheme(savedTheme);

    themeButton.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('dark') ? 'sombre' : 'clair';
        const newTheme = currentTheme === 'sombre' ? 'clair' : 'sombre';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        if (theme === 'sombre') {
            document.body.classList.add('dark');
            themeIcon.className = 'fas fa-sun';
            themeText.textContent = 'Thème clair';
        } else {
            document.body.classList.remove('dark');
            themeIcon.className = 'fas fa-moon';
            themeText.textContent = 'Thème sombre';
        }
        localStorage.setItem('theme', theme);
    }
});
