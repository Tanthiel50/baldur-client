import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GameCard from './GameCard';
import axios from 'axios';

const GameCardGrid = ({ apiUrl, cardColors }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/${apiUrl}`);
        const data = response.data.slice(0, 3); 
        setItems(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
      }
    };

    fetchItems();
  }, [apiUrl]);

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
