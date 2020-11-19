import React, { Component } from 'react';
import { showSign } from '../actions/actions.js';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
const axios = require('axios');
const $ = require('jquery');
class NewPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let input = $('#signin-form').serializeArray();
        let currenturl = window.location.href;
        let index = currenturl.lastIndexOf("/");
        let token = currenturl.slice(index + 1);

        if (input[0].value === input[1].value) {
        let options = {
            url: `http://localhost:3000/user/reset/:token`,
            method: 'post',
            data: { password: input[0].value, token: token }
        }

        axios(options)
            .then((results) => {
                if (results.status === 200) {
                    this.props.sign(1);
                    // localStorage.setItem('gamesio', results.data);
                    // this.setState({})
                };
            })
            .catch((err) => {
                console.error(err);
            })
        }
        else {
            alert("Password doesn't match");
        }
    }

    render() {
        // if (localStorage.getItem('gamesio')) {
        //     return <Redirect to="/" />
        // } else {
            return (
                <div id="signin" className="center styled">
                    <form id="signin-form" onSubmit={this.handleSubmit}>
                        <h1>Reset Password</h1>
                        <br />
                        <div className="column">
                            <label htmlFor="password-n">New Password:</label>
                            <input type="password" className="text" id="password-n" name="password-n" />
                        </div>

                        <div className="column">
                            <label htmlFor="password-con">Comfirm Password:</label>
                            <input type="password" className="text" id="password-con" name="password-con" />
                        </div>
                        <br />

                        <button className="button">Update Password</button><br />
                    </form>
                </div>
            )
        }
    // }
};

const mapStateToProps = (state) => {
    return {
        showMenu: state.showMenu,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sign: (z) => { dispatch(showSign(z)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPassword);
