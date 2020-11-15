import { Link, NaveLink } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showMenu } from '../actions/actions.js';
class NavBar extends Component {

  handleClick = () => {
    console.log(this.props)
    let z = "show";
    if (this.props.showMenu == "hide") {
      this.props.menu(z);
    }
    else {
      z = "hide";
      this.props.menu(z);
    }
  }
  render() {
    return (
      <div id="menu" >

        <button onClick={this.handleClick}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" /></svg>
        </button>

        <a href="http://localhost:3000/">
          <img id="logo" src={"https://scontent.fjrs11-1.fna.fbcdn.net/v/t1.0-9/16998886_1387392167977685_2129711120513777779_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=sMOCS6rtK68AX_mXSqQ&_nc_ht=scontent.fjrs11-1.fna&oh=48088baa199e6a633ae41f3f97bd9e51&oe=5FD483D5"} alt="website-Logo" style={{ width: 50, height: 50 }}></img>
        </a>

        <div style={{ display: this.props.showMenu === "show" ? "block" : "none" }}>
          <form onSubmit={this.handleSubmit}>
            <input type="search" placeholder="Search for games" />
          </form>

          <div>
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
            <Link to="/login">
              <button>Log In</button>
            </Link>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    test: state.test,
    showMenu: state.showMenu
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    menu: (z) => { dispatch(showMenu(z)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
