import ItemCount from '../ItemCount/ItemCount.js'
import { useContext, useState } from 'react'
import { IoMdCart } from "react-icons/io";
import { Link } from 'react-router-dom'
import { IconButton } from "@chakra-ui/button"
import CartContext from '../../Context/CartContext.js'

const ItemDetail = ({id, img, nombre, estado, descripcion, envioflash, precio, stock}) =>{



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
                              <div>
                                   <img src={img} alt="algo" className="imgListDetail" />
                              </div>
                              <div className='cardDetail'>
                                   <h5 className="titleList">{nombre}</h5>
                                   <p className="textList">Condición: {estado}</p>
                                   <p className="textList">{descripcion}</p>
                                   <p className="textList">Envio flash: {envioflash}</p>
                                   <p className="textList">Precio: ${precio}</p>
                                   { cantidad > 0 
                                   ?    <Link to='/cart'>
                                             <IconButton aria-label='Hacia el carrito' icon={<IoMdCart size={30} style={{ marginTop: 10 }} />} /> 
                                        </Link>
                                   : <ItemCount onConfirm={handleOnAdd} stock={stock} initial="0" />} 
                              </div>
                         </div>
                    </section>  
          </div>
     )
}



export default ItemDetail