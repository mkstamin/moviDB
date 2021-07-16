/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { AppContext } from '../context/context';
import './Home.css';

const Home = () => {
    const { state } = useContext(AppContext);
    console.log(state[1]);
    return (
        <div className="container">
            <div className="nav">
                <h3>Mks Tamin</h3>
                <label className="button--switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                </label>
            </div>
            <div className="header">Header</div>
            <div className="main-body">
                {state.map((movie) => (
                    <div key={movie.id}>{movie.title}</div>
                ))}
                <div className="btn-relod">
                    <button type="button">reload more...</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
