/* eslint-disable react/self-closing-comp, jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ToolBar from './Toolbar';
import NavigationMenu from './NavigationMenu';
import '../style/Detail.css';

function Detail() {
  const { movieID } = useParams();
  const [detailMovie, setDetailMovie] = useState([]);
  const textInput = useRef(null);
  const [newComment, setNewComment] = useState([]);

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

    fetch('/all_comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ movie_id: movieID }),
    }).then((response) => response.json()).then((data) => {
      const result = JSON.parse(data.all_comment);
      setNewComment(result.comment);
    });
  }, []);

  const newListComment = [...newComment];

  function addComment() {
    const newItem = textInput.current.value;
    const currentdate = new Date();
    const dateComment = currentdate.toLocaleDateString();
    const hourComment = currentdate.toLocaleTimeString();

    newListComment.push({
      name: detailMovie.username,
      date: dateComment,
      hour: hourComment,
      comment: newItem,
    });
    setNewComment(newListComment);

    textInput.current.value = '';

    fetch('/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        movie_id: movieID,
        comment_movie: newItem,
        date: dateComment,
        hour: hourComment,
      }),
    });
  }

  return (
    <div className="Deatail">
      <div className="container p-0">
        <ToolBar />

        <div className="container-fluid">
          <div className="row">
            <NavigationMenu />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 movie_list">
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

              <hr />

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
                      <textarea cols="30" ref={textInput} placeholder="Add comment..."></textarea>
                    </div>
                    <div className="btn">
                      <button className="addComment" onClick={addComment} type="submit">Post</button>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              {newComment.map((item) => (
                <div className="row">
                  <div className="col-sm-12">
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/60/000000/external-user-interface-kiranshastry-solid-kiranshastry.png" alt="" />
                        <div className="review-block-name">{item.name}</div>
                        <div className="review-block-date">
                          {item.date}
                          <br />
                          {item.hour}
                        </div>
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
                        <div className="review-block-description">{item.comment}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
