import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { showMenu, showSearch } from '../actions/actions.js';


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
    // console.log(this.props)
    if (this.props.showSearch === "hide") {
      this.props.search("show");
    }
    else {
      this.props.search("hide");
    }
  }

  render() {
    console.log(localStorage)
    if (localStorage.getItem('gamesio')) {
      return (
        <div className="menu" >
          <img className="navitem" alt="" src="./media/rightarrow.png" onClick={this.handleClick} style={{ display: this.props.showMenu === "show" ? "none" : "" }}></img>

          <nav id="img-logo" className="row" style={{ display: this.props.showMenu === "show" ? "" : "none" }} >

            <img className="navitem" alt="" src="./media/leftarrow.png" onClick={this.handleClick}></img>

            <input type="image" className="navitem" alt="Search" src="./media/search.png" onClick={this.handleSearch}></input>
            <input type="serach" className="seach-input" placeholder="Seacrh..." style={{ display: this.props.showSearch === "show" ? "" : "none" }} ></input>

            <Link to="/">
              <input type="image" className="navitem" alt="Home" src="./media/house.png"></input>
            </Link ><Link to="/signout">
              <input type="image" className="navitem" alt="SignOut" src="./media/signout.png"></input>
            </Link><Link to="/settings">
              <input type="image" className="navitem" alt="Settings" src="./media/cog.png"></input>
            </Link>

          </nav>
        </div>
      )
    } else {
      return (
        <div className="menu" >
          <img className="navitem" alt="" src="./media/rightarrow.png" onClick={this.handleClick} style={{ display: this.props.showMenu === "show" ? "none" : "" }}></img>

          <nav id="img-logo" className="row" style={{ display: this.props.showMenu === "show" ? "" : "none" }} >
            
            <img className="navitem" alt="" src="./media/leftarrow.png" onClick={this.handleClick}></img>

            <input type="image" className="navitem" alt="Search" src="./media/search.png" onClick={this.handleSearch}></input>
            <input type="serach" className="seach-input" placeholder="Seacrh..." style={{ display: this.props.showSearch === "show" ? "" : "none" }} ></input>

            <Link to="/">
              <input type="image" className="navitem" alt="Home" src="./media/house.png"></input>
            </Link ><Link to="/signin">
              <input type="image" className="navitem" alt="SignIn" src="./media/signin.png"></input>
            </Link><Link to="/signup">
              <input type="image" className="navitem" alt="SignUp" src="./media/signup.png"></input>
            </Link><Link to="/settings">
              <input type="image" className="navitem" alt="Settings" src="./media/cog.png"></input>
            </Link>

          </nav>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    showMenu: state.showMenu,
    showSearch: state.showSearch
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    menu: (z) => { dispatch(showMenu(z)) },
    search: (z) => { dispatch(showSearch(z))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);