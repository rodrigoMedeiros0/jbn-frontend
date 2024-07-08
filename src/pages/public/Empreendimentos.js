import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import Titulo from "../../componentes/Titulo";
import ListCardsVertical from "../../componentes/ListCardsVertical";
import Whats from "../../componentes/Whats";
import Footer from "../../componentes/Footer";
import MessageLoading from "../../componentes/MessageLoading";
import { AuthContext } from "../../contexts/auth";
import { useFetch } from "../../hooks/useFetch";

const Empreendimentos = () => {
  useEffect(() => {
    document.title = "JBN | Empreendimentos";
  }, []);

  const {
    isPending,
    allBuildingReady,
    allBuildingConstruction,
    allBuildingRunning,
  } = useFetch();

  const [buttonReady, setButtonReady] = useState(false);
  const [buttonConstruction, setButtonConstruction] = useState(true);
  const [buttonRunning, setButtonRunning] = useState(false);

  const handlerReady = () => {
    setButtonConstruction(false);
    setButtonReady(true);
    setButtonRunning(false);
  };
  const handlerConstruction = () => {
    setButtonConstruction(true);
    setButtonReady(false);
    setButtonRunning(false);
  };
  const handlerRunning = () => {
    setButtonConstruction(false);
    setButtonReady(false);
    setButtonRunning(true);
  };

  const { authenticated } = useContext(AuthContext);

  if (authenticated) {
    return <Navigate to="/autenticado/empreendimentos" />;
  }

  return (
    <>
      <Box
        maxW={"1300px"}
        mx="auto"
        color="#051C34"
        display="block"
        mt={{ base: 0, md: 14 }}
        py={{ base: 4, md: 12 }}
        mb={{ base: "100px", md: "400px" }}
      >
        <Titulo>Empreendimentos</Titulo>
        <Stack mt={5} px={6}>
          <Text>Filtrar por: </Text>
          <Flex flexDir={{ base: "column", md: "row" }} gap={4}>
           {(allBuildingConstruction && allBuildingConstruction.length > 0) && <Button
              rounded={"full"}
              bg="transparent"
              border="1px solid #051C34"
              fontSize="0.9rem"
              onClick={() => handlerConstruction()}
              isActive={buttonConstruction}
              _active={{ background: "#051C34", color: "white" }}
            >
              Vendas na planta
            </Button>}
            {(allBuildingReady && allBuildingReady.length > 0 ) && <Button
              rounded={"full"}
              bg="transparent"
              border="1px solid #051C34"
              onClick={() => handlerReady()}
              isActive={buttonReady}
              _active={{ background: "#051C34", color: "white" }}
            >
              Pronto para morar
            </Button>}
            {(allBuildingRunning && allBuildingRunning.length > 0 ) && <Button
              rounded={"full"}
              bg="transparent"
              border="1px solid #051C34"
              onClick={() => handlerRunning()}
              isActive={buttonRunning}
              _active={{ background: "#051C34", color: "white" }}
            >
              Breve lançamento
            </Button>}
          </Flex>
        </Stack>
        {isPending && <MessageLoading />}
        {allBuildingReady && buttonReady && (
          <ListCardsVertical buildings={allBuildingReady} />
        )}
        {allBuildingConstruction && buttonConstruction && (
          <ListCardsVertical buildings={allBuildingConstruction} />
        )}
        {allBuildingRunning && buttonRunning && (
          <ListCardsVertical buildings={allBuildingRunning} />
        )}
        <Whats />
      </Box>
      {!isPending && <Footer />}
    </>
  );
};

export default Empreendimentos;
