import React from 'react'
import { Container } from 'react-bootstrap'
import './Trailer.css'

function Trailer() {
  return (
    <section id="trailer" className="trailer">
      <Container>
        <h2 className="tituloUno">
          TRAILER
        </h2>
        <iframe className="py-4" src="https://www.youtube.com/embed/Jt5vMFyMeWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <h2 className="col-sm-12 py-4 text-center elBotonDos">
          <a className="py-3 px-3" id="play" href="https://drive.google.com/uc?export=download&id=1QxY09ee5keD2--4w70JMsb7tv5PlY5YX" target="_blank" rel="noreferrer"><i className="bi-play-fill pe-3"></i>PLAY THE DEMO</a>
        </h2>
      </Container>
    </section>
  )
}

export default Trailer
