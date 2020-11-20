import React, { Component } from 'react';
import { showSign } from '../actions/actions.js';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
const axios = require('axios');
const $ = require('jquery');
class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newpass: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // const passwordError = document.querySelector('.password.error');
        // passwordError.textContent = '';

        let input = $('#signin-form').serializeArray();
        console.log(input)
        let options = {
            url: `http://localhost:3000/user/reset`,
            method: 'post',
            data: { email: input[0].value }
        }

        axios(options)
            .then((results) => {
                if (results.status === 200) {
                    this.props.sign(1);
                    localStorage.setItem('gamesio', results.data);
                    this.setState({ newpass: true})
                };

            })
            .catch((err) => {
                console.error(err);
            })
    }

    render() {
        if (localStorage.getItem('gamesio')) {
            return <Redirect to="/" />
        }
        else if (this.state.newpass){
            return <Redirect to ="/reset/:token" />
        }
        else {
            return (
                <div id="signin" className="center styled">
                    <form id="signin-form" onSubmit={this.handleSubmit}>
                        <h1>Forgot Password</h1>
                        <br />
                        <div className="column">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="text" id="email" name="email" />
                        </div>
                        <br />
                        <button className="button">Reset Password</button><br />
                    </form>
                </div>
            )
        }
    }
};

const mapStateToProps = (state) => {
    return {
        showMenu: state.showMenu,
        showSearch: state.showSearch,
        showSign: state.showSign
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sign: (z) => { dispatch(showSign(z)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
