import React, { useContext } from 'react';
import { AppContext } from '../../context/context';
import SearchContainer from './Search.styles';

const Search = () => {
    const { searchItem, setSearchItem } = useContext(AppContext);

    return (
        <SearchContainer>
            <input
                type="text"
                onChange={(e) => setSearchItem(e.target.value)}
                value={searchItem}
                placeholder="Search you movie....."
            />
        </SearchContainer>
    );
};

export default Search;
