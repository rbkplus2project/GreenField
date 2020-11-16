import React, { Component } from 'react';
import GameItem from './GameItem'
import {connect} from 'react-redux'
import { getGames } from '../actions/actions.js';



class GameList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }
      
    componentDidMount() {
        fetch('http://localhost:3000/game')
          .then(res => res.json())
            .then(res => { this.props.getArr(res); return res})
    }
    render() {
        return (
            <div>
                {this.props.Games.map((elem, i) => <GameItem game={elem} key={i} newKey={i}/>)}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        Games: state.Games
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getArr: (z) => { dispatch(getGames(z)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
