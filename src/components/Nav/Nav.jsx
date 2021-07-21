import React from 'react';
import NavContainer from './Nav.styles';

const Nav = () => (
    <NavContainer>
        <h3>Mks Tamin/MovieDB</h3>
        <label className="button--switch" htmlFor="demo">
            <input type="checkbox" id="demo" />
            <span className="slider round" />
        </label>
    </NavContainer>
);

export default Nav;
