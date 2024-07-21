import React from 'react';
import './MainDash.css'; // Import the CSS file for styling

const EarlyWarningsMainDash = ({ earlyWarningData, setSelectedWarning }) => {
  const handleWarningSelect = (warning) => {
    setSelectedWarning(warning);
  };

  return (
    <div className="early-warnings-main-dash">
      <h2>Early Warnings</h2>
      <div className="early-warnings-list">
        {earlyWarningData.map((warning) => (
          <div
            key={warning.id}
            className="early-warning-item"
            onClick={() => handleWarningSelect(warning)}
          >
            <div className="warning-content">
              <img src="path/to/profile.jpg" alt="Profile" className="profile-img" /> {/* Add the profile image */}
              <h3 className="warning-headline">{warning.headline}</h3>
            </div>
            <p className="warning-text" style={{ fontSize: '16px' }}>{warning.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarlyWarningsMainDash;
