import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../API-config';
import { AppContext } from '../../context/context';
import noimg from '../../img/onimg.png';
import HomeBodyContent from './HomeBody.styles';

const HomeBody = () => {
    const { movies, searchItem, setPage, page } = useContext(AppContext);

    return (
        <HomeBodyContent>
            {movies.map((movie) => {
                const img = `${IMAGE_URL}w780${movie?.poster_path}`;
                return (
                    <Link key={movie.id} to={`/details/${movie.id}`}>
                        <img src={movie?.poster_path ? img : noimg} alt={movie.title} />
                        <div className="view-details">
                            <h3>show more</h3>
                        </div>
                    </Link>
                );
            })}
            {searchItem ? (
                ''
            ) : (
                <div className="btn-relod">
                    <button type="button" onClick={() => setPage(page + 1)}>
                        reload more...
                    </button>
                </div>
            )}
        </HomeBodyContent>
    );
};

export default HomeBody;
