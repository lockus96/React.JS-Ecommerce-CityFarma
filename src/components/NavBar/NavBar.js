import '../styles/NavBar.css'
import logo from '../NavBar/logo1.png'
import CartWidget from '../CartWidget/CartWidget'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from "../../Context/CartContext"

const NavBar = () => {

     const { getQuantity } = useContext(CartContext)

     return (
          <nav className='navBar bodyNav'>
               <img src={logo} alt="logo" className='logoPrincipal' />
               <ul className='itemsNav'>
                    <li className='btn'>
                         <Link to='/' className='textoNav'> Inicio </Link>
                    </li>
                    <li className='btn'>
                         <Link to='/Instrumentos' className='textoNav'> Instrumentos </Link>
                    </li>
                    <li className='btn'>
                         <Link to='/ElectronicaAudio' className='textoNav'> Electrónica </Link>
                    </li>
                    <li className='btn'>
                         <Link to='/Accesorios' className='textoNav'> Accesorios </Link>
                    </li>
                    <li className='btn'>
                         <Link to='/DAWs' className='textoNav'> DAWs </Link>
                    </li>
               </ul>
              {/*  <div className='loginButton'>
                    <Link to='/Login'> Login </Link>
               </div> */}
               <CartWidget className='carritoItem'/>
               <p className="cantidad">{getQuantity()}</p>
         

          </nav>
     )
}
export default NavBar