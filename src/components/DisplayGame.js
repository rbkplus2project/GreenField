import { connect } from 'react-redux';
import React, { Component } from 'react';
import { setUser } from '../actions/actions.js';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

class DisplayGame extends Component {
    removeGame = () => {
        let _id = this.props.game._id
        let newUser = this.props.user
        let index = this.props.item
        fetch('http://localhost:3000/game/' + _id, { method: 'delete' })
            .then(res => {
                if (res.status === 200) {
                newUser.games.splice(index, 1)
                this.props.setUser(newUser)
                localStorage.setItem('gamesio', JSON.stringify(newUser))
                this.props.rerender()
                } else {
                    throw new Error(res)
                }
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="row">
            <Flippy flipOnHover={true} flipDirection="horizontal" ref={(r) => this.flippy = r}>
                <FrontSide>
                    <img src={this.props.game.imgs[0]} alt="Game" className="uploaded" />
                </FrontSide>
                <BackSide>
                <div className="center">
                    <button className="remove" onClick={this.removeGame}>X</button>
                </div>
                </BackSide>
            </Flippy>
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
