import {getProducts} from '../../asyncmock.js'
import {useState, useEffect} from 'react'
import Item from '../Item/Item';


const ItemList = () =>{

     const [productos, setProductos] = useState([]);

     useEffect(() => {
          getProducts().then(data => {
               setProductos(data)
               }
          )
     }, [])

     return (
          <Item producto={productos}/>
     )
}
export default ItemList