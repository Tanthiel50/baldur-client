import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GameCard from './GameCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate

const GameCardGrid = ({ apiUrl, cardColors }) => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate(); // Initialisez useNavigate

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/${apiUrl}`);
        const data = response.data.slice(0, 3); // Limitez à 3 éléments pour l'exemple
        setItems(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
      }
    };

    fetchItems();
  }, [apiUrl]);

  // Fonction pour gérer le clic sur une carte d'article
  const handleCardClick = (itemId) => {
    navigate(`/articles/${itemId}`); // Naviguez vers la page de détails de l'article
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
                onClick={() => handleCardClick(item.id)} // Ajoutez l'événement onClick
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
