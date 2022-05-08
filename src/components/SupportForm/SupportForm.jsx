import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';



function SupportForm() {

  let [support, setSupport] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();


  const addSupport = (event) => {
    event.preventDefault();
    console.log('The Support rating:', support)
    dispatch({
      type: 'SUPPORT_SCORE',
      payload: support
    })
    history.push('/CommentForm');

  }

  const handleBackClick = () => {
    history.push('/UnderstandingForm');
  }


  return (
    <section>
      <h2>How well are you being supported?</h2>
      <p>Support?</p>
      <form onSubmit={addSupport}>
        <input type="number" placeholder="0-10"
          onChange={(event) => setSupport(event.target.value)}
          value={support} />
        <button>NEXT</button>
      </form>
      <button onClick={handleBackClick}>Back</button>
    </section>
  );
}

export default SupportForm;