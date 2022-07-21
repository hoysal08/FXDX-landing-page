import React, { useEffect, useState } from "react";
import "./BattleTested.css";

const BattleTested = () => {
    const [data, setData] = useState("");

    let url =
        "https://api.mainnet.fxdx.exchange/api/volumes/daily_and_total/?format=json";
    useEffect(() => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
                console.log(data);
            });
    }, []);

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
                        <h2>$465,567,718</h2>
                        <p>Last 24 H</p>
                    </div>
                    <div className="right">
                        <h3>Trades</h3>
                        <h2>110,893</h2>
                        <p>Last 24 H</p>
                    </div>
                </div>
            </div>
            <img className="greenD-gradient" src="./green.png" alt="" />
        </div>
    );
};

export default BattleTested;
