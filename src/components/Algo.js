import React from "react";
import "./Algo.css";

const Algo = () => {
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
                    <br />
                    $1,058.13
                </h2>
                <div className="algo-data">
                    <div className="chg">
                        <h4>1.05%</h4>
                        <p>CHG</p>
                    </div>
                    <div className="vol">
                        <h4>$167.5M</h4>
                        <p>VOLUME</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Algo;
