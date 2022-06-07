import ItemCount from '../ItemCount/ItemCount.js'
import { useState } from 'react'


const ItemDetail = (props) =>{
     
     const handleOnAdd = (cuenta) => {
          console.log(cuenta)
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
                                   <ItemCount onConfirm={handleOnAdd} stock="5" initial="0" /> 
                                   {/* <a href="#" className="btn btn-primary containerBoton">Agregar al carrito</a> */}
                         </div>
                    </section>


               
                 
     
          </div>
     )
}
}


export default ItemDetail