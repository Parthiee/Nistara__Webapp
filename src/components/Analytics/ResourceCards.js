// src/components/ResourceCards.js
import React from 'react';
import './ResourceCards.css'; // Ensure styles are imported

const ResourceCards = ({ onCardClick }) => {
  const categories = [
    'Emergency Lighting and Communication',
    'Health and Hygiene',
    'Tools and Equipment',
    'Personal Items',
    'Clothing and Shelter',
    'Safety and Protection'
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Resource Categories</h2>
      <div className="ResourceCards" style={{paddingBottom: '10%' }}>
        {categories.map((category, index) => (
          <div
            key={index}
            className="ResourceCard"
            onClick={() => onCardClick(category)}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceCards;
