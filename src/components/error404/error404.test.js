import React from 'react';
import ReactDOM from 'react-dom';
import error404 from './error404';

it('error404 renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(< error404 />, div);
});