import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)` }}>
      <Container>
        <Row className="align-items-center">
          <Col md={12} className="text-center">
            <h1>Découvrez Baldur's Gate !</h1>
            <p className="my-4 subtitle">Lorem ipsum dolor sit amet consectetur adipiscing elit posuere estas quam fermentum platea morbi duisit nunc vitae fringilla fermentum.</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col md={3}>
            <div className="info-box">
              <h3>Best city in the world</h3>
              <p>In my opinion</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="info-box">
              <h3>Very fun guards</h3>
              <p>Just don't stand too close</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="info-box">
              <h3>People are very nice</h3>
              <p>But keep your sword close</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="info-box">
              <h3>Trusted Reviews</h3>
              <p>Rated 5, based on 1 review</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroBanner;