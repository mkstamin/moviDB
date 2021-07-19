/* eslint-disable camelcase */
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_KEY, API_URL, IMAGE_URL } from '../API-config';
import nobanar from '../img/nobanar.jpg';
import noimg from '../img/onimg.png';
import './Details.css';
import Loding from './Loding/Loding';

const Details = () => {
    const [movie, setMovie] = useState({});
    const [lodin, setLodin] = useState(true);
    const { slug } = useParams();

    const urlMovie = `${API_URL}movie/${slug}?api_key=${API_KEY}`;
    const urlCasts = `${API_URL}movie/${slug}/credits?api_key=${API_KEY}`;

    const fatchMovie = useCallback(async () => {
        const response = await fetch(urlMovie);
        const data = await response.json();
        return data;
    }, [urlMovie]);

    const fatchCasts = useCallback(async () => {
        const response = await fetch(urlCasts);
        const data = await response.json();
        return data;
    }, [urlCasts]);

    useEffect(() => {
        const movieWithCasts = async () => {
            const movieData = await fatchMovie();
            const casts = await fatchCasts();
            setMovie({ ...movieData, actors: casts });
            setLodin(false);
        };
        movieWithCasts();
    }, [fatchCasts, fatchMovie]);

    const { vote_average, title, tagline, spoken_languages, genres, vote_count, actors } = movie;

    if (lodin) return <Loding />;

    return (
        <div className="movie">
            <div className="movie__cover-img">
                <img
                    src={movie.backdrop_path ? `${IMAGE_URL}w1280${movie.backdrop_path}` : nobanar}
                    alt={title}
                />

                <div className="movie__details">
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
                </div>
            </div>
            <div className="heading">
                <h1>Actor and Actress</h1>
            </div>
            <div className="movie__actors">
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
            </div>
        </div>
    );
};

export default Details;
