import { API_KEY, BASE_URL, IMAGE_BASE } from './api.js';

export const LIBRARY_STORAGE_KEY = 'my-library';

const modal = document.querySelector('[data-movie-modal]');
const overlay = document.querySelector('[data-movie-modal-overlay]');
const closeButton = document.querySelector('[data-movie-modal-close]');
const content = document.querySelector('[data-movie-modal-content]');

const posterFallback = 'https://placehold.co/500x750/111111/f8f8f8?text=No+Poster';

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function roundToTenth(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number.toFixed(1) : '0.0';
}

function readLibrary() {
  try {
    const movies = JSON.parse(localStorage.getItem(LIBRARY_STORAGE_KEY));
    return Array.isArray(movies) ? movies : [];
  } catch {
    return [];
  }
}

function saveLibrary(movies) {
  try {
    localStorage.setItem(LIBRARY_STORAGE_KEY, JSON.stringify(movies));
    window.dispatchEvent(new CustomEvent('library:updated'));
    return true;
  } catch (error) {
    console.error('Library could not be saved', error);
    return false;
  }
}

export function getLibraryMovies() {
  return readLibrary();
}

export function isMovieInLibrary(movieId) {
  return readLibrary().some(movie => Number(movie.id) === Number(movieId));
}

function normalizeMovie(movie) {
  return {
    id: movie.id,
    title: movie.title || movie.name || movie.original_title || 'Untitled',
    original_title: movie.original_title || movie.title || 'Untitled',
    poster_path: movie.poster_path || '',
    backdrop_path: movie.backdrop_path || '',
    release_date: movie.release_date || '',
    vote_average: movie.vote_average || 0,
    vote_count: movie.vote_count || 0,
    popularity: movie.popularity || 0,
    overview: movie.overview || '',
    genres: normalizeGenres(movie.genres),
  };
}

function normalizeGenres(genres) {
  if (!Array.isArray(genres)) return [];

  return [
    ...new Set(
      genres
        .map(genre => (typeof genre === 'string' ? genre : genre?.name))
        .filter(Boolean)
    ),
  ];
}

function toggleLibraryMovie(movie) {
  const normalizedMovie = normalizeMovie(movie);
  const movies = readLibrary();
  const isAdded = movies.some(item => Number(item.id) === Number(normalizedMovie.id));

  if (isAdded) {
    const wasSaved = saveLibrary(
      movies.filter(item => Number(item.id) !== Number(normalizedMovie.id))
    );
    return wasSaved ? false : true;
  }

  return saveLibrary([...movies, normalizedMovie]);
}

async function fetchMovie(movieId) {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);

  if (!response.ok) {
    throw new Error('Movie details could not be loaded');
  }

  return response.json();
}

function getPoster(movie) {
  return movie.poster_path ? `${IMAGE_BASE}/w500${movie.poster_path}` : posterFallback;
}

function getGenres(movie) {
  const genres = normalizeGenres(movie.genres);

  if (genres.length === 0) {
    return 'Unknown';
  }

  return genres.join(', ');
}

function renderMovie(movie) {
  const added = isMovieInLibrary(movie.id);

  content.innerHTML = `
    <img
      class="movie-modal__poster"
      src="${getPoster(movie)}"
      alt="${escapeHtml(movie.title || 'Movie poster')}"
    />

    <div class="movie-modal__info">
      <h2 class="movie-modal__title" id="movie-modal-title">
        ${escapeHtml(movie.title || movie.original_title || 'Untitled')}
      </h2>

      <dl class="movie-modal__stats">
        <div>
          <dt>Vote / Votes</dt>
          <dd>
            <span class="movie-modal__rating">${roundToTenth(movie.vote_average)}</span>
            / ${Number(movie.vote_count || 0)}
          </dd>
        </div>
        <div>
          <dt>Popularity</dt>
          <dd>${roundToTenth(movie.popularity)}</dd>
        </div>
        <div>
          <dt>Genre</dt>
          <dd>${escapeHtml(getGenres(movie))}</dd>
        </div>
      </dl>

      <h3 class="movie-modal__subtitle">About</h3>
      <p class="movie-modal__overview">
        ${escapeHtml(movie.overview || 'No description available.')}
      </p>

      <button class="movie-modal__library-button" type="button" data-library-toggle>
        ${added ? 'Remove from My Library' : 'Add to My Library'}
      </button>
    </div>
  `;

  content.querySelector('[data-library-toggle]')?.addEventListener('click', event => {
    const isNowAdded = toggleLibraryMovie(movie);
    event.currentTarget.textContent = isNowAdded
      ? 'Remove from My Library'
      : 'Add to My Library';
  });
}

function renderError() {
  content.innerHTML = `
    <div class="movie-modal__message">
      <h2 id="movie-modal-title">OOPS...</h2>
      <p>Something went wrong. Please try again.</p>
    </div>
  `;
}

function handleEscClose(event) {
  if (event.key === 'Escape') {
    closeMoviePopup();
  }
}

function addCloseListeners() {
  document.addEventListener('keydown', handleEscClose);
  overlay?.addEventListener('click', closeMoviePopup);
  closeButton?.addEventListener('click', closeMoviePopup);
}

function removeCloseListeners() {
  document.removeEventListener('keydown', handleEscClose);
  overlay?.removeEventListener('click', closeMoviePopup);
  closeButton?.removeEventListener('click', closeMoviePopup);
}

function openMoviePopup() {
  if (!modal) return;

  modal.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
  addCloseListeners();
}

export function closeMoviePopup() {
  if (!modal) return;

  modal.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
  removeCloseListeners();
}

export async function renderMoviePopup(movieId) {
  if (!modal || !content || !movieId) return;

  openMoviePopup();
  content.innerHTML = '<p class="movie-modal__loading">Loading...</p>';

  try {
    const movie = await fetchMovie(movieId);
    renderMovie(movie);
  } catch (error) {
    console.error(error);
    renderError();
  }
}

function handleMovieDetailsClick(event) {
  const movieTrigger = event.target.closest('[data-movie-id]');
  if (!movieTrigger) return;

  renderMoviePopup(movieTrigger.dataset.movieId);
}

document.addEventListener('click', handleMovieDetailsClick);
