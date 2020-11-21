import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { refreshApp } from '../actions/actions.js';
import ResetPassword from './ResetPassword.js';
import NewPassword from './NewPassword.js';
import React, { Component } from 'react';
import GameFrame from './GameFrame.js';
import { connect } from 'react-redux';
import Particle from './Particles.js';
import AddGame from './AddGame.js';
import Profile from './Profile.js';
import SignOut from './SignOut.js';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import NavBar from './NavBar.js';
import Color from './Color.js';
import Test from './Test.js';
import Home from './Home';
import $ from 'jquery';

class App extends Component {
    
    // Plays click sound on clicks
    componentDidMount(){
        $("input").on("click", function(){
            $("#sound").attr({ 
                'src':'media/point.mp3', 
                'autoplay':'autoplay'
            })
        })
    }
    render() {
        return (
            <Router>
                <NavBar/>
                <Switch>
                    <Route path="/test" component={Test}/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/colors" component={Color}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/signout" component={SignOut}/>
                    <Route path="/frame" component={GameFrame}/>
                    <Route path="/addgame" component={AddGame}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/reset/:token" component={NewPassword}/>
                    <Route path="/reset" exact component={ResetPassword}/>
                </Switch>
                <Particle/>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
return {
    refreshApp: (z) => { dispatch(refreshApp(z)) }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(App);
