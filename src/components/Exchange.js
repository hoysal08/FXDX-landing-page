import React from "react";
import "./Exchange.css";

const Exchange = () => {
    return (
        <div className="exchange-container">
            <div className="exchange text-center">
                <h3 className="section-header">FXDX EXCHANGE</h3>
                <h2 className="section-main-heading">
                    SINGLE LIQUIDITY ENDPOINT
                </h2>
                <p className="section-paragraph">
                    We built the fastest and most powerful decentralized
                    exchange ever.
                </p>
                <img className="exchange-img" src="./fxdx.png" alt="" />
                <img
                    className="exchange-img-mob"
                    src="./exchange-mob.png"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Exchange;
