import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';



function CommentForm() {

    let [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const addComment = (event) => {
        event.preventDefault();
        console.log('The Comment rating:', comment)
        dispatch({
            type: 'COMMENT_SCORE',
            payload: comment
        })
        history.push('/ReviewForm')
    }
    const handleBackClick =()=>{
        history.push('/SupportForm')
      }

    return (
        <section>
            <h2>Any comments you want to leave?</h2>
            <p>Comments</p>
            <form onSubmit={addComment}>
                <textarea type="textarea" placeholder="Comments"
                    onChange={(event) => setComment(event.target.value)}
                    value={comment} />
                <button>NEXT</button>
            </form>
            <button onClick={handleBackClick}>Go Back </button>
        </section>
    );
}

export default CommentForm;