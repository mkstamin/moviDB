import React, { useEffect, useState } from 'react';
import { POPULAR_MOVIES } from '../API-config';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, setState] = useState([]);

    console.log(state);

    const fatchMovies = async () => {
        try {
            const response = await fetch(POPULAR_MOVIES);
            const movies = await response.json();
            const results = await movies.results;
            setState(results);
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
                state,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
// eslint-disable-next-line prettier/prettier

