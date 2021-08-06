import React from "react";
import Carousel from "react-bootstrap/Carousel";
// styles
import "./Gallery.css";

const firstList = [
  {
    id: "topimg1",
    imgUrl: "https://i.ytimg.com/vi/MWa0ZOFXsXI/maxresdefault.jpg",
    title: "Some Title here",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
  },
  {
    id: "topimg2",
    imgUrl:
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2021/01/minecraft-2193723.jpg?itok=m6n_GOra",
    title: "Another Title here",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
  }
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
      <Carousel variant="dark" controls={false}>
        {firstList.map(item => (
          <Carousel.Item key={item.id}>
            <div className="carousel-content-item">
              <div className="w-50 p-4">
                <div
                  className="carousel-content-item-image"
                  style={{ backgroundImage: `url(${item.imgUrl})` }}
                />
              </div>
              <div className="w-50 p-4">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <Carousel variant="dark" controls={false}>
        {secondList.map(item => (
          <Carousel.Item key={item.id}>
            <div className="carousel-content-item">
              <div className="w-50 p-4 carousel-content-left ">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="w-50 p-4">
                <div
                  className="carousel-content-item-image"
                  style={{ backgroundImage: `url(${item.imgUrl})` }}
                />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default Gallery;
