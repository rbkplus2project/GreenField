import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
const axios = require('axios');
class SignUpForm extends Component {
     constructor(props) {
         super(props);
         this.state = {
             redirect: false
         }
     }

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
                    this.setState({ redirect: true })
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
        if (this.state.redirect) {
            return <Redirect to="/signin"/>
        } else {
            return (
                <div id="signup" className="center">
                <form id="signup-form" onSubmit={this.handleSubmit}>
                    <h1>Sign Up</h1>
                    <br/>
                    <div className="column">
                    <label htmlFor="newusername">User Name:</label>
                    <input type="text" id="newusername" name="newusername" onChange={this.handleChange} /><br/>
                    <label htmlFor="newPassword">Password:</label>
                    <input type="password" id="newPassword" name="newPassword" onChange={this.handleChange} /><br/>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" onChange={this.handleChange} />
                    </div>
                    <br/>
                    <button>Sign Up</button><br/>
                </form>
                    <Link to="/signin">
                    <button>Sign In</button><br/>
                    </Link>
            </div>
        )
    }
    }
};

// export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
export default SignUpForm;