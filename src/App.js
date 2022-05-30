import './components/styles/App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './components/styles/ItemDetail.css'

function App() {
  return (
      <header className="App-header">
          <NavBar />  
          <ItemCount stock="5" initial="0" />
          <ItemListContainer className="d-flex flex-row bd-highlight mb-3" />
          <ItemDetailContainer className="d-flex flex-row bd-highlight mb-3" />
      </header>
  );
}

export default App;
