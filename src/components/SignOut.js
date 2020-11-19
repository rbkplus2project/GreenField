import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { showSign, setUser } from '../actions/actions.js';


class SignOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }
      
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
        this.props.setUser({});
        this.props.sign(0);
    }
    render() {
        return (
            <div className=" center column styled" style={{ display: this.props.showSign ? "" : "none" }}>
                <h1>Sign Out?</h1>
                <br></br>
                <Link to="/">
                    <button id="i" className="button" onClick={this.handleClick}>Yes</button>
                </Link>
                <br></br>
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
        setUser: (z) => { dispatch(setUser(z)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
