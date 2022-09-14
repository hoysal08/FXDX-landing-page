import React from "react";
import "./Trading.css";

const Trading = () => {
  return (
    <!--<div
      className="features text-center trading_container"
      style={{
        marginTop: 0,
        marginBottom: 0,
      }}
    >
      <h3 className="section-header">NOW LIVE</h3>
      <h2 className="section-main-heading">START TRADING</h2>
      <p className="section-paragraph">
        We are continuously launching new perpetual contracts market.
      </p>
      <div className="bg_gradient" />
      <div className="trading">
        {/* {`
        $${Math.floor(dailyVolume / 1000000).toLocaleString(
          "en-US"
        )}
        `} */}
        <div className="table_title">
          <p className="title">Name</p>
          <p className="title">Last Price</p>
          <p className="title">24h Change</p>
          <p className="title">Market Cap</p>
        </div>
        <div className="table_title table_title2">
          <p className="title name">
            <img src="/bnb.svg" className="coin_img" />
            Giá BNB
            <span className="coin_code">(BNB)</span>
          </p>
          <p className="title data">$283.4</p>
          <p className="title data">+0.50%</p>
          <p className="title data">$45.658M</p>
        </div>
        <div className="table_title table_title2">
          <p className="title data name">
            <img src="/btc.svg" className="coin_img" />
            bitcoin
            <span className="coin_code">(BNB)</span>
          </p>
          <p className="title data">$283.4</p>
          <p className="title data">+0.50%</p>
          <p className="title data">$45.658M</p>
        </div>
        <div className="table_title table_title2">
          <p className="title data name">
            <img src="/binance.svg" className="coin_img" />
            binance
            <span className="coin_code">(BNB)</span>
          </p>
          <p className="title data">$283.4</p>
          <p className="title data">+0.50%</p>
          <p className="title data">$45.658M</p>
        </div>
        <div className="table_title table_title2">
          <p className="title data name">
            <img src="/eth.svg" className="coin_img" />
            Ethereum
            <span className="coin_code">(BNB)</span>
          </p>
          <p className="title data">$283.4</p>
          <p className="title data">+0.50%</p>
          <p className="title data">$45.658M</p>
        </div>
      </div>
      <a href="https://mainnet.fxdx.exchange/trade" className="trading_button">
        Get Started <img src="/arrowRight.svg" className="button_img" />
      </a>
    </div>-->
  );
};

export default Trading;
