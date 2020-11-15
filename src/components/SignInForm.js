import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Register, SignIn } from '../actions/actions.js';
import { $ } from 'jquery';
const axios = require('axios');
class SignInForm extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username: null,
    //         password: null
    //     }
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        let input = $('#signIn-form').serializeArray();
        let options = {
            url: `http://localhost:3000/user/login`,
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
        let y = "hide";
        this.props.changey(y);
        // console.log("test///");
    }

    render() {
        return (
            <div id="signIn">
                <form id="signIn-form" onSubmit={this.handleSubmit}>
                    <h3>Sign In</h3>

                    <label htmlFor="username">User Name:</label><br />
                    <input type="text" id="username" name="username" placeholder="Enter your name" onChange={this.handleChange} /><br />

                    <label htmlFor="Password">Password:</label><br />
                    <input type="password" id="password" name="password" placeholder="Enter password photo" onChange={this.handleChange} /><br />

                    <button id="submit">Sign In</button>
                </form>
                <button id="cancel" onClick={this.onTrigger}>Cancel</button>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         test: state.test,
//         register: state.register,
//         SignIn: state.SignIn
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         changey: (y) => { dispatch(SignIn(y)) }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
export default SignInForm;