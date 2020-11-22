import React, { Component } from 'react';
import { color } from '../actions/actions.js';
import { connect } from 'react-redux';
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

    // Sends request to add new game to database through the server on successful upload button click
    handleSubmit = (e) => {
        e.preventDefault();
        let input = $('#addgame-form').serializeArray();
        let request = {
            url: input[1].value,
            imgs: input.slice(4).filter(elem => elem.value !== '').map(elem => elem.value),
            disc: {
                name: input[0].value,
                type: input[2].value,
                dificulty: input[3].value
            },
            postedBy: JSON.parse(localStorage.getItem('gamesio'))._id
        }
        let options = {
            url: 'http://localhost:3000/game',
            method: 'post',
            data: request
        }

        axios(options)
            .then(res => {
                if (res.status === 200) {
                    $('form').children().remove('.delete')
                    $('form').children().val('')
                    $('form').children()[11].value = '+'
                    this.count = 2;
                    this.setState({image: "image" + this.count})
                }
            })
            .catch(err => {
                alert('unknown error')
                console.log("error here ====>", err)
            })
    }

    // Adds more image fields for the user to insert inside them
    addImageField = () => {
        this.setState({image: "image" + ++this.count})
        let newImageField = $(`<label class="delete" htmlFor=${this.state.image}>Game ${this.state.image}:</label><input type="text" class="text delete" name=${this.state.image} id=${this.state.image} /><br class="delete">`)
        $("#addmoreimgs").before(newImageField)
    }
    render() {
        return (
            <div className="center styled scroll">
                <h1 style={{color:this.props.colors[3]}}>Upload Your Own Game!</h1>
                <br/>
                <form id="addgame-form" className="column" onSubmit={this.handleSubmit}>
                    <label htmlFor="title" style={{color:this.props.colors[3]}}>Game Title:</label>
                    <input type="text" className="text" name="title" id="title" style={{color:this.props.colors[3],backgroundColor:this.props.colors[0],borderColor:this.props.colors[1]}} required/>
                    
                    <label htmlFor="url" style={{color:this.props.colors[3]}}>Game URL:</label>
                    <input type="url" className="text" name="url" id="url" style={{color:this.props.colors[3],backgroundColor:this.props.colors[0],borderColor:this.props.colors[1]}} required/>

                    <label htmlFor="type" style={{color:this.props.colors[3]}}>Game Type:</label>
                    <input type="text" className="text" name="type" id="type" style={{color:this.props.colors[3],backgroundColor:this.props.colors[0],borderColor:this.props.colors[1]}} required/>

                    <label htmlFor="difficulty" style={{color:this.props.colors[3]}}>Game difficulty:</label>
                    <input type="text" className="text" name="difficulty" id="difficulty" style={{color:this.props.colors[3],backgroundColor:this.props.colors[0],borderColor:this.props.colors[1]}} required/>

                    <label htmlFor="image1" style={{color:this.props.colors[3]}}>Game image1:</label>
                    <input type="text" className="text" name="image1" id="image1" style={{color:this.props.colors[3],backgroundColor:this.props.colors[0],borderColor:this.props.colors[1]}} required/>

                    <br/>
                    <input type="button" className="button plus" value="+" style={{width:'2vw', color:this.props.colors[3],backgroundColor:this.props.colors[0],borderColor:this.props.colors[1]}} name="addmoreimgs" id="addmoreimgs" onClick={this.addImageField} />
                    <br/>
                    <button className="button" style={{color:this.props.colors[3],backgroundColor:this.props.colors[0],borderColor:this.props.colors[1]}}>Upload</button>
                </form>
            </div>
        )
    }
}

// Redux 
const mapStateToProps = (state) => {
    return {
      showSettings: state.showSettings,
      GamesRefresh: state.GamesRefresh,
      GamesSearch: state.GamesSearch,
      showSearch: state.showSearch,
      showSign: state.showSign,
      showMenu: state.showMenu,
      colors: state.colors,
      Games: state.Games,
      user: state.user
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      color: (z) => { dispatch(color(z)) }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(AddGame);
