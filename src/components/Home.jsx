/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../API-config';
import { AppContext } from '../context/context';
import './Home.css';
import Loding from './Loding/Loding';
import Search from './Search/Search';

const Home = () => {
    const { movies, loding } = useContext(AppContext);

    const banarImg = `${IMAGE_URL}w1280${movies[0]?.backdrop_path}`;

    if (loding) return <Loding />;

    return (
        <div className="container">
            <div className="nav">
                <h3>Mks Tamin</h3>
                <label className="button--switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                </label>
            </div>
            <div className="header">
                <img src={banarImg} alt="banarImg" />
            </div>
            <Search />
            <div className="main-body">
                {movies.map((movie) => {
                    const img = `${IMAGE_URL}w780${movie?.poster_path}`;
                    return (
                        <Link key={movie.id} to={`/details/${movie.id}`}>
                            <img src={img} alt={movie.title} />
                        </Link>
                    );
                })}
                <div className="btn-relod">
                    <button type="button">reload more...</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
