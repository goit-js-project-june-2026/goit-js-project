// TODO: Implementation
const loaderOverlay = document.querySelector('.loader-overlay');

export function showLoader() {
  if (loaderOverlay) loaderOverlay.style.display = 'flex';
}

export function hideLoader() {
  if (loaderOverlay) loaderOverlay.style.display = 'none';
}
