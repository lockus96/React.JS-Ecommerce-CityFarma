import { useState } from "react";

const ItemCount = ({stock, initial}) =>{
     const [cuenta, setCuenta] = useState(initial)
     
     const disminuir = () => {
          setCuenta(cuenta => Math.max (cuenta - 1, initial))
          
     }
     const aumentar = () =>{
          if(!stock == 0){
               setCuenta(cuenta => Math.min (cuenta + 1, stock))
          }
     
     }
     return (
          <div className="card contador">
               <div className="card-body">
                    <h5 className="card-title numeroContador">{cuenta}</h5>
                    <button className="btn btn-primary" onClick={disminuir}> - </button>
                    <button className="btn btn-primary" onClick={aumentar}> + </button>
               </div>
          </div> 

          
     )
}


export default ItemCount