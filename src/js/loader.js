const loaderOverlay = document.querySelector('.loader-overlay');

export function showLoader() {
  if (!loaderOverlay) return;

  loaderOverlay.classList.remove('is-hidden');
}

export function hideLoader() {
  if (!loaderOverlay) return;

  loaderOverlay.classList.add('is-hidden');
}

hideLoader();
