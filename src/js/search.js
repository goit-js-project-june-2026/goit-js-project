// TODO: Implementation
function initYearDropdown(wrapper) {
  const btn = wrapper.querySelector('.search-bar-year-btn');
  const list = wrapper.querySelector('.search-bar-year-list');
  const valueEl = wrapper.querySelector('.search-bar-year-value');
  if (!btn || !list) return;

  btn.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = wrapper.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  list.querySelectorAll('.search-bar-year-item').forEach(item => {
    item.addEventListener('click', () => {
      list.querySelectorAll('.search-bar-year-item').forEach(i => {
        i.classList.remove('search-bar-year-item--selected');
        i.removeAttribute('aria-selected');
      });
      item.classList.add('search-bar-year-item--selected');
      item.setAttribute('aria-selected', 'true');
      valueEl.textContent = item.dataset.value;
      wrapper.classList.add('has-value');
      wrapper.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('.search-bar-year').forEach(initYearDropdown);

document.addEventListener('click', () => {
  document.querySelectorAll('.search-bar-year.is-open').forEach(wrapper => {
    wrapper.classList.remove('is-open');
    wrapper
      .querySelector('.search-bar-year-btn')
      .setAttribute('aria-expanded', 'false');
  });
});

document
  .querySelectorAll('[data-field="film"] .search-bar-input')
  .forEach(input => {
    const wrap = input.closest('.search-bar-input-wrap');
    input.addEventListener('input', () => {
      wrap.classList.toggle('has-value', input.value.length > 0);
    });
  });

document.querySelectorAll('.search-bar-clear').forEach(btn => {
  btn.addEventListener('click', () => {
    const wrap = btn.closest('.search-bar-input-wrap');
    const input = wrap.querySelector('.search-bar-input');
    input.value = '';
    wrap.classList.remove('has-value');
  });
});
