import React, { Component } from 'react';
class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer class="page-footer font-small stylish-color-dark pt-4">
                <div class="container text-center text-md-left">
                    <div class="row">
                        <div class="col-md-4 mx-auto">
                            <h6 class="font-weight-bold mt-3 mb-4">About</h6>
                            <p className="text-justify">Gamesio.com is a gaming website that gives the the opportunity to play fun games</p>
                        </div>

                        <hr class="clearfix w-100 d-md-none" />

                        <div class="col-md-2 mx-auto">
                            <h6 class="font-weight-bold text-uppercase mt-3 mb-4">Categories</h6>
                            <ul class="list-unstyled">
                                <li><a href="http://gamesio.com/category/c-language/">CAT 1</a></li>
                                <li><a href="http://gamesio.com/category/front-end-development/">CAT 2</a></li>
                                <li><a href="http://gamesio.com/category/back-end-development/">CAT 3</a></li>
                            </ul>
                        </div>

                        <hr class="clearfix w-100 d-md-none"></hr>

                        <div class="col-md-2 mx-auto">
                            <h6 class="font-weight-bold text-uppercase mt-3 mb-4">Quick Links</h6>
                            <ul class="list-unstyled">
                                <li><a href="http://gamesio.com/about/">About Us</a></li>
                                <li><a href="http://gamesio.com/contact/">Contact Us</a></li>
                                <li><a href="http://gamesio.com/contribute-at-gamesio/">Contribute</a></li>
                                <li><a href="http://gamesio.com/privacy-policy/">Privacy Policy</a></li>
                                <li><a href="http://gamesio.com/sitemap/">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>

                <ul class="list-unstyled list-inline text-center">
                    <li class="list-inline-item">
                        <a class="btn-floating btn-fb mx-1">
                            <i class="fab fa-facebook-f"> </i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="btn-floating btn-gplus mx-1">
                            <i class="fab fa-google-plus-g"> </i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="btn-floating btn-li mx-1">
                            <i class="fab fa-linkedin-in"> </i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="btn-floating btn-dribbble mx-1">
                            <i class="fab fa-dribbble"> </i>
                        </a>
                    </li>
                </ul>


                <div class="footer-copyright text-center py-3">
                    <p>Copyright &copy; 2020 All Rights Reserved by
                        <a href="#"> Gamesio Inc.</a>.
                    </p>
                </div>
            </footer>
        )
    }
}

export default Footer;
