import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './aticleGrid.css';

const ArticlesGrid = ({ apiUrl }) => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data } = await axios.get(apiUrl);
        // Ajoutez la logique pour construire l'URL complète ici si nécessaire
        const updatedData = data.map(article => ({
          ...article,
          // Assurez-vous que 'pointThumbnail' contient le chemin après 'storage/'
          pointThumbnail: article.pointThumbnail ? `http://127.0.0.1:8000/storage/${article.pointThumbnail}` : 'placeholder-image.jpg',
        }));
        setArticles(updatedData);
      } catch (error) {
        console.error('Erreur lors de la récupération des articles:', error);
      }
    };

    fetchArticles();
  }, [apiUrl]);

  const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  };

  const handleCardClick = (articleId) => {
    navigate(`/articles/${articleId}`);
  };

  return (
    <Container className="my-4">
      <Row>
        {articles.map((article, index) => (
          <Col key={index} lg={4} md={6} className="mb-3">
            <Card className='articleCard' onClick={() => handleCardClick(article.id)}> 
              <Card.Img variant="top" src={article.pointThumbnail} />
              <Card.Body>
                <Card.Title>{article.pointTitle}</Card.Title>
                <Card.Text>
                  {truncateText(article.pointContent, 80)}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ArticlesGrid;