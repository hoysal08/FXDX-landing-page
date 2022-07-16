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
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Traders</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
                <div className="nav-btn">FXDX on Algorand</div>
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
