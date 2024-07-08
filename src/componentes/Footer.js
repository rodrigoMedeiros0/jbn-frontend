import {
  Box,
  Stack,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { RxInstagramLogo } from "react-icons/rx";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
//logo
import logo from "../assets/LogoJBN.svg";

const Footer = () => {
  return (
    <Box w="full" background="gray.100">
      <Box px={6} maxWidth={"1300px"} mt={8} mx="auto" pb={15} >
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          gap={{ base: "10px", md: "50px", lg:"100px" }}
          py="3rem"
          align={{base:"center", lg: "start"}}
          justify="center"
        >
          <Image src={logo} alt="logo da JBN" color="white" w="180px" mx={{base:'auto', md:'0'}} />

          <Stack>
            <Text
              color="gray.700"
              fontWeight="bold"
              fontSize="lg"
              textTransform="uppercase"
              opacity={0.5}
              mt={{base: '1.5rem', md: '0'}}
            >
              Navegue
            </Text>
            <Link to="/">
              <Text
                _hover={{
                  textDecor: "underline",
                }}
              >
                Home
              </Text>
            </Link>
            <Link to="/empreendimentos">
              <Text
                _hover={{
                  textDecor: "underline",
                }}
              >
                Empreendimentos
              </Text>
            </Link>
            <Link to="/quem-somos">
              <Text
                _hover={{
                  textDecor: "underline",
                }}
              >
                Quem somos
              </Text>
            </Link>
            <Link to="/fale-conosco">
              <Text
                _hover={{
                  textDecor: "underline",
                }}
              >
                Fale Conosco
              </Text>
            </Link>
          </Stack>

          <Stack alignItems={{base: "center", lg: "flex-start"}} justify={{base: "center", lg: "flex-start"}}  mt={{base: '1.5rem', md: '0'}}>
            <Text
              color="gray.700"
              fontWeight="bold"
              fontSize="lg"
              textTransform="uppercase"
              opacity={0.5}
            >
              Central de vendas
            </Text>

            <Flex direction="row" align="center" justify="center" gap={2}>
              <BsPhone />
              <Text>(61) 98128-9537</Text>
            </Flex>

            <Flex direction="row" align="center" justify="center" gap={2}>
              <AiOutlineMail />
              <Text>vendas@jbnconstrucoes.com.br</Text>
            </Flex>

            <Flex direction="row" align="center" justify="center" gap={2}>
              <RxInstagramLogo />
              <Text>@jbn_construcoes</Text>
            </Flex>

            <Flex direction="row" align="center" justify="center" gap={2}>
              <AiOutlineFacebook />
              <Text>jbn_construcoes</Text>
            </Flex>
          </Stack>
        </Flex>
        <Flex justify='center' align='center' flexDir={{base: 'column', md: 'row'}} gap={{base: 0, md: 1}} fontSize='md'>
          <Text textAlign='center' fontSize={{base: 13, md: 15}}>JBN Construções e Incorporações LTDA </Text>
          <Text visibility={{base: 'hidden', md: 'visible'}}>-</Text>
          <Text fontSize={{base: 13, md: 15}}>CNPJ: 24.657.951/0001-04 </Text>
        </Flex>
        <Text textAlign='center' mt={4} fontSize={{base: 13, md: 15}}>Copyright © 2023 - Desenvolvido por <Text fontWeight='bold' display='inline' as="a" href="https://www.linkedin.com/in/rodrigo--medeiros/">Rodrigo Medeiros</Text></Text>
      </Box>
    </Box>
  );
};
export default Footer;
