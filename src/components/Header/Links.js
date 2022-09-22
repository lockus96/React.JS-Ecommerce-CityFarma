import CartWidget from './CartWidget'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import CartContext from "../../Context/CartContext"
import { motion } from "framer-motion";


const container = {
     hidden: { opacity: 1, scale: 0 },
     visible: {
       opacity: 1,
       scale: 1,
       transition: {
         delayChildren: 0.3,
         staggerChildren: 0.2
       }
     }
};

const item = {
     hidden: { y: 20, opacity: 0 },
     visible: {
       y: 0,
       opacity: 1
     }
};

const Links = () => {

     const { getQuantity } = useContext(CartContext)

     return (



                    <motion.ul
                    className="linksContainer"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    >
                              <motion.li className="item" variants={item}>
                                   <NavLink activeclassname="true" to='/' className='textoNav'> Inicio </NavLink >
                              </motion.li> 
                              <motion.li className="item" variants={item}>
                                   <NavLink activeclassname="true" to='/category/cosechas' className='textoNav'> Cosechas </NavLink >
                              </motion.li>
                              <motion.li className="item" variants={item}>
                                   <NavLink activeclassname="true" to='/category/semillas' className='textoNav'> Semillas </NavLink >
                              </motion.li>
                              <motion.li className="item" variants={item}>
                                   <NavLink activeclassname="true" to='/category/DAWs' className='textoNav'> Nosotros </NavLink >
                              </motion.li>
                              <motion.li variants={item} className="cart-counter">
                                   <NavLink  to='/Cart'>
                                        <CartWidget className='carritoItem' />
                                   </NavLink >
                                   <p className="cantidad">{getQuantity()}</p>
   
                              </motion.li>
                    </motion.ul>
               
          
     )
}
export default Links