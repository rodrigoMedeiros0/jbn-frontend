//react
import React from "react";
//chakra ui
import { Box, Flex, Text } from "@chakra-ui/react";
//icons
import { AiFillBuild } from "react-icons/ai";
import { FaRegBuilding } from "react-icons/fa";
import { IoIosConstruct } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
//my components
import BotaoEmpreendimentos from "./BotaoEmpreendimentos";

const Resultados = () => {
  return (
    <Box mt={14}>
        <Flex flexDirection={{base: "column",md: "row" }}justify="space-between" mb={14} flex={1} gap={7}>
          <Flex flexDirection="column" alignItems="center">
            <AiFillBuild size={40} color="gray"/>
            <Text fontWeight="bold" fontSize='2xl'>
              + 28 mil
            </Text>
            <Text color={"gray.500"} w={{base: 150, md: 150 ,lg:250}} textAlign='center'>
            m² construídos
            </Text>
          </Flex>

          <Flex flexDirection="column" alignItems="center">
            <BsFillPeopleFill size={40} color="gray"/>
            <Text fontWeight="bold" fontSize='2xl'>
             + 500 
            </Text>
            <Text color={"gray.500"} w={{base: 150, md: 150 ,lg:250}} textAlign='center'>
            empregos diretos e indiretos
            </Text>
          </Flex>

          <Flex flexDirection="column" alignItems="center">
            <FaRegBuilding size={40} color="gray"/>
            <Text fontWeight="bold" fontSize='2xl'>
             + 30 
            </Text>
            <Text color={"gray.500"} w={{base: 150, md: 150 ,lg:250}} textAlign='center'>
            empreendimentos entregues
            </Text>
          </Flex>

          <Flex flexDirection="column" alignItems="center">
            <IoIosConstruct size={40} color="gray"/>
            <Text fontWeight="bold" fontSize='2xl'>
              5
            </Text>
            <Text color={"gray.500"} textAlign='center' w={{base: 150, md: 150 ,lg:250}}>
            empreendimentos sendo construídos simultaneamente
            </Text>
          </Flex>

        </Flex>
        <BotaoEmpreendimentos />
    </Box>
  );
};

export default Resultados;
