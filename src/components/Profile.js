import React, { Component } from 'react';

class Profile extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="center styled profileBG">
                <img className="profile-settings" alt="profile-pic" src="https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png" />
                <button className="edit-photo">change profile photo</button>
                <br />
                <span>Username</span>  <input type="text" className="text" id="change-name" name="change-name" />  <button className="edit">Change Name</button>
                <br/>
                <span>Password</span>  <input type="text" className="text" id="change-name" name="change-name" />  <button className="edit">Change Name</button>
            </div>
        )
    }
}

export default Profile
