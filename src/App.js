import React from 'react';
import { Link } from 'react-router-dom';
import './bootstrap.min.css';
import './App.css';
import NavigationMenu from './components/NavigationMenu';

function App() {
  const args = JSON.parse(document.getElementById('data').text);
  return (
    <div className="App">
      <div className="container p-0">
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <div className="navbar-brand col-sm-3 col-md-2 mr-0">KBAT Movies Review</div>
          <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
        </nav>

        <div className="container-fluid">
          <div className="row">
            <NavigationMenu />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 movie_list">
              <div className="pt-8 pb-2 mb-3 border-bottom">
                <div className="row">
                  <h1>Popular Movies</h1>
                </div>
                <div className="row">
                  {args.popular_movie.map((item) => (
                    <div className="card-view">
                      <div className="card-header">
                        <Link to={`/detail/${item.title}`}><img src={item.poster_path} alt="" /></Link>
                      </div>
                      <div className="card-movie-content">
                        <div className="card-movie-content-head">
                          <h3 className="card-movie-title">{item.title}</h3>
                          <div className="ratings">
                            <span>{item.vote_average}</span>
                            /10
                          </div>
                        </div>
                        <div className="card-movie-info">
                          <div className="movie-running-time">
                            <div className="text">Release Date</div>
                            <span>{item.release_date}</span>
                          </div>
                          <div className="movie-running-time">
                            <div className="text">Popularity</div>
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

export default App;
