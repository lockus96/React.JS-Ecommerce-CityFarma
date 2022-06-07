import './components/styles/App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './components/styles/ItemDetail.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <>
          <BrowserRouter>
            <header className="App-header">
              <NavBar />
            </header>
              <Routes>
                  <Route path='/' element={<ItemListContainer className="d-flex flex-row bd-highlight mb-3" />} />
                  <Route path='/detail/:productId' element={<ItemDetailContainer className="d-flex flex-row bd-highlight mb-3" />} />
 
              </Routes>
          </BrowserRouter>
          </>

  );
}

export default App;
