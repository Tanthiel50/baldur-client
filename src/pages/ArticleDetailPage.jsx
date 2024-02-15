import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import PageHeader from './components/PageHeader';
import { Row, Col, Image } from 'react-bootstrap';
import categoriesInfo from './components/categoriesInfo';
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

  // Utiliser l'ID de la catégorie pour récupérer le nom de la catégorie
  const categoryName = article && categoriesInfo[article.pointCategories_id]
    ? categoriesInfo[article.pointCategories_id].name
    : 'Catégorie';

  const breadcrumbPath = (
    <>
      <Link to={`/categories/${article.pointCategories_id}`}>{categoryName}</Link> / {article.pointTitle}
    </>
  );

  const imageUrl = article.pointThumbnail ? `http://127.0.0.1:8000/storage/${article.pointThumbnail}` : 'URL_PAR_DEFAUT_SI_NECCESSAIRE';

  return (
    <div>
      <PageHeader
        title={article.pointTitle}
        breadcrumbPath={breadcrumbPath}
        backgroundImageUrl={imageUrl} 
      />

      <Row className="justify-content-md-center article-detail-container">
        <Col md={8}>
          <h1 className="article-title">{article.pointName}</h1>
          <div className="article-content">
            {/* <h2 className="article-subtitle">Velit dapibus sollicitudin sit iaculis</h2> */}
            <h3 className="article-subtitle"><span>Géré par :</span> {article.pointTitle}</h3>
            <h3 className="article-subtitle"><span>Tips:</span>  {article.pointtips}</h3>
            <h3 className="article-subtitle"><span>Localisation:</span> {article.pointAdress}</h3>
            <h3 className="article-subtitle"><span>Speciality:</span> {article.pointSpeciality}</h3>
            <h3 className="article-subtitle"><span>Description: </span>{article.pointDescription}</h3>
            <h3 className="article-subtitle"><span>What to expect ? : </span>{article.pointContent}</h3>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ArticleDetailPage;
