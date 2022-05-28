import './components/styles/App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/ItemList/ItemList.js'
function App() {
  return (
      <header className="App-header">
          <NavBar />  
          <ItemCount stock="5" initial="0" />
          <ItemListContainer className="d-flex flex-row bd-highlight mb-3" />
      </header>
  );
}

export default App;
