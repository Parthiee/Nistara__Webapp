import React from "react";

import "./EarlyWarnings.css";
import { WarningsData } from "../../Data/Data";

const EarlyWarnings = () => {
  return (
    <div className="early-warnings-container">
      {WarningsData.map((update) => (
        <div className="early-warning-item" key={update.id}>
          <img src={update.imageUrl} alt="profile" className="profile-img" />
          <div className="noti-container">
            <div className="early-warning-item-content">
              <div>
                <span className="headline">{update.headline}</span>
                <p className="content">{update.content}</p>
              </div>
              <span className="time">{update.time}</span>
            </div>
            {update.readMore && (
              <a href={update.readMore} className="approve-button">
                Read More
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EarlyWarnings;
