import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import axios from 'axios';
import './ArticleDetailPage.css';

const ArticleDetailPage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/interestpoints/${articleId}`);
        setArticle(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'article:', error);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (!article) return <div>Chargement de l'article...</div>;

  return (
    <Container className="article-detail-container" style={{ backgroundColor:'#0D1B2A'}}>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Image src={article.pointThumbnail} alt={article.pointTitle} fluid />
          <h1 className="article-title">{article.pointTitle}</h1>
          <p className="article-meta">
            {new Date(article.created_at).toLocaleDateString()}
          </p>
          <div className="article-content">
            <h2 className="article-subtitle">Velit dapibus sollicitudin sit iaculis</h2>
            <h3 className="article-subtitle">Géré par :{article.pointName}</h3>
            <h3 className="article-subtitle">Bon à savoir: {article.pointtips}</h3>
            <h3 className="article-subtitle">Localisation: {article.pointAdress}</h3>
            <h3 className="article-subtitle">A tester: {article.pointSpeciality}</h3>
            <p>{article.pointContent}</p>
          </div>
          {/* Ajoutez plus de contenu de l'article ici */}
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleDetailPage;
