import React, { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import GenericTablePage from "../../components/admin/GenericTablePage";

const InterestArticlesPage = () => {
  return (
    <GenericTablePage
      title="Liste des catégories"
      createPath="/admin/create-interest-categorie"
      fetchDataUrl="http://127.0.0.1:8000/api/pointcategories"
      deleteDataUrl="http://127.0.0.1:8000/api/categories"
      editPathPrefix="/admin/edit-interest-categories"
      columns={["Title", "Action"]}
      mapDataToRow={(handleEditClick, handleDelete) => (item) => (
        <tr key={item.id}>
          <td>{item.pointCategoryName}</td>
          <td>
            <FaEdit onClick={() => handleEditClick(item.id)} />
            <FaTrashAlt onClick={() => handleDelete(item.id)} />
          </td>
        </tr>
      )}
    />
  );
};

export default InterestArticlesPage;
