import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <form id="register" onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <label htmlFor="username">User Name:</label><br />
                <input type="text" id="username" name="username" placeholder="Enter your name" onChange={this.handleChange} /><br />

                <label htmlFor="Password">Passward:</label><br />
                <input type="password" id="password" name="password" placeholder="Enter password photo" onChange={this.handleChange} /><br />

                <label htmlFor="confirmPassword">Confirm Passward:</label><br />
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Passward" onChange={this.handleChange} /><br />

                <button id="submit">Sign Up</button>
                <button id="cancel" onClick={this.onTrigger}>Cancel</button>
            </form>
        )
    }
}


export default RegisterForm;