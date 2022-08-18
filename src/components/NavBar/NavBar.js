import '../styles/NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from "../../Context/CartContext"


const NavBar = () => {

     const { getQuantity } = useContext(CartContext)

     return (

          <nav class="navbar navbar-expand-lg navbar-light navBackground">

               <div class="container-fluid">
                    <button class="navbar-toggler botonBackground" type="button " data-bs-toggle="collapse"
                         data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                         aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                    </button>
                    <img src="https://i.imgur.com/cqrhlWl.png" alt="logo" className='logoPrincipal' />


                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul class="navbar-nav me-auto mb-2 mb-lg-0 itemsNav">
                              <li>
                                   <Link to='/' className='textoNav'> Inicio </Link>
                              </li>
                              <li>
                                   <Link to='/category/Instrumentos' className='textoNav'> Instrumentos </Link>
                              </li>
                              <li>
                                   <Link to='/category/Electronica' className='textoNav'> Electrónica </Link>
                              </li>
                              <li>
                                   <Link to='/category/Accesorios' className='textoNav'> Accesorios </Link>
                              </li>
                              <li>
                                   <Link to='/category/DAWs' className='textoNav'> DAWs </Link>
                              </li>
                         </ul>


                    </div>
                    <div>
                         <Link to='/Cart'>
                              <CartWidget className='carritoItem' />
                         </Link>
                    </div>
                    <p className="cantidad">{getQuantity()}</p>

               </div>

          </nav>


          
     )
}
export default NavBar