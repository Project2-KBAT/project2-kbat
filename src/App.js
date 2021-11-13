//import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./index.css";

import Movie from './components/Movie';
import Movies from './components/Movie/Movies';

import React, { useState, useRef } from 'react';

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('movies').then(response =>
            response.json().then(data => {
                setMovies(data.movies)
                //console.log(data);   [REPLACE WITH LINE ABOVE]
            })
        );
    }, []);

    const moves = ['1', '2', '3'];
    return <div>
        <div className="App">
            <Container style={{ marginTop: 40 }}>
                <MovieForm />
                <Movie moves={moves} />
                <Movie />
            </Container>
        </div>
        {moves.map(moves => (
            <Movie />
        ))}
    </div>

    /** 
      const APIURL =
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    const SEARCHAPI =
        "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
    
    const main = document.getElementById("main");
    const form = document.getElementById("form");
    const search = document.getElementById("search");
    
    // initially get fav movies
    getMovies(APIURL);
    
    async function getMovies(url) {
        const resp = await fetch(url);
        const respData = await resp.json();
    
        console.log(respData);
    
        showMovies(respData.results);
    }
    
    function showMovies(movies) {
        // clear main
        main.innerHTML = "";
    
        movies.forEach((movie) => {
            const { poster_path, title, vote_average, overview } = movie;
    
            const movieEl = document.createElement("div");
            movieEl.classList.add("movie");
    
            movieEl.innerHTML = `
                <img
                    src="${IMGPATH + poster_path}"
                    alt="${title}"
                />
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getClassByRate(
                        vote_average
                    )}">${vote_average}</span>
                </div>
                <div class="overview">
                    <h3>Overview:</h3>
                    ${overview}
                </div>
            `;
    
            main.appendChild(movieEl);
        });
    }
    
    function getClassByRate(vote) {
        if (vote >= 8) {
            return "green";
        } else if (vote >= 5) {
            return "orange";
        } else {
            return "red";
        }
    }
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        const searchTerm = search.value;
    
        if (searchTerm) {
            getMovies(SEARCHAPI + searchTerm);
    
            search.value = "";
        }
        
    });
    */
}
export default App;
