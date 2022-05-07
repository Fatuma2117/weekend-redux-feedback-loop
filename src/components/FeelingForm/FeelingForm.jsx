import React, { useState } from 'react';
import {useDispatch} from 'react-redux';

function FeelingForm({ getFeedback}) {

  let [feeling, setFeeling] = useState(0);
  const dispatch = useDispatch();

  const addFeeling = () => {
    event.preventDefault();
    console.log({feeling})
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
    <h2>How are you feeling today?</h2>
    <p>Feeling?</p>
    <form onSubmit={addFeeling}>
      <input type="number" placeholder="0-10"
        onChange={(event) => setFeeling(event.target.value)}
        value={feeling} />
    
    </form>
  </section>
  );
}

export default FeelingForm;