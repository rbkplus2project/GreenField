import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

class GameList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        return (
            <div>
                <div className="gameitem">
                    <Flippy flipOnHover={true}  flipDirection="horizontal" ref={(r) => this.flippy = r}>
                        <FrontSide>
                            <Fade {...FadeProperties}>
                                {Game1.map((each, i) => (
                                    <img key={i} className="gameimg" src={each} alt="" onClick={'https://memory-game-1.herokuapp.com/index.html'} />
                                ))}
                            </Fade>
                        </FrontSide>
                        <BackSide>
                            <pre className="gameinfo">
                          <h1>Name</h1> 
                          <h1>Type</h1> 
                          <h1>Difficulty</h1>
                          </pre>
                    </BackSide>
                    </Flippy>
                </div>
                <div className="gameitem">
                    <Flippy flipOnHover={true} flipDirection="horizontal" ref={(r) => this.flippy = r}>
                        <FrontSide>
                            <Fade {...FadeProperties}>
                                {Game2.map((each, i) => (
                                    <img key={i} className="gameimg" src={each} alt="" onClick={handleClick} />
                                ))}
                            </Fade>
                        </FrontSide>
                        <BackSide>
                            <pre className="gameinfo">
                                <h1>Name</h1>
                                <h1>Type</h1>
                                <h1>Difficulty</h1>
                            </pre>
                        </BackSide>
                    </Flippy>
                </div>  
                <div className="gameitem">
                    <Flippy flipOnHover={true} flipDirection="horizontal" ref={(r) => this.flippy = r}>
                        <FrontSide>
                            <Fade {...FadeProperties}>
                                {Game3.map((each, i) => (
                                    <img key={i} className="gameimg" src={each} alt="" onClick={handleClick} />
                                ))}
                            </Fade>
                        </FrontSide>
                        <BackSide>
                            <pre className="gameinfo">
                                <h1>Name</h1>
                                <h1>Type</h1>
                                <h1>Difficulty</h1>
                            </pre>
                        </BackSide>
                    </Flippy>
                </div>
                <div className="gameitem">
                    <Flippy flipOnHover={true} flipDirection="horizontal" ref={(r) => this.flippy = r}>
                        <FrontSide>
                            <Fade {...FadeProperties}>
                                {Game4.map((each, i) => (
                                    <img key={i} className="gameimg" src={each} alt="" onClick={handleClick} />
                                ))}
                            </Fade>
                        </FrontSide>
                        <BackSide>
                            <pre className="gameinfo">
                                <h1>Name</h1>
                                <h1>Type</h1>
                                <h1>Difficulty</h1>
                            </pre>
                        </BackSide>
                    </Flippy>
                </div>
            </div>
        )
    }
}
const handleClick = (e) => {
    console.log('The link was clicked.');
};

const FadeProperties = {
    duration: 2222,
    transitionDuration: 1111,
    indicators: false,
    arrows: false
};

const Game1 = [
    "https://image.shutterstock.com/image-vector/memory-game-preschool-children-vector-260nw-1200034981.jpg",
    "https://image.shutterstock.com/image-vector/memory-game-preschool-children-vector-600w-531224158.jpg",
    "https://image.shutterstock.com/image-vector/memory-game-children-cards-transport-600w-632975588.jpg"
];
const Game2 = [
    "https://image.shutterstock.com/image-vector/memory-game-preschool-children-vector-260nw-1200034981.jpg",
    "https://image.shutterstock.com/image-vector/memory-game-preschool-children-vector-600w-531224158.jpg",
    "https://image.shutterstock.com/image-vector/memory-game-children-cards-transport-600w-632975588.jpg"
];
const Game3 = [
    "https://image.shutterstock.com/image-vector/memory-game-preschool-children-vector-260nw-1200034981.jpg",
    "https://image.shutterstock.com/image-vector/memory-game-preschool-children-vector-600w-531224158.jpg",
    "https://image.shutterstock.com/image-vector/memory-game-children-cards-transport-600w-632975588.jpg"
];
const Game4 = [
    "https://image.shutterstock.com/image-vector/memory-game-preschool-children-vector-260nw-1200034981.jpg",
    "https://image.shutterstock.com/image-vector/memory-game-preschool-children-vector-600w-531224158.jpg",
    "https://image.shutterstock.com/image-vector/memory-game-children-cards-transport-600w-632975588.jpg"
];

export default GameList;
