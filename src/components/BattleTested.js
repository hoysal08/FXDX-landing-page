import React from "react";
import "./BattleTested.css";

const BattleTested = ({ dailyCount, totalVolume }) => {
    return (
        <div className="battle-tested-container">
            <div className="battle-tested">
                <h3 className="section-header">BATTLE TESTED</h3>
                <h1 className="section-main-heading">
                    Trusted by traders
                </h1>
                <p className="section-paragraph">
                    We believe everyone should have access to open & powerful
                    financial tools
                </p>
                <div className="btCards">
                    <div className="left">
                        <h3>Total Volume</h3>
                        <h2>$400,000,000+</h2>
                    </div>
                    <div className="right">
                        <h3>Total Trades</h3>
                        <h2>55,000+</h2>
                    </div>
                </div>
            </div>
            <img className="greenD-gradient" src="./green.png" alt="" />
        </div>
    );
};

export default BattleTested;
