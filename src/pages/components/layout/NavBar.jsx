import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from "../../../context/UserProvider";
import { toast } from 'react-toastify';
import { useEffect } from 'react';


const MyNavbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useUserContext(); // Ajoutez user à la déstructuration

  // useEffect(() => {
  //   // Cet effet sera déclenché chaque fois que `user` change.
  //   // Nous n'avons pas besoin de mettre en place une logique spécifique ici,
  //   // mais cela garantit que MyNavbar se re-rend lorsque l'état de `user` change.
  // }, [user]);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleAdminClick = () => {
    navigate('/admin');
  };

  const handleLogoutClick = () => {
    logout();
    toast.info('Vous êtes déconnecté.', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate('/');
  };

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
        {user ? (
          // Si l'utilisateur est connecté, montrez ces boutons
          <>
            <Button variant="button-5" className="ml-2" onClick={handleAdminClick}>Administration</Button>
            <Button variant="button-5" className="ml-2" onClick={handleLogoutClick}>Se déconnecter</Button>
          </>
        ) : (
          // Sinon, montrez le bouton Se connecter
          <Button variant="button-5" className="ml-2" onClick={handleLoginClick}>Se connecter</Button>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;