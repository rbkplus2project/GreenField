import { color } from '../actions/actions.js';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';


class Color extends Component {
  colorize=()=>{
    let x=[]
    for(var i=0;i<$(".color").length;i++){
      x.push($(".color")[i].value)
    }
    this.props.color(x)
  }

    render() {
        return (
          <div className="center column styled">
            <div>Containers Color : <input type="color" className="color"/></div>
            <div>Borders Color : <input type="color" className="color"/></div>
            <div>Menu Color : <input type="color" className="color"/></div>
            <div>Font Color : <input type="color" className="color"/></div>
            <div>Hover : <input type="color" className="color"/></div>
            <br/>  
            <div>Background Color : <input type="color" className="color"/></div>
            <div>Particles Color : <input type="color" className="color"/></div>
            <div>Links Color : <input type="color" className="color"/></div>
            <br/>  
            <button onClick={this.colorize}>Set Colors</button>
          </div>
        )
    }
}
// A lot of Redux variables
const mapStateToProps = (state) => {
  return {
    colors: state.colors
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    color: (z) => { dispatch(color(z)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color);
