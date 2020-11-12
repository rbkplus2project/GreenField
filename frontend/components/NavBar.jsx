import React, { Component } from 'react';
import RegisterForm from './RegisterForm.jsx';
import SignInForm from './SignInForm.jsx';

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
