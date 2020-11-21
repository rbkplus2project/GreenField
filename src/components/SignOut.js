import $ from 'jquery';
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
    componentDidMount(){
        $("#particles")[0].className="hide"
    }
    componentWillUnmount() {
        
        $("#particles")[0].className="Show"
    }
    handleClick = (e) => {
        localStorage.removeItem('gamesio'); 
        this.props.setUser({});
        this.props.sign(0);
    }
    render() {
        return (
            <div className=" center column styled">
                <div className="row">
                <h1>Sign Out?</h1>
                </div>
                <br></br>
                <Link to="/">
                    <button className="button" onClick={this.handleClick}>Yes</button>
                </Link>
                <br></br>
                <Link to="/">
                    <button className="button">No</button>
                </Link>
            </div>
        )
    }
}

// Redux 
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
