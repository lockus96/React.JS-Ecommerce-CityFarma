import './components/styles/App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
      <header className="App-header">
          <NavBar />  
          <ItemListContainer greeting="Bienvenidos a Clave a Do" />
          <ItemCount stock="5" initial="0" />
          
      </header>
  );
}

export default App;
