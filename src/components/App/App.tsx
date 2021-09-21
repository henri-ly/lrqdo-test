import { ChakraProvider } from "@chakra-ui/react";
import Routes from "components/Routes";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes />
      </Router>
    </ChakraProvider>
  );
};

export default App;
