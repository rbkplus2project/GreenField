import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, { Component } from 'react';
import SignInForm from './SignInForm.js';
import SignUpForm from './SignUpForm.js';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Home from './Home'

class App extends Component {

    render() {
        return (
            <Router>
            <div className="main">
                <NavBar />
                    <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/signin" component={SignInForm}/>
                    <Route path="/signup" component={SignUpForm}/>
                    </Switch>
                <Footer />
            </div>
            </Router>
        );
    }
}

export default App;