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
                            <a href="https://fxdxdex.zendesk.com/hc/en-in/" target="_blank">
                                Help Center
                            </a>
                        </li>
                        <li>
                            <a href="https://fxdxdex.medium.com/" target="_blank">Blog</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-nav">
                    <h3>Docs</h3>
                    <ul>
                        <li>
                            <a href="https://fxdx.gitbook.io/a/legal/terms-of-use" target="_blank">
                                Terms of Use
                            </a>
                        </li>
                        <li>
                            <a href="https://fxdx.gitbook.io/a/legal/privacy-policy" target="_blank">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-nav">
                    <h3>Products</h3>
                    <ul>
                        <li>
                            <a href="https://mainnet.fxdx.exchange" target="_blank">Mainnet</a>
                        </li>
                          <li>
                            <a href="https://algo.fxdx.exchange" target="_blank">Testnet</a>
                        </li>
                        <li>
                            <a href="https://mainnet.fxdx.exchange/buy_flp" target="_blank">
                                Add Liquidity
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-nav">
                    <h3>Resources</h3>
                    <ul>
                        <li>
                            <a href="https://stats.fxdx.exchange/" target="_blank">
                                Analytics
                            </a>
                        </li>
                        <li>
                            <a href="https://mainnet.fxdx.exchange/earn" target="_blank">
                                Earn Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="https://fxdx.gitbook.io/a/algorand/intro" target="_blank">
                                Whitepaper
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/fxdxdex" target="_blank">Github</a>
                        </li>
        <li>
                            <a href="https://fxdx.gitbook.io/a/algorand/fees" target="_blank">Fees</a>
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
