import React, { Component } from 'react';
import Navbar from './Navbar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
        console.log(this.state);
    }

    addPhoto = (photo) => {
        
        });
    }
    handleCallback = (Data) => {
        
    }
    handleCallback1 = (data) => {
       
    }
    render() {
        return (
            <div className="main">
                <Navbar callback={this.handleCallback} />
                <Formphoto handleAdd={this.state.show} callback={this.handleCallback} callback1={this.handleCallback1} addPhoto={this.addPhoto} />
                <Photo photo={this.state} />
                {/* <Gallery photos={this.state.photos}/> */}

            </div>
        );
    }
}

export default App;
