import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import EarlyWarnings from "../EarlyWarnings/EarlyWarnings";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Critical Resource Orders</h3>
        <Updates />
      </div>
      {/* <div>
        <h3>Early Warnings</h3>
        <EarlyWarnings />
      </div> */}
    </div>
  );
};

export default RightSide;
