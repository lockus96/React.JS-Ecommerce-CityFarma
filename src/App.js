import { ChakraProvider } from '@chakra-ui/react'
import './components/styles/App.css';
import Header from './components/Header/Header'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import './components/styles/ItemDetail.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext';
import Cart from './components/Cart/Cart';
import Text from './components/Text/Text';
import Articles from './components/Articles/ArticlesContainer';
import { Suspense, lazy } from 'react';
import LoadingScreen from './components/Loading Screen/LoadingScreen';


const ItemListContainer = lazy(()=> import('./components/ItemList/ItemListContainer'))

function App() {

  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        <ChakraProvider>
          <CartContextProvider>
            <BrowserRouter>
              <header className="App-header">

                <Header />

              </header>

              <Routes>
                <Route path='/' element={<> <Text /> <ItemListContainer /> <Articles /> </>} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
              </Routes>

             
            </BrowserRouter>
          </CartContextProvider>
        </ChakraProvider>
      </Suspense>
    </>

  );
}

export default App;
