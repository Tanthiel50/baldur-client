import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

const ArticlesGrid = ({ apiUrl }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data } = await axios.get(apiUrl);
        setArticles(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des articles:', error);
      }
    };

    fetchArticles();
  }, [apiUrl]);

  const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  };

  return (
    <Container className="my-4">
      <Row>
        {articles.map((article, index) => (
          <Col key={index} lg={4} md={6} className="mb-3">
            <Card>
              <Card.Img variant="top" src={article.pointThumbnail || 'placeholder-image.jpg'} />
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
