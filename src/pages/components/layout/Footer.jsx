import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4 pt-5">
      <Container>
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
            <p>© Baldur</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;