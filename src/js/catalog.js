import { generateStarIconsMarkup } from './star-icons';
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
const testForm = document.getElementById('testSearchForm');
const testInput = document.getElementById('testSearchInput');

function getGenreNames(ids) {
  if (!ids || ids.length === 0) return 'Unknown';

  return ids
    .slice(0, 2)
    .map(id => GENRES[id] || 'Film')
    .join(', ');
}

function getPosterUrl(path) {
  if (!path) {
    return '';
  }

  return `https://image.tmdb.org/t/p/w500${path}`;
}

function renderCatalog(movies = []) {
  if (!movieGrid) return;

  movieGrid.className = 'cat-movie-grid';

  if (movies.length === 0) {
    movieGrid.innerHTML = `
      <li class="cat-movie-empty">
        No movies found.
      </li>
    `;
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
        <li class="cat-movie-card">
          <img
            class="cat-movie-poster"
            src="${posterUrl}"
            alt="${movie.title || 'Movie poster'}"
          >

          <div class="cat-movie-info">
            <h3 class="cat-movie-title">${movie.title || 'Untitled'}</h3>

            <div class="cat-movie-meta">
              <div class="cat-movie-text">
                <span class="cat-movie-genre">${genres}</span>
                <span class="cat-movie-year"> | ${year}</span>
              </div>

              <div class="cat-movie-stars">${stars}</div>
            </div>
          </div>
        </li>
      `;
    })
    .join('');
}

async function loadPage(page = 1, query = null) {
  try {
    let data;

    if (query) {
      data = await searchMovies(query, page);
    } else {
      data = await fetchTrendingMovies(page);
    }

    renderCatalog(data.results);

    const totalPages = Math.min(data.total_pages, 500);

    renderCustomPagination(page, totalPages, newPage => {
      loadPage(newPage, query);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  } catch (error) {
    console.error('Catalog loading error:', error);

    if (movieGrid) {
      movieGrid.innerHTML = `
        <li class="cat-movie-empty">
          Something went wrong. Please try again later.
        </li>
      `;
    }
  }
}

function initCatalog() {
  loadPage(1);
}

if (testForm && testInput) {
  testForm.addEventListener('submit', e => {
    e.preventDefault();

    const query = testInput.value.trim();

    if (!query) {
      loadPage(1);
      return;
    }

    loadPage(1, query);
  });
}

initCatalog();
