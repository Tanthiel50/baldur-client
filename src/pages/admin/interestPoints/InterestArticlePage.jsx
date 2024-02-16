import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import Sidebar from '../../components/admin/Sidebard';
import categoriesInfo from '../../components/categoriesInfo';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import GenericTablePage from '../../components/admin/GenericTablePage';

const InterestArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/interestpoints');
        setArticles(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des interest points:', error);
      }
    };

    fetchArticles();
  }, []);

  const handleCreateNewClick = () => {
    navigate('/admin/create-interest-point'); 
  };

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/interestpoints');
      setArticles(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des interest points:', error);
    }
  };

  const handleDelete = async (articleId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/interestpoints/${articleId}`);
      toast.success('Article supprimé avec succès');
      fetchArticles();
    } catch (error) {
      toast.error('Erreur lors de la suppression de l\'article');
      console.error('Erreur lors de la suppression:', error);
    }
  };

  const handleEditClick = (articleId) => {
    navigate(`/admin/edit-interest-point/${articleId}`);
  };


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
