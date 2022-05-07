import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function CommentForm() {

    let [comment, setComment] = useState('');
    const dispatch = useDispatch();
  
    const addComment = (event) => {
      event.preventDefault();
      console.log('The Comment rating:',comment)
      dispatch({
        type: 'COMMENT_SCORE',
        payload: comment
      })
  
  }


  return (
    <section>
    <h2>Any comments you want to leave?</h2>
    <p>Comments</p>
    <form onSubmit={addComment}>
      <textarea type="textarea" placeholder="Comments" 
        onChange={(event) => setComment(event.target.value)}
        value={comment} />

            <Link to="/ReviewForm">
            <button>NEXT</button>
          </Link>

    </form>
  </section>
  );
}

export default CommentForm;