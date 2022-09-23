import { Image } from '@chakra-ui/react';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
} from '@chakra-ui/react';



const Articles = (props) =>{
     return (
               <div className='articles-back'>
                  <div className='articles-text'>
                                   <Text fontSize={'8xl'} color={'white'}>
                                        Artículos y Noticias                                   
                                   </Text>
                    </div>
                         <div className='articles-layout'>
                         {props.article.map((item)=>{
                              return (

                        
                        

                           


                              <div className='articles-artc'>
                                   <div >
                                        <Center py={6}>
                                             <Box
                                                  maxW={'300px'}
                                                  w={'full'}
                                                  boxShadow={'2xl'}
                                                  rounded={'md'}
                                                  p={6}
                                                  overflow={'hidden'}
                                                  className="article-border">
                                                  <Box
                                                       h={'210px'}
                                                       bg={'gray.100'}
                                                       mt={-6}
                                                       mx={-6}
                                                       mb={6}
                                                       pos={'relative'}>
                                                       <Image
                                                            src={
                                                                 item.imgPortada
                                                            }
                                                            layout={'fill'}
                                                            width={500}
                                                            height={210}
                                                       />
                                                  </Box>
                                                  <Stack>
                                                       <Text
                                                            color={'green.500'}
                                                            textTransform={'uppercase'}
                                                            fontWeight={800}
                                                            fontSize={'sm'}
                                                            letterSpacing={1.1}>
                                                            {item.categoria}
                                                       </Text>
                                                       <Heading
                                                            fontSize={'2xl'}
                                                            fontFamily={'body'}
                                                            color={'white'}>
                                                            {item.titulo}
                                                       </Heading>
                                                       <Text color={'aquamarine'}>
                                                            {item.descripcion}
                                                       </Text>
                                                  </Stack>
                                                  <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                                                       <Avatar
                                                            src={item.img}
                                                            alt={item.autor}
                                                       />
                                                       <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                                            <Text fontWeight={600}
                                                            color={'white'}>
                                                                 {item.autor}
                                                            </Text>
                                                       </Stack>
                                                  </Stack>
                                             </Box>
                                        </Center>
                                   </div>
                              </div>
                                    )})}
                    </div>
               
                    </div>
                    
     )}
     


export default Articles