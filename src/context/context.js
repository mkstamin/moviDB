import React, { useEffect, useState } from 'react';
import { POPULAR_MOVIES } from '../API-config';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    const fatchMovies = async () => {
        try {
            const response = await fetch(POPULAR_MOVIES);
            const data = await response.json();
            const results = await data.results;
            setMovies(results);
        } catch (error) {
            console.log('Error, To connection!');
        }
    };

    useEffect(() => {
        fatchMovies();
    }, []);

    return (
        <AppContext.Provider
            value={{
                movies,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
// eslint-disable-next-line prettier/prettier

