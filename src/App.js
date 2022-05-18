import './components/styles/App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  return (
      <header className="App-header">
          <NavBar />  
          <div>
                    <p className="cantidadCarrito"> 2 </p>
          </div>
      {/* No lo inserto acá porque ya lo tengo insertado en el navbar, de todas formas
          lo dejo para que se vea que funciona igual!
          <CartWidget /> */}
          <ItemListContainer greeting="Bienvenidos a Clave a Do" />
          
      </header>
  );
}

export default App;
