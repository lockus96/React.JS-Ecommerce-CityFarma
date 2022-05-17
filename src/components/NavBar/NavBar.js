import './NavBar.css'
import logo from './images/logo1.png'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
     return (
          <nav className='navBar'>
               <img src={logo} alt="logo" className='logoPrincipal' />
               <ul className='itemsNav'>
                    <li className='inicioItem'>
                         Inicio
                    </li>
                    <li className='instrumentosItem'>
                         Instrumentos
                    </li>
                    <li className='electronicaItem'>
                         Electrónica y Audio
                    </li>
                    <li className='accesoriosItem'>
                         Accesorios
                    </li>
                    <li className='dawItem'>
                         DAWs
                    </li>
               </ul>
               <div className='loginButton'>
                    <button>
                         Login
                    </button>
               </div>
               <CartWidget className='carritoItem'/>
              

          </nav>
     )
}
export default NavBar