import { initTheme } from './theme.js';
import { initHeader } from './header.js';
import { initHero } from './hero.js';
import { initCatalog } from './catalog.js';
import { initLibrary } from './library.js';
import { initSearch } from './search.js';
import { initUpcoming } from './upcoming.js';
import { initWeekly } from './weekly.js';
import { initPagination } from './pagination.js';
import { initModal } from './modal.js';
import { initTrailerModal } from './trailer-modal.js';
import { initScrollToTop } from './scroll-to-top.js';
import { initLoader } from './loader.js';
import { initFooter } from './footer.js';
import { fetchMovies } from './fetchMovies.js';

document.addEventListener('DOMContentLoaded', async () => {
  initTheme();
  initHeader();
  initHero();

  await fetchMovies();

  initCatalog();
  initLibrary();
  initSearch();
  initUpcoming();
  initWeekly();

  initPagination();

  initModal();
  initTrailerModal();

  initScrollToTop();
  initLoader();
  initFooter();
});
