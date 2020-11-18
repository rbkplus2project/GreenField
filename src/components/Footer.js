import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
    render() {
        console.log(this.props.Games)
        return (
            <footer className="page-footer font-small stylish-color-dark pt-4" >
                <div className="container text-center text-md-left" id="footer">
                    <div className="row">
                        <div className="col-md-4 mx-auto">
                            <h4 className="font-weight-bold mt-3 mb-4">ABOUT</h4>
                            <p className="text-justify">Gamesio.com is a gaming website that gives the the opportunity to play fun games</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none" />

                        <div className="col-md-2 mx-auto">
                            <h4 className="font-weight-bold text-uppercase mt-3 mb-4">AVAILABLE GAMES</h4>
                            <ul className="list-unstyled">
                                {this.props.Games.slice(0, 5).map((elem, i) => <li key={i}><a href={elem.url}>{elem.disc.name}</a></li>)}
                            </ul>
                        </div>
                        {/* <hr className="clearfix w-100 d-md-none"></hr>

                        <div className="col-md-2 mx-auto">
                            <h4 className="font-weight-bold text-uppercase mt-3 mb-4">ABOUT US</h4>
                            <ul className="list-unstyled">
                            <li></li>
                            </ul>
                        </div> */}
                        <hr className="clearfix w-100 d-md-none"></hr>
                        <div className="col-md-2 mx-auto">
                            <h4 className="font-weight-bold text-uppercase mt-3 mb-4">CONTACT US</h4>
                            <ul className="list-unstyled">
                                <div>
                                    <i class="glyphicon glyphicon-envelope "></i>
                                    <span id='email'>gamesio@gmail.com</span>
                                </div>
                                <div>
                                    <i class='fas fa-phone-alt '></i>
                                    <span id='phone'>+ 1235 2355 98</span>
                                </div>

                                {/* <li><span id='add'>198 West Street,New York NY 10016</span></li>
                            <li><span id='email'>kiddos@gmail.com</span></li>
                            <li><span id='phone'>+ 1235 2355 98</span></li> */}
                            </ul>
                        </div>





                        {/* <div className="col-md-2 mx-auto">
                            <h4 className="font-weight-bold text-uppercase mt-3 mb-4">Quick Links</h4>
                            <ul className="list-unstyled">
                                <li><a href="http://gamesio.com/about/">About Us</a></li>
                                <li><a href="http://gamesio.com/contact/">Contact Us</a></li>
                            </ul>
                        </div> */}
                    </div>
                    <hr />
                </div>
                <ul className="list-unstyled list-inline text-center">
                    <li className="list-inline-item">
                        <a href="/" className="btn-floating btn-fb mx-7">
                            <i className="fab fa-facebook-f"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/" className="btn-floating btn-gplus mx-7">
                            <i className="fab fa-google-plus-g"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/" className="btn-floating btn-li mx-7">
                            <i className="fab fa-linkedin-in"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/" className="btn-floating btn-dribbble mx-7">
                            <i className="fab fa-dribbble"> </i>
                        </a>
                    </li>
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
