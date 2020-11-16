import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import { getGames } from '../actions/actions.js';


class GameFrame extends Component {
    
    render() {
    if (localStorage.getItem('gamesio') && this.props.GameIndex !== -1) {
        console.log(this.props.Games)
        return (
            <div>
<<<<<<< HEAD
                <iframe src="https://memory-game-1.herokuapp.com/index.html" width="100%" height="100%" title="Game"/>
=======
                <iframe src={this.props.Games[this.props.GameIndex].url} width="100%" height="100%" title={this.props.Games.game}/>
>>>>>>> 6bc2273ecba40a0710a814e875afa4f854bf405f
            </div>
        ) 
    } else if (localStorage.getItem('gamesio')) {
        return <Redirect to="/"/> 
    } else {
        return <Redirect to="/signin"/> 
        }
    }
}

const mapStateToProps = (state) => {
    return {
        Games: state.Games,
        GameIndex: state.GameIndex
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getArr: (z) => { dispatch(getGames(z)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameFrame);
