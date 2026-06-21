import { generateStarIconsMarkup } from './star-icons';
import { fetchTrendingMovies, searchMovies } from './api.js';
import { renderCustomPagination } from './pagination.js';

const GENRES = {28: 'Action',

12: 'Adventure',

16: 'Animation',

35: 'Comedy',

80: 'Crime',

18: 'Drama',

10751: 'Family',

14: 'Fantasy',

36: 'History',

27: 'Horror',

10402: 'Music',

9648: 'Mystery',

10749: 'Romance',

878: 'Science Fiction',

53: 'Thriller',

10752: 'War',

37: 'Western'};
const MY_API_KEY = '816fa3330405a8532dbdbe128c87b746';
const movieGrid = document.getElementById('movieGrid');

function renderCatalog(movies) {
    movieGrid.className = 'cat-movie-grid';
    movieGrid.innerHTML = movies.map(movie => {
        const year = movie.release_date ? movie.release_date.slice(0, 4) : 'N/A';
        const stars = generateStarIconsMarkup(movie.vote_average, 'cat-movie-star');
        const genres = getGenreNames(movie.genre_ids);
        
        return `
        <li class="cat-movie-card">
            <img class="cat-movie-poster" src="${movie.poster_path ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path : ''}" alt="${movie.title}">
            <div class="cat-movie-info">
                <h3 class="cat-movie-title">${movie.title}</h3>
                <div class="cat-movie-meta">
                    <div class="cat-movie-text">
                        <span class="cat-movie-genre">${genres}</span>
                        <span class="cat-movie-year"> | ${year}</span>
                    </div>
                    <div class="cat-movie-stars">${stars}</div>
                </div>
            </div>
        </li>
        `;
    }).join('');
}

function getGenreNames(ids) {
    if (!ids || ids.length === 0) return 'Unknown';
    return ids.slice(0, 2).map(id => GENRES[id] || 'Film').join(', ');
}

async function loadPage(page, query = null) {
    let data;
    if (query) {
        data = await searchMovies(query, page, MY_API_KEY);
    } else {
        data = await fetchTrendingMovies(page, MY_API_KEY);
    }

    renderCatalog(data.results);
    
    const totalPages = Math.min(data.total_pages, 500);

renderCustomPagination(page, totalPages, (newPage) => {
    loadPage(newPage, query);
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
}

initCatalog();
async function initCatalog() {
    loadPage(1); 
}

const testForm = document.getElementById('testSearchForm');
const testInput = document.getElementById('testSearchInput');

testForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = testInput.value.trim();
    if (!query) return;

    loadPage(1, query);
});