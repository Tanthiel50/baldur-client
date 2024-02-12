import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './CategoriesButton.css'; 

const categories = [
  'Taverne', 'Auberge', 'Marchands', 'Curiosités',
  'Reserve naturel', 'Events', 'Escape Game', 'Zone a risque'
];

const CategoryButton = ({ name }) => (
  <Button variant="secondary" className="category-button">{name}</Button>
);

const CategoriesButton = () => {
  return (
    <Container fluid className="categories-container">
      <h2 className="text-center text-light mb-4">Categories</h2>
      <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
        {categories.map((category, idx) => (
          <Col key={idx} className="d-flex justify-content-center">
            <CategoryButton name={category} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoriesButton;
