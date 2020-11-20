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
      $(".i").on('mouseenter',function(e){
        $(this).css({top:$(window).height()*0.5*Math.random()-($(this).height()*10*Math.random()), left:$(window).width()*0.5*Math.random()-($(this).height()*20*Math.random())})
      })
    }
    componentWillUnmount(){
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
                <h1 className="i">S</h1>
                <h1 className="i">i</h1>
                <h1 className="i">g</h1>
                <h1 className="i">n</h1>
                <h1 className="i"> </h1>
                <h1 className="i">O</h1>
                <h1 className="i">u</h1>
                <h1 className="i">t</h1>
                <h1 className="i">?</h1>
                </div>
                <br></br>
                <Link to="/">
                    <button className="button i" onClick={this.handleClick}>Yes</button>
                </Link>
                <br></br>
                <Link to="/">
                    <button className="button i">No</button>
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
