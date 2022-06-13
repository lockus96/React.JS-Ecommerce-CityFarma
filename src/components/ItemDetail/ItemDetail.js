import ItemCount from '../ItemCount/ItemCount.js'
import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext.js'

const ItemDetail = ({id, img, nombre, estado, descripcion, envioflash, precio, stock}) =>{

     const [cantidad, setCantidad] = useState(0)

     const { addItem } = useContext(CartContext)
     
     const handleOnAdd = (cantidad) => {
          setCantidad(cantidad)
          addItem({id, nombre, precio, cantidad})
     }
     return (

          <div className='body-cards'>
                    <section className="containerBody">
                         <div className='containerImg'>
                         <img src={img} alt="algo" className="imgThumbnail" />
                         </div>
                         <div className="containerInfo">
                                   <h5 className="containerTitulo">{nombre}</h5>
                                   <p className="containerEstado">Condición: {estado}</p>
                                   <p className="containerDescripcion">{descripcion}</p>
                                   <p className="containerEnvio">Envio flash: {envioflash}</p>
                                   <p className="containerPrecio">Precio: ${precio}</p>
                                   { cantidad > 0 ? <Link to='/cart' className='btn btn-success contador containerBoton'>Ir al carrito</Link> : <ItemCount onConfirm={handleOnAdd} stock={stock} initial="0" />} 
                         </div>
                    </section>  
          </div>
     )
}



export default ItemDetail