import { useContext } from "react";
import CartContext from "../../Context/CartContext";

const Cart = () => {

     const { cart, removeItem, clear } = useContext(CartContext);

     console.log(cart)

     


     return (
          cart.length === 0 ? <div className="carritoVacio"><h2 className="carritoVacioTitle">Ups! No hay nada en el carrito</h2></div> :    
          <div className="cartBody">
               <div className="btnClear">
                    <div className="btn btn-danger borrarCarrito" onClick={() => {clear()}}>Limpiar carrito </div>
               </div>
               <div className="grillaCart">
                    {cart.map(item => (

                    <div key={item.id} className='cartList' >
                         <div className="cardList">
                              <img src={item.img} alt={item.name} className='imgList' />
                              <div>
                                   <p>{item.nombre}</p>
                                   <p>{item.precio}</p>
                                   <p>Cantidad:{item.cantidad}</p>
                                   <div className="btn btn-danger" onClick={() => { removeItem(item.id)}}>Eliminar
                              </div>
                         </div>
                    </div>
               </div>
                    ))}         
               </div>       
          </div>
     )}

     export default Cart;