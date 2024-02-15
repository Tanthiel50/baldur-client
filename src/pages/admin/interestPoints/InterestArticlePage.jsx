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

  return (
    <div className="admin-container">
    <Sidebar />
    <div className="admin-content">
      <h1>Liste des articles</h1>
    <Button onClick={handleCreateNewClick} className="mb-3">Créer nouvel article</Button>
    <Table striped bordered hover responsive >
      <thead>
        <tr>
          <th>Title</th>
          <th>Catégorie</th>
          <th>Publié par</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article, index) => (
          <tr key={article.id}>
            <td>{article.pointTitle}</td>
            <td>{categoriesInfo[article.pointCategories_id]?.name || 'Non catégorisé'}</td>
            <td>{article.user.firstName}</td>
            <td>{new Date(article.created_at).toLocaleDateString()}</td>
            <td> 
              <FaEdit onClick={() => navigate(`/admin/edit-interest-point/${article.id}`)} />
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
