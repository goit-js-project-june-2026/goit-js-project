import { generateStarIconsMarkup } from './star-icons.js';
import { fetchTrendingMovies, searchMovies } from './api.js';
import { renderCustomPagination } from './pagination.js';

const GENRES = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

const movieGrid = document.getElementById('movieGrid');
const paginationContainer = document.getElementById('tui-pagination-container');
const testForm = document.querySelector('.search-bar');
const testInput = document.getElementById('search-film');
const mobileSearchInput = document.getElementById('search-query');
const yearValue = document.querySelector('.search-bar-year-value');

function getGenreNames(ids) {
  if (!ids || ids.length === 0) return 'Unknown';

  return ids
    .slice(0, 2)
    .map(id => GENRES[id] || 'Film')
    .join(', ');
}

function getPosterUrl(path) {
  if (!path) {
    return './src/img/no-poster.png';
  }

  return `https://image.tmdb.org/t/p/w500${path}`;
}

function clearPagination() {
  if (paginationContainer) {
    paginationContainer.innerHTML = '';
  }
}

function renderEmptySearchMessage() {
  if (!movieGrid) return;

  movieGrid.className = 'cat-movie-grid cat-movie-grid--empty';

  movieGrid.innerHTML = `
    <li class="cat-empty-message">
      <h2>OOPS...</h2>
      <p>We are very sorry!</p>
      <p>We don’t have any results matching your search.</p>
    </li>
  `;

  clearPagination();
}

function renderCatalog(movies = []) {
  if (!movieGrid) return;

  movieGrid.className = 'cat-movie-grid';

  if (movies.length === 0) {
    renderEmptySearchMessage();
    return;
  }

  movieGrid.innerHTML = movies
    .map(movie => {
      const year = movie.release_date ? movie.release_date.slice(0, 4) : 'N/A';
      const stars = generateStarIconsMarkup(
        movie.vote_average,
        'cat-movie-star'
      );
      const genres = getGenreNames(movie.genre_ids);
      const posterUrl = getPosterUrl(movie.poster_path);

      return `
        <li
          class="cat-movie-card"
          data-movie-id="${movie.id}"
          role="button"
          tabindex="0"
        >
          <img
            class="cat-movie-poster"
            src="${posterUrl}"
            alt="${movie.title || 'Movie poster'}"
            loading="lazy"
          />
          <div class="cat-movie-info">
            <h3 class="cat-movie-title">${movie.title || 'Untitled'}</h3>
            <p class="cat-movie-meta">${genres} | ${year}</p>
            <div class="cat-movie-rating">${stars}</div>
          </div>
        </li>
      `;
    })
    .join('');
}

async function loadPage(page = 1, query = null, year = '') {
  try {
    let data;

    if (query) {
      data = await searchMovies(query, page, year);
    } else {
      data = await fetchTrendingMovies(page);
    }

    const movies = data.results || [];

    renderCatalog(movies);

    if (movies.length === 0) {
      return;
    }

    const totalPages = Math.min(data.total_pages, 500);

    renderCustomPagination(page, totalPages, newPage => {
      loadPage(newPage, query, year);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  } catch (error) {
    console.error('Catalog loading error:', error);

    if (movieGrid) {
      movieGrid.className = 'cat-movie-grid cat-movie-grid--empty';

      movieGrid.innerHTML = `
        <li class="cat-empty-message">
          <h2>OOPS...</h2>
          <p>We are very sorry!</p>
          <p>Something went wrong. Please try again later.</p>
        </li>
      `;
    }

    clearPagination();
  }
}

function initCatalog() {
  if (!movieGrid) return;

  loadPage(1);
}

if (testForm && testInput) {
  testForm.addEventListener('submit', e => {
    e.preventDefault();

    const query =
      testInput.value.trim() || mobileSearchInput?.value.trim() || '';
    const year = yearValue?.textContent.trim();
    const selectedYear = year && year !== 'Year' ? year : '';

    if (!query) {
      loadPage(1);
      return;
    }

    loadPage(1, query, selectedYear);
  });
}

if (movieGrid) {
  movieGrid.addEventListener('keydown', event => {
    const movieCard = event.target.closest('[data-movie-id]');

    if (!movieCard) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      movieCard.click();
    }
  });
}

initCatalog();
