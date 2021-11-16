import React from 'react';
//import PropTypes from 'prop-types';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const RandomMovie = ({ title, poster_path, vote_average }) => (

    <div className="movie">
        <div className='movie-title'>
            <h3>{title}</h3>
        </div>
        <img src={IMG_URL + poster_path} alt={title} />
    </div>
);

export default RandomMovie;