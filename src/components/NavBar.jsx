import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (

    <Navbar bg="success" expand="lg">
      <Container>
        <Navbar.Brand href="/">WeedExpertos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/category/smartphones">Smartphones</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/laptops">Laptops</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/fragrances">Fragancias</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar