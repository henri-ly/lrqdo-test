import { Box, Center, Flex, Input, Wrap } from "@chakra-ui/react";
import axios from "axios";
import Loading from "components/Loading";
import Pagination from "components/Pagination";
import ProductCard from "components/ProductCard/ProductCard";
import useDebounce from "hooks/useDebounce";
import useQuery from "hooks/useQuery";
import { ProductsResultType } from "interfaces/ProductsResultType";
import { SearchType } from "interfaces/SearchType";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const PAGE_SIZE = 20;

const ProductList: React.FC = () => {
  const query = useQuery();
  const [search, setSearch] = useState<SearchType>({
    name: query.get("name") || "",
    page: Number(query.get("page") || 1),
  });
  const debouncedValue = useDebounce<SearchType>(search, 1000);
  const [data, setData] = useState<ProductsResultType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const history = useHistory();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    setData(null);
    setSearch({ name: event.target.value, page: 1 });
  };

  const handlePageChange = (page: number) => {
    setIsLoading(true);
    setData(null);
    setSearch({ ...search, page });
  };

  useEffect(() => {
    const fetchData = async (
      name: string,
      page: number,
      pageSize: number = PAGE_SIZE
    ) => {
      if (name !== "") {
        const res = await axios.get<ProductsResultType>(
          `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${name}&search_simple=1&page=${page}&page_size=${pageSize}&cc=fr&lc=fr&json=1`
        );
        history.push({
          search: `?name=${name}&page=${page}`,
        });
        setIsLoading(false);
        setData(res.data);
      }
    };

    fetchData(debouncedValue.name, debouncedValue.page);
  }, [debouncedValue, history]);

  const onProductClick = (id: string) => {
    history.push(`/products/${id}`);
  };

  return (
    <>
      <Flex
        bg="white"
        borderRadius="md"
        shadow="sm"
        p={4}
        direction="column"
        mb={5}
      >
        <Box fontSize="4xl" fontWeight="bold">
          Produits
        </Box>
        <Box>Nom du produit recherché :</Box>
        <Input onChange={handleChange} value={search.name} />

        <Box>
          Vous pouvez également cliquer sur un produit pour avoir plus de détail
          sur celui-ci
        </Box>
      </Flex>

      {data && data.products.length > 0 ? (
        <>
          <Center mb={5}>
            <Pagination
              onPageChange={handlePageChange}
              currentPage={debouncedValue.page}
              isLastPage={data.page_count < PAGE_SIZE}
            />
          </Center>
          <Wrap justify="space-between">
            {data.products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onClick={onProductClick}
              />
            ))}
          </Wrap>
        </>
      ) : !isLoading && data && data.products.length === 0 ? (
        <Center p={4} bg="white" shadow="sm" borderRadius="sm">
          Aucun produit n'a été trouvé
        </Center>
      ) : null}

      {isLoading && <Loading />}
    </>
  );
};

export default ProductList;
