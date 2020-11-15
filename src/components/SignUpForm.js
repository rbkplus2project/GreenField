import React, { Component } from 'react';
import { connect } from 'react-redux';
import {$} from 'jquery';
import axios from 'axios';
class SignUpForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let input = $('#signUp-form').serializeArray();
        // console.log(input);
        if (input[1].value === input[2].value) {
            let options = {
                url: `http://localhost:3000/user/signup`,
                method: 'post',
                data: { username: input[0].value, password: input[1].value }
            }

            axios(options)
                .then((results) => {
                    console.log(results);
                })

                .catch((err) => {
                    console.log("error here ====>", err);
                })
        }
        else {
            alert("Password don't match");
        }
    }

    // getData = () => {
    //     let options = {
    //         url: `http://localhost:3000/`,
    //         method: 'get',
    //     }

    //     axios(options)
    //         .then((results) => {
    //             console.log(results);

    //         })

    //         .catch((err) => {
    //             console.log("error here ====>", err);
    //         })

    // }

    onTrigger = () => {
        let x = "show";
        if (this.props.register == "hide") {
            this.props.changex(x);
        }
        else {
            x = "hide";
            this.props.changex(x);
        }
    }

    render() {
        return (
            <div id="signUp" >
                <form id="signUp-form" onSubmit={this.handleSubmit}>
                    <h3>Sign Up</h3>

                    <label htmlFor="username1">User Name:</label><br />
                    <input type="text" id="username1" name="username1" placeholder="Enter your name" /><br />

                    <label htmlFor="Password1">Password:</label><br />
                    <input type="password" id="password1" name="password1" placeholder="Enter password photo"/><br/>

                    <label htmlFor="confirmPassword">Confirm Password:</label><br />
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Passward" /><br />

                    <button id="submit1">Sign Up</button>
                </form>
                <div>
                    <p>Already have an account? <a href="http://localhost:3000/login">Log in</a></p>
                </div>
            </div>
        )
    }
}

export default SignUpForm;