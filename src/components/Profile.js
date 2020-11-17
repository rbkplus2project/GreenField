import React, { Component } from 'react';
import {connect} from 'react-redux'
import { setUser } from '../actions/actions.js';

class Profile extends Component {
    // constructor(props) {
    //     super(props)
    // }
    updateImage() {
        let newImg = document.getElementById('newImg');
        if (newImg.files && newImg.files[0]) {
            let reader = new FileReader();
            reader.onload = e => {
                localStorage.setItem(this.props.user.username, e.target.result)
                this.setState({})
            }
            reader.readAsDataURL(newImg.files[0])
        }
    }
    render() {
        console.log(this.props)
        return (
            <div className="center styled profileBG">
                <img className="profile-settings" alt="profile-pic" src={localStorage.getItem(this.props.user.username) ? localStorage.getItem(this.props.user.username) : "https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png"} />
                <input type="file" id="newImg" className="edit-photo" onChange={()=>{this.updateImage(this)}}/>
                <br />
                <span>Username</span>  <input type="text" className="text" id="change-name" name="change-name" />  <button className="edit">Change Name</button>
                <br/>
                <span>Password</span>  <input type="text" className="text" id="change-name" name="change-name" />  <button className="edit">Change Password</button>
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
        saveIndex: (z) => { dispatch(setUser(z)) }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Profile)
