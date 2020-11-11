import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar.jsx';

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
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
