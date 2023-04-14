import React from "react";
import "./BuyAlgo.css";

const BuyAlgo = () => {
  return (
    <div className="features" style="display:none;">
      <div className="trading">
        <div className="algo">
          <div className="algo_left">
            <h3 className="algo_buy">buy usdc on</h3>
            <h2 className="algo_title">algorand</h2>
            <p className="algo_maxc">
              Powered by <img src="/maxc.png" className="maxc_img" />
            </p>
            <button className="trading_button"><a href="https://tinyurl.com/algousdc" target="_blank">Buy</a></button>
          </div>
          <div className="algo_right">
            <span className="dollar_img_bg" />
            <img src="/dollar.svg" className="dollar_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyAlgo;
