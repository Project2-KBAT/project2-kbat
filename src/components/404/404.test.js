import React from 'react';
import ReactDOM from 'react-dom';
import 404 from './404';

it('404 renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(< 404 />, div);
});