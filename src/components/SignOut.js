import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { showSign } from '../actions/actions.js';
import { connect } from 'react-redux';

class SignOut extends Component {
    handleClick = (e) => {
        /*
        let options = {
            url: `http://localhost:3000/user/signout`,
            method: 'post',
            data: { "signout": "true" }
        }

        axios(options)
            .then((results) => {
                // localStorage.setItem('gamesio', results.data);
                // this.setState({ redirect: true })
                // if (results.status === 200) {
                //     this.props.sign("show")
                // };
            })

            .catch((err) => {
                console.log("error here ====>", err);
            })
        */

        ////// temporary solution, should be handled upon signout response from the server
        localStorage.removeItem('gamesio'); 
        if (this.props.showSign === "hide") {
            this.props.sign("show");
        }
        else {
            this.props.sign("hide");
        }
    }
    render() {
        return (
            <div>
                <h2 className="styled">Sign Out?</h2>
                <Link to="/">
                    <button className="button" onClick={this.handleClick}>Yes</button>
                </Link>
                <Link to="/">
                    <button className="button">No</button>
                </Link>
            </div>
        )
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
