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
          <div className="infoUno p-4">
            <h2>From The Deepest To The Top</h2>
            <p>
            Your task is to destroy Concrete, the company that made you 
            a slave to their wishes. Your only obstacle is the infinitely 
            tall Inverted Tower and every construction and security robot
            within. In order to free them, you’ll have to fight them.
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
          <div className="infoDos p-4 text-end ms-auto">
            <h2>First Person Character Action</h2>
            <p>
                The frenetic pace of a hack and slash is met with 
                an fps perspective in this fusion of pure, fast 
                paced combat within an immersive world. You’ll be 
                facing heavy resistance from challenging enemies 
                and your best weapon is style!
                The weapon combo system and your giant loading claw
                will make short work of any threat if you’re willing 
                to master them.
            </p>
          </div>
        </Fade>
      </section>
    </div>
  );
}

export default Game;
