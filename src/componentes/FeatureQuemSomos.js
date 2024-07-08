import React from "react";
import {
  Container,
  Stack,
  Flex,
  Box,
  Text,
  Image,
  IconButton,
} from "@chakra-ui/react";
//image
import imageTeam from "../assets/photograph.jpeg"

const FeatureQuemSomos = () => {
  return (
    <Container maxW={"1300px"} mx="auto" color="#051C34">
      <Text
        mt={5}
        color="#051C34"
        fontWeight="bold"
        fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
      >
        Venha conhecer a JBN
      </Text>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18 }}
        direction={{ base: "column", md: "row" }}
        mt={2}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Text color={"#051C34"} fontSize={{ base: "sm", lg: "md" }}>
            Nossa história se deu início em setembro 2015, na Cidade
            Ocidental-GO, com o propósito de contribuir com o desenvolvimento
            habitacional da cidade e atender famílias pelo programa do Governo
            Federal MCMV (minha casa minha vida). Já no ano de 2018, iniciamos
            nossas atividades na cidade de Águas Lindas de Goiás-GO, com o mesmo
            propósito, onde há 8 anos já realizamos o sonho da casa própria para
            mais de 400 famílias. O nosso <Text fontWeight='bold' display='inline' as="span" >compromisso</Text> é com o cliente, visamos a
            <Text fontWeight='bold' display='inline' as="span"> qualidade</Text> de nossos empreendimentos, prestamos um atendimento 
            <Text fontWeight='bold' display='inline' as="span"> personalizado</Text> e <Text fontWeight='bold' display='inline' as="span">respeitamos</Text> o prazo de entrega. Contudo, através da
            satisfação de nossos parceiros e clientes, a JBN vem crescendo
            exponencialmente, e deseja contribuir ainda mais com desenvolvimento
            habitacional da cidade, atendendo a milhares de famílias.
          </Text>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={{base: "240", lg: "350"}}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <IconButton
              aria-label={"Play Button"}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              size={"lg"}
              color={"white"}
              position={"absolute"}
              left={"50%"}
              top={"50%"}
              transform={"translateX(-50%) translateY(-50%)"}
            />
            <Image
              alt={"Hero Image"}
              fit={"fill"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                imageTeam
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default FeatureQuemSomos;
