//react
import React from "react";
//chakra ui
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
//icons
import { BiBed } from "react-icons/bi";
import { FaShower } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { IoMdResize } from "react-icons/io";

const CardHorizontal = ({
  name,
  image,
  status,
  description,
  city,
  uf,
  size,
  bedroom,
  bathroom,
  garage,
  location,
  id,
}) => {
  return (
    <Box
      w={{ base: "full", md: "500x", lg: "full" }}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
    >
      <a href={`empreendimentos/${id}`}>
        <Image
          minH={"300px"}
          maxH={"300px"}
          minW={{ base: "100%", md: "250px", lg: "380px" }}
          maxW={{ base: "100%", md: "250px", lg: "380px" }}
          src={image}
          alt={name}
          objectFit="cover"
        />
      </a>

      <Flex flexDir="column" px={5} justify="center">
        <a href={`empreendimentos/${id}`}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl" }}
            mt={{ base: 5, md: 0 }}
          >
            {name}
          </Heading>
        </a>
        <Stack
          mt={8}
          direction={{ base: "column", md: "row" }}
          fontSize={{ base: "lg", md: "sm", lg: "lg" }}
          color="#051C34"
          px={1}
          gap={{ base: 4 }}
          flexWrap="wrap"
        >
          <Box display="flex" alignItems="center" gap={2}>
            <IoMdResize /> {size} <Text>m²</Text>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <BiBed /> {bedroom} {bedroom > 1 && <Text>quartos</Text>}
            {bedroom === 1 && <Text>quarto</Text>}
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <FaShower /> {bathroom} {bathroom > 1 && <Text>banheiros</Text>}
            {bathroom === 1 && <Text>banheiro</Text>}
          </Box>
          {garage > 0 && (
            <Box display="flex" alignItems="center" gap={2}>
              <GiHomeGarage /> {garage} {garage > 1 && <Text>garagens</Text>}
              {garage === 1 && <Text>garagem</Text>}
            </Box>
          )}
        </Stack>
        <Text mt={4} fontSize={{ base: "sm", lg: "lg" }} noOfLines={3} px={1}>
          {description}
        </Text>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={{ base: "column", sm: "row" }}
          mt={5}
        >
          <a href={`empreendimentos/${id}`}>
            <Button
              rounded={"full"}
              size={{ base: "md", lg: "lg" }}
              fontWeight={{ base: "sm", lg: "normal" }}
              px={6}
              bg={"#051C34"}
              color="white"
              _hover={{ bg: "gray.700" }}
              w={{ base: "100%", md: "180px", lg: "250px" }}
            >
              Conhecer
            </Button>
          </a>

          <a href={`${location}`}>
            <Button
              rounded={"full"}
              size={{ base: "md", lg: "lg" }}
              fontWeight={"normal"}
              px={6}
              mb={{ base: 10, md: 0 }}
              w={{ base: "100%", md: "180px", lg: "250px" }}
            >
              Localização
            </Button>
          </a>
        </Stack>
      </Flex>
    </Box>
  );
};

export default CardHorizontal;
