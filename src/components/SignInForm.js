import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
const axios = require('axios');
class SignInForm extends Component {
     constructor(props) {
         super(props);
         this.state = {
             redirect: false
         }
     }

    handleSubmit = (e) => {
        e.preventDefault();
        let input = $('#signIn-form').serializeArray();
        let options = {
            url: `http://localhost:3000/user/signin`,
            method: 'post',
            data: { username: input[0].value, password: input[1].value }
        }

        axios(options)
            .then((results) => {
                console.log(results);
                this.setState({redirect: true})
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
        if (this.state.redirect) {
            return <Redirect to="/"/>
        } else{return (
            <div id="signIn" className="center">
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
        )}
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