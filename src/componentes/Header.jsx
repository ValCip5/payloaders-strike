import React from 'react'
import './Header.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function Header() {
    return (
        <header>
                <Navbar fixed="top" collapseOnSelect expand="lg">
                  <Container className="responsiveNav">
                  <Navbar.Brand href="#home">Payloaders Strike!</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#features">Start</Nav.Link>
                      <Nav.Link href="#pricing">Game</Nav.Link>
                      <Nav.Link href="#pricing">Gallery</Nav.Link>
                      <Nav.Link href="#pricing">Trailer</Nav.Link>
                      <Nav.Link className="lineaAbajo" href="#pricing">Play</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                  </Container>
                </Navbar>
        </header>
    )
}

export default Header
