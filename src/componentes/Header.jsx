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
                  <Navbar.Brand href="#home"><a href='#'><img src='https://svgshare.com/i/_BD.svg' title='payicono' /></a></Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                      <Nav.Link href="#start">Start</Nav.Link>
                      <Nav.Link href="#game">Game</Nav.Link>
                      <Nav.Link href="#gallery">Gallery</Nav.Link>
                      <Nav.Link href="#trailer">Trailer</Nav.Link>
                      <Nav.Link className="lineaAbajo" href="#play">Play</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                  </Container>
                </Navbar>
        </header>
    )
}

export default Header
