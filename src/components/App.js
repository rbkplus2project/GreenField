import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ResetPassword from './ResetPassword.js';
import NewPassword from './NewPassword.js';
import React, { Component } from 'react';
import GameFrame from './GameFrame.js';
import Particle from './Particles.js';
import AddGame from './AddGame.js';
import Profile from './Profile.js';
import SignOut from './SignOut.js';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import NavBar from './NavBar.js';
import Test from './Test.js';
import Home from './Home';
import $ from 'jquery';

class App extends Component {

    componentDidMount(){
        $("input").on("click", function(){
            $("#sound").attr({ 
                'src':'media/point.mp3', 
                'autoplay':'autoplay'
            })
        })
        $("#i").on("mouseover",function(){$("#i").css({"left":"+=200"})})
    }
    render() {
        return (
            <Router>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/signout" component={SignOut}/>
                    <Route path="/frame" component={GameFrame}/>
                    <Route path="/addgame" component={AddGame}/>
                    <Route path="/profile" component={Profile} />
                    <Route path="/reset" exact component={ResetPassword} />
                    <Route path="/reset/:token" component={NewPassword} />
                    <Route path="/test" component={Test}/>
                </Switch>
                <Particle/>
            </Router>
        );
    }
}

export default App;
