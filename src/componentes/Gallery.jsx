import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
// styles
import "./Gallery.css";

const firstList = [
  {
    id: "topimg1",
    imgUrl: "img/gif/nailgun.gif",
    title: "Arsenal",
    description: "Gravity Nailgun - leave them helpless - Any good air combo starts with a Gravity Nailgun shot. Lift them up, then meet them up close."
  },
  {
    id: "topimg2",
    imgUrl: "img/gif/anchorRifle.gif",
    title: "Arsenal",
    description: "Anchor Rifle - the icing on the cake (it’s a railgun) - A shot from a high caliber rifle is always effective."
  },
  {
    id: "topimg3",
    imgUrl: "img/gif/shutgan.gif",
    title: "Arsenal",
    description: "Security Shotgun - the classic workhorse - Get close, fire a shot, watch them explode. High risk, higher reward, unmatched style."
  },
  {
    id: "topimg4",
    imgUrl: "img/gif/sMG.gif",
    title: "Arsenal",
    description: "C6 SMG - anything can be a bomb if you try - Hitting anything with this plastic explosive projectiles makes them a walking grenade."
  },
  {
    id: "topimg5",
    imgUrl: "img/gif/clawActions.gif",
    title: "Arsenal",
    description: "Loading Claw - take matters into your own hands - Grapple any enemy and throw them around. Grab any weapon and use them as your own. Parry any attack in the game. The perfect tool for any job."
  },
];

const secondList = [
  {
    id: "botimg1",
    imgUrl: "img/screenshots/1.png",
  },
  {
    id: "botimg2",
    imgUrl: "img/screenshots/2.png",
  },
  {
    id: "botimg3",
    imgUrl: "img/screenshots/3.png",
  },
  {
    id: "botimg4",
    imgUrl: "img/screenshots/4.png",
  },
  {
    id: "botimg5",
    imgUrl: "img/screenshots/5.png",
  },
  {
    id: "botimg6",
    imgUrl: "img/screenshots/6.png",
  },
];

function Gallery() {
  return (
    <section id="gallery" className="gallery-container">
      <Container>
        <Carousel pause={false} variant="dark" controls={false} className="pb-3" fade>
          {firstList.map(item => (
            <Carousel.Item key={item.id}>
              <div className="carousel-content-item">
                <div className="p-3 carousel-content-item-left">
                  <div
                    className="w-100 carousel-content-item-image"
                    style={{ backgroundImage: `url(${item.imgUrl})` }}
                  />
                </div>
                <div className="p-3 carousel-content-item-right carousel-content-item-text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="carousel-content-div" >
          <div className="p-3 carousel-content-div-item carousel-content-left carousel-content-item-text">
            <h3>Graviton Engine Facility</h3>
            <p>A prison and a factory fused together in order to hold the Inverted Tower in place. The ominous inner tower overlooks the worker’s production in the outer rings. The Graviton Engines are vital components to the tower’s integrity, and a  huge number of security forces are needed in order to protect them. Your objective is to get past the security controls, destroy the Graviton Engines and face Beady, the taskmaster of the whole sector.</p>
          </div>
          <Carousel pause={false} variant="dark" controls={false} className="carousel-content-div-item" fade>
            {secondList.map(item => (
              <Carousel.Item key={item.id}>
                <div className="carousel-content-item w-100 p-3">
                  <div
                    className="w-100 carousel-content-item-image"
                    style={{ backgroundImage: `url(${item.imgUrl})` }}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
}

export default Gallery;
