import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Register, SignIn } from '../actions/actions.js';
import { $ } from 'jquery';
const axios = require('axios');
class LogInForm extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username: null,
    //         password: null
    //     }
    // }

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
                    <p>Already have an account? <a href="http://localhost:3000/signup">Sign un</a></p>
                </div>
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
export default LogInForm;