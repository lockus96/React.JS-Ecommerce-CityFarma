import '../styles/NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from "../../Context/CartContext"


const NavBar = () => {

     const { getQuantity } = useContext(CartContext)

     return (
          <nav className='navBar bodyNav'>
               <img src="https://i.imgur.com/cqrhlWl.png" alt="logo" className='logoPrincipal' />
               <ul className='itemsNav'>
                    <li className='btn'>
                         <Link to='/' className='textoNav'> Inicio </Link>
                    </li>
                    <li className='btn'>
                         <Link to='/category/Instrumentos' className='textoNav'> Instrumentos </Link>
                    </li>
                    <li className='btn'>
                         <Link to='/category/ElectronicaAudio' className='textoNav'> Electrónica </Link>
                    </li>
                    <li className='btn'>
                         <Link to='/category/Accesorios' className='textoNav'> Accesorios </Link>
                    </li>
                    <li className='btn'>
                         <Link to='/category/DAWs' className='textoNav'> DAWs </Link>
                    </li>
               </ul>
              {/*  <div className='loginButton'>
                    <Link to='/Login'> Login </Link>
               </div> */}
               
               <div>
                    <Link to='/Cart'> 
                         <CartWidget className='carritoItem'/> 
                    </Link>
               </div>
               <p className="cantidad">{getQuantity()}</p>
         

          </nav>
     )
}
export default NavBar