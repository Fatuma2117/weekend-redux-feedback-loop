import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function FeelingForm() {

  let [feeling, setFeeling] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const addFeeling = (event) => {
    event.preventDefault();
    console.log('The feeling rating:', feeling);
    dispatch({
      type: 'FEELING_SCORE',
      payload: feeling
    })

    if (feeling === '') {
      alert('Please fill out form completely')
      history.push('/');
    } else {
      history.push('/UnderstandingForm');
    }

  }

  return (
    <section>
      <h2>How are you feeling today?</h2>
      <p>Feeling?</p>
      <form >
        <input type="number" placeholder="0-10"
          onChange={(event) => setFeeling(event.target.value)}
          value={feeling} />
        <button onClick={addFeeling}>NEXT</button>
      </form>
    </section>
  );
}

export default FeelingForm;