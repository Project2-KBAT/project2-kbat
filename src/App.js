require('dotenv').config();
import React, { useState, useEffect } from 'react';
import './App.css';
import RandomMovie from './component/RandomMovie';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY_ = process.env.REACT_APP_API_KEY;
const movieId = Math.floor((Math.random() * 897398) + 1); //number of movies currently in database
const API_URL = BASE_URL + movieId + '?api_key=' + API_KEY_ + '&language=en-US';


function App() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(API_URL).then((response) => response.json()).then((data) => {
      console.log(data);
      setMovie(data);
    });
  }, []);

  return (
    <div className="movie-container">
      <RandomMovie {...movie} />
    </div>
  );
}


export default App;
