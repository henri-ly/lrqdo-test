import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, HStack } from "@chakra-ui/layout";
import React from "react";

const Pagination: React.FC<{
  currentPage: number;
  isLastPage: boolean;
  onPageChange: (page: number) => void;
}> = ({ currentPage, isLastPage, onPageChange }) => {
  return (
    <HStack>
      {currentPage !== 1 ? (
        <Box
          bg="white"
          cursor="pointer"
          p={1}
          onClick={() => {
            onPageChange(currentPage - 1);
          }}
        >
          <ChevronLeftIcon />
        </Box>
      ) : null}

      <Box bg="white" p={1}>
        {currentPage}
      </Box>

      {!isLastPage ? (
        <Box
          bg="white"
          cursor="pointer"
          p={1}
          onClick={() => {
            onPageChange(currentPage + 1);
          }}
        >
          <ChevronRightIcon />
        </Box>
      ) : null}
    </HStack>
  );
};

export default Pagination;
