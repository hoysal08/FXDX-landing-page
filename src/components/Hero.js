import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <h3 className="section-header">ABOUT FXDX EXCHANGE</h3>
        <h2>
          Decentralised Infrastructure<br></br> for Perpetual Futures,
          <br></br> with
          <span className="green-gradient"> Limitless Liquidity</span>
        </h2>
        <p className="section-paragraph">
          FXDX aims to build derivatives products by bringing together all the
          liquidity sources across multiple blockchains into a single platform,
          enabling unlimited liquidity and providing best trade execution at
          fastest speed and lowest cost.
        </p>
        <div className="hero-social">
          <a href="https://twitter.com/fxdxdex" target="_blank">
            <img src="/twitter.svg" height={55} width={55} />
          </a>
          <a href="https://t.me/fxdxdex" target="_blank">
            <img src="/telegram.svg" height={55} width={55} />
          </a>
          <a href="https://t.me/fxdxannouncement" target="_blank">
            <img src="/telegram.svg" height={55} width={55} />
          </a>
          <a href="https://discord.gg/pp8xW24pxb" target="_blank">
            <img src="/discord.svg" height={55} width={55} />
          </a>
          <a href="https://github.com/fxdxdex" target="_blank">
            <img src="/github.svg" height={55} width={55} />
          </a>
          <a href="https://fxdxdex.zendesk.com/hc/en-in" target="_blank">
            <img src="/zendesk.svg" height={55} width={55} />
          </a>
          <a href="https://fxdxdex.medium.com/" target="_blank">
            <img src="/medium.svg" height={55} width={55} />
          </a>
        </div>
      </div>
      <img className="purple-gradient" src="./purple.png" alt="" />
    </div>
  );
};

export default Hero;
