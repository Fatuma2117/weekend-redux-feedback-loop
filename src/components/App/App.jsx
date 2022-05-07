import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('in useEffect');
    getFeedback();
  }, []);

  const getFeedback = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: 'SET_FEEDBACK',
          payload: response.data
        })
      })
      .catch((error) => {
        console.log('error on GET', error);
      });
  };

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route exact path="/">
          <p>Enter Feedback</p>
          <FeelingForm getFeedback={getFeedback} />
        </Route>
        <Route exact path="/UnderstandingForm">
          <UnderstandingForm getFeedback={getFeedback}/>
        </Route>



        <footer>
          <Link to="/UnderstandingForm">
            <button>NEXT</button>
          </Link>

        </footer>
      </div>
    </Router>
  );
}

export default App;
