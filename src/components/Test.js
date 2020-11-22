import React, { Component } from 'react';
import $ from 'jquery';

  class Test extends Component {
    // lol!
    componentDidMount(){
        $("#particles")[0].className="hide"
        $("body")[0].style.background="white"

        $(".i").on('mouseenter',function(e){
            $(this).css({top:$(window).height()*0.5*Math.random()-($(this).height()*10*Math.random()), left:$(window).width()*0.5*Math.random()-($(this).height()*20*Math.random())})
            $(this).css("color","rgb("+Math.random()*250+","+Math.random()*250+","+Math.random()*250+")");
            $(this).css("transform","rotate("+Math.random()*300+"deg)")
        })
    }
    componentWillUnmount(){
        $("#particles")[0].className="Show"
    }
    render() {
        return (
                <div className="e">
                    <h1 className="i" style={{color:"red"}}>C</h1>
                    <h1 className="i" style={{color:"orange"}}>a</h1>
                    <h1 className="i" style={{color:"yellow"}}>t</h1>
                    <h1 className="i" style={{color:"green"}}>c</h1>
                    <h1 className="i" style={{color:"cyan"}}>h</h1>
                    <h1 className="i"> </h1>
                    <h1 className="i" style={{color:"blue"}}>M</h1>
                    <h1 className="i" style={{color:"indigo"}}>e</h1>
                    <h1 className="i" style={{color:"purple"}}> </h1>
                    <h1 className="i" style={{color:"violet"}}>O</h1>
                    <h1 className="i" style={{color:"pink"}}>u</h1>
                    <h1 className="i" style={{color:"red"}}>t</h1>
                    <h1 className="i" style={{color:"orange"}}>s</h1>
                    <h1 className="i" style={{color:"yellow"}}>i</h1>
                    <h1 className="i" style={{color:"green"}}>d</h1>
                    <h1 className="i" style={{color:"cyan"}}>e</h1>
                    <h1> </h1>
                    <h1 className="i" style={{color:"blue"}}>H</h1>
                    <h1 className="i" style={{color:"indigo"}}>o</h1>
                    <h1 className="i" style={{color:"purple"}}>w</h1>
                    <h1> </h1>
                    <h1 className="i" style={{color:"violet"}}>'</h1>
                    <h1 className="i" style={{color:"pink"}}>b</h1>
                    <h1 className="i" style={{color:"red"}}>o</h1>
                    <h1 className="i" style={{color:"orange"}}>u</h1>
                    <h1 className="i" style={{color:"yellow"}}>t</h1>
                    <h1> </h1>
                    <h1 className="i" style={{color:"green"}}>T</h1>
                    <h1 className="i" style={{color:"cyan"}}>h</h1>
                    <h1 className="i" style={{color:"blue"}}>a</h1>
                    <h1 className="i" style={{color:"indigo"}}>t</h1>
                    <h1 className="i" style={{color:"purple"}}>?</h1>
                </div>
        )
    }
}

export default Test;
