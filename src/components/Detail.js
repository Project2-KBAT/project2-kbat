/* eslint-disable indent, react/jsx-indent, react/destructuring-assignment, react/jsx-no-bind,
object-curly-newline, no-unused-vars, quotes, react/jsx-one-expression-per-line, spaced-comment */
import React from 'react';
//import '../style/Detail.css';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import CommentForm from './CommentForm';

function Detail() {
    const { movieName } = useParams();
    console.log({ movieName });
    /*function addComment(comment) {
        setState({
            loading: false,
            comments: [comment, ...state.comments],
        });
    } */
    return (
        <div>
            Wassup nigga {movieName}
        </div>
    );
}

export default Detail;
