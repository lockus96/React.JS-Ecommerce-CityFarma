import { useState } from "react";

const ItemCount = ({stock, initial, onConfirm}) =>{
     const [cuenta, setCuenta] = useState(initial)
     
     const disminuir = () => {
          setCuenta(cuenta => Math.max (cuenta - 1, initial))
     }
     const aumentar = () =>{
          if(!stock == 0){
               setCuenta(cuenta => Math.min (cuenta + 1, stock))
          }
     }
     const agregarTotal = () =>{
          onConfirm (cuenta)
          setCuenta (cuenta)
     }
     
     return (
          <div className="card contador containerBoton">
               <div className="card-body">
                    <div className="btn-contador">
                    <button className="btn btn-outline-dark" onClick={disminuir}> - </button>
                    <h5 className="card-title numeroContador">{cuenta}</h5>
                    <button className="btn btn-outline-dark" onClick={aumentar}> + </button>
                    </div>
                    <div className="btn btn-success btn-position" onClick={agregarTotal}> Agregar </div>
               </div>
          </div> 

          
     )
}


export default ItemCount