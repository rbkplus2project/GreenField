import $ from 'jquery';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages   = [
  {url:"https://i.postimg.cc/FsJxjt79/2-1.png",href:"#a1"},
  {url:"https://i.postimg.cc/KjQhfK9M/1-1.png",href:"#a0"},
  {url:"https://i.postimg.cc/0QYz8fQ1/4-3.png",href:"#a2"},
  {url:"https://i.postimg.cc/N04hB2cP/6-3.png",href:"#a3"},
  {url:"https://i.postimg.cc/2SRgHTCn/7-1.png",href:"#a4"},
  {url:"https://i.postimg.cc/6qDSQsWH/8-3.png",href:"#a5"},
  {url:"https://i.postimg.cc/3x19wXkp/3-2.png",href:"#a6"},
  {url:"https://i.postimg.cc/hG9DxGq9/5-1.png",href:"#a7"},
  {url:"https://i.postimg.cc/xCcmtnKp/towers4.png",href:"#a8"}
];

const properties = {
    duration: 4444,
    transitionDuration: 1111,
    arrows: true
};

const scroll=function(x) {
  console.log(x,($(x)));
  $('html,body').animate({
      scrollTop: $(x).offset().top},
      'slow');
};

const GameView = () => {
  return (
    <div id="view">
    <Slide {...properties}>
      {slideImages.map((each, i) => (
        <div key={i} className="each-slide">
        <div style={{'backgroundImage': `url(${each.url})`}} onClick={()=>{scroll(each.href)}}></div>
        </div>
      ))}
    </Slide>
    </div>
  )
};

export default GameView;
