import React from "react";
import CardMissaoVisaoValores from "../componentes/CardMissaoVisao";
import { Box, Stack } from "@chakra-ui/react";

const MissaoVisaoValores = () => {
  return (
    <Box mt={5}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        alignItems="flex-start"
      >
        <CardMissaoVisaoValores
          titulo="Missão"
          texto="Ser reconhecida como referência no Brasil como Empresa de incorporação e construção de residenciais, pela excelência de seus resultados e de seu trabalho."
        />
        <CardMissaoVisaoValores
          titulo="Visão"
          texto="Ser a referência na construção de imóveis populares, pela inovação, qualidade e preço dos seus produtos nos mercados onde atua.."
        />
        <CardMissaoVisaoValores
          titulo="Valores"
          texto="A empresa presa pelo prazo de entrega, satisfação de seus clientes e qualidade dos serviços executados na realização de seus empreendimentos."
        />
      </Stack>
    </Box>
  );
};

export default MissaoVisaoValores;
