import React, { useEffect, useState } from "react";
import { Box, Stack} from "@chakra-ui/react";
import Titulo from "./Titulo";
import Container from "./Container";
import CardVertical from "./CardVertical";
import BotaoEmpreendimentos from "./BotaoEmpreendimentos";
import MessageLoading from "./MessageLoading";
import { useFetch } from "../hooks/useFetch";


const ListaCardsHorizontal = () => {
  const {
    isPending,
    allBuildingReady,
    allBuildingConstruction,
    allBuildingRunning,
  } = useFetch();

  //code for deploy api is not reset and slow - rodrigo
  setInterval(async () => {
    const res = await fetch(`https://backend-jbn.onrender.com/building/`);
  }, 840000);

  const [resultBuildingReady, setResultBuildingReady] = useState(null);
  const [resultUnderConstruction, setResultUnderConstruction] = useState(null);
  const [resultUnderRunning, setResultUnderRunning] = useState(null);

  useEffect(() => {
    if (allBuildingReady) {
      const result = allBuildingReady.slice(-3);
      setResultBuildingReady(result);
    }

    if (allBuildingConstruction) {
      const result = allBuildingConstruction.slice(-3);
      setResultUnderConstruction(result);
    }

    if (allBuildingRunning) {
      const result = allBuildingRunning.slice(-3);
      setResultUnderRunning(result);
    }

  }, [allBuildingReady, allBuildingConstruction, allBuildingRunning]);


  return (
    <Box>
      {isPending && <MessageLoading />}
      {resultUnderConstruction && resultUnderConstruction.length > 0 && (
        <Box>
          <Titulo>Vendas na planta</Titulo>
          <Container>
            <Stack
              direction={{ base: "column", lg: "row" }}
              gap={8}
              align="center"
            >
              {resultUnderConstruction.map((building) => (
                <CardVertical
                  name={building.name}
                  image={building.gallery[0].url}
                  address={building.address}
                  status={building.status}
                  city={building.city}
                  uf={building.uf}
                  bedroom={building.bedroom}
                  bathroom={building.bathroom}
                  garage={building.garage}
                  id={building._id}
                  key={building._id}
                  linkRef='empreendimentos/'
                />
              ))}
            </Stack>
            <BotaoEmpreendimentos />
          </Container>
        </Box>
      )}
      {/* buildings ready for live */}
      {resultBuildingReady && resultBuildingReady.length > 0 && (
        <Box>
          <Titulo>Pronto para morar</Titulo>
          <Container>
            <Stack
              direction={{ base: "column", lg: "row" }}
              gap={8}
              align="center"
            >
              {resultBuildingReady.map((building) => (
                <CardVertical
                  name={building.name}
                  image={building.gallery[0].url}
                  address={building.address}
                  status={building.status}
                  city={building.city}
                  uf={building.uf}
                  bedroom={building.bedroom}
                  bathroom={building.bathroom}
                  garage={building.garage}
                  id={building._id}
                  key={building._id}
                  linkRef='empreendimentos/'
                />
              ))}
            </Stack>

            <BotaoEmpreendimentos />
          </Container>
        </Box>
      )}
      {/* feature building */}
      {resultUnderRunning && resultUnderRunning.length > 0 && (
        <Box>
          <Titulo>Breve lançamento</Titulo>
          <Container>
            <Stack
              direction={{ base: "column", lg: "row" }}
              gap={8}
              align="center"
            >
              {resultUnderRunning.map((building) => (
                <CardVertical
                  name={building.name}
                  image={building.gallery[0].url}
                  address={building.address}
                  status={building.status}
                  city={building.city}
                  uf={building.uf}
                  bedroom={building.bedroom}
                  bathroom={building.bathroom}
                  id={building._id}
                  garage={building.garage}
                  key={building._id}
                  linkRef='empreendimentos/'
                />
              ))}
            </Stack>
            <BotaoEmpreendimentos />
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default ListaCardsHorizontal;
