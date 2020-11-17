import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions/actions.js';
const $ = require('jquery')

class Profile extends Component {
    // constructor(props) {
    //     super(props)
    // }
    updateImage = () => {
        let newImg = document.getElementById('newImg');
        let name = this.props.user.username
        let newUser = this.props.user
        if (newImg.files && newImg.files[0]) {
            let reader = new FileReader();
            reader.onload = e => {
                let options = {
                    method: 'put',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({"profile": e.target.result})
                }
                fetch('http://localhost:3000/user/' + name, options)
                .then(res => {
                    if (res.status === 200) {
                        newUser.profile = e.target.result
                        this.props.setUser(newUser)
                        localStorage.setItem('gamesio', JSON.stringify(newUser))
                        this.setState({})
                    } else {
                        throw new Error('plop')
                    }
                })
                .catch(res => alert('image too large'))
            }
            reader.readAsDataURL(newImg.files[0])
        }
    }
    updateName = () => {
        let newName = $('#change-name').val()
        let oldName = this.props.user.username
        let options = {
            method: 'put',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"username": newName})
        }
        fetch('http://localhost:3000/user/' + oldName, options)
        .then(res => {
            if (res.status === 200) {
                let newUser = this.props.user
                newUser.username = newName
                this.props.setUser(newUser)
                localStorage.setItem('gamesio', JSON.stringify(newUser))
                alert('New Username:' + newName )
            } else {
                throw new Error('plop')
            }
        })
        .catch(res => alert('username already taken'))
    }
    updatePass = () => {
        let newPass = $('#change-pass').val()
        let name = this.props.user.username
        let options = {
            method: 'post',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({password: newPass, username: name})
        }
        fetch('http://localhost:3000/user/' + name, options)
            .then(res => {
            console.log(res)
            if (res.status === 200) {
                alert('Password changed successfully')
            } else {
                throw new Error('plop')
            }
        })
        .catch(res => alert('Password must be longer than 6 characters'))
    }
    render() {
        console.log(this.props.user)
        return (
            <div className="center styled profileBG">
                <img className="profile-settings" alt="profile-pic" src={this.props.user.profile ? this.props.user.profile : "https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png"} />
                <input type="file" id="newImg" className="edit-photo" onChange={()=>{this.updateImage(this)}}/>
                <br />
                <span>Username</span>  <input type="text" className="text" id="change-name" name="change-name" />  <button className="edit" onClick={this.updateName}>Change Name</button>
                <br/>
                <span>Password</span>  <input type="password" className="text" id="change-pass" name="change-pass" />  <button className="edit" onClick={this.updatePass}>Change Password</button>
                <div>
                    <p>My Games:</p>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (z) => { dispatch(setUser(z)) }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Profile)
