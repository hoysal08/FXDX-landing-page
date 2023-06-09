import React from "react";
import "./InvestorsImg.css";

const InvestorsImg = (props) => {
    return (
        <div className="investor-img">
            {props.items.map((item, index) => (
                <div key={index}>
                    <img src={item.img}></img>
                </div>
            ))}
        </div>
    );
};

export default InvestorsImg;
