import './theme.js';
import './fetchMovies.js';
import './catalog.js';
import './library.js';
import './search.js';
import './upcoming.js';
import './weekly.js';
import './pagination.js';
import './modal.js';
import './trailer-modal.js';
import './scroll-to-top.js';
import './loader.js';
import './footer.js';

import { initHeader } from './header.js';
import { initHero } from './hero.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHero();
});
