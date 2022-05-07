import React, { useState } from 'react';
import {useDispatch} from 'react-redux';

function UnderstandingForm({ getFeedback}) {

  let [understanding, setUnderstanding] = useState(0);
  const dispatch = useDispatch();

  const addUnderstanding = () => {
    event.preventDefault();
    console.log({understanding})
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
    <h2>How well are you understanding the content?</h2>
    <p>Understanding?</p>
    <form onSubmit={addUnderstanding}>
      <input type="number" placeholder="0-10"
        onChange={(event) => setUnderstanding(event.target.value)}
        value={understanding} />

    </form>
  </section>
  );
}

export default UnderstandingForm;