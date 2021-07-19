import React, { useContext } from 'react';
import { AppContext } from '../../context/context';
import './Search.css';

const Search = () => {
    const { searchItem, setSearchItem } = useContext(AppContext);

    return (
        <div className="search">
            <input
                type="text"
                onChange={(e) => setSearchItem(e.target.value)}
                value={searchItem}
                placeholder="Search you movie....."
            />
        </div>
    );
};

export default Search;
