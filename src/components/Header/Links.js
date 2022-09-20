import CartWidget from './CartWidget'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
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
                                   <Link to='/' className='textoNav'> Inicio </Link>
                              </motion.li> 
                              <motion.li className="item" variants={item}>
                                   <Link to='/category/cosechas' className='textoNav'> Cosechas </Link>
                              </motion.li>
                              <motion.li className="item" variants={item}>
                                   <Link to='/category/semillas' className='textoNav'> Semillas </Link>
                              </motion.li>
                              <motion.li className="item" variants={item}>
                                   <Link to='/category/DAWs' className='textoNav'> Nosotros </Link>
                              </motion.li>
                              <motion.li variants={item} className="cart-counter">
                                   <Link to='/Cart'>
                                        <CartWidget className='carritoItem' />
                                   </Link>
                                   <p className="cantidad">{getQuantity()}</p>
   
                              </motion.li>
                    </motion.ul>
               
          
     )
}
export default Links