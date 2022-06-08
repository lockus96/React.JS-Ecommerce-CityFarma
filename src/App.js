import './components/styles/App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './components/styles/ItemDetail.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, createContext } from 'react';

export const Context = createContext()


function App() {
  const [carrito, setCarrito] = useState([])
  console.log(carrito)
  return (
      <>
        <Context.Provider value={{carrito, setCarrito}}>
          <BrowserRouter>
            <header className="App-header">
              <NavBar />
            </header>
              <Routes>
                  <Route path='/' element={<ItemListContainer className="d-flex flex-row bd-highlight mb-3" />} />
                  <Route path='/detail/:productId' element={<ItemDetailContainer className="d-flex flex-row bd-highlight mb-3" />} />
 
              </Routes>
          </BrowserRouter>
        </Context.Provider>
      </>

  );
}

export default App;
