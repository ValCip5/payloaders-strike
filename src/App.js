
import './App.css';
import Header from './componentes/Header';
import Start from './componentes/Start';
import Game from './componentes/Game'
import Gallery from './componentes/Gallery'


function App() {
  return (
    <div className="App">
      <Header />
      <div className="imgFondo">
        <Start />
      </div>
      <Game />
      <Gallery />
    </div>
  );
}

export default App;
