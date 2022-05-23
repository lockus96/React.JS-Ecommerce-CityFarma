import { useState } from "react";

const ItemCount = () =>{
     const [cuenta, setCuenta] = useState(0)
     
     const disminuir = () => {
          setCuenta((cuenta - 1))
          
     }
     const aumentar = () =>{
          setCuenta((cuenta + 1))
     
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