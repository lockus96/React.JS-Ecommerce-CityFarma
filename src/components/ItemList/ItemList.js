import { Link } from "react-router-dom"

const ItemList = (props) =>{
     return (
          <>
               {props.producto.map((item) => {
               return (

                    <div className="card text-center">
                         <div className="overlay">
                         <img src={item.img} className="imgitem" alt="algo" />
                         </div>
                         <div className="card-body">
                         <h5 className="card-title">{item.nombre}</h5>
                         <p className="card-text">{item.descripcion}</p>
                         <p className="card-text">Precio: ${item.precio}</p>
                         <Link to={`detail/${item.id}`} className="btn btn-primary">Ver más</Link>
                         </div>
                    </div>

               )
               })}  
     
          </>
     )
}

export default ItemList