export function renderCustomPagination(
  currentPage,
  totalPages,
  onPageChange
) {
  const container = document.getElementById(
    'tui-pagination-container'
  );

  if (!container) return;

  container.innerHTML = '';

  const prevBtn = document.createElement('button');
  prevBtn.classList.add('tui-page-btn', 'tui-prev');

  if (currentPage === 1) {
    prevBtn.disabled = true;
  }

  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  });

  container.appendChild(prevBtn);

  const pages = getPages(currentPage, totalPages);

  pages.forEach(page => {
    if (page === '...') {
      const dots = document.createElement('span');
      dots.classList.add('pagination-dots');
      dots.textContent = '...';
      container.appendChild(dots);
      return;
    }

    const btn = document.createElement('button');

    btn.classList.add('tui-page-btn');

    if (page === currentPage) {
      btn.classList.add('tui-is-selected');
    }

    btn.textContent = String(page).padStart(2, '0');

    btn.addEventListener('click', () => {
      onPageChange(page);
    });

    container.appendChild(btn);
  });

  const nextBtn = document.createElement('button');
  nextBtn.classList.add('tui-page-btn', 'tui-next');

  if (currentPage === totalPages) {
    nextBtn.disabled = true;
  }

  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  });

  container.appendChild(nextBtn);
}

function getPages(current, total) {
  if (total <= 5) {
    return Array.from(
      { length: total },
      (_, i) => i + 1
    );
  }

  if (current <= 5) {
    return [1, 2, 3, 4, 5,'...', 20];
  }

  if (current >= total - 2) {
    return [
      1,
      '...',
      total - 2,
      total - 1,
      total,
    ];
  }

  return [
    1,
    '...',
    current - 1,
    current,
    current + 1,
    '...',
    total,
  ];
}