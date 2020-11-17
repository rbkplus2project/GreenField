import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages   = [
  "https://i.postimg.cc/FsJxjt79/2-1.png",
  "https://i.postimg.cc/3x19wXkp/3-2.png",
  "https://i.postimg.cc/N04hB2cP/6-3.png",
  "https://i.postimg.cc/0QYz8fQ1/4-3.png",
  "https://i.postimg.cc/tRcKqHKy/6-6.png",
  "https://i.postimg.cc/bwp38Cwp/3-1.png",
  "https://i.postimg.cc/wj8nNQxG/6-7.png"
];

const properties = {
    duration: 4444,
    transitionDuration: 1111,
    infinite: true,
    indicators: true,
    arrows: true
};

const GameView = () => {
  return (
    <Slide {...properties}>
      {slideImages.map((each, i) => (
        <div key={i} className="each-slide">
        <div style={{'backgroundImage': `url(${each})`}}></div>
        </div>     
      ))}
    </Slide>
  )
};

export default GameView;
