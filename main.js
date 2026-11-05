const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.querySelector('.sr-only').textContent = isOpen ? 'Close menu' : 'Open menu';
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.querySelector('.sr-only').textContent = 'Open menu';
    });
  });
}

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark') document.body.classList.add('dark');

function updateThemeButton() {
  const isDark = document.body.classList.contains('dark');
  themeToggle?.setAttribute('aria-pressed', String(isDark));
  themeToggle?.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  if (themeIcon) themeIcon.textContent = isDark ? '☾' : '☼';
}

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('portfolio-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  updateThemeButton();
});

updateThemeButton();
