import { IMAGE_BASE } from './api.js';
import { LIBRARY_STORAGE_KEY, getLibraryMovies } from './modal.js';

const PER_PAGE = 9;
const posterFallback =
  'https://placehold.co/500x750/111111/f8f8f8?text=No+Poster';

const fixedHeroUrl = new URL('../img/library-hero-fixed.svg', import.meta.url)
  .href;

const fixedHeroBackground = `url("${fixedHeroUrl}")`;

let allMovies = [];
let filteredMovies = [];
let selectedGenre = 'all';
let visibleCount = PER_PAGE;

const refs = {
  hero: document.querySelector('.js-library-hero'),
  heroContent: document.querySelector('.js-library-hero-content'),
  list: document.querySelector('.js-library-list'),
  empty: document.querySelector('.js-library-empty'),
  loadMore: document.querySelector('.js-library-load-more'),

  filter: document.querySelector('.library-filter'),

  filterButton:
    document.querySelector('.js-library-filter-button') ||
    document.querySelector('.library-filter__button'),

  filterMenu:
    document.querySelector('.js-library-filter-menu') ||
    document.querySelector('.library-filter__menu'),
};

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function getPoster(movie) {
  return movie.poster_path
    ? `${IMAGE_BASE}/w500${movie.poster_path}`
    : posterFallback;
}

function getYear(movie) {
  return movie.release_date ? movie.release_date.slice(0, 4) : 'Unknown';
}

function getGenreNames(movie) {
  if (!Array.isArray(movie.genres)) return [];

  return movie.genres
    .map(genre => (typeof genre === 'string' ? genre : genre?.name))
    .filter(Boolean);
}

function getGenreText(movie) {
  const genres = getGenreNames(movie);
  return genres.length ? genres.join(', ') : 'Genre unknown';
}

function getRatingPercent(movie) {
  const rating = Number(movie.vote_average);
  const normalizedRating = Number.isFinite(rating) ? rating : 0;

  return Math.min(100, Math.max(0, normalizedRating * 10));
}

function renderFixedHero() {
  if (!refs.hero || !refs.heroContent) return;

  refs.hero.style.backgroundImage = fixedHeroBackground;
  refs.hero.style.backgroundPosition = 'center';
  refs.hero.style.backgroundSize = 'cover';

  refs.heroContent.innerHTML = `
    <h1 class="library-hero__title">Create Your Dream Cinema</h1>
    <p class="library-hero__text">
      Is a guide to designing a personalized movie theater experience with the right equipment,
      customized decor, and favorite films. This guide helps you bring the cinema experience into
      your own home with cozy seating, dim lighting, and movie theater snacks.
    </p>
  `;
}

function collectGenres() {
  const genres = new Set();

  allMovies.forEach(movie => {
    getGenreNames(movie).forEach(genre => genres.add(genre));
  });

  return [...genres].sort((a, b) => a.localeCompare(b));
}

function isFilterMenuOpen() {
  if (!refs.filterMenu) return false;

  return (
    refs.filterButton?.getAttribute('aria-expanded') === 'true' ||
    refs.filter?.classList.contains('is-open')
  );
}

function setFilterMenuOpen(isOpen) {
  if (!refs.filterButton || !refs.filterMenu) return;

  refs.filterButton.setAttribute('aria-expanded', String(isOpen));

  refs.filterMenu.hidden = !isOpen;
  refs.filterMenu.style.display = isOpen ? 'block' : 'none';

  refs.filter?.classList.toggle('is-open', isOpen);
}

function renderGenreFilter() {
  if (!refs.filterButton || !refs.filterMenu) return;

  const genres = collectGenres();

  refs.filterButton.textContent =
    selectedGenre === 'all' ? 'Genre' : selectedGenre;

  refs.filterButton.disabled = allMovies.length === 0;
  refs.filterButton.setAttribute('aria-expanded', 'false');

  refs.filterMenu.hidden = true;
  refs.filterMenu.style.display = 'none';

  refs.filter?.classList.remove('is-open');

  if (refs.filter) {
    refs.filter.hidden = allMovies.length === 0;
  }

  const genreItems = genres
    .map(genre => {
      const isSelected = selectedGenre === genre ? 'is-selected' : '';

      return `
        <li>
          <button
            class="${isSelected}"
            type="button"
            data-genre="${escapeHtml(genre)}"
          >
            ${escapeHtml(genre)}
          </button>
        </li>
      `;
    })
    .join('');

  refs.filterMenu.innerHTML = `
    <li>
      <button
        class="${selectedGenre === 'all' ? 'is-selected' : ''}"
        type="button"
        data-genre="all"
      >
        All genres
      </button>
    </li>
    ${genreItems}
  `;
}

function applyGenreFilter() {
  filteredMovies =
    selectedGenre === 'all'
      ? [...allMovies]
      : allMovies.filter(movie => getGenreNames(movie).includes(selectedGenre));
}

function createMovieCard(movie) {
  const title = movie.title || movie.original_title || 'Untitled';
  const rating = Number(movie.vote_average || 0).toFixed(1);

  return `
    <li class="movie-card" data-movie-id="${movie.id}">
      <button class="movie-card__button" type="button" aria-label="Open ${escapeHtml(title)} details">
        <img class="movie-card__poster" src="${getPoster(movie)}" alt="${escapeHtml(title)} poster" />

        <span class="movie-card__gradient"></span>

        <span class="movie-card__info">
          <span class="movie-card__title">${escapeHtml(title)}</span>

          <span class="movie-card__footer">
            <span class="movie-card__meta">
              ${escapeHtml(getGenreText(movie))} | ${getYear(movie)}
            </span>

            <span
              class="movie-card__rating"
              style="--rating: ${getRatingPercent(movie)}%"
              aria-label="Rating ${rating} out of 10"
            >&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </span>
        </span>
      </button>
    </li>
  `;
}

function renderMovieList() {
  if (!refs.list || !refs.empty || !refs.loadMore) return;

  const visibleMovies = filteredMovies.slice(0, visibleCount);

  refs.list.innerHTML = visibleMovies.map(createMovieCard).join('');

  const isLibraryEmpty = allMovies.length === 0;
  const isFilteredEmpty = allMovies.length > 0 && filteredMovies.length === 0;

  refs.empty.hidden = !isLibraryEmpty && !isFilteredEmpty;
  refs.list.hidden = isLibraryEmpty || isFilteredEmpty;

  refs.loadMore.hidden =
    isLibraryEmpty || isFilteredEmpty || visibleCount >= filteredMovies.length;
}

function refreshLibrary() {
  allMovies = getLibraryMovies();

  if (
    selectedGenre !== 'all' &&
    !allMovies.some(movie => getGenreNames(movie).includes(selectedGenre))
  ) {
    selectedGenre = 'all';
  }

  visibleCount = PER_PAGE;

  applyGenreFilter();
  renderGenreFilter();
  renderMovieList();
}

function bindEvents() {
  refs.loadMore?.addEventListener('click', () => {
    visibleCount += PER_PAGE;
    renderMovieList();
  });

  refs.filterButton?.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();

    if (!refs.filterMenu || refs.filterButton.disabled) return;

    setFilterMenuOpen(!isFilterMenuOpen());
  });

  refs.filterMenu?.addEventListener('click', event => {
    event.stopPropagation();

    const button = event.target.closest('[data-genre]');
    if (!button) return;

    event.preventDefault();

    selectedGenre = button.dataset.genre;
    visibleCount = PER_PAGE;

    setFilterMenuOpen(false);
    applyGenreFilter();
    renderGenreFilter();
    renderMovieList();
  });

  document.addEventListener('click', event => {
    if (event.target.closest('.library-filter')) return;

    setFilterMenuOpen(false);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      setFilterMenuOpen(false);
    }
  });

  window.addEventListener('library:updated', refreshLibrary);

  window.addEventListener('storage', event => {
    if (event.key === LIBRARY_STORAGE_KEY) {
      refreshLibrary();
    }
  });
}

function initLibraryPage() {
  if (!refs.hero && !refs.list) return;

  renderFixedHero();
  refreshLibrary();
  bindEvents();
}

initLibraryPage();
