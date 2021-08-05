
import './App.css';
import Header from './componentes/Header';
import Start from './componentes/Start';
import Game from './componentes/Game'
import Footer from './componentes/Footer';
import Arsenal from './componentes/Arsenal';

function App() {
  return (
    <div className="App">
    <div className="imgFondo">
      <Header />
      <Start />
    </div>
      <Game />
      <Arsenal />
      <Footer />
    </div>
  );
}

export default App;
