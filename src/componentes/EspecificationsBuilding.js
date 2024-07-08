import React from "react";
import Container from "./Container";
import { Box, Flex, Text } from "@chakra-ui/react";
//icons
//icons
import { BiBed } from "react-icons/bi";
import { FaShower } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { IoMdResize } from "react-icons/io";
import Titulo from "./Titulo";
import img from "../assets/logo-minha-casa-minha-vida.png";
const EspecificationsBuilding = ({ size, bedroom, bathroom, garage }) => {
  return (
    <Container>
      <Box mt={{ base: 0, md: 4 }} fontSize={{ base: "sm", md: "lg" }}>
        <Titulo>Especificações</Titulo>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          mb={14}
          flex={1}
          gap={7}
          mt={8}
          px={6}
          align="start"
        >
          <Flex
            flexDirection={{ base: "row", md: "column" }}
            alignItems="center"
            justify="center"
            gap={3}
          >
            <IoMdResize size={35} color="gray" />
            <Text fontWeight="bold" fontSize={{ base: "xl", md: "2xl" }}>
              {size} m²
            </Text>
          </Flex>

          <Flex
            flexDirection={{ base: "row", md: "column" }}
            alignItems="center"
            justify="center"
            gap={3}
          >
            <BiBed size={35} color="gray" />
            <Text
              fontWeight="bold"
              fontSize={{ base: "xl", md: "2xl" }}
              display="flex"
              flexDirection="row"
              gap={2}
            >
              {bedroom}
              {bedroom > 1 && (
                <Text display="inline" as="span">
                  quartos
                </Text>
              )}
              {bedroom === 1 && (
                <Text display="inline" as="span">
                  quarto
                </Text>
              )}
            </Text>
          </Flex>

          <Flex
            flexDirection={{ base: "row", md: "column" }}
            alignItems="center"
            justify="center"
            gap={3}
          >
            <FaShower size={35} color="gray" />
            <Text
              fontWeight="bold"
              fontSize={{ base: "xl", md: "2xl" }}
              display="flex"
              flexDirection="row"
              gap={2}
            >
              {bathroom}
              {bathroom > 1 && (
                <Text display="inline" as="span">
                  banheiros
                </Text>
              )}
              {bathroom === 1 && (
                <Text display="inline" as="span">
                  banheiro
                </Text>
              )}
            </Text>
          </Flex>

          {garage > 0 && (
            <Flex
              flexDirection={{ base: "row", md: "column" }}
              alignItems="center"
              gap={3}
            >
              <GiHomeGarage size={35} color="gray" />
              <Text
                fontWeight="bold"
                fontSize={{ base: "xl", md: "2xl" }}
                display="flex"
                flexDirection="row"
                gap={2}
              >
                {garage}
                {garage > 1 && (
                  <Text display="inline" as="span">
                    garagens
                  </Text>
                )}
                {garage === 1 && (
                  <Text display="inline" as="span">
                    garagem
                  </Text>
                )}
              </Text>
            </Flex>
          )}
        </Flex>
      </Box>
    </Container>
  );
};

export default EspecificationsBuilding;
