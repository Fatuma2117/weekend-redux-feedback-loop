import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function ReviewForm() {

    const feedbackFeeling = useSelector(store => store.feelingReducer);
    const feedbackUnderstanding = useSelector(store => store.understandingReducer);
    const feedbackSupport = useSelector(store => store.supportReducer);
    const feedbackComment = useSelector(store => store.commentReducer);
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        let addReview = {
            feeling: feedbackFeeling,
            understanding: feedbackUnderstanding,
            support: feedbackSupport,
            comment: feedbackComment
        }
        console.log('Added new review to database', addReview);

        axios({
            method: 'POST',
            url: '/feedback',
            data: addReview
        }).then((response) => {
            console.log('response /post route', response)
            history.push('/ThanksForm')

        }).catch((err) => {
            console.log('oops', err)
        })

    }
    const handleBackClick = () => {
        history.push('/CommentForm');
    }
    return (
        <>
            <div>
                <h1>Review Feedback</h1>
                <h3>Feelings:{feedbackFeeling}</h3>
                <h3>Understanding:{feedbackUnderstanding}</h3>
                <h3>Support:{feedbackSupport}</h3>
                <h3>Comments:{feedbackComment}</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <button>SUBMIT</button>
            </form>
            <button onClick={handleBackClick}>Back</button>

        </>
    );
}

export default ReviewForm;