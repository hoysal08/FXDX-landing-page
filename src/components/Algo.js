import React from "react";
import "./Algo.css";

const Algo = ({ algoPrice, percentChange, dailyVolume }) => {
    return (
        <div className="algo">
            <img className="algo-img" src="./algo-deco.png" alt="" />
            <div className="left">
                <p className="section-header">NOW LIVE</p>
                <h2 className="section-main-heading">
                    START <br /> TRADING
                </h2>
                <p className="section-paragraph">
                    We are continuosly launching new <br /> perpetual contracts
                    market.
                </p>
            </div>
            <div className="right">
                <p className="section-header">ALGO</p>
                <h2 className="section-main-heading">
                    <span className="purple-gradient-text">ALGORAND</span>
                    <br />${algoPrice.toFixed(6)}
                </h2>
                <div className="algo-data">
                    <div className="chg">
                        <h4>{percentChange.toFixed(2)}%</h4>
                        <p>CHG</p>
                    </div>
                    <div className="vol">
                        <h4>
                            {`
                           $${Math.floor(dailyVolume / 1000000).toLocaleString(
                               "en-US"
                           )}
                            `}
                        </h4>
                        <p>VOLUME</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Algo;
