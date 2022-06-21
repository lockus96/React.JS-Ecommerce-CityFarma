import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import { getDocs, collection, where, query } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { useParams } from 'react-router-dom';




const ItemListContainer = () =>{

     const [productos, setProductos] = useState([]);

     
     const {categoryId} = useParams()
     console.log(productos)
  

     useEffect(() => {

          const collectionRef = categoryId 
          ? query (collection(db, 'products'), where('categoria', '==', categoryId))
          : collection(db, 'products')

          getDocs(collectionRef).then(data => {
               const products = data.docs.map(doc => {
                    return { id: doc.id, ...doc.data()}
                    
               })
               setProductos(products)
          }).catch(err => {
               console.log(err)
          })
     }, [categoryId])
     
    

     return (
          <div className='grillaItems'>
          <ItemList producto={productos}/>
          </div>
     )
}


export default ItemListContainer