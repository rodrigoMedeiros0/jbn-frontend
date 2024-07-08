import React, { useEffect, useState } from "react";
//my hooks
import { useFetch } from "../hooks/useFetch";
import { Box, Container, Stack } from "@chakra-ui/react";
import Titulo from "./Titulo";
import CardVertical from "./CardVertical";
const ListRecomendedBuilding = ({ id }) => {
  const { isPending, allBuildings } = useFetch();

  const [listBuildings, setListBuildings] = useState();

  useEffect(() => {
    if (allBuildings && allBuildings.length > 0) {
        const filter = allBuildings.filter((element) => element._id !== id);
        const result = filter.slice(-3);
      setListBuildings(result);
    }
  }, [allBuildings, id]);

  return (
    <Container px={6} maxWidth={"1300px"} py='10px'>
      <Titulo>Também recomendamos</Titulo>
      <Box px={6} mt={8}>
        {listBuildings && listBuildings.length > 0 && (
          <Stack
            direction={{ base: "column", lg: "row" }}
            gap={8}
            align="center"
          >
            {listBuildings.map((building) => (
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
                linkRef=''              
              />
            ))}
          </Stack>
        )}
      </Box>
    </Container>
  );
};

export default ListRecomendedBuilding;
