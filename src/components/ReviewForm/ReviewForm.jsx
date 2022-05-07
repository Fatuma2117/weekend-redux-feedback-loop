import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function ReviewForm() {

    const dispatch = useDispatch();
    const feedbackInfo = useSelector(store => store.feedbackReducer);

    return(
        <table>
            <thead>
                <tr>
                    <h1>Review Your Feedback</h1>
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