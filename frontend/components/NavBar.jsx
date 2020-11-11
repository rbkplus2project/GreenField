import React, { Component } from 'react';
import SignupForm from './SignupForm.jsx';
import RegisterForm from './RegisterForm.jsx';
';
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
                <SignupForm />
            </div>
        );
    }
}


export default NavBar;
