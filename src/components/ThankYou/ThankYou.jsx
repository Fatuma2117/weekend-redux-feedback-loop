import { HashRouter as Router, Route, Link } from 'react-router-dom';


function ThankYou() {

    return (
        <>
            <h1>Thank you for your feedback!</h1>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </>
    )
}

export default ThankYou;