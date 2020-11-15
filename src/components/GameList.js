import React, { Component } from 'react';
import '../index.css';

const game1 = [
    "https://image.shutterstock.com/image-vector/memory-game-preschool-children-vector-260nw-1200034981.jpg",
    "https://image.shutterstock.com/image-vector/memory-game-preschool-children-vector-600w-531224158.jpg",
    "https://image.shutterstock.com/image-vector/memory-game-children-cards-transport-600w-632975588.jpg"
];
const game2 = [];




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