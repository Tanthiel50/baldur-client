import React from 'react';
import './Sidebard.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        Baldur
      </div>
      <ul className="sidebar-menu">
        <li>Dashboard</li>
        <li>Interest Article</li>
        <li>Interest points</li>
        <li>Media Interest</li>
        <li>Articles</li>
        <li>Catégories</li>
        <li>Media Article</li>
        <li>User</li>
      </ul>
    </div>
  );
};

export default Sidebar;
