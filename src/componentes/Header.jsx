import React from 'react'
import './Header.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function Header() {
    return (
        <header>
          <Navbar fixed="top">
              <Container>
              <Nav className="ms-auto">
                <Nav.Link href="#start">START</Nav.Link>
                <Nav.Link href="#game">GAME</Nav.Link>
                <Nav.Link href="#gallery">GALLERY</Nav.Link>
                <Nav.Link href="#play">PLAY</Nav.Link>
                <Nav.Link href="#play">TRAILER</Nav.Link>
              </Nav>
              </Container>
          </Navbar>
        </header>
    )
}

export default Header
