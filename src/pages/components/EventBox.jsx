import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const EventBox = () => {
  return (
    <Container fluid className="text-light p-5" style={{ backgroundColor: '#0D1B2A' }}> {/* Remplacer par votre couleur de fond exacte */}
      <Row>
        <Col md={6} className="d-flex align-items-center justify-content-center">
          {/* Ici, vous ajouterez l'image ou un autre contenu pour la partie gauche */}
        </Col>
        <Col md={6} className="p-5">
          <div className="mb-4">
            <h5 className="text-secondary">EVENTS</h5> 
            <h2>Dernier evenement en date</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus leo porta nunc, velit. Dui justo, non platea viverra aliquam convallis arcu molestie egestas. Voluptat integer tristique ac nam integer. Hac ut nisi, ut amet donec porta.
          </p>
          <Button className="button-5">En savoir plus</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default EventBox;