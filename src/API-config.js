const URL = 'https://api.themoviedb.org/3/';

const API_KEY = process.env.REACT_APP_API_KEY;

const POPULAR_MOVIES = `${URL}movie/popular?api_key=${API_KEY}&language=en-US`;

const SEARCH_BY_NAME = `${URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;

export { POPULAR_MOVIES, SEARCH_BY_NAME };
// eslint-disable-next-line prettier/prettier

