import { Box, Spacer, WrapItem } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { ProductType } from "interfaces/ProductType";
import React from "react";

const ProductCard: React.FC<{
  product: ProductType;
  onClick: (id: string) => void;
}> = ({ product, onClick }) => {
  return (
    <WrapItem
      bg="white"
      p={2}
      key={product._id}
      flexDirection="column"
      width={["45%", "30%", "200px"]}
      shadow="md"
      borderRadius="sm"
      cursor="pointer"
      onClick={() => onClick(product._id)}
    >
      <Image src={product.image_front_url} />
      <Spacer />
      <Box fontWeight="bold">{product.product_name}</Box>

      <Box>
        Allergens :
        {product.allergens_imported || product.allergens.split(",").join(" ")}
      </Box>
    </WrapItem>
  );
};

export default ProductCard;
