//react
import React, { useContext, useEffect } from "react";
//chakra ui
import { Box, } from "@chakra-ui/react";
//my components
import Titulo from "../../componentes/Titulo";
import FeatureQuemSomos from "../../componentes/FeatureQuemSomos";
import MissaoVisaoValores from "../../componentes/MissaoVisaoValores";
import Resultados from "../../componentes/Resultados";
import Whats from "../../componentes/Whats";
import Footer from "../../componentes/Footer";
//my context
import { AuthContext } from "../../contexts/auth";
//router dom
import { Navigate } from "react-router-dom";

const QuemSomos = () => {
  useEffect(() => {
    document.title = 'JBN | Quem somos';
  }, []); 

  const { authenticated} = useContext(AuthContext);

  if (authenticated) {
    return <Navigate to="/autenticado/empreendimentos" />;
  }
    
  return (
    <>
      <Box
        maxW={"1300px"}
        mx="auto"
        color="#051C34"
        display="block"
        mt={{base: 0, md: 14}}
        py={{base: 4, md: 12}}
        px={6}
      >
        <Titulo>Quem somos</Titulo>
        <FeatureQuemSomos />
        <MissaoVisaoValores />
        <Resultados />
        <Whats />
      </Box>
      <Footer />
    </>
  );
};

export default QuemSomos;
