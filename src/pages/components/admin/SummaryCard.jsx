import React from 'react';
import './SummaryCard.css'; 

const SummaryCard = ({ title, count, icon }) => {
  return (
    <div className="summary-card">
      <div className="summary-content">
        <div className="summary-count">{count}</div>
        <div className="summary-title">{title}</div>
      </div>
    </div>
  );
};

export default SummaryCard;
