/* eslint-disable camelcase */
import React from 'react';
import { IMAGE_URL } from '../../API-config';
import nobanar from '../../img/nobanar.jpg';
import MovieDetails from '../MovieDetails/MovieDetails';
import CoverImgContainer from './CoverImg.styles';

const CoverImg = ({ movie }) => {
    const { vote_average, title, tagline, spoken_languages, genres, vote_count, backdrop_path } =
        movie;
    return (
        <CoverImgContainer>
            <img src={backdrop_path ? `${IMAGE_URL}w1280${backdrop_path}` : nobanar} alt={title} />

            <MovieDetails
                details={{ vote_average, tagline, spoken_languages, genres, vote_count, title }}
            />
        </CoverImgContainer>
    );
};

export default CoverImg;
