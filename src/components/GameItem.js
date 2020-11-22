import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { gameIndex } from '../actions/actions.js';
import { Fade } from 'react-slideshow-image';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class GameItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }

    // A click on the flip card sends to the playing page if signed in
    handleClick = (e) => {
        this.props.saveIndex(this.props.newKey)
    };
    render() {
        return (
                <div className="gameitem" id={"a"+this.props.newKey}>
                    <Flippy flipOnHover={true} flipDirection="horizontal" ref={(r) => this.flippy = r}>
                        <FrontSide>
                            <Fade {...properties}>
                                {this.props.game.imgs.map((img, i) => <img className="gameimg" key={i} src={img} alt=""/>)}
                            </Fade>
                        </FrontSide>
                    <Link to='/frame'>
                       <BackSide>
                           <pre className="gameinfo" onClick={this.handleClick}>
                               <h3 className="disc">Name : {this.props.game.disc.name}</h3>
                               <h3 className="disc">Type : {this.props.game.disc.type}</h3>
                               <h3 className="disc">Difficulty : {this.props.game.disc.dificulty}</h3>
                           </pre>
                        </BackSide>
                    </Link>
                   </Flippy>
               </div>
        )
    }
}

// Settings for the flip cards hover 
const properties = {
   duration: 2222,
   transitionDuration: 1111,
   indicators: false,
   arrows: false
};

// Redux 
const mapStateToProps = (state) => {
    return {
        gameIndex: state.gameIndex
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        saveIndex: (z) => { dispatch(gameIndex(z)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameItem)
