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
    handleSubmit = (e) => {
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

    getData = () => {
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

    handleChange = (e) => {
        setState({ [e.target.id]: e.target.value})
    }

    render() {
        return (
            
            <form id="register"  className='center' onSubmit={this.handleSubmit}>
                <h1>Gamesio</h1><br />
                <div className= 'Column'>
                <label htmlFor="username">User Name:</label>
                <input type="text" id="username" name="username"  onChange={this.handleChange} />

                <label htmlFor="Password">Password:</label>
                <input type="password" id="password" name="password"  onChange={this.handleChange} />

                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword"  onChange={this.handleChange} />
                </div><br/>
                <div className='column'>
                <button id="submit">Register</button><br />
                <button id="cancel" onClick={this.onTrigger}>Cancel</button>
                </div>
            </form>
        )
    }
}


export default RegisterForm;