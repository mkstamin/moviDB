import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import HomeBody from '../../components/HomeBody/HomeBody';
import Loding from '../../components/Loding/Loding';
import Nav from '../../components/Nav/Nav';
import { AppContext } from '../../context/context';
import './Home.css';

const Home = () => {
    const { loding } = useContext(AppContext);

    if (loding) return <Loding />;

    return (
        <div className="container">
            <Nav />
            <Header />
            <div className="populaer-movie">
                <h1 className="heading">Popular movies</h1>
            </div>
            <HomeBody />
        </div>
    );
};

export default Home;
