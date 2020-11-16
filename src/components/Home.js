import React from 'react'
import GameView from './GameView'
import GameList from './GameList'
import Footer from './Footer.js';

let Home = () => {
        return (
        <div>
            <GameView />
            <GameList />
            <Footer />
        </div>
        )
}

export default Home;
