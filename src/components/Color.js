import React, { Component } from 'react';
import $ from 'jquery';


class Color extends Component {
  containers(){
    $(".i").style.backgroundColor=""
  }
  borders(){
    $(".i").style.backgroundColor=""
  }
  menu(){
    $(".i").style.backgroundColor=""
  }
  font(){
    $(".i").style.backgroundColor=""
  }
  background(){
    $(".i").style.backgroundColor=""
  }
  particles(){
    $(".i").style.backgroundColor=""
  }
  links(){
    $(".i").style.backgroundColor=""
  }
    render() {
        return (
          <div className="center column styled">
            <div>Containers Color : <input type="color" onChange={this.containers} /></div>
            <div>Borders Color : <input type="color" onChange={this.borders} /></div>
            <div>Menu Color : <input type="color" onChange={this.menu} /></div>
            <div>Font Color : <input type="color" onChange={this.font} /></div>
             <br/>  
            <div>Background Color : <input type="color" onChange={this.background} /></div>
            <div>Particles Color : <input type="color" onChange={this.particles} /></div>
            <div>Links Color : <input type="color" onChange={this.links} /></div>
          </div>
        )
    }
}

export default Color;
