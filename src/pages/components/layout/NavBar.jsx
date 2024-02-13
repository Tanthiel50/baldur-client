import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Baldur</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
        <Nav.Link as={Link} to="/">La ville de Baldur</Nav.Link>
          <Nav.Link as={Link} to="/categories/1">Dormir</Nav.Link> 
          <Nav.Link as={Link} to="/categories/3">Manger</Nav.Link> 
          <Nav.Link as={Link} to="/categories/2">Boutiques</Nav.Link>
          <NavDropdown title="Autre" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Events</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Aventures</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Venir à Baldur</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">Plan de Baldur</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {/* <Form className="ml-auto">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
        <Button variant="button-5" className="ml-2">Se connecter</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;