import React, { useContext } from 'react';
import { IMAGE_URL } from '../../API-config';
import { AppContext } from '../../context/context';
import nobanar from '../../img/nobanar.jpg';
import Content from '../Content/Content';
import Search from '../Search/Search';
import HeaderContainer from './Header.styles';

const Header = () => {
    const { movies } = useContext(AppContext);

    const banarImg = movies[0]?.backdrop_path
        ? `${IMAGE_URL}w1280${movies[0]?.backdrop_path}`
        : nobanar;
    return (
        <HeaderContainer>
            <img src={banarImg} alt="banarImg" />
            <Content />
            <Search />
        </HeaderContainer>
    );
};

export default Header;
