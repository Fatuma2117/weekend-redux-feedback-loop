import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentForm from '../CommentForm/CommentForm';
import ReviewForm from '../ReviewForm/ReviewForm';
import ThankYou from '../ThankYou/ThankYou'


function App() {


  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route exact path="/">
          <p>Enter Feedback</p>
          <FeelingForm />
        </Route>
        <Route exact path="/UnderstandingForm">
          <UnderstandingForm />
        </Route>
        <Route exact path="/SupportForm">
          <SupportForm />
        </Route>
        <Route exact path="/CommentForm">
          <CommentForm />
        </Route>
        <Route exact path="/ReviewForm">
          <ReviewForm />
        </Route>
        <Route exact path="/ThanksForm">
          <ThankYou />
        </Route>
      </div>
    </Router>
  );
}

export default App;
