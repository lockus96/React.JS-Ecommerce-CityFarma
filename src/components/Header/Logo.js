import { Link } from 'react-router-dom'
import { motion } from "framer-motion";


const Logo = () => {


     return (
          <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}>
                    <div className="logo-position" style={{ width: 250 }}>
                         <Link to='/'>
                         <img src="https://i.imgur.com/8Lhgo08.png" alt="logo"  />
                         </Link>
                    </div>
          </motion.div>
          )
     }
export default Logo