const overlay = document.getElementById('teamModalOverlay');
const openBtn = document.getElementById('openTeamModal');
const closeBtn = document.getElementById('closeTeamModal');

if (overlay && openBtn && closeBtn) {
  const openModal = () => {
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  };

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !overlay.classList.contains('hidden')) {
      closeModal();
    }
  });
}
