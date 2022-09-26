import React from 'react'
import { Image, Text } from '@chakra-ui/react'
import { motion } from "framer-motion"
 

function LoadingScreen() {
  return (
    <div className='loadingScreenStyle'>
          <motion.div
            animate={{
               scale: [1, 1, 1, 1, 1, 1],
               rotateZ : [0, 360],
          }}
          transition={{
               duration: 1,
               repeat: Infinity,
               repeatDelay: 1.5,

          }}
          >
               <Image
                    src='https://i.imgur.com/DfBoaTc.png'

               />
          </motion.div>
          <motion.div
            animate={{
               scale: [1, 1.1, 1],
          }}
          transition={{
               duration: 1,
               repeat: Infinity,
          }}
          >
               <Text
               fontSize='6xl'
               fontFamily={'Inconsolata'}
               as='b'
               >
                    Calidad, <Text as='i'>asegurada</Text>
               </Text>
          </motion.div>
          
    </div>
  )
}

export default LoadingScreen