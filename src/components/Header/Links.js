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
                                   <Link to='/category/cosechas' className='textoNav'> Cosechas </Link>
                              </li>
                              <li className='li-box'>
                                   <Link to='/category/semillas' className='textoNav'> Semillas </Link>
                              </li>
                              <li className='li-box'>
                                   <Link to='/category/DAWs' className='textoNav'> Nosotros </Link>
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