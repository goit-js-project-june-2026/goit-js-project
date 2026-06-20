function getStarAssetUrl(filename) {
  return new URL(`../img/${filename}`, import.meta.url).href;
}

export function generateStarIconsMarkup(voteAverage, className = 'star-icon') {
  const rating = Math.round(((voteAverage || 0) / 2) * 2) / 2;
  const maxStars = 5;
  const fullStarCount = Math.floor(rating);
  const halfStarCount = rating - fullStarCount >= 0.5 ? 1 : 0;
  const emptyStarCount = maxStars - fullStarCount - halfStarCount;

  let html = '';

  for (let i = 0; i < fullStarCount; i++) {
    html += `<img src="${getStarAssetUrl('full.svg')}" alt="full star" class="${className}" />`;
  }

  if (halfStarCount > 0) {
    html += `<img src="${getStarAssetUrl('half.svg')}" alt="half star" class="${className}" />`;
  }

  for (let i = 0; i < emptyStarCount; i++) {
    html += `<img src="${getStarAssetUrl('empty.svg')}" alt="empty star" class="${className}" />`;
  }

  return html;
}
