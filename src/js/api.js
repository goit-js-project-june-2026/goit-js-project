export const API_KEY = 'c488ba78584000b673e8c43a91229884';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_BASE = 'https://image.tmdb.org/t/p';

let genreMap = null;

async function fetchFromTMDB(url, errorMessage = 'TMDB API error') {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`${errorMessage}: ${response.status}`);
  }

  return response.json();
}

export async function getTrending(timeWindow = 'day') {
  const url = `${BASE_URL}/trending/movie/${timeWindow}?api_key=${API_KEY}`;
  return fetchFromTMDB(url, 'TMDB trending error');
}

export async function fetchTrendingMovies(page = 1) {
  const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`;
  return fetchFromTMDB(url, 'TMDB trending movies error');
}

export async function searchMovies(query, page = 1, year = '') {
  let url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
    query
  )}&page=${page}`;

  if (year) {
    url += `&primary_release_year=${encodeURIComponent(year)}`;
  }

  return fetchFromTMDB(url, 'TMDB search error');
}

export async function getUpcomingMovies(page = 1) {
  const url = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`;
  return fetchFromTMDB(url, 'TMDB upcoming error');
}

export async function getGenres() {
  if (genreMap) return genreMap;

  const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
  const data = await fetchFromTMDB(url, 'TMDB genres error');

  genreMap = data.genres.reduce((acc, genre) => {
    acc[genre.id] = genre.name;
    return acc;
  }, {});

  return genreMap;
}

export async function convertGenreIdsToNames(ids = []) {
  const genres = await getGenres();
  return ids.map(id => genres[id]).filter(Boolean);
}
