import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <div>
                    <img src="./footer-logo.png" alt="" />
                </div>
                <div className="footer-nav">
                    <h3>Menu</h3>
                    <ul>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">FAQs</a>
                        </li>
                        <li>
                            <a href="#">Tutorials</a>
                        </li>
                        <li>
                            <a href="#">Help Center</a>
                        </li>
                        <li>
                            <a href="#">Promotional Terms</a>
                        </li>
                        <li>
                            <a href="#">Gasless Deposits</a>
                        </li>
                        <li>
                            <a href="#">Competition Terms</a>
                        </li>
                        <li>
                            <a href="#">Hedgies License</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-nav">
                    <h3>Company</h3>
                    <ul>
                        <li>
                            <a href="#">Mission</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Brand</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-nav">
                    <h3>Brand</h3>
                    <ul>
                        <li>
                            <a href="#">Web</a>
                        </li>
                        <li>
                            <a href="#">Mobile</a>
                        </li>
                        <li>
                            <a href="#">Testnet</a>
                        </li>
                        <li>
                            <a href="#">Hedgies</a>
                        </li>
                        <li>
                            <a href="#">Margin</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-nav">
                    <h3>Resources</h3>
                    <ul>
                        <li>
                            <a href="#">Dashboard</a>
                        </li>
                        <li>
                            <a href="#">Forums</a>
                        </li>
                        <li>
                            <a href="#">Documentation</a>
                        </li>
                        <li>
                            <a href="#">Github</a>
                        </li>
                        <li>
                            <a href="#">Status</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-info">
                <div>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                </div>
                <p>All rights reserved by FXDX Exchange</p>
            </div>
        </div>
    );
};

export default Footer;
