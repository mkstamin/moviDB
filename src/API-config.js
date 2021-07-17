const API_URL = 'https://api.themoviedb.org/3/';
const IMAGE_URL = 'http://image.tmdb.org/t/p/';

const API_KEY = process.env.REACT_APP_API_KEY;

const POPULAR_MOVIES = `${API_URL}movie/popular?api_key=${API_KEY}&language=de-DE`;
const SEARCH_BY_NAME = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;

export { POPULAR_MOVIES, SEARCH_BY_NAME, IMAGE_URL, API_KEY, API_URL };

// w92, w154, w185, w342, w300, w500,  w780, w1280

// eslint-disable-next-line prettier/prettier

