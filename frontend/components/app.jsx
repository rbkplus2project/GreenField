import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider, connect } from 'react-redux';
import rootReducer from '../reducers/rootReducer.js';
import NavBar from './NavBar.jsx';
import GameView from './GameView.jsx';
import GameList from './GameList.jsx';
import Footer from './Footer.jsx';


const store = createStore(rootReducer);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    render() {
        return (
            <div className="main">
                <NavBar />
                <GameView />
                <GameList />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        password: state.password
    
    }
}


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));

// ReactDOM.render(<App />, document.getElementById('app'));
// export default App
export default connect(mapStateToProps)(App);

