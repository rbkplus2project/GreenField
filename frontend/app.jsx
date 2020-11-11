import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar.jsx';
import NavBar from './GameView.jsx';
import NavBar from './GameList.jsx';
import NavBar from './Footer.jsx';
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

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
