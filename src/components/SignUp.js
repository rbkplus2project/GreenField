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

    render() {
        if (this.state.redirect) {
            return <Redirect to="/signin"/>
        } else {
            return (
                <div id="signup" className="center styled">
                <form id="signup-form" onSubmit={this.handleSubmit}>
                    <h1>Sign Up</h1>
                    <br/>
                    <div className="column">
                    <label htmlFor="newusername">User Name:</label>
                    <input type="text" className="text" id="newusername" name="newusername" onChange={this.handleChange} />
                    <label htmlFor="newPassword">Password:</label>
                    <input type="password" className="text" id="newPassword" name="newPassword" onChange={this.handleChange} />
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" className="text" id="confirmPassword" name="confirmPassword" onChange={this.handleChange} />
                    </div>
                    <br/>
                    <button className="button">Sign Up</button><br/>
                </form>
                    <Link to="/signin" style={{textDecoration: "none"}}>
                    <p>Sign In</p><br/>
                    </Link>
            </div>
        )
    }
    }
};

export default SignUp;
