// import React, { Component } from 'react';
// // import { connect } from 'react-redux';
// import SignInForm from './SignInForm';
// import RegisterForm from './RegisterForm';
// // import { Register, SignIn, showMenu } from '../actions/actions.js';

// class NavBar extends Component {
//   constructor(props) {
//     super(props);
//   }

//   // onTrigger1 = () => {
//   //   let x = "show";
//   //   if (this.props.register == "hide") {
//   //     this.props.changex(x);
//   //   }
//   //   else {
//   //     x = "hide";
//   //     this.props.changex(x);
//   //   }
//   //   // console.log(this.props);
//   // }

//   // onTrigger = () => {
//   //   let y = "show";
//   //   if (this.props.SignIn == "hide") {
//   //     this.props.changey(y);
//   //   }
//   //   else {
//   //     y = "hide";
//   //     this.props.changey(y);
//   //   }
//   // }
//   // handleClick = () => {
//   //   console.log(this.props)
//   //   let z = "show";
//   //   if (this.props.showMenu == "hide") {
//   //     this.props.menu(z);
//   //   }
//   //   else {
//   //     z = "hide";
//   //     this.props.menu(z);
//   //   }
//   // }

//   render() {
//     // console.log("here===>", this.props);
//     return (
//       <div className="menu" >
//         <h3>heloooo</h3>
//         {/* <img id="openmenu" className="arrow" src="../media/rightarrow.png" onClick={this.handleClick}></img>
//         <span id="img-logo" style={{ display: this.props.showMenu === "show" ? "inline-block" : "none" }} >
//           <a href="http://localhost:3000/">
//             <img id="logo" src={"https://scontent.fjrs11-1.fna.fbcdn.net/v/t1.0-9/16998886_1387392167977685_2129711120513777779_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=sMOCS6rtK68AX_mXSqQ&_nc_ht=scontent.fjrs11-1.fna&oh=48088baa199e6a633ae41f3f97bd9e51&oe=5FD483D5"} alt="website-Logo" style={{ width: 50, height: 50 }}></img>
//           </a>

//           <input id="search" type="text" placeholder="Search.."></input>
//           <button id="cancel1" onClick={this.onTrigger1}>Register</button>
//           <button id="cancel" onClick={this.onTrigger}>Sign In</button>
//         </span> */}
//         {/* <RegisterForm />
//         <SignInForm /> */}
//       </div>
//     );
//   }
// }

// // const mapStateToProps = (state) => {
// //   return {
// //     test: state.test,
// //     register: state.register,
// //     SignIn: state.SignIn,
// //     showMenu: state.showMenu
// //   }
// // }
// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     changex: (x) => { dispatch(Register(x)) },
// //     changey: (y) => { dispatch(SignIn(y)) },
// //     menu: (z) => { dispatch(showMenu(z)) }
// //   }
// // }

// export default NavBar;

// import './App.css';
import { Link, NaveLink } from 'react-router-dom';
import React, { Component } from 'react';
class NavBar extends Component {
  render() {
    return (
      <div id="menu" style={{ display: this.props.showMenu === "show" ? "none" : "inline-block" }}>
        <button>Menu</button>
        <a href="http://localhost:3000/">
          <img id="logo" src={"https://scontent.fjrs11-1.fna.fbcdn.net/v/t1.0-9/16998886_1387392167977685_2129711120513777779_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=sMOCS6rtK68AX_mXSqQ&_nc_ht=scontent.fjrs11-1.fna&oh=48088baa199e6a633ae41f3f97bd9e51&oe=5FD483D5"} alt="website-Logo" style={{ width: 50, height: 50 }}></img>
        </a>

        <div> 
          <Link to="/signup">
          <button>Sign Up</button>
        </Link>
          <Link to="/login">
            <button>Sign In</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
