import React from 'react';
import { Redirect } from 'react-router-dom';

let GameFrame = () => {
    if (localStorage.getItem('gamesio')) {
        return (
            <div>
                <iframe src="https://memory-game-1.herokuapp.com/index.html" width="100%" height="100%" title="memory"/>
            </div>
        ) 
    } else {
        return <Redirect to="signin"/> 
    }
}

export default GameFrame
