import "./App.css";
import Header from "./componentes/Header";
import Start from "./componentes/Start";
import Game from "./componentes/Game";
import Gallery from "./componentes/Gallery";
import Footer from "./componentes/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="imgFondo">
        <Start />
      </div>
      <Game />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
