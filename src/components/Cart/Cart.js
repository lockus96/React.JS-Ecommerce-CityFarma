import { useContext } from "react";
import CartContext from "../../Context/CartContext";

const Cart = () => {

     const { cart } = useContext(CartContext);
     console.log(cart)

     


     return (
          <div>
               <h1> cart </h1>
               <div>
                    {cart.map(item => (
                         <div key={item.id}>
                              <p>{item.nombre}</p>
                              <p>{item.precio}</p>
                              <p>{item.cantidad}</p>
                         </div>
                    ))})         
               </div>

          </div>
     )}

     export default Cart;