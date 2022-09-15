import { Link } from 'react-router-dom'


const Logo = () => {


     return (
               <div className="logo-position">
                    <Link to='/'>
                    <img src="https://i.imgur.com/8Lhgo08.png" alt="logo" style={{ width: 200, height: 200 }} />
                    </Link>
               </div>
          )
     }
export default Logo