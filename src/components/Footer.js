import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
    getgame = () => {
        let options = {
            url: `http://localhost:3000/gitgame`,
            method: 'get',
            // data: { username: input[0].value, password: input[1].value }
        }
        axios(options)
            .then((results) => {
                if (results.status === 200) {
                    // localStorage.setItem('gamesio', results.data);
                };
            })
            .catch((err) => {
                console.error(err);
            })
   }
    render() {
        console.log(this.props.game)
        return (
            <footer className="page-footer font-small stylish-color-dark pt-4">
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-md-4 mx-auto">
                            <h6 className="font-weight-bold mt-3 mb-4">About</h6>
                            <p className="text-justify">Gamesio.com is a gaming website that gives the the opportunity to play fun games</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none" />

                        <div className="col-md-2 mx-auto">
                            <h6 className="font-weight-bold text-uppercase mt-3 mb-4">Available Games</h6>
                            <ul className="list-unstyled">

                                <li><a href={this.results.url}>{this.results.name}</a></li>
                                {/* <li><a href="http://gamesio.com/category/front-end-development/"></a></li>
                                <li><a href="http://gamesio.com/category/back-end-development/"></a></li> */}
                            </ul>
                        </div>

                        <hr className="clearfix w-100 d-md-none"></hr>

                        <div className="col-md-2 mx-auto">
                            <h6 className="font-weight-bold text-uppercase mt-3 mb-4">Quick Links</h6>
                            <ul className="list-unstyled">
                                <li><a href="http://gamesio.com/about/">About Us</a></li>
                                <li><a href="http://gamesio.com/contact/">Contact Us</a></li>
                                {/* <li><a href="http://gamesio.com/contribute-at-gamesio/">Contribute</a></li>
                                <li><a href="http://gamesio.com/privacy-policy/">Privacy Policy</a></li>
                                <li><a href="http://gamesio.com/sitemap/">Sitemap</a></li> */}
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>

                <ul className="list-unstyled list-inline text-center">
                    <li className="list-inline-item">
                        <a href="/" className="btn-floating btn-fb mx-1">
                            <i className="fab fa-facebook-f"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/" className="btn-floating btn-gplus mx-1">
                            <i className="fab fa-google-plus-g"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/" className="btn-floating btn-li mx-1">
                            <i className="fab fa-linkedin-in"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/" className="btn-floating btn-dribbble mx-1">
                            <i className="fab fa-dribbble"> </i>
                        </a>
                    </li>
                </ul>


                <div className="footer-copyright text-center py-3">
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
// const mapDispatchToProps = (dispatch) => {
//     return {
//         saveIndex: (z) => { dispatch(gameIndex(z)) }
//     }
// }

export default connect(mapStateToProps)(Footer);
