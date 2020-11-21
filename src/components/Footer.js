import React, { Component } from 'react';
import { connect } from 'react-redux';


class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small stylish-color-dark pt-4 footer" >
                 <div className="container text-center text-md-left" id="footer">
                     <div className="row">
                         <div className="col-md-4 mx-auto" id="A">
                             <h4 className="font-weight-bold mt-3 mb-4" id="foo">ABOUT</h4>
                             <p className="text-justify">Gamesio.com is a gaming website that gives the the opportunity to play fun games</p>
                         </div>

                         <hr className="clearfix w-100 d-md-none" />

                         <div className="col-md-2 mx-auto">
                             <h4 className="font-weight-bold text-uppercase mt-3 mb-4" id="foo">FEATURED GAMES</h4>
                             <ul className="list-unstyled">
                                 {this.props.Games.map((elem, i) => <li key={i}><a href={elem.url}>{elem.disc.name}</a></li>)}
                             </ul>
                         </div>

                         <hr className="clearfix w-100 d-md-none"></hr>
                         <div className="col-md-2 mx-auto contact">
                             <h4 className="font-weight-bold text-uppercase mt-3 mb-4" id="foo">CONTACT US</h4>
                             <ul className="list-unstyled">
                                 <div className="contact">
                                     <i class="glyphicon glyphicon-envelope"></i>
                                     <span id='email'>  gamesio@gmail.com</span>
                                 </div>
                                 <div className="contact">
                                     <i class='fas fa-phone-alt '></i>
                                     <span id='phone'>  + 1235 2355 98</span>
                                 </div>
                             </ul>
                         </div>
                         
                     </div>
                     <hr />
                 </div>

                 <ul className="list-unstyled list-inline text-center">
                  <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
                  <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="http://google.com"><i className="fas fa-bolt"></i>Tech</a></li>
                </ul> 

                <div className="footer-copyright text-center py-7">
                    <p>Copyright &copy; 2020 All Rights Reserved by
                        <a href="/"> Gamesio Inc.</a>.
                    </p>
                </div>
            </footer>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        Games: state.Games,
        gameIndex: state.gameIndex
    }
}

export default connect(mapStateToProps)(Footer);
