import React from 'react'
import './Start.css'
import Container from 'react-bootstrap/Container'

function Start() {
    return (
        <section id="start" className="seccionUno">
            <Container className="pt-5">
                <div className="pt-5">
                <img className="pt-5" src="img/logo.png" alt="Payloaders Strike!"/>
                </div>
                <div>
                    <div className="elBoton mt-4 p-4 py-2">
                        <a className="px-4 py-3" href="#"><i className="bi-play-fill pe-3"></i>PLAY GAME</a>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Start
