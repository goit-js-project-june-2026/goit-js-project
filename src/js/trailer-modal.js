import { API_KEY, BASE_URL } from './api.js';

const modal = document.querySelector('[data-trailer-modal]');
const overlay = document.querySelector('[data-trailer-overlay]');
const closeButton = document.querySelector('[data-trailer-close]');
const iframe = document.querySelector('[data-trailer-frame]');
const status = document.querySelector('[data-trailer-status]');
const error = document.querySelector('[data-trailer-error]');

let activeRequest = 0;

function selectTrailer(videos = []) {
  const youtubeVideos = videos.filter(
    video => video.site === 'YouTube' && /^[\w-]{6,20}$/.test(video.key || '')
  );

  return (
    youtubeVideos.find(video => video.type === 'Trailer' && video.official) ||
    youtubeVideos.find(video => video.type === 'Trailer') ||
    youtubeVideos.find(video => video.type === 'Teaser') ||
    youtubeVideos[0]
  );
}

async function fetchTrailer(movieId) {
  const response = await fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`);

  if (!response.ok) {
    throw new Error('Trailer could not be loaded');
  }

  const data = await response.json();
  return selectTrailer(data?.results);
}

function handleEscClose(event) {
  if (event.key === 'Escape') closeTrailerModal();
}

function addCloseListeners() {
  document.addEventListener('keydown', handleEscClose);
  overlay?.addEventListener('click', closeTrailerModal);
  closeButton?.addEventListener('click', closeTrailerModal);
}

function removeCloseListeners() {
  document.removeEventListener('keydown', handleEscClose);
  overlay?.removeEventListener('click', closeTrailerModal);
  closeButton?.removeEventListener('click', closeTrailerModal);
}

function setStatus(message) {
  if (!status) return;
  status.textContent = message;
  status.hidden = false;
  if (error) error.hidden = true;
}

function showTrailerError() {
  if (status) status.hidden = true;
  if (error) error.hidden = false;
}

function openTrailerShell() {
  if (!modal || !iframe) return false;

  modal.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
  iframe.hidden = true;
  iframe.src = '';
  if (error) error.hidden = true;
  setStatus('Loading trailer...');
  addCloseListeners();
  return true;
}

export function closeTrailerModal() {
  if (!modal || !iframe) return;

  activeRequest += 1;
  modal.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
  iframe.src = '';
  iframe.hidden = true;
  if (error) error.hidden = true;
  removeCloseListeners();
}

export async function openTrailerModal(movieId) {
  if (!movieId || !openTrailerShell()) return;

  const requestId = ++activeRequest;

  try {
    const trailer = await fetchTrailer(movieId);
    if (requestId !== activeRequest || modal?.classList.contains('is-hidden')) return;

    if (!trailer) {
      showTrailerError();
      return;
    }

    status.hidden = true;
    iframe.title = `${trailer.name || 'Movie'} trailer`;
    iframe.src = `https://www.youtube-nocookie.com/embed/${trailer.key}?autoplay=1&rel=0`;
    iframe.hidden = false;
  } catch (error) {
    if (requestId !== activeRequest) return;
    console.error(error);
    showTrailerError();
  }
}
