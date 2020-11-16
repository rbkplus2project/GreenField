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
        console.log(input)
        let request = {
            url: input[1].value,
            imgs: input.slice(4).map(elem => elem.value),
            disc: {
                name: input[0].value,
                type: input[2].value,
                dificulty: input[3].value
            }
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
                        <input type="button" name="addmoreimgs" id="addmoreimgs" value="+" onClick={this.addImageField}/>
                        <button>Upload</button>`);
                    this.count = 2
                }
            })
            .catch(err => console.log("error here ====>", err))
    }
    addImageField = () => {
        this.setState({image: "image" + ++this.count})
        let newImageField = $(`<label htmlFor=${this.state.image}>Game ${this.state.image}:</label><input type="url" class="text" name=${this.state.image} />`)
        $("#addmoreimgs").before(newImageField)
    }
    render() {
        return (
            <div>
                <h1>Upload Your Own Game!</h1>
                <form id="addgame-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Game Title:</label>
                    <input type="text" className="text" name="title" required/>
                    
                    <label htmlFor="url">Game URL:</label>
                    <input type="url" className="text" name="url" required/>

                    <label htmlFor="type">Game Type:</label>
                    <input type="text" className="text" name="type" />

                    <label htmlFor="difficulty">Game difficulty:</label>
                    <input type="text" className="text" name="difficulty" />

                    <label htmlFor="image1">Game image1:</label>
                    <input type="url" className="text" name="image1" required/>
                    <input type="button" name="addmoreimgs" id="addmoreimgs" value="+" onClick={this.addImageField}/>
                    <button>Upload</button>
                </form>
            </div>
        )
    }
}

export default AddGame
