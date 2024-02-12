import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './CategoriesButton.css';
import categoriesInfo from './categoriesInfo'; 

const CategoryButton = ({ name, id }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/categories/${id}`);
  };

  return (
    <Button 
      variant="secondary" 
      className="category-button" 
      onClick={handleButtonClick}
    >
      {name}
    </Button>
  );
};

const CategoriesButton = () => {
  
  const categoriesArray = Object.entries(categoriesInfo).map(([id, { name }]) => ({
    id,
    name,
  }));

  return (
    <Container fluid className="categories-container">
      <h2 className="text-center text-light mb-4">À voir</h2>
      <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
        {categoriesArray.map((category, idx) => (
          <Col key={idx} className="d-flex justify-content-center">
            <CategoryButton {...category} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoriesButton;
