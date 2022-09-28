import ItemCount from '../ItemCount/ItemCount.js'
import { useContext, useState } from 'react'
import { IoMdCart } from "react-icons/io";
import { Link } from 'react-router-dom'
import { IconButton } from "@chakra-ui/button"
import CartContext from '../../Context/CartContext.js'

const ItemDetail = ({id, img, nombre, descripcion, envioflash, precio, stock}) =>{



     const [cantidad, setCantidad] = useState(0)


     const { addItem } = useContext(CartContext)


     
     const handleOnAdd = (cantidad) => {
          setCantidad(cantidad)
          addItem({id, nombre, precio, cantidad, img})
          
          console.log(cantidad)
     }
     return (

          <div className='body-cards'>
                    <section className="containerListDetail">
                         <div className='cardListDetail'>
                              <div className="imgListDetail">
                                   <img src={img} alt="algo" className='imgDetail'/>
                              </div>
                              <div className='cardDetail'>
                                   <div className='cardDetailPosition'>
                                        <div className="titleList">
                                             <p>{nombre}</p>
                                        </div>
                                        <div className="descriptionList">
                                             <p>{descripcion}</p>
                                        </div>
                                        <div className="shippingList">
                                             <p>Envio internacional: {envioflash}</p>
                                        </div>
                                        <div className="priceList">
                                             <p>Precio: ${precio}</p>
                                        </div>
                                        <div className='iconsDetail'>
                                   { cantidad > 0 
                                   ?    <Link to='/cart'>
                                             <IconButton aria-label='Hacia el carrito' icon={<IoMdCart size={30} style={{ marginTop: 10, color: "black"  }} />} /> 
                                        </Link>
                                   :    <ItemCount onConfirm={handleOnAdd} stock={stock} initial="0" />} 
                              </div>
                                   </div>
                              </div>
                             
                         </div>
                    </section>  
          </div>
     )
}



export default ItemDetail