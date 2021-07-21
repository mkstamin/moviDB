/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import MovieDetailsContainer from './MovieDetails.styles';

const MovieDetails = ({ details }) => {
    const { title, vote_average, tagline, spoken_languages, genres, vote_count } = details;
    return (
        <MovieDetailsContainer>
            <h2>Name: {title}</h2>
            <h4>
                IMDB: {vote_average} <span>({vote_count})</span>
            </h4>
            <h3>Tag Line: {tagline}</h3>
            <p>
                Language:{' '}
                {spoken_languages.map((language, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <span key={index}>{language.english_name}, </span>
                ))}
            </p>
            <p>
                Genres:{' '}
                {genres.map((genre) => (
                    <span key={genre.id}>{genre.name}, </span>
                ))}
            </p>
            <br />
            <Link to="/">
                <button type="button">Back to Home</button>
            </Link>
        </MovieDetailsContainer>
    );
};

export default MovieDetails;
