import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate
import './Sidebard.css';

const Sidebar = () => {
  const navigate = useNavigate(); 

  const handleItemClick = (path) => {
    navigate(path); 
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        Baldur
      </div>
      <ul className="sidebar-menu">
        <li onClick={() =>handleItemClick ('/admin')}>Dashboard</li>
        <li onClick={() => handleItemClick('/admin/interest-articles')}>Interest Article</li>
        <li onClick={() => handleItemClick('/admin/interest-categories')}>Interest Catégories</li>
        <li>Interest Pictures</li>
        {/* ...autres éléments de la liste */}
      </ul>
    </div>
  );
};

export default Sidebar;
