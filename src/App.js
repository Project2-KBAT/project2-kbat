/* eslint-disable react/jsx-filename-extension, jsx-a11y/media-has-caption,
jsx-a11y/anchor-is-valid, react/jsx-one-expression-per-line, react/self-closing-comp,
no-unused-vars, jsx-a11y/label-has-associated-control, react/jsx-indent, indent,
no-trailing-spaces */
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './bootstrap.min.css';
import './App.css';

function App() {
  const args = JSON.parse(document.getElementById('data').text);
  return (
    <div className="App">
      <div className="container p-0">
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0">KBAT Movies Review</a>
          <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
        </nav>

        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active">
                      <img src="https://img.icons8.com/ios/32/000000/video.png" alt="" />
                      <div>
                        <Link to="/detail">Detail</Link>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="shopping-cart"></span>
                      <i className="material-icons">card_giftcard</i> Premium Contents
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="users"></span>
                      <i className="material-icons">play_arrow</i> Live
                    </a>
                  </li>
                </ul>

                <hr />

                <ul className="nav flex-column mb-2">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="file-text"></span>
                      <i className="material-icons">receipt</i> Subscriptions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="file-text"></span>
                      <i className="material-icons">perm_media</i> Library
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="file-text"></span>
                      <i className="material-icons">link</i> Linked Videos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="file-text"></span>
                      <i className="material-icons">watch_later</i> Watch Later
                    </a>
                  </li>
                </ul>

                <hr />

                <ul className="nav flex-column mb-2">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="file-text"></span>
                      <i className="material-icons">settings</i> Settings
                    </a>
                  </li>
                  <li className="nav-item">
                    <img src="https://img.icons8.com/ios/32/000000/logout-rounded--v1.png" alt="" />
                    <form action="/signout" method="POST">
                      <button className="signOut" type="submit">Sign out</button>
                    </form>
                  </li>
                </ul>
              </div>
            </nav>

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 movie_list">
              <div className="pt-8 pb-2 mb-3 border-bottom">
                <div className="row">
                  <h1>Movies</h1>
                </div>
                <div className="row">
                  {args.result.map((item) => (
                    <div className="card-view">
                      <div className="card-header">
                        <img src={item.poster_path} alt="" />
                        <div className="card-header-icon">
                          <a href="#">
                            <i className="material-icons header-icon">play_arrow</i>
                          </a>
                        </div>
                      </div>
                      <div className="card-movie-content">
                        <div className="card-movie-content-head">
                          <a href="#">
                            <h3 className="card-movie-title">{item.title}</h3>
                          </a>
                          <div className="ratings"><span>8.8</span>/10</div>
                        </div>
                        <div className="card-movie-info">
                          <div className="movie-running-time">
                            <label>Last update</label>
                            <span>Sun 8 Sept - 10:00PM</span>
                          </div>
                          <div className="movie-running-time">
                            <label>Running time</label>
                            <span>2hr 09min</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
