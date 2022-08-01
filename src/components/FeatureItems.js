import React from "react";
import "./FeatureItems.css";

const FeatureItems = (props) => {
    return (
        <div className="features-items">
            {props.items.map((item, index) => {
                return (
                    <div className="features-item" key={index}>
                        <img src={item.img} alt="" />
                        {/* <div className="item-info"> */}
                        <h3>{item.heading}</h3>
                        <p>{item.para}</p>
                        {/* </div> */}
                    </div>
                );
            })}
        </div>
    );
};

export default FeatureItems;
