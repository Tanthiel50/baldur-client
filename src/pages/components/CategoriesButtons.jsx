import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './CategoriesButton.css'; 

const categories = [
  { name: 'Auberges', id: 1 },
  { name: 'Marchands', id: 2 },
  { name: 'Tavernes', id: 3 },
  { name: 'Curiosités', id: 4 },
  { name: 'Rserve naturel', id: 5 },
  { name: 'Zone à risques', id: 6 },
  { name: 'Escape Game', id: 7 },
];

const CategoryButton = ({ category }) => {
  const navigate = useNavigate();

  const handleButtonClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <Button 
      variant="secondary" 
      className="category-button" 
      onClick={() => handleButtonClick(category.id)}
    >
      {category.name}
    </Button>
  );
};

const CategoriesButton = () => {
  return (
    <Container fluid className="categories-container">
      <h2 className="text-center text-light mb-4">A voir</h2>
      <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
        {categories.map((category, idx) => (
          <Col key={idx} className="d-flex justify-content-center">
            <CategoryButton category={category} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoriesButton;
