import { WrapItem } from '@chakra-ui/react'
import { Button, ButtonGroup } from "@chakra-ui/button"
import { FiChevronDown, FiChevronUp, FiCheck } from "react-icons/fi";
import { Text }  from '@chakra-ui/react';
import { useState } from "react";

const ItemCount = ({stock, initial, onConfirm}) =>{
     const [cuenta, setCuenta] = useState(initial)
     
     const disminuir = () => {
          setCuenta(cuenta => Math.max (cuenta - 1, initial))
     }
     const aumentar = () =>{
          if(!stock == 0){
               setCuenta(cuenta => Math.min (cuenta + 1, stock))
          }
     }
     const agregarTotal = () =>{
          onConfirm (cuenta)
          setCuenta (cuenta)
     }
     
     return (
          <div className="contadorBox">
                    <WrapItem>

                         <ButtonGroup size='sm' isAttached variant='outline'>
                              <Button>
                                   <FiChevronDown size={30} onClick={disminuir} />
                              </Button>
                              <Text style={{ width: 60 }}>
                                   <h5 className="card-title numeroContador">{cuenta}</h5>
                              </Text>
                              <Button>
                              <FiChevronUp size={30} onClick={aumentar} />
                                   </Button>
                         </ButtonGroup>
               
                    </WrapItem>
                    <WrapItem> 
                         <Button>
                             <FiCheck size={30} onClick={agregarTotal} />
                         </Button>
                    </WrapItem>
          </div> 

          
     )
}


export default ItemCount