import { getProducts } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useEffect } from "react"

 

const ItemListContainer = (props) =>{
     return (
          <h1>
               {props.greeting}     
          </h1>
     )
}
export default ItemListContainer