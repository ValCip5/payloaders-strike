import React from 'react'
import imagen3 from '../footer.png'
import './Footer.css'
import Container from 'react-bootstrap/Container'

function Footer() {
    return (
        <div className="seccion-footer">
            <section id="footer" className="pb-5" style={{backgroundImage: `url(${imagen3})`, backgroundSize: "cover", height: "400px", paddingTop: "240px"}}>
            <Container>
                <div>
                        <div class="row">
                            <div class="col align-self-start">
                            <div>
                                <p>FOLLOW US!</p>
                                <div className="acaGrid">
                                    <a href="#" className="button-icon">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                    <a href="#" className="button-icon">
                                    <i className="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            </div>
                        <div class="col text-center">
                            <p>JOIN OUR COMMUNITY!</p>
                            <a href="#" className="button-icon">
                            <i class="bi bi-discord"></i>
                            </a>
                        </div>
                        <div class="col text-end">
                        <h2>CONTACT US!</h2>
                        <p></p>
                        <a href="#" className="community">Press Kit</a>
                        </div>
                    </div>
                </div>
            </Container>
            </section>
         </div>
    )
}

export default Footer
