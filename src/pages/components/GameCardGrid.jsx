import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GameCard from './GameCard';

const GameCardGrid = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Simuler un appel API
    const fetchGames = async () => {
      // Vous remplacerez cette URL par l'URL de votre API
      const response = await fetch('#');
      const data = await response.json();
      setGames(data);
    };

    fetchGames();
  }, []);

  return (
    <Container>
      <Row>
        {games.map((game, index) => (
          <Col key={index} md={3}>
            <GameCard
              bgColor={game.bgColor}
              textColor={game.textColor}
              btnColor={game.btnColor}
              gameTitle={game.title}
              gameInfo={game.info}
              buttonText={game.buttonText}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GameCardGrid;