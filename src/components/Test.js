import React, { Component } from 'react';
import $ from 'jquery';

class Towers extends Component{
    componentDidMount(t){
      $("div").on("click", function(){
        $("#sound").attr({
            'src':'media/light.mp3', 
            'autoplay':'autoplay'
        })
    })
      let x=document.getElementsByClassName("lastfire")[0]
      let y=document.getElementsByClassName("fire")
      setInterval(()=>{for (var i = 0; i < y.length; i++) {
        y[i].style.transitionDuration= "5s";
        y[i].style.height= "55vh";
        x.style.transitionDuration= "5s";
        x.style.height= "55vh";
      }},3000,y)
    }
    reset=(e)=>{
      e.target.style.transitionDuration= "1s"
      e.target.style.height="1vh"
    }
    render() {
      return (
      <div>
        <div className="row">
          <img className="tower" src="./media/tower.png" alt=""></img> 
          <img className="tower" src="./media/tower.png" alt=""></img> 
          <img className="tower" src="./media/tower.png" alt=""></img> 
          <img className="tower" src="./media/tower.png" alt=""></img> 
        </div>
        <div className="fires">
          <img className="fire" src="./media/fire.png" onClick={this.reset} alt=""></img> 
          <img className="fire" src="./media/fire.png" onClick={this.reset} alt=""></img> 
          <img className="fire" src="./media/fire.png" onClick={this.reset} alt=""></img> 
          <img className="lastfire" src="./media/fire.png" onClick={this.reset} alt=""></img> 
        </div>
      </div>
      )
    }
}

export default Towers;
