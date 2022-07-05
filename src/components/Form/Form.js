<<<<<<< HEAD
import { useState, useEffect, useContext } from "react";
import { addDoc, collection } from 'firebase/firestore';
import { db, collectionsName } from '../../services/firebase'
import CartContext from '../../Context/CartContext'
import Swal from 'sweetalert2'


const Form = () =>{

     const {cart, getTotalToPay, clear} = useContext(CartContext)

    

     const initialValues = { 
          nombre: "", 
          email: "", 
          celular: "",
          direccion: ""
     };

          
     const [formValues, setFormValues] = useState(initialValues);
     const [formErrors, setFormErrors] = useState({});
     const [isSubmit, setIsSubmit] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);   
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      createOrder()
    }
  }, [formErrors]);
  const validate = (values) => {
  
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.nombre) {
      errors.nombre = "Se necesita el nombre";
    }
    if (!values.email) {
      errors.email = "Se necesita el Email";
    } else if (!regex.test(values.email)) {
      errors.email = "El formato del Email no es correcto";
    }
    if (!values.celular) {
      errors.celular = "Se necesita el celular";
    } else if (values.celular.length < 4) {
      errors.celular = "El celular debe tener más de 4 dígitos";
    } 
    if (!values.direccion) {
     errors.direccion = "Se necesita una dirección";
   }
    return errors;
  };


  const createOrder = () => {


     const objOrder = {

          cliente: formValues,
          items: cart,
          total: getTotalToPay()
      }
     const collectionRef = collection(db, collectionsName.orders)

     addDoc(collectionRef, objOrder).then(({ id }) => {
          Swal.fire({
               title: `¡Felicidades ${objOrder.cliente.nombre}! Su compra ha sido confirmada`,
               text:`Su orden (${id}) ha sido generada. Aguarde mientras nos contactamos con usted.`,
               icon:'success',
           })
   })
   clear()

     
}

  
  return (
    <div className="container">

        
          <form className="containerForm"  onSubmit={handleSubmit}>
          <h1>Finalizar Compra</h1>

               <div className=""></div>
                    <div className="containerFields">

                         <div>
                              <label>Nombre Completo</label>
                              <br />
                                   <input
                                   type="text"
                                   name="nombre"
                                   placeholder="Nombre"
                                   value={formValues.nombre}
                                   onChange={handleChange}
                                   />
                         </div>
                         <p>{formErrors.nombre}</p>

                         <div className="">
                              <label>Email</label>
                              <br />
                                   <input
                                   type="text"
                                   name="email"
                                   placeholder="Email"
                                   value={formValues.email}
                                   onChange={handleChange}
                                   />
                         </div>
                         <p>{formErrors.email}</p>

                         <div className="">
                              <label>Celular</label>
                              <br />
                                   <input
                                   type="number"
                                   name="celular"
                                   placeholder="Celular"
                                   value={formValues.celular}
                                   onChange={handleChange}
                                   />
                         </div>
                         <p>{formErrors.celular}</p>

                         <div className="">
                              <label>Dirección</label>
                              <br />
                                   <input
                                   type="text"
                                   name="direccion"
                                   placeholder="Direccion"
                                   value={formValues.direccion}
                                   onChange={handleChange}
                                   />
                         </div>
                         <p>{formErrors.direccion}</p>

                         <button className="btn btn-danger finalizarCarrito">Finalizar Compra</button>

                    </div>
          </form>
    </div>
  );
=======
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
>>>>>>> master

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

<<<<<<< HEAD

=======
 
    
 
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
>>>>>>> master
}
export default Form