
import './App.css';
import Header from './componentes/Header';
import Start from './componentes/Start';
import Game from './componentes/Game'
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
    <div className="imgFondo">
      <Header />
      <Start />
    </div>
      <Game />
      <Footer />
    </div>
  );
}

export default App;
