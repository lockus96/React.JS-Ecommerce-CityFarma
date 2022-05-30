

const ItemList = (props) =>{
     return (
          <>
               {props.producto.map((item) => {
               return (

                    <div className="card text-center" style={{height: 400, width: 200, margin:0}}>
                         <img src={item.img} alt="algo" style={{height: 200, width: 100, marginLeft: 50}} />
                         <div className="card-body">
                         <h5 className="card-title">{item.nombre}</h5>
                         <p className="card-text">{item.descripcion}</p>
                         <p className="card-text">Precio: ${item.precio}</p>
                         <a href="#" className="btn btn-primary">Ver más</a>
                         </div>
                    </div>

               )
               })}  
     
          </>
     )
}

export default ItemList