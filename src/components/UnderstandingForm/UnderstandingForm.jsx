import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';



function UnderstandingForm() {

  let [understanding, setUnderstanding] = useState(0);
  const dispatch = useDispatch();

  const addUnderstanding = (event) => {
    event.preventDefault();
    console.log('The Understanding rating:',understanding)
    dispatch({
      type: 'UNDERSTANDING_SCORE',
      payload: understanding
    })

}


  return (
    <section>
    <h2>How well are you understanding the content?</h2>
    <p>Understanding?</p>
    <form onSubmit={addUnderstanding}>
      <input type="number" placeholder="0-10"
        onChange={(event) => setUnderstanding(event.target.value)}
        value={understanding} />

          <Link to="/SupportForm">
            <button>NEXT</button>
          </Link>


    </form>
  </section>
  );
}

export default UnderstandingForm;