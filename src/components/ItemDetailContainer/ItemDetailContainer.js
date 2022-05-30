import {getProduct} from '../../asyncmock.js'
import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail.js';

const ItemDetailContainer = () =>{

     const [producto, setProducto] = useState([]);

     useEffect(() => {
          getProduct().then(data => {
               setProducto(data)
               }
          )
     }, [])

     return (
         <div>
              <ItemDetail producto={producto} />
         </div>
     )
}
export default ItemDetailContainer