import { useContext } from "react";
import CartContext from "../../Context/CartContext";

import Form from "../Form/Form";





const Cart = () => {

     const { getTotalToPay, cart, removeItem, clear, createOrder } = useContext(CartContext);

<<<<<<< HEAD
     
     

=======
>>>>>>> master


     return (
          cart.length === 0 ? <div className="cartBody">
                                   <div className="itemEmpty"></div>
                                   <h2 className="carritoVacioTitle">Ups! No hay nada en el carrito :(</h2>
                              </div> 
                                   :    
          <div className="cartBody">
               <div>
                  
                    <div className="btnClear">
                         <div className="btn btn-danger borrarCarrito" onClick={() => {clear()}}>Limpiar carrito </div>
                    </div>
                    <div className="totalText">
                         <h1>Total: ${getTotalToPay()}</h1>  
                    </div>  
                    <div className="grillaCart">
                         {cart.map(item => (

                         <div key={item.id} className='cartList' >
                              <div className="cardList">
                                   <img src={item.img} alt={item.name} className='imgList' />
                                   <div>
                                        <h5>{item.nombre}</h5>
                                        <p>Precio c/u: {item.precio}</p>
                                        <p>Cantidad: {item.cantidad}</p>
                                        <div className="btn btn-danger" onClick={() => { removeItem(item.id)}}>Eliminar
                                   </div>
                              </div>
                         </div>
                    </div>
                         ))}         
                    </div>     
               </div>

               <Form />           
<<<<<<< HEAD
        
=======
             
>>>>>>> master
          </div>
     )}

     export default Cart;