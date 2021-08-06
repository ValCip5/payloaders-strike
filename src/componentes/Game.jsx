import React from "react";
import "./Game.css";

import imagen1 from "../seccion1.png";
import imagen2 from "../seccion2.png";
import Fade from "react-reveal/Fade";

function Game() {
  return (
    <div>
      <section
        id="game"
        className="seccionUno"
        style={{
          backgroundImage: `url(${imagen1})`,
          backgroundSize: "cover",
          height: "100vh",
          padding: "80px"
        }}
      >
        <Fade left>
          <div className="infoUno p-4 col-sm-4">
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              at consectetur debitis recusandae magni possimus minima nulla,
              incidunt sequi? Consectetur totam ipsa repellendus iste unde?
              Laborum magni sint quas sed!
            </p>
          </div>
        </Fade>
      </section>
      <section
        className="seccionDos"
        style={{
          backgroundImage: `url(${imagen2})`,
          backgroundSize: "cover",
          height: "100vh",
          padding: "80px"
        }}
      >
        <Fade right>
          <div className="infoDos p-4 text-end col-sm-4 ms-auto">
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              at consectetur debitis recusandae magni possimus minima nulla,
              incidunt sequi? Consectetur totam ipsa repellendus iste unde?
              Laborum magni sint quas sed!
            </p>
          </div>
        </Fade>
      </section>
    </div>
  );
}

export default Game;
