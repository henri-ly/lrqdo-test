import { Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/react";
import React from "react";

const Loading: React.FC = () => {
  return (
    <Center>
      <Spinner size="xl" />
    </Center>
  );
};

export default Loading;
