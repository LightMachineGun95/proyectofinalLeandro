 import React from 'react'
 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import NavDropdown from 'react-bootstrap/NavDropdown';
 import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

 const NavBar = () => {
   return (

     <Navbar bg="success" expand="lg">
      <Container>
        <Navbar.Brand href="/">WeedExpertos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/nosotros">Quienes somos?</Nav.Link>
            <Nav.Link href="/products">Productos</Nav.Link>
            <NavDropdown title="Semillas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Femeneizadas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Automaticas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
   )
 }
 
 export default NavBar