const Item = (props) =>{
     return (
          
          <>
             {props.producto.map((item) => {
               return (
                    <tr key={item.id}>
                         <td>{item.nombre}</td>
                         <td>{item.categoria}</td>
                         <td>{item.precio}</td>
                    </tr>
               )
               })}  
          </>
          
     )
}

export default Item