import ItemCount from '../ItemCount/ItemCount.js'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = (props) =>{

     const [cantidad, setCantidad] = useState(0)

     const handleOnAdd = (cuenta) => {
          setCantidad(cuenta)
     }

     if(props.producto.length === 0){         
     } else {

     return (

          <div className='body-cards'>
                    <section className="containerBody">
                         <div className='containerImg'>
                         <img src={props.producto.img} alt="algo" className="imgThumbnail" />
                         </div>
                         <div className="containerInfo">
                                   <h5 className="containerTitulo">{props.producto.nombre}</h5>
                                   <p className="containerEstado">Condición: {props.producto.estado}</p>
                                   <p className="containerDescripcion">{props.producto.descripcion}</p>
                                   <p className="containerEnvio">Envio flash: {props.producto.envioflash}</p>
                                   <p className="containerPrecio">Precio: ${props.producto.precio}</p>
                                   { cantidad > 0 ? <Link to='/cart' className='btn btn-success contador containerBoton'>Ir al carrito</Link> : <ItemCount onConfirm={handleOnAdd} stock="5" initial="0" />} 
                         </div>
                    </section>


               
                 
     
          </div>
     )
}
}


export default ItemDetail