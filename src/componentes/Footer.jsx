import React from 'react'
import imagen3 from '../footer.png'
import './Footer.css'
import Container from 'react-bootstrap/Container'

function Footer() {
    return (
        <div className="seccion-footer">
            <section id="footer" className="pb-5" style={{ backgroundImage: `url(${imagen3})`, backgroundSize: "cover", height: "100%", paddingTop: "240px" }}>
                <Container>
                    <div>
                        <div className="row">
                            <div className="columnaUno col-md-12 col-lg-6 col-xl-3 text-center">
                                <div>
                                    <p>FOLLOW US!</p>
                                    <div className="">
                                        <a target="_blank" href="https://twitter.com/Payloaders_Team" className="button-icon">
                                            <i className="bi bi-twitter"></i>
                                        </a>
                                        <a target="_blank" href="https://www.instagram.com/payloadersstrike/" className="button-icon">
                                            <i className="bi bi-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="columnaDos col-md-12 col-lg-6 col-xl-3 text-center">
                                <p>JOIN OUR COMMUNITY!</p>
                                <a target="_blank" href="https://discord.gg/Ckju9SVYQQ" className="button-icon">
                                    <i className="bi bi-discord"></i>
                                </a>
                            </div>
                            <div className="columnaTres col-md-12 col-lg-6 col-xl-3 text-center">
                                <h2>CONTACT US!</h2>
                                <p></p>
                                <a target="_blank" href="mailto:Tuviejaentanga@gmail.es.tl" className="button-icon">
                                    <i className="bi bi-envelope-fill"></i>
                                </a>
                            </div>
                            <div className="columnaCuatro col-md-12 col-lg-6 col-xl-3 text-center">
                                <h2>PRESS KIT!</h2>
                                <p></p>
                                <a target="_blank" href="https://drive.google.com/drive/folders/1sIwLb5tOuztEZJTi_eeeV326O0_0OT8P?usp=sharing" className="button-icon">
                                    <i className="bi bi-file-zip-fill"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Footer
