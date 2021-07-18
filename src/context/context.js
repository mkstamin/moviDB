import React, { useCallback, useEffect, useState } from 'react';
import { POPULAR_MOVIES, SEARCH_BY_NAME } from '../API-config';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [searchItem, setSearchItem] = useState('');
    const [loding, setLoding] = useState(true);

    const fatchMovieByName = useCallback(async () => {
        try {
            const response = await fetch(`${SEARCH_BY_NAME}${searchItem}`);
            const data = await response.json();
            setMovies(data.results);
            setLoding(false);
        } catch (error) {
            console.log('Error, To connection!');
        }
    }, [searchItem]);

    const fatchMovies = async () => {
        try {
            const response = await fetch(POPULAR_MOVIES);
            const data = await response.json();
            const results = await data.results;
            setMovies(results);
            setLoding(false);
        } catch (error) {
            console.log('Error, To connection!');
        }
    };

    useEffect(() => {
        if (searchItem) {
            fatchMovieByName();
            console.log('fatchMovieByName');
        } else {
            fatchMovies();
            console.log('fatchMovies');
        }
    }, [fatchMovieByName, searchItem]);

    if (!loding) console.log(movies);

    return (
        <AppContext.Provider
            value={{
                movies,
                loding,
                searchItem,
                setSearchItem,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
// eslint-disable-next-line prettier/prettier

