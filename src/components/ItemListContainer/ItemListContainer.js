import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../services/firebase'




const ItemListContainer = () =>{

     const [productos, setProductos] = useState([]);

     useEffect(() => {

          getDocs(collection(db, 'products')).then(data => {
               const products = data.docs.map(doc => {
                    return { id: doc.id, ...doc.data()}
                    
               })
               setProductos(products)
          }).catch(err => {
               console.log(err)
     })})
    

     return (
          <div className='grillaItems'>
          <ItemList producto={productos}/>
          </div>
     )
}
export default ItemListContainer