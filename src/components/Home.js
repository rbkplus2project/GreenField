import React from 'react'
import GameView from './GameView'
import GameList from './GameList'
import { Redirect } from 'react-router-dom'
import Footer from './Footer.js';

let Home = () => {
    // if (localStorage.getItem('gamesio')) {
        return (
        <div>
            <GameView />
            <GameList />
            <Footer />
        </div>
        )
    // } else {
    //     return <Redirect to="/signin" />
    // }
}

export default Home;
