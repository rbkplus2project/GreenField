import React, { Component } from 'react';
const axios = require('axios');
class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            confirmpassword: null
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.getData=this.getData.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
    handleSubmit (e){
        let options = {
            url: `http://localhost:3000/`,
            method: 'post',
            data: { username: this.state.username, password: this.state.password }
        }

        axios(options)
            .then((results) => {
                console.log(results);
                this.getData();       // what is the received data will be ?
            })

            .catch((err) => {
                console.log("error here ====>", err);
            })
    }

    getData (){
        let options = {
            url: `http://localhost:3000/`,
            method: 'get',
        }

        axios(options)
            .then((results) => {
                console.log(results);
                
            })

            .catch((err) => {
                console.log("error here ====>", err);
            })

    }

    handleChange (e) {
        setState({ [e.target.id]: e.target.value})
    }

    render() {
        return (
            <form id="register" onSubmit={this.handleSubmit}>
                <h3>Register</h3>

                <label htmlFor="username">User Name:</label><br />
                <input type="text" id="username" name="username" placeholder="Enter your name" onChange={this.handleChange} /><br />

                <label htmlFor="Password">Password:</label><br />
                <input type="password" id="password" name="password" placeholder="Enter password photo" onChange={this.handleChange} /><br />

                <label htmlFor="confirmPassword">Confirm Password:</label><br />
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Passward" onChange={this.handleChange} /><br />

                <button id="submit">Register</button>
                <button id="cancel" onClick={this.onTrigger}>Cancel</button>
            </form>
        )
    }
}


export default RegisterForm;