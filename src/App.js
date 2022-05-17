import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  return (
      <header className="App-header">
          <NavBar />  
          <CartWidget />
          <ItemListContainer greeting="Bienvenidos a Clave a Do" />
          
      </header>
  );
}

export default App;
