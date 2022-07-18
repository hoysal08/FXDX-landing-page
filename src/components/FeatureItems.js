import React from "react";
import "./FeatureItems.css";

const FeatureItems = (props) => {
    console.log(props.items);
    return (
        <div className="features-items">
            {props.items.map((item) => {
                return (
                    <div className="features-item">
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
