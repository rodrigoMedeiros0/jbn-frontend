import React from "react";
import Container from "./Container";
import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import CardHorizontal from "./CardHorizontal";
import image from "../assets/notFound.png";

const ListCardsVertical = (props) => {
  return (
    <Container>
     {props.buildings &&  <Stack direction={{ base: "column" }} gap={8} align="center">
        {props.buildings.map((building) => (
          <CardHorizontal
            name={building.name}
            image={building.gallery[0].url}
            status={building.status}
            description={building.description}
            city={building.city}
            uf={building.uf}
            size={building.size}
            bedroom={building.bedroom}
            bathroom={building.bathroom}
            garage={building.garage}
            location={building.location}
            id={building._id}
            key={building._id}
          />
        ))}
      </Stack>}
      {props.buildings.length < 1 && <Flex direction='column' align='center'>
        <Image src={image} boxSize='500px'/>
        <Text>Não existe nenhum empreendimento com esse filtro</Text>
        </Flex>}
    </Container>
  );
};

export default ListCardsVertical;
