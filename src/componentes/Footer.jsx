import React from 'react'
import imagen3 from '../footer.png'
import './Footer.css'

function Footer() {
    return (
        <div className="seccion-footer">
            <section id="footer" style={{backgroundImage: `url(${imagen3})`, backgroundSize: "cover", height: "45vh", padding: "50px"}}>
                <div class="container">
                        <div class="row">
                            <div class="col align-self-start">
                            <div>
                                <p>FOLLOW US!</p>
                                <button href="#" className="button-icon">
                                    <i className="bi bi-twitter"></i>
                                </button>
                                <button href="#" className="button-icon">
                                <i className="bi bi-instagram"></i>
                                </button>
                                </div>
                            </div>
                        <div class="col align-self-center">
                            <p>JOIN OUR COMMUNITY!</p>
                            <button href="#" className="button-icon">
                            <i class="bi bi-discord"></i>
                            </button>
                        </div>
                        <div class="col align-self-end">
                        <h2>CONTACT US!</h2>
                        <p></p>
                        <a href="#" className="comunity">Press Kit</a>
                        </div>
                    </div>
                </div>
            </section>
         </div>
    )
}

export default Footer
