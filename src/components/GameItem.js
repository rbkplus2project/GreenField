import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { saveGameIndex } from '../actions/actions.js';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

class GameItem extends Component {
    handleClick = (e) => {
        console.log(this.props);
        console.log(this.props.newKey);
        this.props.saveIndex(this.props.newKey)
    };
    handleMouseOver = (e) => {
        console.log('Mouse Hover');
    };
    render() {
        return (
                <div className="gameitem">
                    <Flippy flipOnHover={true} flipDirection="horizontal" ref={(r) => this.flippy = r}>
                        <FrontSide>
                            <Fade {...properties}>
                                {this.props.game.imgs.map((img, i) => <img className="gameimg" key={i} src={img} alt="" onMouseOver={this.handleMouseOver} />)}
                                </Fade>
                    </FrontSide>
                    <Link to='/frame'>
                       <BackSide>
                           <pre className="gameinfo" onClick={this.handleClick}>
                               <h1>Name</h1>
                               <h1>Type</h1>
                               <h1>Difficulty</h1>
                           </pre>
                        </BackSide>
                    </Link>
                   </Flippy>
               </div>
                    // "https://idsjndkjendk.herokuapp.com/index.html" tictactoe
        )
    }
}

const properties = {
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
