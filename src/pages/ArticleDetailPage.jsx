import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PageHeader from './components/PageHeader';
import { Row, Col, Image } from 'react-bootstrap';

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

  const breadcrumbPath = (
    <>
      <Link to={`/categories/${article.pointCategories_id}`}>Catégorie</Link> / {article.pointTitle}
    </>
  );

  return (
    <div>
      <PageHeader
        title={article.pointTitle}
        breadcrumbPath={breadcrumbPath}
        backgroundImageUrl={article.pointThumbnail} 
      />

      <Row className="justify-content-md-center">
        <Col md={8}>
          <h1 className="article-title">{article.pointTitle}</h1>
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
    </div>
  );
};

export default ArticleDetailPage;
