import React from "react";
import "./Nav.css";
import { useState } from "react";
import { useEffect } from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  function handleClick(event){
      if(isOpen){
        width = 1001
      }
      else if(width < 1000)
      {event.preventDefault()}
    setIsOpen(!isOpen);
  }

function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

const isMobile = width <= 768;
  return (
    <div className="nav">
      <div className="navbar">
        <div className="logo">
          <img
            src="./newlogo.png"
            style={{
              height: 50,
            }}
          />
        </div>
        
        <ul className="nav-items">
          <li>
            <a href="https://fxdx.exchange">Home</a>
          </li>
          <li>
            <a href="https://stats.fxdx.exchange/">Stats</a>
          </li>
          <li>
            <a href="https://mainnet.fxdx.exchange/buy_flp">Add Liquidity</a>
          </li>
          <li>
            <a href="https://fxdxdex.github.io/howto/">Guide</a>
          </li>
        </ul>

        <a className="btn" href="https://mainnet.fxdx.exchange/trade" onClick={handleClick}>
          <div className="nav-btn">FXDX on Algorand</div>
        </a>

      </div>
    
      {isOpen ? 
      <div>
      <ul className="mob-nav-items">
        <li>
            <a href="https://fxdx.exchange">Home</a>
          </li>
          <li>
            <a href="https://stats.fxdx.exchange/">Stats</a>
          </li>
          <li>
            <a href="https://mainnet.fxdx.exchange/buy_flp">Add Liquidity</a>
          </li>
          <li>
            <a href="https://fxdxdex.github.io/howto/">Guide</a>
          </li>
      </ul> </div>: <></> }
      
    </div>
  );
};

export default Nav;
