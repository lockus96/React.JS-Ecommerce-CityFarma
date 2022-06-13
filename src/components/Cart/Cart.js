import { useContext } from "react";
import CartContext from "../../Context/CartContext";

const Cart = () => {

     const { cart, removeItem, clear } = useContext(CartContext);

     console.log(cart)

     


     return (
          <div className="cartStyle">
               <h2 className="carritoText"> Carrito </h2>
               <div className="btnClear">
                    <div className="btn btn-danger" onClick={() => {clear()}}>Limpiar carrito </div>
               </div>
               <div>
                    {cart.map(item => (
                         <div key={item.id} className='cartItems'>
                              <div className="imgContainer">
                                    <img src={item.img} alt={item.name} className='imgCart' />
                              </div>
                              <div className="textItemCart">
                                   <p>{item.nombre}</p>
                                   <p>{item.precio}</p>
                                   <p>Cantidad:{item.cantidad}</p>
                                   <div className="btn btn-danger" onClick={() => { removeItem(item.id)}}>Eliminar</div>
                              </div>
                             
                         </div>
                    ))}         
               </div>       
          </div>
     )}

     export default Cart;