import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Particles from 'react-particles-js';
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
            this.r=Math.floor(Math.random()*16777215).toString(16);
        return (
            <div>
            <Particles
              params={{
                background: {
                  color: {
                    value: "#000000",
                  },
                },
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse"
                    }
                  },
                  modes: {
                    push: {
                      quantity: 2,
                    },
                    repulse: {
                      distance: 222,
                      duration: 2,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#"+this.r,
                  },
                  links: {
                    color: "#"+this.r,
                    distance: 222,
                    width: 2,
                    opacity: 0.7
                  },
                  move: {
                    speed: 7,
                  },
                  number: {
                    value: 77,
                  },
                  size: {
                    value: 7,
                  },
                },
              }}
            />
            <div className=" center column styled">
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
