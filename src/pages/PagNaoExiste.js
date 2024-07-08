import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const PagNaoExiste = () => {
  return (
    <Box textAlign="center" maxW="full" mt={{base: '10rem', md: '13rem'}} height={{base:'300px', md: '550px', lg: '340px'}}>
      <Heading
        display="inline-block"
        as="h2"
        size="4xl"
        bg="#051C34"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Página não encontrada
      </Text>
      <Text  mb={6}>
        A página que você procura não existe ou URL pode estar incorreta.
      </Text>
      <Button rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}>
        <Link to="/">Ir para página Home</Link>
      </Button>
    </Box>
  );
};

export default PagNaoExiste;
