import React, { useCallback, useEffect, useState } from 'react';
import { POPULAR_MOVIES, SEARCH_BY_NAME } from '../API-config';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [searchItem, setSearchItem] = useState('');
    const [loding, setLoding] = useState(true);
    const [page, setPage] = useState(1);

    const fatchMovieByName = useCallback(async () => {
        try {
            const response = await fetch(`${SEARCH_BY_NAME}${searchItem || 1}`);
            const data = await response.json();
            setMovies(data.results);
            setLoding(false);
        } catch (error) {
            console.log('Error, To connection!');
        }
    }, [searchItem]);

    const fatchMovies = useCallback(async () => {
        try {
            const response = await fetch(`${POPULAR_MOVIES}&page=${page}`);
            const data = await response.json();
            const results = await data.results;
            if (page > 1) {
                const allMoviesBaseOnPage = movies.concat(results);
                setMovies(allMoviesBaseOnPage);
            } else {
                setMovies(results);
            }
            setLoding(false);
        } catch (error) {
            console.log('Error, To connection!');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    useEffect(() => {
        if (searchItem) {
            fatchMovieByName();

            // console.log('fatchMovieByName');
        } else {
            fatchMovies();
            // console.log('fatchMovies');
        }
    }, [fatchMovieByName, fatchMovies, searchItem]);

    // if (!loding) console.log(movies);
    console.log(page);

    return (
        <AppContext.Provider
            value={{
                movies,
                loding,
                searchItem,
                setSearchItem,
                page,
                setPage,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
// eslint-disable-next-line prettier/prettier
