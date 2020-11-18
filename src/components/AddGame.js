import React, { Component } from 'react';
const axios = require('axios');
const $ = require('jquery');

class AddGame extends Component {
    constructor(props) {
        super(props);
        this.count = 2
        this.state = {
            image: "image" + this.count
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let input = $('#addgame-form').serializeArray();
        let request = {
            url: input[1].value,
            imgs: input.slice(4).map(elem => elem.value),
            disc: {
                name: input[0].value,
                type: input[2].value,
                dificulty: input[3].value
            },
            postedBy: JSON.parse(localStorage.getItem('gamesio'))._id
        }
        let options = {
            url: `http://localhost:3000/game`,
            method: 'post',
            data: request
        }

        axios(options)
            .then(res => {
                if (res.status === 200) {
                    $('#addgame-form').html(`
                        <label htmlFor="title">Game Title:</label>
                        <input type="text" class="text" name="title" required/>
                        <label htmlFor="url">Game URL:</label>
                        <input type="url" class="text" name="url" required/>
                        <label htmlFor="type">Game Type:</label>
                        <input type="text" class="text" name="type" />
                        <label htmlFor="difficulty">Game difficulty:</label>
                        <input type="text" class="text" name="difficulty" />
                        <label htmlFor="image1">Game image1:</label>
                        <input type="url" class="text" name="image1" required/>
                        <br><button class="button">Upload</button>`)
                    this.count = 2;
                }
            })
            .catch(err => console.log("error here ====>", err))
    }
    render() {
        console.log("Hiii",this.props)
        return (
            <div className="center styled">
                <h1>Upload Your Own Game!</h1>
                <br/>
                <form id="addgame-form" className="column" onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Game Title:</label>
                    <input type="text" className="text" name="title" required/>
                    
                    <label htmlFor="url">Game URL:</label>
                    <input type="url" className="text" name="url" required/>

                    <label htmlFor="type">Game Type:</label>
                    <input type="text" className="text" name="type" required/>

                    <label htmlFor="difficulty">Game difficulty:</label>
                    <input type="text" className="text" name="difficulty" required/>

                    <label htmlFor="image1">Game image1:</label>
                    <input type="text" className="text" name="image1" required/>

                    <label htmlFor="image2">Game image2:</label>
                    <input type="text" className="text" name="image2"/>

                    <label htmlFor="image3">Game image3:</label>
                    <input type="text" className="text" name="image3"/>

                    <label htmlFor="image4">Game image4:</label>
                    <input type="text" className="text" name="image4"/>
                    <br/>
                    <button className="button">Upload</button>
                </form>
            </div>
        )
    }
}

export default AddGame;
