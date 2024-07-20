// Updates.js
import React, { useState } from "react";
import "./Updates.css";
import { UpdatesData } from "../../Data/Data";

const Updates = () => {
  const [approved, setApproved] = useState(Array(UpdatesData.length).fill(false));

  const handleApprove = (index) => {
    const newApproved = [...approved];
    newApproved[index] = true;
    setApproved(newApproved);
  };

  return (
    <div className="Updates">
      {UpdatesData.map((update, id) => (
        <div className="update" key={id}>
          <img src={update.img} alt="profile" />
          <div className="noti">
            <div style={{ marginBottom: '0.5rem' }}>
              <span>{update.name}</span>
              <span> {update.noti}</span>
            </div>
            <span>{update.time}</span>
          </div>
          {approved[id] ? (
            <button className="satisfiedButton">Satisfied</button>
          ) : (
            <button className="approveButton" onClick={() => handleApprove(id)}>Approve</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Updates;
