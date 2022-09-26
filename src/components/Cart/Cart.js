import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import Form from "../Form/Form";
import { Button, ButtonProps, Flex, useColorModeValue, Circle, Box, Image, Badge, Text, Icon, chakra, Tooltip } from '@chakra-ui/react';
import { FaBan } from 'react-icons/fa';
import { motion } from "framer-motion"


const container = {
     hidden: { opacity: 1, scale: 0 },
     visible: {
          opacity: 1,
          scale: 1,
          transition: {
               delayChildren: 0.3,
               staggerChildren: 0.2
          }
     }
};

const Cart = () => {

     const { getTotalToPay, cart, removeItem, clear } = useContext(CartContext);


     return (
          cart.length === 0 ? <div className="cartBody">
               <h2 className="carritoVacioTitle">¡El carrito está vacío!😥</h2>
          </div>
               :
               <div className="cartBody">
                    <div>

                        
                         <div className="grillaCart">
                              {cart.map(item => (


                                   <motion.div
                                        className="cartCardsContainer"
                                        variants={container}
                                        initial="hidden"
                                        animate="visible"
                                   >
                                        <Flex p={10} w="full" alignItems="center" justifyContent="center" >
                                             <Box
                                                  backgroundColor={'white'}
                                                  maxW={300}
                                                  maxH={570}
                                                  width={300}
                                                  borderWidth="1px"
                                                  rounded="lg"
                                                  shadow="lg"
                                                  position="relative">
                                                  {item.estado && (
                                                       <Circle
                                                            size="10px"
                                                            position="absolute"
                                                            top={2}
                                                            right={2}
                                                            bg="red.200"
                                                       />
                                                  )}

                                                  <Image
                                                       src={item.img} 
                                                       alt={item.name}
                                                       objectFit='full'
                                                       width={300}
                                                       height={400}
                                                       roundedTop="lg"
                                                  />

                                                  <Box p="6">
                                         
                                                       <Flex mt="1" justifyContent="space-between" alignContent="center">
                                                            <Box

                                                            >
                                                                 <Text
                                                                      fontSize="xl"
                                                                      fontWeight="semibold"
                                                                      as="h4"
                                                                      lineHeight="tight"
                                                                      whiteSpace={1}
                                                                      isTruncated>
                                                                      {item.nombre}
                                                                 </Text>
                                                            </Box>
                                                            <Tooltip
                                                                 label="Eliminar"
                                                                 bg="white"
                                                                 placement={'top'}
                                                                 color={'gray.800'}
                                                                 fontSize={'1.2em'}>
                                                                 <chakra.a display={'flex'}>                                            
                                                                           <Icon as={FaBan} h={7} w={7} marginTop={2} alignSelf={'flex-end'} color={'black'} onClick={() => { removeItem(item.id) }} />
                                                                 </chakra.a>
                                                            </Tooltip>
                                                       </Flex>

                                                       <Flex justifyContent="space-between" alignContent="center">

                                                            <Box fontSize="2xl" >
                                                                 <Box as="span" color={'gray.600'} fontSize="lg">
                                                                 {item.cantidad} x $
                                                                 </Box>
                                                                 {item.precio}
                                                            </Box>
                                                       </Flex>
                                                  </Box>
                                             </Box>
                                        </Flex>
                                   </motion.div>


                              ))}
                         </div>

                         <div className="totalText">
                              <p>Total: ${getTotalToPay()}</p>
                         </div>



                         <div className='btnDelete'>
                              <Button
                              backgroundColor={'aquamarine'}
                                   px={8}
                                   color={'red'}
                                   rounded={'md'}
                                   _hover={{
                                        transform: 'translateY(-2px)',
                                        boxShadow: 'lg',
                                   }}
                                   onClick={() => { clear() }}>
                                   Limpiar
                              </Button>
                         </div>
                        
             
                     

                    </div>

                    <Form />

               </div>
     )
}

export default Cart;