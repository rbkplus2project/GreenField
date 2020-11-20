import $ from 'jquery';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { showMenu, showSearch, showSettings, showSign, setUser, searchGames } from '../actions/actions.js';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

    // Loads this before this component renders
    UNSAFE_componentWillMount() {
        if (localStorage.getItem('gamesio')) {
            this.props.sign(1);
            this.props.setUser(JSON.parse(localStorage.getItem('gamesio')))
        }
    }

  // NavBar buttons and what they do
  handleMenu = () => {
    this.props.settings(0)
    if (this.props.showMenu) {
      this.props.menu(0);
    }
    else {
      this.props.menu(1);
    }
  }
  handleSearch = () => {
    if (this.props.showSearch) {
      this.props.search(0);
    }
    else {
      this.props.search(1);
    }
  }

  handleSettings=()=>{
    if (this.props.showSettings) {
        this.props.settings(0);
    }
    else {
        this.props.settings(1);
    }
  }

  search=(e)=>{
    $("footer")[0].className="hide"
    $("#view")[0].className="hide"
    let word = e.target.value.toLowerCase();
    let all = this.props.Games;
    if (word === '') {
      this.props.searchGames(all);
    } else {
      let newList = all.filter(elem => {
        let name = elem.disc.name.toLowerCase().toString()
        let type = elem.disc.type.toLowerCase().toString()
        let dificulty = elem.disc.dificulty.toLowerCase().toString()
        if (name.includes(word) || type.includes(word) || dificulty.includes(word)) {
          return true
        }
        return false
      })
      this.props.searchGames(newList)
    }
  }
  render() {
    return (
      <div className="menu" >

        <input type="image" className="navitem" alt="" src="./media/rightarrow2.png" onClick={this.handleMenu} style={{ display: this.props.showMenu ? "none" : "" }}></input>

        <nav id="img-logo" className="menu" style={{ display: this.props.showMenu ? "" : "none" }} >

          <input type="image" className="navitem" alt="" src="./media/leftarrow2.png" onClick={this.handleMenu}></input>

          <Link to="/">
            <input type="image" className="navitem" alt="Home" src="./media/house2.png"></input>
          </Link >

          <Link to="/signin">
            <input type="image" className="navitem" alt="SignIn" style={{ display: this.props.showSign ? "none" : "" }} src="./media/signin2.png"></input>
          </Link>

          <Link to="/signup">
            <input type="image" className="navitem" alt="SignUp" style={{ display: this.props.showSign ? "none" : "" }} src="./media/signup2.png"></input>
          </Link>

          <Link to="/profile">
            <input type="image" className="navitem" alt="Profile" style={{ display: this.props.showSign ? "" : "none" }} src={this.props.user.profile ? this.props.user.profile : "./media/signin2.png"}></input>
          </Link>
          
          <Link to="/addgame">
            <input type="image" className="navitem" alt="Add" style={{ display: this.props.showSign ? "" : "none" }} src="./media/addgame2.png"></input>
          </Link>

          <input type="image" className="navitem" alt="Settings" src="./media/cog2.png" onClick={this.handleSettings}></input>
         
          <Link to="/test">
            <input type="image" className="navitem" alt="Test" src="./media/star2.png"></input>
          </Link>

          <Link to="/signout">
            <input type="image" className="navitem" alt="SignOut" style={{ display: this.props.showSign ? "" : "none" }} src="./media/signout2.png"></input>
          </Link>

          <input type="image" className="navitem" alt="Search" src="./media/search2.png" onClick={this.handleSearch}></input>
          
          <input type="serach" className="search" style={{ display: this.props.showSearch ? "" : "none" }} onChange={this.search} ></input>

          <input type="image" className="navitem" alt="Find" style={{ display: this.props.showSearch ? "" : "none" }} src="./media/leftarrow2.png" onClick={this.handleSearch}></input>

        </nav>

        <div className ='settings column' style={{ display: this.props.showSettings ? "" : "none" }}>
            
            <Link to="/colors">
              <input type="button" className ='settingsitem' value="Colors"></input>
            </Link>

        </div>

      </div>
    )
  }
}

// A lot of Redux variables
const mapStateToProps = (state) => {
  return {
    showMenu: state.showMenu,
    showSearch: state.showSearch,
    showSign: state.showSign,
    showSettings: state.showSettings,
    Games: state.Games,
    GamesSearch: state.GamesSearch,
    GamesRefresh: state.GamesRefresh,
    user: state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sign: (z) => { dispatch(showSign(z)) },
    menu: (z) => { dispatch(showMenu(z)) },
    setUser: (z) => { dispatch(setUser(z)) },
    search: (z) => { dispatch(showSearch(z)) },
    settings: (z) => { dispatch(showSettings(z)) },
    searchGames: (z) => { dispatch(searchGames(z)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);