import React from 'react';
//import PropTypes from 'prop-types';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const RandomMovie = ({ title, poster_path, vote_average, overview }) => (

    <div className="movie">
        <img src={IMG_URL + poster_path} alt={title} />
        <div className="movie-info">
            <h3>{title}</h3>
            <span>{vote_average}</span>
        </div>

        <div className="movie-overview">
            <h2>Overview:</h2>
            <p>{overview}</p>
        </div>
    </div>
);

export default RandomMovie;