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
                            <Fade {...properties}>
                                {Game1.photos.map((each, i) => (
                                    <img key={i} className="gameimg" src={each} alt="" onClick={()=>{handleClick(Game1.link)}} />
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
                            <Fade {...properties}>
                                {Game2.photos.map((each, i) => (
                                    <img key={i} className="gameimg" src={each} alt="" onClick={()=>{handleClick(Game2.link)}} />
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
                            <Fade {...properties}>
                                {Game3.photos.map((each, i) => (
                                    <img key={i} className="gameimg" src={each} alt="" onClick={()=>{handleClick(Game3.link)}} />
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
                            <Fade {...properties}>
                                {Game4.photos.map((each, i) => (
                                    <img key={i} className="gameimg" src={each} alt="" onClick={()=>{handleClick(Game4.link)}} />
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
};

const handleClick = (e) => {
    console.log('The link was clicked.');
};

const properties = {
    duration: 2222,
    transitionDuration: 1111,
    indicators: false,
    arrows: false
};

const Game1 = {
    link:"http://marketxoro.herokuapp.com/public/",
    photos:[
    "../../public/media/one.png",
    "https://image.shutterstock.com/image-vector/memory-game-preschool-children-vector-600w-531224158.jpg",
    "https://image.shutterstock.com/image-vector/memory-game-children-cards-transport-600w-632975588.jpg"
    ]
};
const Game2 = {
    link:"http://awlibfheknmdk.herokuapp.com/public/",
    photos:[
    "../../public/media/two.png",
    "https://image.shutterstock.com/image-vector/memory-game-preschool-children-vector-600w-531224158.jpg",
    "https://image.shutterstock.com/image-vector/memory-game-children-cards-transport-600w-632975588.jpg"
    ]
};
const Game3 = {
    link:"https://idsjndkjendk.herokuapp.com/index.html",
    photos:[
    "../../public/media/three.png",
    "https://image.shutterstock.com/image-vector/memory-game-preschool-children-vector-600w-531224158.jpg",
    "https://image.shutterstock.com/image-vector/memory-game-children-cards-transport-600w-632975588.jpg"
    ]
};
const Game4 = {
    link:"https://memory-game-1.herokuapp.com/index.html",
    photos:[
    "../../public/media/four.png",
    "https://image.shutterstock.com/image-vector/memory-game-preschool-children-vector-600w-531224158.jpg",
    "https://image.shutterstock.com/image-vector/memory-game-children-cards-transport-600w-632975588.jpg"
    ]
};

export default GameList;
