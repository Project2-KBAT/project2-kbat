/* eslint-disable react/jsx-indent */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/sort-comp */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React from 'react';
import { List, Header } from 'semantic-ui-react';

export const Movies = ({ movies }) => (
    <List>
        {movies.map((movie) => (
            <List.Item key={movie.title}>
                <Header>{movie.title}</Header>
            </List.Item>
        ))}
    </List>
    // <div> {movies.length} </div>
);
