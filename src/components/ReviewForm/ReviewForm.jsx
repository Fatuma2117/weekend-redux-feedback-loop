import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { HashRouter as Link } from 'react-router-dom';
import axios from 'axios';




function ReviewForm() {

    const dispatch = useDispatch();
    const feedbackInfo = useSelector(store => store.feedbackReducer);
        axios({
        method: 'POST',
        url: '/feedback',
        data: {feeling}
    }).then((response) => {
        console.log('this is the response of the post route', response)
        
        getFeedback();
    }).catch((err) => {
        console.log('oops', err)
    })

    return(
        <table>
            <thead>
                <tr>
                    <th>Review Your Feedback</th>
                </tr>
            </thead>
            <tbody>
                {feedbackInfo.map((feedback) => {
                    console.log(feedback);
                    return(
                    <tr key={feedback.id}>
                        <td>{feedback.feeling}</td>
                        <td>{feedback.understanding}</td>
                        <td>{feedback.support}</td>
                        <td>{feedback.comments}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    );


}

export default ReviewForm;