import { useContext } from "react"
import CartContext from "../../Context/CartContext"

const CartWidget = () =>{

     const { getQuantity } = useContext(CartContext)

     return (
          <div>
               <img src="./images/carrito1.png" alt="cart-widget" className="logoCarrito" />
               <p className="cantidad">{getQuantity()}</p>
          </div>
               
     )
}
export default CartWidget