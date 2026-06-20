const THEME_KEY = 'cinemania-color-mode';

export function initHeader() {
  markCurrentPage();
  setupMobileMenu();
  setupThemeSwitch();
}

function markCurrentPage() {
  const path = window.location.pathname;

  let currentPage = 'home';

  if (path.includes('catalog')) currentPage = 'catalog';
  if (path.includes('library')) currentPage = 'library';

  const links = document.querySelectorAll('[data-page]');

  links.forEach((link) => {
    link.classList.toggle('active', link.dataset.page === currentPage);
  });
}

function setupMobileMenu() {
  const menuButton = document.querySelector('#menuToggle');
  const mobileMenu = document.querySelector('.mobile-nav');

  if (!menuButton || !mobileMenu) return;

  menuButton.addEventListener('click', (event) => {
    event.stopPropagation();

    mobileMenu.classList.toggle('open');
    document.body.classList.toggle('nav-open');
  });

  document.addEventListener('click', (event) => {
    const clickedInsideMenu = mobileMenu.contains(event.target);
    const clickedMenuButton = menuButton.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
      mobileMenu.classList.remove('open');
      document.body.classList.remove('nav-open');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;

    mobileMenu.classList.remove('open');
    document.body.classList.remove('nav-open');
  });
}

function setupThemeSwitch() {
  const themeToggle = document.querySelector('.theme-toggle');

  if (!themeToggle) return;

  const savedTheme = localStorage.getItem(THEME_KEY);
  const isLightTheme = savedTheme === 'light';

  document.body.classList.toggle('light-theme', isLightTheme);
  themeToggle.classList.toggle('active', isLightTheme);

  themeToggle.addEventListener('click', () => {
    const nextIsLightTheme = !document.body.classList.contains('light-theme');

    document.body.classList.toggle('light-theme', nextIsLightTheme);
    themeToggle.classList.toggle('active', nextIsLightTheme);

    localStorage.setItem(THEME_KEY, nextIsLightTheme ? 'light' : 'dark');
  });
}
