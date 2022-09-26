import { useState, createContext } from "react";


const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

     const [cart, setCart] = useState([])
     const [productosIniciales, setProductos] = useState([])


     const addItem = (productToAdd) => {
          setCart([...cart, productToAdd])
          if (isInCart(productToAdd)) {
                 setCart(cart.map(cart => cart.id === productToAdd.id ? { ...cart, cantidad: productToAdd.cantidad } : cart))                
           }
     }
     const removeItem = (id) => {
          setCart(cart.filter(item => item.id !== id)) 
     }
     
     const clear = () => {
          setCart([])
     }

     const getQuantity = () => {
          let quantity = 0
          cart.forEach(item => quantity += item.cantidad)
          return quantity
     }

     const isInCart = (product) => {
          return cart.some(item => item.id === product.id)
     }

     const getTotalToPay = () => {
          let total = 0
          cart.forEach(cart => {
               total += cart.cantidad * cart.precio
          })
          return total
     }

     const productosRecibido = (productos) => {
          setProductos(productos)
     }
    
     return (
          <CartContext.Provider value={{ productosIniciales, productosRecibido, getTotalToPay, cart, addItem, removeItem, getQuantity, isInCart, clear }}>
               {children}

          </CartContext.Provider>
     )
}

export default CartContext