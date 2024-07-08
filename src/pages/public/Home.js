//react
import React, { useContext, useEffect } from "react";
//chakra ui
import { Box } from "@chakra-ui/react";
//my components
import Hero from "../../componentes/Hero";
import FeatureHome from "../../componentes/FeatureHome";
import ListaCardsHorizontal from "../../componentes/ListaCardsHorizontal";
import Whats from "../../componentes/Whats";
import Footer from "../../componentes/Footer";
//my context
import { AuthContext } from "../../contexts/auth";
//router dom
import { Navigate } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "JBN Construções";
  }, []);

  const { authenticated } = useContext(AuthContext);

  if (authenticated) {
    return <Navigate to="/autenticado/empreendimentos" />;
  }

  return (
    <Box>
      <Hero />
      <ListaCardsHorizontal />
      <FeatureHome />
      <Whats />
      <Footer />
    </Box>
  );
};

export default Home;
