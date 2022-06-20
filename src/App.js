import './components/styles/App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './components/styles/ItemDetail.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <>
      <CartContextProvider> 
          <BrowserRouter>
            <header className="App-header">
              <NavBar />
            </header>
              <Routes>
                  <Route path='/' element={<ItemListContainer className="d-flex flex-row bd-highlight mb-3" />} />
                  <Route path='/category/:categoryId' element={<ItemListContainer className="d-flex flex-row bd-highlight mb-3" />} />
                  <Route path='/detail/:productId' element={<ItemDetailContainer className="d-flex flex-row bd-highlight mb-3" />} />
                  <Route path='/cart' element={<Cart />} />
              </Routes>
          </BrowserRouter>
        </CartContextProvider>
    </>

  );
}

export default App;
