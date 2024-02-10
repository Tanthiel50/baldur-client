import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Baldur</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#home">La ville de Baldur</Nav.Link>
          <Nav.Link href="#link">Dormir</Nav.Link>
          <Nav.Link href="#link">Manger</Nav.Link>
          <Nav.Link href="#link">Boutiques</Nav.Link>
          <NavDropdown title="Autre" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">À visiter</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Events</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Aventures</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Venir</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">Plan</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline className="ml-auto">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Button variant="outline-primary" className="ml-2">Sign in</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;