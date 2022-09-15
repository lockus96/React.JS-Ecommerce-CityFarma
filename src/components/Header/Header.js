import '../styles/Header.css'
import Links from "./Links"
import Logo from './Logo'

const Header = () => {


     return (

          <div className='headerStyle'>

               <section className='nav-style'>
                    <Logo />
                    <Links />
               </section>

               <div className='title-style'>
                    <h2 className='title-text'>
                         Los calidad de una huerta, ¡más cerca que nunca!
                    </h2>
               </div>


          </div>


          
     )
}
export default Header