import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function FeelingForm({ getFeedback}) {

  let [feeling, setFeeling] = useState(0);
  const dispatch = useDispatch();

  const addFeeling = (event) => {
    event.preventDefault();
    console.log('The feeling rating:',feeling)
    dispatch({
      type: 'FEELING_SCORE',
      payload: feeling
    })

}


  return (
    <section>
    <h2>How are you feeling today?</h2>
    <p>Feeling?</p>
    <form onSubmit={addFeeling}>
      <input type="number" placeholder="0-10"
        onChange={(event) => setFeeling(event.target.value)}
        value={feeling} />

          <Link to="/UnderstandingForm">
            <button>NEXT</button>
          </Link>
    
    </form>
  </section>
  );
}

export default FeelingForm;