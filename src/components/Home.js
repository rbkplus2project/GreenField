import React from 'react'
import GameView from './GameView'
import GameList from './GameList'
import {Redirect} from 'react-router-dom'

let Home = () => {
    if (localStorage.getItem('gamesio')) {
        return (
            <div>
            <GameView />
            <GameList />
        </div>
        )
    } else {
        return <Redirect to="/signin" />
    }
}

export default Home