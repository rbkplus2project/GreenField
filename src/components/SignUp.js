import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
const axios = require('axios');
const $ = require('jquery');
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const usernameError = document.querySelector('.username.error');
        const emailError = document.querySelector('.email.error');
        const passwordError = document.querySelector('.password.error');
        usernameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';

        let input = $('#signup-form').serializeArray();
        // console.log(input)

        if (input[2].value === input[3].value) {
            // if (input[1].value.length >= 6) {
            let options = {
                url: 'http://localhost:3000/user/signup',
                method: 'post',
                data: { username: input[0].value, email: input[1].value, password: input[2].value }
            }

            axios(options)
                .then((results) => {
                    console.log("+++++", results.data);
                    if (results.status === 201) {
                        this.setState({ redirect: true })
                    }
                    if (results.data.errors) {
                        usernameError.textContent = results.data.errors.username;
                        emailError.textContent = results.data.errors.email;
                        passwordError.textContent = results.data.errors.password;
                    }
                })
                .catch((err) => {
                    console.log("error here ====>", err);
                })
            // } 
        }
        else {
            alert("Password doesn't match");
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/signin" />
        } else {
            return (
                <div id="signup" className="center styled">
                    <form id="signup-form" onSubmit={this.handleSubmit}>
                        <h1>Sign Up</h1>
                        <br />
                        <div className="column">
                            <label htmlFor="newusername">User Name:</label>
                            <input type="text" className="text" id="newusername" name="newusername" />
                            <div class="username error"></div>

                            <label htmlFor="email">Email:</label>
                            <input type="email" className="text" id="email" name="email" />
                            <div class="email error"></div>

                            <label htmlFor="newPassword">Password:</label>
                            <input type="password" className="text" id="newPassword" name="newPassword" />

                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input type="password" className="text" id="confirmPassword" name="confirmPassword" />
                            <div class="password error"></div>
                        </div>
                        <br />
                        <button className="button">Sign Up</button><br />
                    </form>
                    <p>Already have an account? <Link to="/signin" style={{ textDecoration: "none" }}>Sign In</Link></p>
                </div>
            )
        }
    }
};

export default SignUp;
