import React from "react";
// import { Link } from "react-router-dom";
import './footer.css'
let Footer = () => {
    return (
        <React.Fragment>

            <div className="footer-container">
                <section className="footer-subscription">
                    <p className="footer-subscriptiion-heading text-white">
                        Join the Adventure Newsletter to receive our best vacation deals
                    </p>
                    <p className="footer-subscriptiion-text text-white">
                        You can unsubscribe any time.
                    </p>
                    <div className="input-areas">
                        <form >
                            <input type="text" name="email" placeholder="Enter your Email"
                                className="footer-input" />
                            <button className="btn btn-outline-secondary text-white ">Subscribe</button>
                        </form>
                    </div>
                </section>
                <div className="footer-links">
                    <div className="footer-link-wrapper">
                        <div className="footer-link-items">
                            <h2 className="text-white">About us</h2>
                            <a className="text-white" to='/'>How it Works</a>
                            <a className="text-white" to='/'>Testimonials</a>
                            <a className="text-white" to='/'>Careers</a>
                            <a className="text-white" to='/'>Investors</a>
                            <a className="text-white" to='/'>Terms of Service</a>

                        </div>
                    </div>
                </div>
                <section className="social-media">
                    <div className="social-media-wrap">
                        <div className="footer-logp">
                            <a className="social-logo">
                                TRVL <i className="fa fa-trello"></i>
                            </a>
                        </div>
                        <small className="website-rights">TRVL C 2022</small>
                        {/* <div className="social-icons">
                            <a   className="social-icon-links facebook">
                                <i className="fab fa-facebook-f text-white"></i>
                            </a>
                            <a   className="social-icon-links instagram">
                                <i className="fab fa-instagram text-white"></i>
                            </a>
                        </div> */}
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
}
export default Footer;