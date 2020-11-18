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
        let input = $('#signup-form').serializeArray();
        if (input[1].value === input[2].value) {
            if (input[1].value.length >= 6) {

                let options = {
                url: `https://gamezio.web.app/user/signup`,
                method: 'post',
                data: { username: input[0].value, password: input[1].value }
                }
            
            axios(options)
                .then((results) => {
                    if (results.status === 200) {
                        this.setState({ redirect: true })
                    }
                })
                .catch((err) => {
                    console.log("error here ====>", err);
                    alert('username taken')
                })
            } else {
                alert("Password must be 6 characters long")
            }
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

                            <label htmlFor="newPassword">Password:</label>
                            <input type="password" className="text" id="newPassword" name="newPassword" />

                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input type="password" className="text" id="confirmPassword" name="confirmPassword" />
                        </div>
                        <br />
                        <button className="button">Sign Up</button><br />
                    </form>
                    <Link to="/signin" style={{textDecoration: "none"}}>
                    <p>Sign In</p>
                    </Link>
                </div>
            )
        }
    }
};

export default SignUp;
