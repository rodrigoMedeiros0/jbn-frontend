import React from "react";
import { Box, Heading, Text, Stack } from "@chakra-ui/react";

const CardMissaoVisao = ({ titulo, texto }) => {
  return (
    <Box
      maxW={"300px"}
      rounded={"md"}
      overflow={"hidden"}
      display="flex"
      flexDirection="column"
    >
      <Stack p={3} mb={2} w="290px">
        <Heading fontSize={{base: "sm",  lg:"2xl"}} mt={3}>
          {titulo}
        </Heading>
        <Text color={"gray.500"} mt={2} fontSize={{base: "sm",  lg:"md"}}>
          {texto}
        </Text>
      </Stack>
    </Box>
  );
};

export default CardMissaoVisao;
