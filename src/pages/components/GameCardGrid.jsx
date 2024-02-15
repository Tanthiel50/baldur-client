import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GameCard from './GameCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GameCardGrid = ({ apiUrl, cardColors }) => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/${apiUrl}`);
        const updatedData = response.data.slice(0, 3).map(item => ({
          ...item,
          // Assurez-vous que la structure de l'objet correspond et ajustez le chemin si nécessaire
          pointThumbnail: `http://127.0.0.1:8000/storage/${item.pointThumbnail}`
        }));
        setItems(updatedData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
      }
    };

    fetchItems();
  }, [apiUrl]);

  const handleCardClick = (itemId) => {
    navigate(`/articles/${itemId}`);
  };

  return (
    <Container className="my-3 p-3" style={{ borderRadius: '8px', backgroundColor: cardColors.gridBackground }}>
      <Row>
        {items.length > 0 ? (
          items.map((item, index) => (
            <Col key={index} md={4}>
              <GameCard
                bgColor={cardColors.bgColor}
                btnColor={cardColors.btnColor}
                title={item.pointTitle}
                thumbnail={item.pointThumbnail}
                content={item.pointContent}
                onClick={() => handleCardClick(item.id)}
              />
            </Col>
          ))
        ) : (
          <div>Chargement des articles...</div>
        )}
      </Row>
    </Container>
  );
};

export default GameCardGrid;
