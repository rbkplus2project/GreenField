import { showSign, setUser } from '../actions/actions.js';
import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
const axios = require('axios');
const $ = require('jquery');

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const usernameError = document.querySelector('.username.error');
        const passwordError = document.querySelector('.password.error');
        usernameError.textContent = '';
        passwordError.textContent = '';

        let input = $('#signin-form').serializeArray();
        let options = {
            url: `http://localhost:3000/user/signin`,
            method: 'post',
            data: { username: input[0].value, password: input[1].value }
        }

        axios(options)
            .then((results) => {
                if (results.status === 200 && results.data.errors === undefined) {
                    this.props.sign(1);
                    this.props.setUser(results.data)
                    localStorage.setItem('gamesio', JSON.stringify(results.data));
                    this.setState({ redirect: true })
                    
                };
                if (results.data.errors) {
                    usernameError.textContent = results.data.errors.username;
                    passwordError.textContent = results.data.errors.password;
                }
            })
            .catch((err) => {
                console.error(err);
            })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        } else {
            return (
                <div id="signin" className="center styled">
                    <form id="signin-form" onSubmit={this.handleSubmit}>
                        <h1>Sign In</h1>
                        <br />
                        <div className="column">
                            <label htmlFor="username">User Name:</label>
                            <input type="text" className="text" id="username" name="username" />
                            <div class="username error"></div>
                            
                            <label htmlFor="Password">Password:</label>
                            <input type="password" className="text" id="password" name="password" />
                            <div class="password error"></div>

                        </div>
                        <br />
                        <button className="button">Sign In</button><br />
                    </form>
                    <Link to="/signup" style={{ textDecoration: "none" }}>
                        <p>Sign Up</p>
                    </Link>

                    <Link to="/reset" style={{ textDecoration: "none" }}>
                        <p>Forgot password?</p>
                    </Link>
                </div>
            )
        }
    }
};

// Redux 
const mapStateToProps = (state) => {
    return {
        showMenu: state.showMenu,
        showSearch: state.showSearch,
        showSign: state.showSign,
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sign: (z) => { dispatch(showSign(z)) },
        setUser: (z) => { dispatch(setUser(z)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
