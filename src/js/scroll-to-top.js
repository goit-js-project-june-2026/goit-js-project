// TODO: Implementation
const scrollBtn = document.querySelector('.scroll-up');

if (scrollBtn) {
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('is-visible', window.scrollY > 300);
  }, { passive: true });
}
