import React, { useState } from 'react';
import {useDispatch} from 'react-redux';

function CommentForm({ getFeedback}) {

  let [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const addComment = () => {
    event.preventDefault();
    console.log('idk if this works comment!',{comment})
    // axios({
    //     method: 'POST',
    //     url: '/feedback',
    //     data: {feeling}
    // }).then((response) => {
    //     console.log('this is the response of the post route', response)
        
    //     getFeedback();
    // }).catch((err) => {
    //     console.log('oops', err)
    // })
}


  return (
    <section>
    <h2>Any comments you want to leave?</h2>
    <p>Comments</p>
    <form onSubmit={addComment}>
      <textarea type="textarea" placeholder="Comments" 
        onChange={(event) => setComment(event.target.value)}
        value={comment} />

    </form>
  </section>
  );
}

export default CommentForm;