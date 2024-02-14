import React from "react";
import SummaryCard from "./components/admin/SummaryCard";
import "./Admin.css";
import Sidebar from "./components/admin/Sidebard";

function Admin() {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
        {/* Groupe 1 de SummaryCards */}
        <div className="summary-card-row">
          <SummaryCard title="Articles" count="10" />
          <SummaryCard title="Catégories" count="10" />
          <SummaryCard title="Images" count="10" />
        </div>
        {/* Groupe 2 de SummaryCards */}
        <div className="summary-card-row">
          <SummaryCard title="Points d'intéret" count="10" />
          <SummaryCard title="Catégories interets" count="10" />
          <SummaryCard title="Images interets" count="10" />
        </div>
      </div>
    </div>
  );
}

export default Admin;
