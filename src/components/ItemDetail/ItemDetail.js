
const ItemDetail = (props) =>{
     return (
          <div>
               {props.producto.map((item) => {
               return (
                    <section className="containerBody">
                         <div className='containerImg'>
                         <img src={item.img} alt="algo" className="imgThumbnail" />
                         </div>
                         <div className="containerInfo">
                                   <h5 className="containerTitulo">{item.nombre}</h5>
                                   <p className="containerEstado">{item.estado}</p>
                                   <p className="containerDescripcion">{item.descripcion}</p>
                                   <p className="containerEnvio">Envio flash: {item.envioflash}</p>
                                   <p className="containerPrecio">Precio: ${item.precio}</p>
                                   <a href="#" className="btn btn-primary containerBoton">Agregar al carrito</a>
                         </div>
                    </section>


               )
               })}  
     
          </div>
     )
}

export default ItemDetail