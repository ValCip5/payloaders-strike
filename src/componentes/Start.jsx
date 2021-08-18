import React from 'react'
import './Start.css'
import Container from 'react-bootstrap/Container'

function Start() {
    return (
        <section id="start" className="seccionUno">
            <Container className="pt-5">
                <div className="pt-5">
                    <img className="pt-5" src="img/logo.png" alt="Payloaders Strike!" />
                </div>
                <div>
                    <div className="elBoton mt-3 py-2">
                        <a className="px-4 py-2" href="https://drive.google.com/uc?export=download&id=1QxY09ee5keD2--4w70JMsb7tv5PlY5YX" target="_blank" rel="noreferrer"><i className="bi-play-fill pe-3"></i>PLAY GAME</a>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Start
