import React from 'react'
import './Arsenal.css'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

function Arsenal() {
    return (
        <section id="gallery" className="elArsenal py-5">
            <Container className="py-5">
                <h2 className="text-start">
                    THE ARSENAL
                </h2>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src="placeholder.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src="placeholder.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src="placeholder.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
            </Container>
        </section>
    )
}

export default Arsenal
