import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../API-config';
import { AppContext } from '../context/context';
import nobanar from '../img/nobanar.jpg';
import noimg from '../img/onimg.png';
import Content from './Content/Content';
import './Home.css';
import Loding from './Loding/Loding';
import Search from './Search/Search';

const Home = () => {
    const { movies, searchItem, loding, setPage, page } = useContext(AppContext);

    const banarImg = movies[0]?.backdrop_path
        ? `${IMAGE_URL}w1280${movies[0]?.backdrop_path}`
        : nobanar;

    if (loding) return <Loding />;

    return (
        <div className="container">
            <div className="nav">
                <h3>Mks Tamin/MovieDB</h3>
                <label className="button--switch" htmlFor="demo">
                    <input type="checkbox" id="demo" />
                    <span className="slider round" />
                </label>
            </div>
            <div className="header">
                <img src={banarImg} alt="banarImg" />
                <Content />
                <Search />
            </div>
            <div className="populaer-movie">
                <h1 className="heading">Popular movies</h1>
            </div>
            <div className="main-body">
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
            </div>
        </div>
    );
};

export default Home;
