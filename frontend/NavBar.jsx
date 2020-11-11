import React, { Component } from 'react';
import Navbar from './Navbar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        console.log(this.state);
    }

}
handleCallback = (Data) => {

}
handleCallback1 = (data) => {

}
render() {
    return (
        <div className="main">
            <Navbar/>
            <Formphoto  />
            <Photo />
        </div>
    );
}
}

export default App;
