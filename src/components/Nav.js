import React from "react";
import "./Nav.css";

const Nav = () => {
    return (
        <div className="nav">
            <div className="navbar">
                <div className="logo">
                    <img src="./logodark.jpg"></img>
                    <h1>FXDX</h1>
                </div>
                <ul className="nav-items">
                    <li>
                        <a href="https://fxdx.exchange">Home</a>
                    </li>
                    <li>
                        <a href="https://mainnet.fxdx.exchange/stats">Stats</a>
                    </li>
                    <li>
                        <a href="https://mainnet.fxdx.exchange/buy_flp">
                            Add Liquidity
                        </a>
                    </li>
                    <li>
                        <a href="https://fxdxdex.github.io/howto/">Guide</a>
                    </li>
                </ul>
                <a className="btn" href="https://mainnet.fxdx.exchange/trade">
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
