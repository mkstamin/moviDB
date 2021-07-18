import React, { useContext } from 'react';
import { AppContext } from '../../context/context';

const Search = () => {
    const { searchItem, setSearchItem } = useContext(AppContext);

    // const fatchMovieByName = useCallback(async () => {
    //     const response = await fetch(`${SEARCH_BY_NAME}${search}`);
    //     const data = await response.json();
    //     return data;
    // }, [search]);

    // useEffect(() => {
    //     console.log(fatchMovieByName());
    // }, [fatchMovieByName]);

    return (
        <div>
            <input type="text" onChange={(e) => setSearchItem(e.target.value)} value={searchItem} />
        </div>
    );
};

export default Search;
