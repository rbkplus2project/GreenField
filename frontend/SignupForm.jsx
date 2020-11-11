import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <form id="signIn" onSubmit={this.handleSubmit}>
                    <h3>Sign In</h3>
                    
                    <label htmlFor="username">User Name:</label><br />
                    <input type="text" id="username" name="username" placeholder="Enter your name" onChange={this.handleChange} /><br />

                    <label htmlFor="Password">Passward:</label><br />
                    <input type="password" id="password" name="password" placeholder="Enter password photo" onChange={this.handleChange} /><br />

                    <button id="submit">Sign In</button>
                    <button id="cancel" onClick={this.onTrigger}>Cancel</button>
                </form>
            </div>
        )
    }
}


export default SignupForm;