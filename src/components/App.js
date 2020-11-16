import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, { Component } from 'react';
import SignOut from './SignOut.js';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import NavBar from './NavBar.js';
import Home from './Home';

class App extends Component {

    render() {
        return (
            <Router>
            <div className="main">
                <NavBar />
                    <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/signout" component={SignOut}/>
                    </Switch>
            </div>
            </Router>
        );
    }
}

export default App;
