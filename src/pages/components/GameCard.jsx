// GameCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './GameCard.css'; // Assurez-vous de créer ce fichier CSS pour vos styles personnalisés

const GameCard = ({ bgColor, textColor, btnColor, gameTitle, gameInfo, buttonText }) => {
  return (
    <Card className="game-card" style={{ backgroundColor: bgColor }}>
      <Card.Body>
        <Card.Title style={{ color: textColor }}>{gameTitle}</Card.Title>
        <Card.Text style={{ color: textColor }}>{gameInfo}</Card.Text>
        <Button variant={btnColor}>{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

export default GameCard;