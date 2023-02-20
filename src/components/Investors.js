import React from "react";
import "./Investors.css";
import InvestorsImg from "./InvestorsImg";

const Investors = () => {
  const investorsImg = [
    { img: "./draper.png" },
    { img: "./bc.png" },
    { img: "./algo.png" },
    { img: "./valhalla.png" },
    { img: "./shima.png" },
    { img: "./crown.png" },
    { img: "./ventures.png" },
    { img: "./gsr.png" },
    { img: "./polygon.png" },
    { img: "./dfyn.png" },
    { img: "./s.png" },
    { img: "./meta.png" },
    { img: "./sheesha.png" },
    { img: "./hodl.png" },
    { img: "./kretos.png" },    
    { img: "./ex.png" },
  ];

  return (
    <!--<div className="investor-container">
      <div className="investor text-center">
        <h3 className="section-header">OUR INVESTORS</h3>
        <h2 className="section-main-heading">BACKED BY THE BEST</h2>
        <p className="section-paragraph">
          Our global investors include angel investors &amp; leading funds.
        </p>
        <InvestorsImg items={investorsImg}></InvestorsImg>
      </div>
      <img className="dgreen-gradient" src="./green.png" alt="" />
    </div>-->
  );
};

export default Investors;
