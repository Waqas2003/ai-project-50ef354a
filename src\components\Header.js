import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Software Developer Agent</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavItem><Nav.Link href="#about">About</Nav.Link></NavItem>
          <NavItem><Nav.Link href="#services">Services</Nav.Link></NavItem>
          <NavItem><Nav.Link href="#portfolio">Portfolio</Nav.Link></NavItem>
          <NavItem><Nav.Link href="#contact">Contact</Nav.Link></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;