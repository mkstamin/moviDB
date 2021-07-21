/* eslint-disable camelcase */
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY, API_URL } from '../../API-config';
import Cast from '../../components/Cast/Cast';
import CoverImg from '../../components/CoverImg/CoverImg';
import Loding from '../../components/Loding/Loding';
import MovieContainer from './Details.styles';

const Details = () => {
    const [movie, setMovie] = useState({});
    const [lodin, setLodin] = useState(true);
    const { slug } = useParams();

    const fatchMovie = useCallback(async () => {
        const response = await fetch(`${API_URL}movie/${slug}?api_key=${API_KEY}`);
        const data = await response.json();
        return data;
    }, [slug]);

    const fatchCasts = useCallback(async () => {
        const response = await fetch(`${API_URL}movie/${slug}/credits?api_key=${API_KEY}`);
        const data = await response.json();
        return data;
    }, [slug]);

    useEffect(() => {
        const movieWithCasts = async () => {
            const movieData = await fatchMovie();
            const casts = await fatchCasts();
            setMovie({ ...movieData, actors: casts });
            setLodin(false);
        };
        movieWithCasts();
    }, [fatchCasts, fatchMovie]);

    const { actors } = movie;

    if (lodin) return <Loding />;

    return (
        <MovieContainer>
            <CoverImg movie={movie} />
            <div className="heading">
                <h1>Actor and Actress</h1>
            </div>
            <Cast actors={actors} />
        </MovieContainer>
    );
};

export default Details;
