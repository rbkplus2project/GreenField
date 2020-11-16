import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { showMenu, showSearch, showSettings } from '../actions/actions.js';


class NavBar extends Component {

  handleClick = () => {
    if (this.props.showMenu === "hide") {
      this.props.menu("show");
    }
    else {
      this.props.menu("hide");
    }
  }
  handleSearch = () => {
    if (this.props.showSearch === "hide") {
      this.props.search("show");
    }
    else {
      this.props.search("hide");
    }
  }

  handleSettings=()=>{
    if (this.props.showSettings === "hide") {
        this.props.settings("show");
    }
    else {
        this.props.settings("hide");
    }
  }

  render() {
    return (
      <div className="menu" >
        <img className="navitem" alt="" src="./media/rightarrow.png" onClick={this.handleClick} style={{ display: this.props.showMenu === "show" ? "none" : "" }}></img>

        <nav id="img-logo" className="row" style={{ display: this.props.showMenu === "show" ? "" : "none" }} >

          <img className="navitem" alt="" src="./media/leftarrow.png" onClick={this.handleClick}></img>

          <Link to="/">
            <input type="image" className="navitem" alt="Home" src="./media/house.png"></input>
          </Link >

          <Link to="/signin">
            <input type="image" className="navitem" alt="SignIn" style={{ display: this.props.showSign === "show" ? "none" : "" }} src="./media/signin.png"></input>
          </Link>

          <Link to="/signup">
            <input type="image" className="navitem" alt="SignUp" style={{ display: this.props.showSign === "show" ? "none" : "" }} src="./media/signup.png"></input>
          </Link>

          <Link to="/signout">
            <input type="image" className="navitem" alt="SignOut" style={{ display: this.props.showSign === "show" ? "" : "none" }} src="./media/signout.png"></input>
          </Link>

          <input type="image" className="navitem" alt="Settings" src="./media/cog.png" onClick={this.handleSettings}></input>

          <input type="image" className="navitem" alt="Search" src="./media/search.png" onClick={this.handleSearch}></input>
          
          <input type="serach" className="seach-input" placeholder="Seacrh..." style={{ display: this.props.showSearch === "show" ? "" : "none" }} ></input>

        </nav>
          <div className ='column' style={{ display: this.props.showSettings === "show" ? "" : "none" }}>
            <div className ='settings'>Colors</div>
            <div className ='settings'>Language</div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    showMenu: state.showMenu,
    showSearch: state.showSearch,
    showSign: state.showSign,
    showSettings:state.showSettings
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    menu: (z) => { dispatch(showMenu(z)) },
    search: (z) => { dispatch(showSearch(z)) },
    settings: (z) => { dispatch(showSettings(z)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);