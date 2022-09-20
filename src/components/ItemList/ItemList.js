import { Link } from "react-router-dom"
import {
     Flex,
     Circle,
     Box,
     Image,
     Badge,
     Text,
     Icon,
     chakra,
     Tooltip,
   } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';






const ItemList = (props) =>{
     return (
          <>
           {props.producto.map((item) => {
               return (



               <Flex p={10} w="full" alignItems="center" justifyContent="center">
                    <Box
                    
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
                         objectFit='full'
                         width={300}
                         height={400}
                         alt={`algo`}
                         roundedTop="lg"
                    />

                    <Box p="6">
                         <Box d="flex" alignItems="baseline">
                         {item.estado && (
                         <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                              Nuevo
                         </Badge>
                         )}
                         </Box>
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
                         label="Comprar"
                         bg="white"
                         placement={'top'}
                         color={'gray.800'}
                         fontSize={'1.2em'}>
                         <chakra.a href={'#'} display={'flex'}>
                              <Link to={`/detail/${item.id}`} className="itemCart">
                                   <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                              </Link>
                         </chakra.a>
                         </Tooltip>
                         </Flex>

                         <Flex justifyContent="space-between" alignContent="center">
                         
                         <Box fontSize="2xl" >
                         <Box as="span" color={'gray.600'} fontSize="lg">
                              $
                         </Box>
                         {item.precio}
                         </Box>
                         </Flex>
                    </Box>
                    </Box>
               </Flex>
               )})} 

          </>
     )
}

export default ItemList