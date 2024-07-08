import { Center, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const BotaoEmpreendimentos = () => {
  return (
    <Center mt={8}>
      <Text bg="transparent" color="#051C34"fontSize="xl"  _hover={{
            background: "none",
            fontWeight:"bold"
          }}>
        <Link
          to="/empreendimentos"
        >
          Ver empreendimentos
        </Link>
      </Text>
    </Center>
  );
};

export default BotaoEmpreendimentos;
