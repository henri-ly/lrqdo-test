import { Box, Flex } from "@chakra-ui/react";
import Menu from "components/Menu";
import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <Flex bg="yellow.300" minH="100vh" flexDirection={["column", "row"]}>
      <Menu />
      <Box p={4} w="100%" h={["100vh", "auto"]} overflowY="scroll">
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
