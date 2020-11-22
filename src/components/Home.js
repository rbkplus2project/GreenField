import React, { Component } from 'react';
import GameList from './GameList';
import GameView from './GameView';
import Footer from './Footer.js';
import $ from 'jquery';

// Home Page
class Home extends Component {
    componentDidMount() {
        $("#particles")[0].className="hide"
    }
    componentWillUnmount(){
        $("#particles")[0].className="Show"
    }
    render(){
        return (
        <div>
            <GameView />
            <GameList />
            <Footer />
        </div>
        )
    }
}

export default Home;
