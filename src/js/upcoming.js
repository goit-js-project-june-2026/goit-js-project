import { getUpcomingMovies, convertGenreIdsToNames } from './api.js';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
const LIBRARY_KEY = 'my-library';

const refs = {
  section: document.querySelector('.upcoming'),
  status: document.querySelector('.upcoming__status'),
  wrapper: document.querySelector('.upcoming__wrapper'),
  image: document.querySelector('.movie-img'),
  title: document.querySelector('.movie-title'),
  date: document.querySelector('.upcoming-date'),
  vote: document.querySelector('.vote'),
  popularity: document.querySelector('.popularity'),
  genre: document.querySelector('.genre'),
  overview: document.querySelector('.overview'),
  button: document.querySelector('.upcoming .btn'),
};

let currentMovie = null;

function getLibrary() {
  return JSON.parse(localStorage.getItem(LIBRARY_KEY)) || [];
}

function saveLibrary(movies) {
  localStorage.setItem(LIBRARY_KEY, JSON.stringify(movies));
}

function isMovieInLibrary(id) {
  return getLibrary().some(movie => movie.id === id);
}

function updateButtonText() {
  if (!currentMovie || !refs.button) return;

  refs.button.textContent = isMovieInLibrary(currentMovie.id)
    ? 'Remove from My Library'
    : 'Add to my Library';
}

function toggleLibrary() {
  if (!currentMovie) return;

  const library = getLibrary();
  const exists = isMovieInLibrary(currentMovie.id);

  if (exists) {
    const updatedLibrary = library.filter(
      movie => movie.id !== currentMovie.id
    );
    saveLibrary(updatedLibrary);
  } else {
    saveLibrary([...library, currentMovie]);
  }

  updateButtonText();
}

function getThisMonthMovies(movies) {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  return movies.filter(movie => {
    if (!movie.release_date) return false;

    const releaseDate = new Date(movie.release_date);

    return (
      releaseDate.getMonth() === currentMonth &&
      releaseDate.getFullYear() === currentYear
    );
  });
}

function getRandomMovie(movies) {
  return movies[Math.floor(Math.random() * movies.length)];
}

function showStatus(message) {
  if (!refs.status || !refs.wrapper) return;

  refs.status.textContent = message;
  refs.status.classList.remove('is-hidden');
  refs.wrapper.classList.add('is-hidden');
}

function hideStatus() {
  if (!refs.status || !refs.wrapper) return;

  refs.status.classList.add('is-hidden');
  refs.wrapper.classList.remove('is-hidden');
}

function formatVote(movie) {
  const voteAverage = movie.vote_average
    ? movie.vote_average.toFixed(1)
    : '0.0';
  const voteCount = movie.vote_count || 0;

  return ` ${voteAverage} / ${voteCount} `;
}

function getUpcomingImageUrl(backdropPath, size = 'w500') {
  if (!backdropPath) {
    return './src/img/no-poster.png';
  }

  return `${IMAGE_BASE_URL}/${size}${backdropPath}`;
}

async function renderUpcomingMovie(movie) {
  const genres = await convertGenreIdsToNames(movie.genre_ids);

  currentMovie = {
    ...movie,
    genres,
  };

  if (refs.image) {
    refs.image.src = getUpcomingImageUrl(movie.backdrop_path, 'w500');

    refs.image.srcset = `
      ${getUpcomingImageUrl(movie.backdrop_path, 'w500')} 500w,
      ${getUpcomingImageUrl(movie.backdrop_path, 'w780')} 780w,
      ${getUpcomingImageUrl(movie.backdrop_path, 'w1280')} 1280w
    `;

    refs.image.sizes =
      '(max-width: 767px) 280px, (max-width: 1279px) 704px, 805px';

    refs.image.alt = movie.title || 'movie backdrop';
    refs.image.loading = 'eager';
    refs.image.decoding = 'async';
    refs.image.fetchPriority = 'high';
  }

  if (refs.title) {
    refs.title.textContent = movie.title || 'Unknown title';
  }

  if (refs.date) {
    refs.date.textContent = movie.release_date || 'Unknown';
  }

  if (refs.vote) {
    refs.vote.innerHTML = formatVote(movie);
  }

  if (refs.popularity) {
    refs.popularity.textContent = movie.popularity
      ? movie.popularity.toFixed(1)
      : '0.0';
  }

  if (refs.genre) {
    refs.genre.textContent = genres.length ? genres.join(', ') : 'Unknown';
  }

  if (refs.overview) {
    refs.overview.textContent = movie.overview || 'No overview available.';
  }

  updateButtonText();
  hideStatus();
}

export async function initUpcoming() {
  if (!refs.section) return;

  try {
    const data = await getUpcomingMovies();
    const movies = data.results || [];
    const thisMonthMovies = getThisMonthMovies(movies);

    if (!thisMonthMovies.length) {
      showStatus('No upcoming movie is available right now.');
      return;
    }

    const randomMovie = getRandomMovie(thisMonthMovies);

    await renderUpcomingMovie(randomMovie);

    if (refs.button) {
      refs.button.addEventListener('click', toggleLibrary);
    }
  } catch (error) {
    console.error('Upcoming error:', error);
    showStatus('No upcoming movie is available right now.');
  }
}

document.addEventListener('DOMContentLoaded', initUpcoming);
