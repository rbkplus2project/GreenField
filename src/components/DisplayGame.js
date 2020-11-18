import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions/actions.js';


class DisplayGame extends Component {



    render() {
        console.log(this.props)
        return (
            <div className="display-game row">
                <img src={this.props.game.imgs[0]} alt="game-img-1" className="profile" />
                <span>{this.props.game.disc.name}</span>
                <button className="edit">remove</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (z) => { dispatch(setUser(z)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayGame)
