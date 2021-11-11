import React from 'react';
import PropTypes from 'prop-types';

const IMG_URL_BASE = 'https://image.tmdb.org/t/p';

function MediaEntry({ title, posterPath }) {
  return (
    <>
      <h1>{title}</h1>
      <img src={IMG_URL_BASE + posterPath} alt="" />
    </>
  );
}
MediaEntry.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
};

export default MediaEntry;
