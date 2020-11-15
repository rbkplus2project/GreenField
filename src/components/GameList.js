import React, { Component } from 'react';

class GameList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        return (
            <div>
                <Game1/>
                <Game2/>
                <Game3/>
                <Game4/>
            </div>
        )
    }
}
const handleClick = (e) => {
    console.log('The link was clicked.');
}
const handleMouseOver = (e) => {
    console.log('Mouse Hover');
  };

const Game1 = () => {
    const images = [
        "https://image.shutterstock.com/image-vector/memory-game-preschool-children-vector-260nw-1200034981.jpg",
        "https://image.shutterstock.com/image-vector/memory-game-preschool-children-vector-600w-531224158.jpg",
        "https://image.shutterstock.com/image-vector/memory-game-children-cards-transport-600w-632975588.jpg"
    ];
    const zoomInProperties = {
        duration: 5000,
        transitionDuration: 1000,
        indicators: false,
        scale: 1.4,
        arrows: false
    }
    return (
        <div>
            <Zoom {...zoomInProperties}>
                {images.map((each, index) => (
                    <div key={index} style={{ width: "50%" }}>
                        <img style={{ objectFit: "cover", width: "100%" }} src={each} alt="" onClick={handleClick}
                        onMouseOver={handleMouseOver} />
                    </div>
                ))}
            </Zoom>
        </div>
    )
};
const Game2 = () => {
    const images = [
        "https://image.shutterstock.com/image-vector/memory-game-preschool-children-vector-260nw-1200034981.jpg",
        "https://image.shutterstock.com/image-vector/memory-game-preschool-children-vector-600w-531224158.jpg",
        "https://image.shutterstock.com/image-vector/memory-game-children-cards-transport-600w-632975588.jpg"
    ];
    const zoomInProperties = {
        duration: 5000,
        transitionDuration: 1000,
        indicators: false,
        scale: 1.4,
        arrows: false
    }
    return (
        <div>
            <Zoom {...zoomInProperties}>
                {images.map((each, index) => (
                    <div key={index} style={{ width: "50%" }}>
                        <img style={{ objectFit: "cover", width: "100%" }} src={each} alt="" onClick={handleClick}
                        onMouseOver={handleMouseOver}/>
                    </div>
                ))}
            </Zoom>
        </div>
    )
};
const Game3 = () => {
    const images = [
        "https://image.shutterstock.com/image-vector/memory-game-preschool-children-vector-260nw-1200034981.jpg",
        "https://image.shutterstock.com/image-vector/memory-game-preschool-children-vector-600w-531224158.jpg",
        "https://image.shutterstock.com/image-vector/memory-game-children-cards-transport-600w-632975588.jpg"
    ];
    const zoomInProperties = {
        duration: 5000,
        transitionDuration: 1000,
        indicators: false,
        scale: 1.4,
        arrows: false
    }
    return (
        <div>
            <Zoom {...zoomInProperties}>
                {images.map((each, index) => (
                    <div key={index} style={{ width: "50%" }}>
                        <img style={{ objectFit: "cover", width: "100%" }} src={each} alt="" onClick={handleClick}
                        onMouseOver={handleMouseOver}/>
                    </div>
                ))}
            </Zoom>
        </div>
    )
};
const Game4 = () => {
    const images = [
        "https://image.shutterstock.com/image-vector/memory-game-preschool-children-vector-260nw-1200034981.jpg",
        "https://image.shutterstock.com/image-vector/memory-game-preschool-children-vector-600w-531224158.jpg",
        "https://image.shutterstock.com/image-vector/memory-game-children-cards-transport-600w-632975588.jpg"
    ];
    const zoomInProperties = {
        duration: 5000,
        transitionDuration: 1000,
        indicators: false,
        scale: 1.4,
        arrows: false
    }
    return (
        <div>
            <Zoom {...zoomInProperties}>
                {images.map((each, index) => (
                    <div key={index} style={{ width: "50%" }}>
                        <img style={{ objectFit: "cover", width: "100%" }} src={each} alt="" onClick={handleClick}
                        onMouseOver={handleMouseOver}/>
                    </div>
                ))}
            </Zoom>
        </div>
    )
};
