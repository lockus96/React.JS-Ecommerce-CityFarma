import '../styles/NavBar.css'
import logo from '../NavBar/logo1.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
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
               <div className='loginButton'>
                    <Link to='/Login'> Login </Link>
               </div>
               <CartWidget className='carritoItem'/>
               <div>
                    <p className="cantidadCarrito"> 2 </p>
               </div>
              

          </nav>
     )
}
export default NavBar