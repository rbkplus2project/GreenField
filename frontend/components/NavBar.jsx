import React, { Component } from 'react';
import SignInForm from './SignInForm.jsx';
import RegisterForm from './RegisterForm.jsx';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="main">
                <RegisterForm />
                <SignInForm />
            </div>
        );
    }
}


export default NavBar;
