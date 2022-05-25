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
          <table>
               <thead>
                    <tr>
                         <th>Nombre</th>
                         <th>Categoria</th>
                         <th>Precio</th>
                    </tr>
               </thead>
               <tbody>
                    <Item producto={productos}/>
               </tbody>
          </table>
     )
}
export default ItemList