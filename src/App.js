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



                    <div className="off-canvas-content" data-off-canvas-content>
                        <MobileHeader name={this.state.appName} />
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
