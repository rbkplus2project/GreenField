import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions/actions.js';


class DisplayGame extends Component {
    removeGame = () => {
        let _id = this.props.game._id
        let newUser = this.props.user
        let index = this.props.item
        fetch('/game/' + _id, { method: 'delete' })
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
            <div className="display-game row">
                <img src={this.props.game.imgs[0]} alt="Game" className="profileimg" />
                <span>{this.props.game.disc.name}</span>
                <button className="edit" onClick={this.removeGame}>remove</button>
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
