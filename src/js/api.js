const API_KEY = 'c488ba78584000b673e8c43a91229884';
const BASE_URL = 'https://api.themoviedb.org/3';

let genreMap = null;

export async function getTrending(timeWindow = 'day') {
  const url = `${BASE_URL}/trending/movie/${timeWindow}?api_key=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`TMDB API error: ${response.status}`);
  }

  return response.json();
}

export async function getUpcomingMovies() {
  const url = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`TMDB upcoming error: ${response.status}`);
  }

  return response.json();
}

export async function getGenres() {
  if (genreMap) return genreMap;

  const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`TMDB genres error: ${response.status}`);
  }

  const data = await response.json();

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
