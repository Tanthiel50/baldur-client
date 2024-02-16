import React, { useState, useEffect } from "react";
import categoriesInfo from '../../components/categoriesInfo';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import GenericTablePage from '../../components/admin/GenericTablePage';

const InterestArticlesPage = () => {
  return (
    <GenericTablePage
      title="Liste des articles"
      createPath="/admin/create-interest-point"
      fetchDataUrl="http://127.0.0.1:8000/api/interestpoints"
      deleteDataUrl="http://127.0.0.1:8000/api/interestpoints"
      editPathPrefix="/admin/edit-interest-point"
      columns={["Nom du point", "Personne", "Catégorie", "Rédaction", "Date de création", "Action"]}
      mapDataToRow={(handleEditClick, handleDelete) => (item) => (
        <tr key={item.id}>
          <td>{item.pointName}</td>
          <td>{item.pointTitle}</td>
          <td>{categoriesInfo[item.pointCategories_id]?.name || 'Non catégorisé'}</td>
          <td>{item.user.firstName}</td>
          <td>{item.created_at}</td>
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
