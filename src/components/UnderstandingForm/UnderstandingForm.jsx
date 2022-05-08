import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';




function UnderstandingForm() {

  let [understanding, setUnderstanding] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const addUnderstanding = (event) => {
    event.preventDefault();
    console.log('The Understanding rating:', understanding)
    dispatch({
      type: 'UNDERSTANDING_SCORE',
      payload: understanding
    })
    history.push('/SupportForm');
  }

  const handleBackClick = () => {
    history.push('/');

  };


  return (
    <section>
      <h2>How well are you understanding the content?</h2>
      <p>Understanding?</p>
      <form onSubmit={addUnderstanding}>
        <input type="number" placeholder="0-10"
          onChange={(event) => setUnderstanding(event.target.value)}
          value={understanding} />
        <button>NEXT</button>

      </form>
      <button onClick={handleBackClick}>Back</button>

    </section>
  );
}

export default UnderstandingForm;