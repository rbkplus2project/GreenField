import React, { Component } from 'react';
import '../index.css';
class GameList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    handleClick = (e) => {

    }
    render() {
        return (
            <div className="games-container">
                <div className="games-item">
                    <img src="https://picsum.photos/400/300" alt="" onClick={this.handleClick}></img>
                </div >
                <div className="games-item">
                    <img src="https://picsum.photos/400/300" alt="" onClick={this.handleClick}></img>
                </div>
                <div className="games-item">
                    <img src="https://picsum.photos/400/300" alt="" onClick={this.handleClick}></img>
                </div>
                <div className="games-item">
                    <img src="https://picsum.photos/400/300" alt="" onClick={this.handleClick}></img>
                </div>
            </div>
        )
    }
}


export default GameList;