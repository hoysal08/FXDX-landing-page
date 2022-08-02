import React from "react";
import "./BattleTested.css";

const BattleTested = ({ dailyCount, dailyVolume }) => {
    return (
        <div className="battle-tested-container">
            <div className="battle-tested">
                <h3 className="section-header">BATTLE TESTED</h3>
                <h1 className="section-main-heading">
                    Trusted by over 2500 traders
                </h1>
                <p className="section-paragraph">
                    We believe everyone should have access to open & powerful
                    financial tools
                </p>
                <div className="btCards">
                    <div className="left">
                        <h3>Trading Volume</h3>
                        <h2>{`$${Math.floor(
                            dailyVolume / 1000000
                        ).toLocaleString("en-US")}`}</h2>
                        <p>Last 24 H</p>
                        <a>Trade &rarr;</a>
                    </div>
                    <div className="right">
                        <h3>Trades</h3>
                        <h2>{dailyCount}</h2>
                        <p>Last 24 H</p>
                    </div>
                </div>
            </div>
            <img className="greenD-gradient" src="./green.png" alt="" />
        </div>
    );
};

export default BattleTested;
