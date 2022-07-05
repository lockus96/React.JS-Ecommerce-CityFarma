import {useForm} from "react-hook-form";
import { useState, useContext } from "react";
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../../services/firebase'
import {Link} from 'react-router-dom'
import CartContext from '../../Context/CartContext'
import Swal from 'sweetalert2'

const Form = () => { 
    const {register} = useForm();
    const {cart, getTotalToPay, clear} = useContext(CartContext)

    const [datos, setDatos] = useState({
        nombre:'',
        email: '',
        numero: '',
        direccion: '',
    })
    const crearOrder = (e) => {
        e.preventDefault();
        const ObjOrden = {
            cliente: datos,
            items: cart,
            total: getTotalToPay()
        }
        const coleccion = collection(db, 'orders')
        addDoc(coleccion, ObjOrden).then (({ id })=> {
            Swal.fire({
                title: `¡Felicidades ${datos.nombre}! Su compra ha sido confirmada`,
                text:`Su orden (${id}) ha sido generada`,
                icon:'success',
            })
    })
    clear()
    }
    const handleInputChange = (e) => {
        setDatos({
            ...datos,
        [e.target.name]: e.target.value
        })
    }
      
        
    const handleSubmit =(e) => {
        Swal.fire({
            title:'Error',
            Text:'Campos requeridos',
            icon: 'error'
        })
       
     }

 
    
 
return (
    <form onSubmit={handleSubmit} class="row gx-3 gy-2 align-items-center">
          <div class="col-sm-3">
               <label>Nombre y Apellido
                    <input type="text"  placeholder="Nombre"
                         {...register('nombre', {required: true, message: 'campo requerido'})}
                              onChange={handleInputChange}
                              value={datos.nombre} />
               </label>
          </div>

          <div class="col-sm-3">
               <label>Número de Contacto</label>
                    <div>
                    <input type="number"  placeholder="cel"{...register('cel', {required: true, message: 'campo requerido'})}
                    onChange={handleInputChange}
                    value={datos.cel} />
                    </div>
          </div>
  
               <label>E-Mail</label>
          <div>
               <input type="text"  placeholder="email"{...register('email', {required: true, message: 'campo requerido'})}
               onChange={handleInputChange}
               value={datos.email} />
          </div>
               <label >direccion</label>
          <div class="col-auto">
               <div>
               <input  type="text"  style={{display:'flex'}}{...register('direccion', {required: true, message: 'campo requerido'})}
               onChange={handleInputChange}
               value={datos.direccion} />
               <label>
        direccion
               </label>
               </div>
          </div>
          <div class="col-auto">
               <Link to='/' type="submit" class="btn btn-primary" onClick={crearOrder}>Finalizar Compra</Link>
          </div>
     </form>

)
}
export default Form