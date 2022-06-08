import {getProduct} from '../../asyncmock.js'
import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail.js';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () =>{

     const [producto, setProducto] = useState();
     
     
     const {productId} = useParams()
 

     useEffect(() => {
         
          getProduct(productId).then(data => {
               setProducto(data)
               }
          )
     }, [productId])
     

     return (
          producto !== undefined ? 
              <ItemDetail {...producto} />
              : <h2>Espere por favor...</h2>
     )
}
export default ItemDetailContainer