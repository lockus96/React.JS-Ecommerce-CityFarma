import {useState, useEffect} from 'react'
import ItemList from './ItemList';
import { getDocs, collection, where, query } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { useParams, useLocation } from 'react-router-dom';




const ItemListContainer = () =>{

     
     const [home, setHome] = useState()
     const [productos, setProductos] = useState([]);
     const {categoryId} = useParams()
     const location = useLocation();

   

     useEffect(() => {

          const collectionRef = categoryId 
          ? query (collection(db, 'products'), where('categoria', '==', categoryId))
          : collection(db, 'products')


          //In case of being on the main page, set 'home' on true
          //In that case, it will change className on items on display
          // eslint-disable-next-line
          if(location.pathname == '/' ||location.pathname == '' ){
               setHome(true)
               getDocs(collectionRef).then(data => {
                    const products = data.docs.slice(0, 3).map(doc => {
                         return { id: doc.id, ...doc.data()}
                         
                    })
                    setProductos(products)
               }).catch(err => {
                    console.log(err)
               })
          } else {
               setHome(false)
               getDocs(collectionRef).then(data => {
                    const products = data.docs.map(doc => {
                         return { id: doc.id, ...doc.data()}
                         
                    })
                    setProductos(products)
               }).catch(err => {
                    console.log(err)
               })
          }
   

     }, [categoryId, location.pathname])
     
     return (
          <div className={ home ? 'grillaHome' : 'grillaItems'  } >
          <ItemList producto={productos}/>
          </div>
     )
}


export default ItemListContainer