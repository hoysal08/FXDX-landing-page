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
                            <a href="https://fxdxdex.zendesk.com/hc/en-in/">
                                Help Center
                            </a>
                        </li>
                        <li>
                            <a href="https://fxdxdex.medium.com/">Blog</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-nav">
                    <h3>Docs</h3>
                    <ul>
                        <li>
                            <a href="https://fxdx.gitbook.io/a/legal/terms-of-use">
                                Terms of Use
                            </a>
                        </li>
                        <li>
                            <a href="https://fxdx.gitbook.io/a/legal/privacy-policy">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-nav">
                    <h3>Products</h3>
                    <ul>
                        <li>
                            <a href="https://mainnet.fxdx.exchange">Mainnet</a>
                        </li>
                          <li>
                            <a href="https://algo.fxdx.exchange">Testnet</a>
                        </li>
                        <li>
                            <a href="https://mainnet.fxdx.exchange/buy_flp">
                                Add Liquidity
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-nav">
                    <h3>Resources</h3>
                    <ul>
                        <li>
                            <a href="https://mainnet.fxdx.exchange/earn">
                                Earn Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="https://fxdx.gitbook.io/a/algorand/intro">
                                Whitepaper
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/fxdxdex">Github</a>
                        </li>
        <li>
                            <a href="https://fxdx.gitbook.io/a/algorand/fees">Fees</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-info">
                <p>All rights reserved by FXDX Exchange</p>
            </div>
        </div>
    );
};

export default Footer;
