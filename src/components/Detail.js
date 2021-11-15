/* eslint-disable quotes, dot-notation, no-unused-vars, react/jsx-one-expression-per-line,
react/self-closing-comp, react/style-prop-object, jsx-a11y/anchor-is-valid,
react/jsx-curly-brace-presence, react/jsx-closing-tag-location,
jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import '../style/Detail.css';
import ToolBar from './Toolbar';
import NavigationMenu from './NavigationMenu';

function Detail() {
  const { movieID } = useParams();
  const [detailMovie, setDetailMovie] = useState([]);
  const textInput = useRef(null);

  useEffect(() => {
    fetch('/detail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ movie_id: movieID }),
    }).then((response) => response.json()).then((data) => {
      const result = JSON.parse(data.detail);
      setDetailMovie(result);
    });
  }, []);

  const commentMovie = () => {
    const comment = textInput.current.value;
    fetch('/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ movie_id: movieID, comment_movie: comment }),
    }).then((response) => response.json()).then((data) => {
      console.log(data.all_comment);
    });
  };

  return (
    <div className="Deatail">
      <div className="container p-0">
        <ToolBar />

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
                    {' '}
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

            <div className="container">
              <div className="post">
                <div className="text">Thanks for rating us!</div>
              </div>
              <div className="star-widget">
                <input type="radio" name="rate" id="rate-5" />
                <label htmlFor="rate-5" className="fas fa-star"></label>
                <input type="radio" name="rate" id="rate-4" />
                <label htmlFor="rate-4" className="fas fa-star"></label>
                <input type="radio" name="rate" id="rate-3" />
                <label htmlFor="rate-3" className="fas fa-star"></label>
                <input type="radio" name="rate" id="rate-2" />
                <label htmlFor="rate-2" className="fas fa-star"></label>
                <input type="radio" name="rate" id="rate-1" />
                <label htmlFor="rate-1" className="fas fa-star"></label>
                <div>
                  <header></header>
                  <div className="textarea">
                    <textarea cols="30" ref={textInput} placeholder="Describe your experience.."></textarea>
                  </div>
                  <div className="btn">
                    <button className="commentMovie" onClick={commentMovie} type="submit">Post</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-7">
                <hr />
                <div className="review-block">
                  <div className="row">
                    <div className="col-sm-3">
                      <img src="abc.png" className="img-rounded" alt="" />
                      <div className="review-block-name"><a href="#">nktailor</a></div>
                      <div className="review-block-date">January 29, 2016<br />1 day ago</div>
                    </div>
                    <div className="col-sm-9">
                      <div className="review-block-rate">
                        <button type="button" className="btn btn-warning btn-xs" aria-label="Left Align">
                          <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                        </button>
                        <button type="button" className="btn btn-warning btn-xs" aria-label="Left Align">
                          <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                        </button>
                        <button type="button" className="btn btn-warning btn-xs" aria-label="Left Align">
                          <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                        </button>
                        <button type="button" className="btn btn-default btn-grey btn-xs" aria-label="Left Align">
                          <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                        </button>
                        <button type="button" className="btn btn-default btn-grey btn-xs" aria-label="Left Align">
                          <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                        </button>
                      </div>
                      <div className="review-block-title">this was nice in buy</div>
                      <div className="review-block-description">this was nice in buy. this was nice in buy. this was nice in buy. this was nice in buy this was nice in buy this was nice in buy this was nice in buy this was nice in buy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
