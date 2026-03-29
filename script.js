// Dark/Light mode toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.textContent = 'Modo Escuro';
    } else {
        document.body.classList.remove('light-mode');
        themeToggle.textContent = 'Modo Claro';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        themeToggle.textContent = isLight ? 'Modo Escuro' : 'Modo Claro';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
}
