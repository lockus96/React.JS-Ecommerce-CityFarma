import { Link } from "react-router-dom"

const ItemList = (props) =>{
     return (
          <>
               {props.producto.map((item) => {
               return (

                    <div className="containerList">
                         <div className="cardList">
                              <img src={item.img} className="imgList" alt="algo" />
                              <h5 className="titleList">{item.nombre}</h5>
                              <p className="textList">Precio: ${item.precio}</p>
                              <Link to={`/detail/${item.id}`} className="btn btn-primary">Ver más</Link>
                         </div>
                    </div>
               )
               })}  
     
          </>
     )
}

export default ItemList