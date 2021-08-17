import React from 'react'
import imagen3 from '../footer.png'
import './Footer.css'
import Container from 'react-bootstrap/Container'

function Footer() {
    return (
        <footer>
            <section id="footer" className="pb-5" style={{ backgroundImage: `url(${imagen3})`, backgroundSize: "cover", height: "100%", paddingTop: "240px", backgroundPosition: "center" }}>
                <Container>
                    <div>
                        <div className="row">
                            <div className="columnaUno col-md-12 col-lg-6 col-xl-3 text-center">
                                <div>
                                    <h3 className="mb-3">FOLLOW US!</h3>
                                        <a target="_blank"  rel="noreferrer" href="https://twitter.com/Payloaders_Team" className="button-icon">
                                            <i className="bi bi-twitter"></i>
                                        </a>
                                        <a target="_blank"  rel="noreferrer" href="https://www.instagram.com/payloadersstrike/" className="button-icon">
                                            <i className="bi bi-instagram"></i>
                                        </a>
                                </div>
                            </div>

                            <div className="columnaDos col-md-12 col-lg-6 col-xl-3 text-center">
                                <h3 className="mb-3">JOIN OUR COMMUNITY!</h3>
                                <a target="_blank" rel="noreferrer" href="https://discord.gg/Ckju9SVYQQ" className="button-icon">
                                    <i className="bi bi-discord"></i>
                                </a>
                            </div>

                            <div className="columnaTres col-md-12 col-lg-6 col-xl-3 text-center">
                                <h3 className="mb-3">CONTACT US!</h3>
                                <a target="_blank" rel="noreferrer"  href="mailto:payloadersteam@gmail.com" className="button-icon">
                                    <i className="bi bi-envelope-fill"></i>
                                </a>
                            </div>

                            <div className="columnaCuatro col-md-12 col-lg-6 col-xl-3 text-center">
                                <h3 className="mb-3">PRESS KIT!</h3>
                                <a target="_blank" rel="noreferrer"  href="https://drive.google.com/uc?export=download&id=147AWvVgYBz4jYicUdR6c9lLdIrqv6SBr" className="button-icon">
                                    <i className="bi bi-file-zip-fill"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </footer>
    )
}

export default Footer
