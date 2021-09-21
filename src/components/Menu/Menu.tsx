import { Box, Stack } from "@chakra-ui/react";
import { ReactComponent as Logo } from "assets/logo.svg";
import StyledLink from "components/StyledLink";
import React from "react";

const Menu: React.FC = () => {
  return (
    <Stack
      bg="white"
      direction={["row", "column"]}
      p={2}
      spacing={[4, 2]}
      w={["100%", "100px"]}
      alignItems="center"
    >
      <Box w="42px">
        <Logo width="100%" height="100%" />
      </Box>
      <StyledLink exact={true} to="/">
        Accueil
      </StyledLink>
      <StyledLink to="/products">Produits</StyledLink>
    </Stack>
  );
};

export default Menu;
