import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Image,
  SimpleGrid,
  Text,
  Wrap,
} from "@chakra-ui/react";
import Loading from "components/Loading";
import { ProductResultType } from "interfaces/ProductResultType";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useDataFetch from "reducers/useDataFetch";

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error } = useDataFetch<ProductResultType>(
    `https://fr.openfoodfacts.org/api/v0/product/${id}.json`
  );
  const history = useHistory();

  if (!data) return <Loading />;

  if (error)
    return (
      <Center p={4} bg="white" shadow="sm" borderRadius="sm">
        {error}
      </Center>
    );

  const handleProducts = () => {
    if (history.action !== "POP") {
      history.goBack();
    } else {
      history.push("/products");
    }
  };

  return (
    <>
      <Button onClick={handleProducts}>Retour à la recherche</Button>
      <Flex mt={5} flexDirection={["column", "row"]}>
        <Flex
          bg="white"
          borderRadius="md"
          shadow="sm"
          p={4}
          flexDirection="column"
          spacing={2}
          mb={5}
          mr={5}
          w="150px"
          h="250px"
        >
          <Avatar src={data.product.image_front_url} size="xl" />
          <Divider my={5} />
          <Text fontWeight="bold" size="xl">
            {data.product.product_name}
          </Text>
          <Box>
            <Badge>{data.product.brands}</Badge>
          </Box>
        </Flex>

        <Box flex="1" bg="white" borderRadius="md" shadow="sm" p={4}>
          <Text fontWeight="bold" fontSize="2xl">
            Information du produit
          </Text>
          <Divider my={5} />
          <SimpleGrid columns={[1, 2]} spacing={5}>
            <Text fontWeight="bold">Allergènes :</Text>

            <Text>
              {data.product.allergens_imported ||
                data.product.allergens.split(",").join(" ")}
            </Text>

            <Text fontWeight="bold">Ingrédients :</Text>

            <Wrap direction="row">
              {data.product.ingredients.map((i) => {
                return <Badge>{i.text}</Badge>;
              })}
            </Wrap>
            <Text fontWeight="bold"> Image : </Text>
            <Image src={data.product.image_ingredients_url} />

            <Text fontWeight="bold">Catégories :</Text>
            <Wrap>
              {data.product.categories.split(",").map((c) => {
                return <Badge>{c.trim()}</Badge>;
              })}
            </Wrap>

            <Text fontWeight="bold"> Information nutrition : </Text>
            <Image src={data.product.image_nutrition_url} />
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
};

export default Product;
