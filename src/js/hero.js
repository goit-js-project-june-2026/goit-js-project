import { getTrending } from './api.js';
import { generateStarIconsMarkup } from './star-icons.js';
import { renderMoviePopup } from './modal.js';
import { openTrailerModal } from './trailer-modal.js';

const MOBILE_TABLET_MAX_WIDTH = 1279;
const OVERVIEW_MAX_LENGTH = 192;

const DEFAULT_HOME_HERO_OVERVIEW =
  "Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience.";

let currentHeroMovie = null;
let heroResizeRafId = null;

window.addEventListener('resize', handleHeroResize);

export async function initHero() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  try {
    const data = await getTrending('day');

    if (!data?.results) {
      currentHeroMovie = null;
      renderFallbackHero();
      return;
    }

    const movies = data.results.filter(movie => movie.backdrop_path);

    if (movies.length === 0) {
      currentHeroMovie = null;
      renderFallbackHero();
      return;
    }

    const randomIndex = Math.floor(Math.random() * movies.length);
    currentHeroMovie = movies[randomIndex];

    renderHero(currentHeroMovie);
  } catch (error) {
    console.error('Hero error:', error);
    currentHeroMovie = null;
    renderFallbackHero();
  }
}

function getAssetUrl(filename) {
  return new URL(`../img/${filename}`, import.meta.url).href;
}

function shouldTruncateOverview() {
  return window.innerWidth <= MOBILE_TABLET_MAX_WIDTH;
}

function getBackdropImageUrl(backdropPath) {
  if (!backdropPath) return '';

  if (window.innerWidth < 768) {
    return `https://image.tmdb.org/t/p/w780${backdropPath}`;
  }

  return `https://image.tmdb.org/t/p/w1280${backdropPath}`;
}

function formatOverviewText(text) {
  const overview = text?.trim() || 'No description';

  if (!shouldTruncateOverview() || overview.length <= OVERVIEW_MAX_LENGTH) {
    return overview;
  }

  return `${overview.slice(0, OVERVIEW_MAX_LENGTH).trimEnd()}...`;
}

function handleHeroResize() {
  if (heroResizeRafId) {
    cancelAnimationFrame(heroResizeRafId);
  }

  heroResizeRafId = requestAnimationFrame(() => {
    heroResizeRafId = null;

    if (currentHeroMovie) {
      renderHero(currentHeroMovie);
      return;
    }

    renderFallbackHero();
  });
}

function renderHero(movie) {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const image = getBackdropImageUrl(movie.backdrop_path);
  const title = movie.title || movie.name || 'Movie';

  hero.innerHTML = `
    <img
      class="hero-bg"
      src="${image}"
      alt="${title} background"
      fetchpriority="high"
      decoding="async"
      width="1280"
      height="660"
    />

    <div class="hero-overlay">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">${title}</h1>

          ${renderRating(movie.vote_average)}

          <p class="hero-overview">
            ${formatOverviewText(movie.overview)}
          </p>

          <div class="hero-actions">
            <button class="btn btn-primary" type="button" data-trailer-id="${movie.id}">
              Watch trailer
            </button>

            <button class="btn btn-secondary" type="button" data-movie-id="${movie.id}">
              More details
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  attachHeroEvents(movie);
}

function renderFallbackHero() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const mobile = getAssetUrl('hero-mobile.jpg');
  const mobile2x = getAssetUrl('hero-mobile@2x.jpg');
  const tablet = getAssetUrl('hero-tablet.jpg');
  const tablet2x = getAssetUrl('hero-tablet@2x.jpg');
  const desktop = getAssetUrl('hero-desktop.jpg');
  const desktop2x = getAssetUrl('hero-desktop@2x.jpg');

  hero.innerHTML = `
    <picture class="hero-bg-picture">
      <source media="(min-width: 1280px)" srcset="${desktop} 1x, ${desktop2x} 2x" />
      <source media="(min-width: 768px)" srcset="${tablet} 1x, ${tablet2x} 2x" />

      <img
        class="hero-bg"
        src="${mobile}"
        srcset="${mobile} 1x, ${mobile2x} 2x"
        alt="Cinema hero background"
        fetchpriority="high"
        decoding="async"
        width="1280"
        height="660"
      />
    </picture>

    <div class="hero-overlay">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Let's Make Your Own Cinema</h1>

          <p class="hero-overview">
            ${formatOverviewText(DEFAULT_HOME_HERO_OVERVIEW)}
          </p>

          <div class="hero-actions">
            <button class="btn btn-primary" type="button">Get started</button>
          </div>
        </div>
      </div>
    </div>
  `;

  hero.querySelector('.btn-primary')?.addEventListener('click', () => {
    window.location.href = './catalog.html';
  });
}

function renderRating(voteAverage) {
  if (!voteAverage && voteAverage !== 0) return '';

  return `
    <div class="hero-rating" aria-label="Movie rating">
      ${generateStarIconsMarkup(voteAverage, 'hero-rating-star')}
    </div>
  `;
}

function attachHeroEvents(movie) {
  const hero = document.getElementById('hero');
  if (!hero || !movie?.id) return;

  const trailerButton = hero.querySelector('[data-trailer-id]');
  const detailsButton = hero.querySelector('[data-movie-id]');

  trailerButton?.addEventListener('click', event => {
    event.preventDefault();
    openTrailerModal(movie.id);
  });

  detailsButton?.addEventListener('click', event => {
    event.preventDefault();
    renderMoviePopup(movie.id);
  });
}
