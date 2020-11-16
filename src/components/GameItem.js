import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { saveGameIndex } from '../actions/actions.js';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

class GameItem extends Component {
    handleClick = (e) => {
        console.log(this);
        this.props.saveIndex(e.target.getAttribute('value'))
    };
    handleMouseOver = (e) => {
        console.log('Mouse Hover');
    };
    render() {

        return (
            <Link to='/frame'>
        <div className="gameitem">
            <Fade {...FadeProperties}>
            {this.props.game.imgs.map((img, i) => <img className="gameimg" key={i} value={i} src={img} alt="" onClick={this.handleClick} onMouseOver={this.handleMouseOver} />)}
            </Fade>
        </div>
        </Link>
                    // "http://awlibfheknmdk.herokuapp.com/public/" connect4
                    // "https://idsjndkjendk.herokuapp.com/index.html" tictactoe
        )
    }
}
const FadeProperties = {
    duration: 2222,
    transitionDuration: 1111,
    indicators: false,
    arrows: false
};

const mapStateToProps = (state) => {
    return {
        GameIndex: state.GameIndex
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        saveIndex: (z) => { dispatch(saveGameIndex(z)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameItem)

//<div className="gameitem">
  //                  <Flippy flipOnHover={true} flipDirection="horizontal" ref={(r) => this.flippy = r}>
    //                    <FrontSide>
      //                      <Fade {...properties}>
        //                        {Game4.photos.map((each, i) => (
          //                          <img key={i} className="gameimg" src={each} alt="" onClick={()=>{handleClick(Game4.link)}} />
            //                    ))}
              //              </Fade>
                //        </FrontSide>
//                        <BackSide>
  //                          <pre className="gameinfo">
    //                            <h1>Name</h1>
      //                          <h1>Type</h1>
        //                        <h1>Difficulty</h1>
          //                  </pre>
            //            </BackSide>
              //      </Flippy>
      //          </div>
        //    </div>
        
//const properties = {
  //  duration: 2222,
    //transitionDuration: 1111,
//    indicators: false,
  //  arrows: false
//};