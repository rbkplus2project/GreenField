import React from 'react';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          {/* <Route path="/" exact component={NavBar} /> */}
          <Route path="/signup" component={SignUpForm} />
          <Route path="/login" component={SignInForm} /> 
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
