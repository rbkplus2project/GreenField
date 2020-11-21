import React, { Component } from 'react';
import $ from 'jquery';

class Color extends Component {
  containers(){
    
  }
  borders(){
    
  }
  menu(){
    
  }
  font(){
    ($('.button').css({color:$("#c4").val()}))
  }
  hover(){

  }
  background(){
    
  }
  particles(){
    
  }
  links(){
    
  }
    render() {
        return (
          <div className="center column styled">
            <div>Containers Color : <input type="color" id="c1" onChange={this.containers} /></div>
            <div>Borders Color : <input type="color" id="c2" onChange={this.borders} /></div>
            <div>Menu Color : <input type="color" id="c3" onChange={this.menu} /></div>
            <div>Font Color : <input type="color" id="c4" onChange={this.font} /></div>
            <div>Hover : <input type="color" id="c5" onChange={this.hover} /></div>
             <br/>  
            <div>Background Color : <input type="color" id="c6" onChange={this.background} /></div>
            <div>Particles Color : <input type="color" id="c7" onChange={this.particles} /></div>
            <div>Links Color : <input type="color" id="c9" onChange={this.links} /></div>
            <div className="button">H
            </div>

          </div>
        )
    }
}

export default Color;
