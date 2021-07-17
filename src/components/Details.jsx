/* eslint-disable camelcase */
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_KEY, API_URL, IMAGE_URL } from '../API-config';
import './Details.css';

const Details = () => {
    const [movie, setMovie] = useState({});
    const [lodin, setLodin] = useState(true);
    const { slug } = useParams();

    const banarImg = `${IMAGE_URL}w1280${movie.backdrop_path}`;
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

    // eslint-disable-next-line no-unused-vars
    const { vote_average, title, tagline, spoken_languages, genres, vote_count, actors } = movie;

    console.log(actors?.cast[0]);
    // const listOfActors =

    return (
        <>
            {lodin ? (
                <div>
                    <h1>Loding.........</h1>
                </div>
            ) : (
                <div className="movie">
                    <div className="movie__cover-img">
                        <img src={banarImg} alt={title} />

                        <div className="movie__details">
                            <h2>Name: {title}</h2>
                            <h4>
                                IMDB: {vote_average} <span>({vote_count})</span>
                            </h4>
                            <h3>Tag Line: {tagline}</h3>
                            <p>
                                Language:{' '}
                                {spoken_languages.map((i, index) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <span key={index}>{i.english_name}, </span>
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
                                    <img src={`${IMAGE_URL}w300${profile_path}`} alt={name} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

export default Details;
