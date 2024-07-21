// GraphSection.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const GraphSection = ({ selectedWarning, currentStock }) => {
  if (!selectedWarning) return <p>Select a warning to view graphs</p>;

  const categories = [
    'Emergency Lighting and Communication',
    'Health and Hygiene',
    'Tools and Equipment',
    'Personal Items',
    'Clothing and Shelter',
    'Safety and Protection'
  ];

  return (
    <div className="graph-section" style={{paddingRight:'20px'}}>
      <h2>{selectedWarning.headline} - Resource Comparison</h2>
      {categories.map((category) => {
        const data = currentStock[category] || [];
        
        return (
          <div key={category} className="category-chart">
            <h3>{category}</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="resourceName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="currentStock" fill="#8884d8" name="Current Stock" />
                <Bar dataKey="estimatedStock" fill="#82ca9d" name="Estimated Stock" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );
      })}
    </div>
  );
};

export default GraphSection;
