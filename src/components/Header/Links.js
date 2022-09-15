import CartWidget from './CartWidget'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from "../../Context/CartContext"


const Links = () => {

     const { getQuantity } = useContext(CartContext)

     return (

          <nav class="links-position">

                         <ul className="itemsNav">
                              <li className='li-box'>
                                   <Link to='/' className='textoNav'> Inicio </Link>
                              </li>
                              <li className='li-box'>
                                   <Link to='/category/Instrumentos' className='textoNav'> Instrumentos </Link>
                              </li>
                              <li className='li-box'>
                                   <Link to='/category/Electronica' className='textoNav'> Electrónica </Link>
                              </li>
                              <li className='li-box'> 
                                   <Link to='/category/Accesorios' className='textoNav'> Accesorios </Link>
                              </li>
                              <li className='li-box'>
                                   <Link to='/category/DAWs' className='textoNav'> DAWs </Link>
                              </li>
                              <div className='li-box-cart'>
                                   <Link to='/Cart'>
                                        <CartWidget className='carritoItem' />
                                   </Link>
                                   <p className="cantidad">{getQuantity()}</p>
   
                              </div>
                            
                         </ul>
                
          </nav>

          
     )
}
export default Links