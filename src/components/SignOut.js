import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './NavBar'

let SignOut = () => {
    let signout = () => { Navbar.setState({}); localStorage.removeItem('gamesio')} 
    return (
        <div>
            <h2 className="styled">Sign Out?</h2>
            <Link to="/">
                <button className="button" onClick={signout}>Yes</button>
            </Link>
            <Link to="/">
                <button className="button">No</button>
            </Link>
        </div>
    )
}

export default SignOut;
