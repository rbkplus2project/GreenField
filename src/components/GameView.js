import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages   = [
    'https://www.zynga.com/storage/2020/09/HP_ZyngaHeaderBanner_web1-min-1.png',
    'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    'https://tecake.com/wp-content/uploads/2020/10/images_uplayplus_hero.jpg'
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
