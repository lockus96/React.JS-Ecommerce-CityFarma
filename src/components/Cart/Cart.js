import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import { addDoc, collection } from 'firebase/firestore';
import { db, collectionsName } from '../../services/firebase'
import Form from "../Form/Form";





const Cart = () => {

     const { getTotalToPay, cart, removeItem, clear } = useContext(CartContext);

     const createOrder = () =>{
          console.log('creaste una orden')
    
    
          const objOrder = {
               buyer: {
                    name: 'Miguel Angel Carrizo',
                    email: 'angelmcarrizo@gmail.com',
                    phone: '2657719222',
                    address: 'Chacabuco 703',
                    comment: 'Entre calle Guemes y Sarasa'
               },
               items: cart,
               total: getTotalToPay()
          }
          console.log(objOrder)

          const collectionRef = collection(db, collectionsName.orders)

          addDoc(collectionRef, objOrder).then(({ id }) => {
               console.log(`Se creó la orden con el id ${id}`)
          })
     }
     



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


               <div className="btnClear">
                         <div className="btn btn-danger finalizarCarrito" onClick={createOrder}>Finalizar Compra </div>
                    </div>              
          </div>
     )}

     export default Cart;