import React from "react";
import "./Roadmap.css";

const Roadmap = () => {
  return (
    <div className="roadmap">
      <img src="/roadmap_bg.svg" className="roadmap_bg" />
      <div className="roadmap_left">
        <div className="roadmap_title">
          <h3 className="roadmap_title1">PRODUCT DEVELOPMENT</h3>
          <h2 className="roadmap_title2">ROAD MAP</h2>
        </div>
        <div className="roadmap_content">
          <h3 className="roadmap_quarter q3">Q3</h3>
          <h3 className="roadmap_year">2022</h3>
          <ul className="roadmap_points">
            <li>
              Mainnet
              <br />
              Launch
            </li>
            <li>More Listings</li>
            <li>Oracle Improvement</li>
          </ul>
          <ul className="roadmap_months">
            <li>July</li>
            <li>Aug</li>
            <li>Sep</li>
          </ul>
        </div>
      </div>
      <div className="roadmap_center">
        <div className="roadmap_content">
          <h3 className="roadmap_quarter q3">Q4</h3>
          <h3 className="roadmap_year">2022</h3>
          <ul className="roadmap_points">
            <li>Cross-chain Integration</li>
            <li>Bridge Integration</li>
            <li>Derivatives as Infrastructure Development</li>
          </ul>
          <ul className="roadmap_months">
            <li>Oct</li>
            <li>Nov</li>
            <li>Dec</li>
          </ul>
        </div>
      </div>
      <div className="roadmap_right">
        <div className="roadmap_content">
          <h3 className="roadmap_quarter q1">Q1</h3>
          <h3 className="roadmap_year">2023</h3>
          <ul className="roadmap_points">
            <li>NFT Derivatives</li>
            <li>OTC Integration</li>
            <li>Block Trading</li>
            <li>Multi-chain NFT Marketplace</li>
          </ul>
          <ul className="roadmap_months">
            <li>Jan</li>
            <li>Feb</li>
            <li>Mar</li>
          </ul>
        </div>
        <div className="roadmap_logo">
          <img src="/logo.svg" className="roadmap_img" />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
