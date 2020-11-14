import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignInForm from './SignInForm.jsx';
import RegisterForm from './RegisterForm.jsx';
import { Register, SignIn } from '../actions/actions.js';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    onTrigger1 = () => {
        let x = "show";
        this.props.changex(x);
        console.log(this.props);
    }
    onTrigger = () => {
        let y = "show";
        this.props.changey(y);
        console.log("test///");
    }

    render() {
        // console.log("here===>", this.props);
        return (
            <div id="navclosed" className="menu">
                <img id="openmenu" class="arrow" src="media/rightarrow.png" onClick=""></img>
                <button id="cancel1" onClick={this.onTrigger1}>Register</button>
                <button id="cancel" onClick={this.onTrigger}>Sign In</button>
                <RegisterForm />
                <SignInForm />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        test: state.test,
        register: state.register,
        SignIn: state.signIn
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changex: (x) => { dispatch(Register(x)) },
        changey: (y) => { dispatch(SignIn(y)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
