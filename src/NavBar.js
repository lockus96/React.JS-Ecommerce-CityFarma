import './NavBar.css'
import logo from './logo1.png'
import logoCarrito from './carrito1.png'

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
               <div className='carritoItem'>
                    <img src={logoCarrito} alt="logoCarrito" className='logoCarrito' />     
               </div> 
              

          </nav>
     )
}
export default NavBar