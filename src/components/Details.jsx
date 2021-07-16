import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
    const { slug } = useParams();

    return (
        <div>
            <h1>This is Detail Page: {slug}</h1>
            <p>Hello, from the details page</p>
            <Link to="/">
                <button type="button">Back to Home</button>
            </Link>
        </div>
    );
};

export default Details;
