import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';

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
                <Fade {...FadeProperties}>
                {Game1.photos.map((each, i) => (
                    <img key={i} className="gameimg" src={each} alt="" onClick={()=>{handleClick(Game1.link)}} onMouseOver={handleMouseOver} />
                ))}
                </Fade>
                </div>  

                <div className="gameitem">
                <Fade {...FadeProperties}>
                {Game2.photos.map((each, i) => (
                    <img key={i} className="gameimg" src={each} alt="" onClick={()=>{handleClick(Game2.link)}} onMouseOver={handleMouseOver} />
                ))}
                </Fade>
                </div>  

                <div className="gameitem">
                <Fade {...FadeProperties}>
                {Game3.photos.map((each, i) => (
                    <img key={i} className="gameimg" src={each} alt="" onClick={()=>{handleClick(Game3.link)}} onMouseOver={handleMouseOver} />
                ))}
                </Fade>
                </div>  

                <div className="gameitem">
                <Fade {...FadeProperties}>
                {Game4.photos.map((each, i) => (
                    <img key={i} className="gameimg" src={each} alt="" onClick={()=>{handleClick(Game4.link)}} onMouseOver={handleMouseOver} />
                ))}
                </Fade>
                </div> 
            </div>
        )
    }
}
const handleClick = (e) => {
    console.log('The link was clicked.');
};
const handleMouseOver = (e) => {
    console.log('Mouse Hover');
};
const FadeProperties = {
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
