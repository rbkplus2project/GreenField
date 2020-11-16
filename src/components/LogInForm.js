import React, { Component } from 'react';
import { connect } from 'react-redux';
import { $ } from 'jquery';
import axios from 'axios';
class LogInForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let input = $('#logIn-form').serializeArray();
        let options = {
            url: `http://localhost:3000/user/login`,
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
        let y = "hide";
        this.props.changey(y);
        // console.log("test///");
    }

    render() {
        return (
            <div id="logIn">
                <form id="logIn-form" onSubmit={this.handleSubmit}>
                    <h3>Log In</h3>

                    <label htmlFor="username">User Name:</label><br />
                    <input type="text" id="username" name="username" placeholder="Enter your name"/><br />

                    <label htmlFor="Password">Password:</label><br />
                    <input type="password" id="password" name="password" placeholder="Enter password photo"/><br/>

                    <button id="submit">Log In</button>
                </form>
                <div>
                    <p>Already have an account? <a href="http://localhost:3000/signup">Sign up</a></p>
                </div>
            </div>
        )
    }
}

export default LogInForm;