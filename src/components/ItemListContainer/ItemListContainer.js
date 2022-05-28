import {getProducts} from '../../asyncmock.js'
import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () =>{

     const [productos, setProductos] = useState([]);

     useEffect(() => {
          getProducts().then(data => {
               setProductos(data)
               }
          )
     }, [])

     return (
          <ItemList producto={productos}/>
     )
}
export default ItemListContainer