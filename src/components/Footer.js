import React, { Component } from 'react';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <h6>About</h6>
                            <p className="text-justify">Gamesio.com is a gaming website that gives the the oppertunity to play fun games</p>
                        </div>

                        <div className="">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a href="http://gamesio.com/category/c-language/">CAT 1</a></li>
                                <li><a href="http://gamesio.com/category/front-end-development/">CAT 2</a></li>
                                <li><a href="http://gamesio.com/category/back-end-development/">CAT 3</a></li>
                            </ul>
                        </div>

                        <div className="">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="http://gamesio.com/about/">About Us</a></li>
                                <li><a href="http://gamesio.com/contact/">Contact Us</a></li>
                                <li><a href="http://gamesio.com/contribute-at-gamesio/">Contribute</a></li>
                                <li><a href="http://gamesio.com/privacy-policy/">Privacy Policy</a></li>
                                <li><a href="http://gamesio.com/sitemap/">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                </div>
                    <div className="container">
                        <div className="row">
                            <div className="">
                                <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by
                                    <a href="#">Gamesio Inc.</a>.
                                 </p>
                            </div>

                            <div className="">
                                <ul className="social-icons">
                                    <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </footer>
        )
    }
}


export default Footer;