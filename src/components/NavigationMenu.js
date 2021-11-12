/* eslint-disable react/jsx-filename-extension, jsx-a11y/media-has-caption,
jsx-a11y/anchor-is-valid, react/jsx-one-expression-per-line, react/self-closing-comp,
no-unused-vars, jsx-a11y/label-has-associated-control, react/jsx-indent, indent,
no-trailing-spaces */
import React from 'react';
import { Link } from 'react-router-dom';
import '../bootstrap.min.css';
import '../App.css';

function NavigationMenu() {
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link">
                            <img src="https://img.icons8.com/ios/32/000000/video.png" alt="" />
                            <div>
                                <Link to="/index">Popular Movies</Link>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                            <img src="https://img.icons8.com/external-prettycons-lineal-prettycons/32/000000/external-movie-multimedia-prettycons-lineal-prettycons-1.png" alt="" />
                            <div>
                                <Link to="/top_rated">Top Rated Movies</Link>
                            </div>
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
    );
}

export default NavigationMenu;
