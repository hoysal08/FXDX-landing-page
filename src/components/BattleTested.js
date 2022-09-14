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
                        <h2>$150,746,500</h2>
                        /* <h2>{`$${Math.floor(
                            totalVolume / 1000000
                        ).toLocaleString("en-US")}`}</h2>
                        */
                        <a href="https://mainnet.fxdx.exchange/buy_flp">Add Liquidity &rarr;</a>
                    </div>
                    <div className="right">
                        <h3>Total Trades</h3>
                        <h2>20000+</h2>
                        <a href="https://mainnet.fxdx.exchange/trade">Trade &rarr;</a>
                    </div>
                </div>
            </div>
            <img className="greenD-gradient" src="./green.png" alt="" />
        </div>
    );
};

export default BattleTested;
