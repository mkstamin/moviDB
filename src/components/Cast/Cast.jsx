/* eslint-disable camelcase */
import React from 'react';
import { IMAGE_URL } from '../../API-config';
import noimg from '../../img/onimg.png';
import CastContainer from './Cast.styles';

const Cast = ({ actors }) => (
    <CastContainer>
        {actors?.cast.map((actor) => {
            const { id, name, profile_path } = actor;
            return (
                <div key={id} className="actor">
                    <h4 className="actor--name">{name}</h4>
                    <img
                        src={profile_path ? `${IMAGE_URL}w300${profile_path}` : noimg}
                        alt={name}
                    />
                </div>
            );
        })}
    </CastContainer>
);

export default Cast;
