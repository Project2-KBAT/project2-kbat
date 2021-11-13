/* eslint-disable quotes, dot-notation, no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../style/Detail.css';
import NavigationMenu from './NavigationMenu';

function Detail() {
  const { movieID } = useParams();
  const [detailMovie, setDetailMovie] = useState([]);

  useEffect(() => {
    fetch('/detail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id_movie: movieID }),
    }).then((response) => response.json()).then((data) => {
      const result = JSON.parse(data.detail);
      setDetailMovie(result);
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <NavigationMenu />
        <div className="movie_card" id="bright">
          <div className="info_section">
            <div className="movie_header">
              <img className="locandina" src={detailMovie.poster_path} alt="" />
              <h1>{detailMovie.title}</h1>
              <h4>{detailMovie.release_date}</h4>
              <span className="minutes">
                {detailMovie.runtime}
                min
              </span>
              <p className="type">{detailMovie.genres}</p>
            </div>
            <div className="movie_desc">
              <p className="text">{detailMovie.overview}</p>
            </div>
          </div>
          <div>
            <img className="blur_back bright_back" src={detailMovie.poster_path} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
