import React from 'react'
import './Trailer.css'

function Trailer() {
  return (
    <section id="trailer" className="trailer">
          <h2 className="tituloUno">
            TRAILER
          </h2>

          <iframe className="py-4 mb-5" src="https://www.youtube-nocookie.com/embed/gj32vekphz8?start=170" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
          </iframe>

          
          <h2 className="col-sm-12 py-2 px-5 text-center elBotonDos">
              <a className="py-3 px-5" id="play" href="https://all-and-the-gang.itch.io/payloaders-strike"><i className="bi-play-fill pe-3"></i>PLAY THE DEMO</a>
          </h2>
    </section>
  )
}

export default Trailer
