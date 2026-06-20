// TODO: Implementation
const loaderOverlay = document.querySelector('.loader-overlay');

function showLoader() {
  if (loaderOverlay) loaderOverlay.style.display = 'flex';
}

function hideLoader() {
  if (loaderOverlay) loaderOverlay.style.display = 'none';
}

const demoBtn = document.getElementById('show-loader-btn');
if (demoBtn) {
  let timer = null;

  demoBtn.addEventListener('click', () => {
    showLoader();
    clearTimeout(timer);
    timer = setTimeout(hideLoader, 2500);
  });

  if (loaderOverlay) {
    loaderOverlay.addEventListener('click', () => {
      clearTimeout(timer);
      hideLoader();
    });
  }
}
