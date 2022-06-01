import {getProduct} from '../../asyncmock.js'
import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail.js';

const ItemDetailContainer = () =>{

     const [producto, setProducto] = useState([]);

     useEffect(() => {
          getProduct('1').then(data => {
               setProducto(data)
               }
          )
     }, [])

     return (
              <ItemDetail producto={producto} />
     )
}
export default ItemDetailContainer