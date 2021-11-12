/* eslint-disable indent, react/jsx-indent */
import React from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
    const { movieName } = useParams();

    return (
        <div>
            {movieName}
        </div>
    );
}

export default Detail;
