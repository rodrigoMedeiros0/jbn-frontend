import "./App.css";
//libraries third
import { ChakraProvider } from "@chakra-ui/react";

import AppRoutes from "./AppRoutes";

export default function App() {

  return (
    <>
      <ChakraProvider>
        <AppRoutes />
      </ChakraProvider>
    </>
  );
  }


