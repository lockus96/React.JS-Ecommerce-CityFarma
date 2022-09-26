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


                         <button className="finalizarCarrito">Finalizar Compra</button>

                    </div>
          </form>
    </div>
  );



}
export default Form