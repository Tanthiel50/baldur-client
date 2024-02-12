import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import './PageHeader.css'; 

const PageHeader = ({ title, breadcrumbPath, backgroundImageUrl }) => {
  return (
    <div className="page-header" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <Container>
        <Row>
          <Col>
            <h1>{title}</h1>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>{breadcrumbPath}</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageHeader;
