import { Link } from 'react-router-dom'


const Logo = () => {


     return (
               <div className="logo-position">
                    <Link to='/'>
                    <img src="https://i.imgur.com/8Lhgo08.png" alt="logo" style={{ width: 500, height: 170 }} />
                    </Link>
               </div>
          )
     }
export default Logo