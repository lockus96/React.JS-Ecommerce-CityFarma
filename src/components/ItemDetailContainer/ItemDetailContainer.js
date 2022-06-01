import {getProduct} from '../../asyncmock.js'
import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail.js';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () =>{

     const param = useParams()
     console.log(param)
     
     const [producto, setProducto] = useState([]);

     useEffect(() => {
         
          getProduct(param.productId).then(data => {
               setProducto(data)
               }
          )
     }, [])

     return (
          producto !== undefined ? 
              <ItemDetail producto={producto} />
              : <h2> todos putos</h2>
     )
}
export default ItemDetailContainer