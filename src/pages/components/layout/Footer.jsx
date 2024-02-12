import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4 pt-5">
      <Container>
        <Row className="align-items-start">
          <Col md={3}>
            <h5>About Gameplay</h5>
            <ul className="list-unstyled">
              <li>About us</li>
              <li>Contact us</li>
              <li>Careers</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Buy</h5>
            <ul className="list-unstyled">
              <li>How to buy</li>
              <li>Games list</li>
              <li>Collections</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Help</h5>
            <ul className="list-unstyled">
              <li>FAQ</li>
              <li>How to active game</li>
              <li>Create a ticket</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Community</h5>
            <ul className="list-unstyled">
              <li>Blog</li>
              <li>Giveaways</li>
              <li>Become affiliate</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row className="align-items-center justify-content-between">
          <Col md={4}>
            <p>Legal Privacy policy Our thanks Cookie declaration</p>
          </Col>
          <Col md={4} className="text-center">
            <FaFacebookF />
            <FaTwitter className="mx-3" />
            <FaInstagram />
          </Col>
          <Col md={4} className="text-md-right">
            <p>© 2022 GamePlay. Design by ThemeWarrior</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;