
const ItemDetail = (props) =>{
     
     if(props.producto.length === 0){         
     } else {

     return (

          <div>
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
                                   <a href="#" className="btn btn-primary containerBoton">Agregar al carrito</a>
                         </div>
                    </section>


               
                 
     
          </div>
     )
}
}


export default ItemDetail