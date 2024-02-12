import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './GameCard.css';

const GameCard = ({ bgColor, btnColor, title, thumbnail, content }) => {
  const buttonStyle = {
    background: btnColor,
    borderColor: btnColor,
  };

  return (
    <Card className="game-card" style={{ backgroundColor: bgColor, backgroundImage: `url(${thumbnail})`, backgroundSize: 'cover', color: '#fff' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{textAlign: 'left'}}>{content?.substring(0, 80)}...</Card.Text>
        <Button style={buttonStyle}>Découvrir</Button>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
