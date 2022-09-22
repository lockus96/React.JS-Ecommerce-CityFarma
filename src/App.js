import { ChakraProvider } from '@chakra-ui/react'
import './components/styles/App.css';
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './components/styles/ItemDetail.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <>
     <ChakraProvider>
          <CartContextProvider> 
              <BrowserRouter>
                <header className="App-header">

                  <Header />
                  
                </header>
                  <Routes>
                      <Route path='/' element={<ItemListContainer  />} />
                      <Route path='/category/:categoryId' element={<ItemListContainer/>} />
                      <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
                      <Route path='/cart' element={<Cart />} />
                  </Routes>
              </BrowserRouter>
            </CartContextProvider>
        </ChakraProvider>
    </>

  );
}

export default App;
