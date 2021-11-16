import React from 'react';
import PropTypes from 'prop-types';

const IMG_URL_BASE = 'https://image.tmdb.org/t/p/w500';

function MediaEntry({ title, name, pp }) {
    // pp is short for poster path
    return (
        <>
            <h1>{title}</h1>
            <h1>{name}</h1>
            <img src={IMG_URL_BASE + pp} alt="" />
        </>
    );
}
MediaEntry.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pp: PropTypes.string.isRequired,
};

export default MediaEntry;
