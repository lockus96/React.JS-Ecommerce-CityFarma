import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) =>{
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
          onAdd (cuenta)
     }
     return (
          <div className="card contador">
               <div className="card-body">
                    <div className="row">
                    <button className="btn btn-outline-dark btn-sm col-6" onClick={disminuir}> - </button>
                    <button className="btn btn-outline-dark btn-sm col-6" onClick={aumentar}> + </button>
                    </div>
                    <h5 className="card-title numeroContador">{cuenta}</h5>
                    <button className="btn btn-success" onClick={agregarTotal}> Agregar </button>
               </div>
          </div> 

          
     )
}


export default ItemCount