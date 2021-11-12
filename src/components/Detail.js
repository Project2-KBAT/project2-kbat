/* eslint-disable indent, react/jsx-indent, react/destructuring-assignment, react/jsx-no-bind */
import React from 'react';
import '../style/Detail.css';
import CommentForm from './CommentForm';

function Detail() {
    function addComment(comment) {
        setState({
            loading: false,
            comments: [comment, ...state.comments],
        });
    }
    return (
        <div className="row">
            <div className="col-4 pt-3 border-right">
                <h6>Say something about React</h6>
                <CommentForm addComment={addComment} />
            </div>
        </div>
    );
}

export default Detail;
