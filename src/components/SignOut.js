import React from 'react';
import { Link } from 'react-router-dom';

let SignOut = () => {
    let signout = () => localStorage.removeItem('gamesio') 
    return (
        <div>
            <h2>are you sure about that?</h2>
            <Link to="/">
                <button onClick={signout}>Yes</button>
            </Link>
            <Link to="/">
                <button>No</button>
            </Link>
        </div>
    )
}

export default SignOut;
