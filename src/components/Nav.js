import React from "react";
import "./Nav.css";

const Nav = () => {
    return (
        <div className="nav">
            <div className="navbar">
                <div className="logo">
                    <img src="./logo.png"></img>
                    <h1>FXDX</h1>
                </div>
                <ul className="nav-items">
                    <li>
                        <a href="https://fxdx.exchange">Home</a>
                    </li>
                    <li>
                        <a href="https://algo.fxdx.exchange/dashboard">Stats</a>
                    </li>
                    <li>
                        <a href="https://algo.fxdx.exchange/earn">Earn</a>
                    </li>
                    <li>
                        <a href="https://fxdx.gitbook.io/a/algorand/trading">
                            Guide
                        </a>
                    </li>
                </ul>
                <a className="btn" href="#">
                    <div className="nav-btn">FXDX on Algorand</div>
                </a>
            </div>
            <ul className="mob-nav-items">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Traders</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
