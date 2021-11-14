import React from 'react';
import ReactDOM from 'react-dom';
import MediaEntry from './MediaEntry';

it('MediaEntry renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MediaEntry />, div);
});