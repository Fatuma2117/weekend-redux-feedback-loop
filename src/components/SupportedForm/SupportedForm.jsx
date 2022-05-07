import React, { useState } from 'react';
import {useDispatch} from 'react-redux';

function SupportedForm({ getFeedback}) {

  let [support,setSupport] = useState(0);
  const dispatch = useDispatch();

  const addSupport = () => {
    event.preventDefault();
    console.log({support})
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
    <h2>How well are you being supported?</h2>
    <p>Support?</p>
    <form onSubmit={addSupport}>
      <input type="number" placeholder="0-10"
        onChange={(event) => setSupport(event.target.value)}
        value={support} />

    </form>
  </section>
  );
}

export default SupportForm;