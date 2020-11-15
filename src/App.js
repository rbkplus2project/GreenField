import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import GameView from './components/GameView';
import GameList from './components/GameList';
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            {/* <Route path="/" exact component={NavBar} /> */}
            <Route path="/signup" component={SignUpForm} />
            <Route path="/login" component={SignInForm} />
          </Switch>
          {/* <GameView /> */}
          <GameList />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
