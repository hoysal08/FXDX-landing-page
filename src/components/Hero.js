import React from "react";
import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero">
                <h3 className="section-header">ABOUT FXDX EXCHANGE</h3>
                <h2>
                    Decentralised Infrastructure for Perpetual Futures, with
                    <span className="green-gradient"> Limitless Liquidity</span>
                </h2>
                <p>
                    FXDX aims to build derivatives products by bringing together
                    all the liquidity sources across multiple blockchains into a
                    single platform, enabling unlimited liquidity and providing
                    best trade execution at fastest speed and lowest cost.
                </p>
            </div>
            <img className="purple-gradient" src="./purple.png" alt="" />
        </div>
    );
};

export default Hero;
