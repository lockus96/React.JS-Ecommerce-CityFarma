import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail.js';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () =>{

     const [producto, setProducto] = useState();
     
     
     const {productId} = useParams()
 

     useEffect(() => {
         
          getDoc(doc(db, 'products', productId)).then(data => {
               const product = { id: data.id, ...data.data()}
               setProducto(product)
          }).catch(err => {
               console.log(err)
          })
     }, [productId])
     

     return (
          producto !== undefined ? 
              <ItemDetail {...producto} />
              : <h2>Espere por favor...</h2>
     )
}
export default ItemDetailContainer