import React from "react";
import FeatureItems from "./FeatureItems";
import "./Features.css";

const Features = () => {
    const featureItems = [
        {
            img: "./blue-lighting.png",
            heading: "Lightning fast trades",
            para: "Trades execute on our platform instantly and settle in a matter of seconds.",
        },
        {
            img: "./gas-pink.png",
            heading: "Low gas fees",
            para: "We are building on L1 and L2 blockchains where fees will not an issue for our traders.",
        },
        {
            img: "./card-green.png",
            heading: "Low transaction fees",
            para: "We have a tiered and incentivized fees, that is, higher the trade value lower is the fees.",
        },
        {
            img: "./lock-purple.png",
            heading: "Non custodial",
            para: "Maintain control of your own keys and assets with our non-custodial solution.",
        },
        {
            img: "./coin-yellow.png",
            heading: "Minimizes liquidation",
            para: "Positions that become under collateralized are only liquidated partially to bring up margin.",
        },
        {
            img: "./bar-blue.png",
            heading: "Maximizes gains",
            para: "Leverage your trade to maximize your returns as the crypto rally or crash.",
        },
    ];
    return (
        <div className="features-container">
            <img className="dgreen-gradient" src="./green.png" alt="" />

            <div className="features text-center">
                <h3 className="section-header">FEATURES</h3>
                <h2 className="section-main-heading">FASTEST, MOST POWERFUL</h2>
                <p className="section-paragraph">
                    We built the fastest and most powerful decentralized
                    exchange ever
                </p>
                <FeatureItems
                    className="fi"
                    items={featureItems}
                />
            </div>
            <img className="dpurple-gradient" src="./purple-full.png" alt="" />
        </div>
    );
};

export default Features;
