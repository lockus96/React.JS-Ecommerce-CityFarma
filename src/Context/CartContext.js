import { useState, createContext } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
     const [cart, setCart] = useState([])

     const addItem = (productToAdd, quantity) => {
         setCart([...cart, productToAdd])
         if (isInCart(productToAdd)) {
                setCart(cart.map(cart => cart.id === productToAdd.id ? { ...cart, cantidad: productToAdd.cantidad + cart.cantidad } : cart))                
          }
          }

     

     const removeFromCart = (product) => {
          setCart(cart.filter(item => item.id !== product.id))
     }

     const getQuantity = () => {
          let quantity = 0
          cart.forEach(item => quantity += item.cantidad)
          return quantity
     }

     const isInCart = (product) => {
          return cart.some(item => item.id === product.id)
     }

     


     return (
          <CartContext.Provider value={{ cart, addItem, removeFromCart, getQuantity, isInCart }}>
               {children}

          </CartContext.Provider>
     )
}

export default CartContext