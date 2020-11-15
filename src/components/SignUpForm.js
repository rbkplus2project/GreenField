import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Register, SignIn } from '../actions/actions.js';
import {$} from 'jquery';
const axios = require('axios');
class SignUpForm extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username: null,
    //         password: null,
    //         confirmpassword: null
    //     }
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        let input = $('#register-form').serializeArray();
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
                    // this.getData();       // what is the received data will be ?
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

    // handleChange = (e) => {
    //     setState({ [e.target.id]: e.target.value })

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
        // console.log(this.props);
    }

    render() {
        // console.log("here===>", this.props);
        return (
            <div id="register" >
                <form id="register-form" onSubmit={this.handleSubmit}>
                    <h3>Register</h3>

                    <label htmlFor="username1">User Name:</label><br />
                    <input type="text" id="username1" name="username1" placeholder="Enter your name" onChange={this.handleChange} /><br />

                    <label htmlFor="Password1">Password:</label><br />
                    <input type="password" id="password1" name="password1" placeholder="Enter password photo" onChange={this.handleChange} /><br />

                    <label htmlFor="confirmPassword">Confirm Password:</label><br />
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Passward" onChange={this.handleChange} /><br />

                    <button id="submit1">Register</button>
                </form>
                <button id="cancel1" onClick={this.onTrigger}>Cancel</button>
            </div>
        )
    }
}
// const mapStateToProps = (state) => {
//     return {
//         test: state.test,
//         register: state.register,
//         SignIn: state.signIn

//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         changex: (x) => { dispatch(Register(x)) }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
export default SignUpForm;