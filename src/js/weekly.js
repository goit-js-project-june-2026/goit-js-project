import { getTrending, convertGenreIdsToNames } from './api.js';
import { generateStarIconsMarkup } from './star-icons.js';
import { renderMoviePopup } from './modal.js';

let weeklyMovie = null;
let weeklyMoviesState = [];
let currentWeeklyMode = '';

function getWeeklyMode() {
  return window.innerWidth < 768 ? 'mobile' : 'large';
}

function getWeeklyPosterUrl(posterPath) {
  if (!posterPath) return '';

  const size = window.innerWidth < 768 ? 'w342' : 'w500';
  return `https://image.tmdb.org/t/p/${size}${posterPath}`;
}

function buildWeeklyStars(voteAverage) {
  return `
    <div class="weekly-rating">
      ${generateStarIconsMarkup(voteAverage, 'weekly-star')}
    </div>
  `;
}

export async function initWeeklyTrends() {
  weeklyMovie = document.querySelector('#weekly-movie');

  if (!weeklyMovie) {
    return;
  }

  try {
    const data = await getTrending('week');
    weeklyMoviesState = data.results || [];
    await renderWeekly(weeklyMoviesState);
  } catch (error) {
    console.error('Weekly Trends Error:', error);
  }
}

async function renderWeekly(movies) {
  currentWeeklyMode = getWeeklyMode();

  const visibleMovies =
    currentWeeklyMode === 'mobile' ? movies.slice(0, 1) : movies.slice(0, 3);

  const markup = await Promise.all(
    visibleMovies.map(async movie => {
      const genres = await convertGenreIdsToNames(movie.genre_ids || []);

      const genreText =
        genres.length > 0 ? genres.slice(0, 2).join(', ') : 'Unknown genre';

      const year =
        movie.release_date?.slice(0, 4) ||
        movie.first_air_date?.slice(0, 4) ||
        'N/A';

      return `
        <article class="weekly-card" data-movie-id="${movie.id}">
          <img
            class="weekly-image"
            src="${getWeeklyPosterUrl(movie.poster_path)}"
            alt="${movie.title || movie.name || 'Movie poster'}"
            loading="lazy"
            decoding="async"
          />

          <div class="weekly-info">
            <h3 class="weekly-name">
              ${movie.title || movie.name || 'Untitled'}
            </h3>

            <div class="weekly-meta">
              <p class="weekly-text">
                ${genreText} | ${year}
              </p>

              ${buildWeeklyStars(movie.vote_average)}
            </div>
          </div>
        </article>
      `;
    })
  );

  weeklyMovie.innerHTML = markup.join('');
  addCardListeners();
}

function addCardListeners() {
  if (weeklyMovie.dataset.listenerAttached === 'true') return;

  weeklyMovie.addEventListener('click', event => {
    const card = event.target.closest('[data-movie-id]');
    if (!card) return;

    renderMoviePopup(card.dataset.movieId);
  });

  weeklyMovie.dataset.listenerAttached = 'true';
}

window.addEventListener('resize', () => {
  if (!weeklyMovie || weeklyMoviesState.length === 0) return;

  const nextWeeklyMode = getWeeklyMode();

  if (nextWeeklyMode !== currentWeeklyMode) {
    renderWeekly(weeklyMoviesState);
  }
});
