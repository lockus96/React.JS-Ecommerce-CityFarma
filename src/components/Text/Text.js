import { Flex, Text } from "@chakra-ui/react";

function ProductsText() {
  return (
     <Flex>
          <Text align={"center"} fontSize='5xl' className="productsText">
               Los productos más elegidos
          </Text>
     </Flex>
  )
}

export default ProductsText;