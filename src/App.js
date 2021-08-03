
import './App.css';
import Header from './componentes/Header';
import Start from './componentes/Start';
import Game from './componentes/Game'


function App() {
  return (
    <div className="App">
    <div className="imgFondo">
      <Header />
      <Start />
    </div>
      <Game />

    </div>
  );
}

export default App;
