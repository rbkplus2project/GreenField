<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { showMenu } from '../actions/actions.js';


class NavBar extends Component {
    
    handleClick = () => {
        if (this.props.showMenu === "hide") {
            this.props.menu("show");
        }
        else {
            this.props.menu("hide");
        }
    }

    render() {
        return (
            <div className="menu" >
                <img id="openmenu" className="arrow" alt="" src="./media/rightarrow.png" onClick={this.handleClick} style={{ display: this.props.showMenu === "show" ? "none" : "" }}></img>
                <nav id="img-logo" className="row" style={{ display: this.props.showMenu === "show" ? "" : "none" }} >
                    <img id="openmenu" className="arrow" alt="" src="./media/leftarrow.png" onClick={this.handleClick}></img>
                    <input type="image" className="navitem" alt="Search" src="./media/search.png"></input>
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

const mapStateToProps = (state) => {
    return {
        showMenu: state.showMenu
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        menu: (z) => { dispatch(showMenu(z)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
=======
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

function NavBar() {
  return (
    <div >
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
      <Link to="/login">
        <button>Sign In</button>
      </Link>
    </div>
  );
}

export default NavBar;
>>>>>>> 1ef4d48e961fd602bac215cd02f20178ec3d6795
