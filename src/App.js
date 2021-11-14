//import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./index.css";

import './styles/main.css';
import Routes from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Movie from './components/Movie';
import Movies from './components/Movie/Movies';

import React, { useState, useRef } from 'react';

//class App extends Component {

/** 
function App {
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
            <Container style={{ marginTop: 60 }}>
                <MovieForm />
                <Movie moves={moves} />
                <Movie />
            </Container>
        </div>
        {moves.map(moves => (
            <Movie />
        ))}
    </div>

}
*/
function App {

    const [query, setQuery] = useState('');
    const [mediaEntries, setMediaEntries] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: query }),
        }).then((response) => response.json()).then((data) => {
            setMediaEntries(data.results);
        });
    };

    constructor() {
        super();
        this.state = {
            appName: "MovieDB App",
            home: false
        }
    }

    render() {
        return (

            <div className="off-canvas-wrapper">
                <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
                    <>
                        <form onSubmit={handleSubmit}>
                            <input
                                placeholder="Search..."
                                type="search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </form>
                        <body>
                            {mediaEntries.map((e) => <MediaEntry title={e.title} name={e.name} pp={e.poster_path} />)}
                        </body>
                    </>


                    <div className="off-canvas-content" data-off-canvas-content>
                        <Header name={this.state.appName} />
                        <Routes name={this.state.appName} />
                        <hr />
                        <Footer />
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
