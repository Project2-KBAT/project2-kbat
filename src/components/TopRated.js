/* eslint-disable react/jsx-filename-extension, jsx-a11y/media-has-caption,
jsx-a11y/anchor-is-valid, react/jsx-one-expression-per-line, react/self-closing-comp,
no-unused-vars, jsx-a11y/label-has-associated-control, react/jsx-indent, indent,
no-trailing-spaces */
import React from 'react';
import '../bootstrap.min.css';
import '../App.css';
import NavigationMenu from './NavigationMenu';

function TopRated() {
    const args = JSON.parse(document.getElementById('top_rated_data').text);
    return (
        <div className="TopRated">
            <div className="container p-0">
                <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0">KBAT Movies Review</a>
                    <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                </nav>

                <div className="container-fluid">
                    <div className="row">
                        <NavigationMenu />

                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 movie_list">
                            <div className="pt-8 pb-2 mb-3 border-bottom">
                                <div className="row">
                                    <h1>Top Rated Movies</h1>
                                </div>
                                <div className="row">
                                    {args.top_rated_movie.map((item) => (
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
                                                    <div className="ratings"><span>{item.vote_average}</span>/10</div>
                                                </div>
                                                <div className="card-movie-info">
                                                    <div className="movie-running-time">
                                                        <label>Release Date</label>
                                                        <span>{item.release_date}</span>
                                                    </div>
                                                    <div className="movie-running-time">
                                                        <label>Popularity</label>
                                                        <span>{item.popularity}</span>
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

export default TopRated;
