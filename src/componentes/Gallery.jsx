import React from "react";
import Carousel from "react-bootstrap/Carousel";
// styles
import "./Gallery.css";

const firstList = [
  {
    id: "topimg1",
    imgUrl: "img/gallery-img/nailgun_hd.png",
    title: "Arsenal",
    description: "Gravity Nailgun - leave them helpless - Any good air combo starts with a Gravity Nailgun shot. Lift them up, then meet them up close."
  },
  {
    id: "topimg2",
    imgUrl: "img/gallery-img/rifle_hd.png",
    title: "Arsenal",
    description: "Anchor Rifle - the icing on the cake (it’s a railgun) - A shot from a high caliber rifle is always effective."
  },
  {
    id: "topimg3",
    imgUrl: "img/gallery-img/shutgan_hd.png",
    title: "Arsenal",
    description: "Security Shotgun - the classic workhorse - Get close, fire a shot, watch them explode. High risk, higher reward, unmatched style."
  },
  {
    id: "topimg4",
    imgUrl: "img/gallery-img/smg_hd.png",
    title: "Arsenal",
    description: "C6 SMG - anything can be a bomb if you try - Hitting anything with this plastic explosive projectiles makes them a walking grenade."
  },
];

const secondList = [
  {
    id: "botimg1",
    imgUrl:
      "https://store.hp.com/app/assets/images/uploads/prod/video-game-genres1597871118726439.jpg",
    title: "asdasd",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
  },
  {
    id: "botimg2",
    imgUrl:
      "https://as01.epimg.net/meristation/imagenes/2019/05/31/header_image/570760711559295786.jpg",
    title: "dfgdfgdfg",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
  }
];

function Gallery() {
  return (
    <section id="gallery" className="gallery-container">
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
          <h3>Graviton Engine Facility:</h3>
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
    </section>
  );
}

export default Gallery;
