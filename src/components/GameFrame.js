import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux'

class GameFrame extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }    
    
    render() {
    if (localStorage.getItem('gamesio') && this.props.gameIndex !== -1) {
        return (
            <div>
                <iframe src={this.props.Games[this.props.gameIndex].url} width="100%" height="100%" title={this.props.Games[this.props.gameIndex].name}/>
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
        gameIndex: state.gameIndex
    }
}

export default connect(mapStateToProps)(GameFrame);
