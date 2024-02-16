import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import Sidebar from '../../components/admin/Sidebard';
import categoriesInfo from '../../components/categoriesInfo';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const InterestArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/pointcategories');
        setArticles(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des interest points categories:', error);
      }
    };

    fetchArticles();
  }, []);

  const handleCreateNewClick = () => {
    navigate('/admin/create-interest-categorie'); 
  };

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/pointcategories');
      setArticles(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des interest points categories:', error);
    }
  };

  const handleDelete = async (articleId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/pointcategories/${articleId}`);
      toast.success('Article supprimé avec succès');
      fetchArticles();
    } catch (error) {
      toast.error('Erreur lors de la suppression de la catégorie');
      console.error('Erreur lors de la suppression:', error);
    }
  };

  const handleEditClick = (articleId) => {
    navigate(`/admin/edit-interest-categories/${articleId}`);
  };


  return (
    <div className="admin-container">
    <Sidebar />
    <div className="admin-content">
      <h1>Liste des catégories interest</h1>
    <Button onClick={handleCreateNewClick} className="mb-3">Créer une nouvelle catégorie</Button>
    <Table striped bordered hover responsive >
      <thead>
        <tr>
          <th>Title</th>
          <th>Catégorie</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article, index) => (
          <tr key={article.id}>
            <td>{article.pointCategoryName}</td>
            <td>{categoriesInfo[article.id]?.name || 'Non catégorisé'}</td>
            <td> 
              <FaEdit onClick={() => handleEditClick(article.id)} />
              <FaTrashAlt onClick={() => handleDelete(article.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
    </div>
  );
};

export default InterestArticlesPage;
