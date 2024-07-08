//react
import React, { useEffect } from "react";
//chakra ui
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
//my hooks
import { useFetchByID } from "../../hooks/useFetchByID";
import { useParams } from "react-router-dom";
import CarroselImages from "../../componentes/CarroselImages";
import MessageLoading from "../../componentes/MessageLoading";
import AboutBuilding from "../../componentes/AboutBuilding";
import EspecificationsBuilding from "../../componentes/EspecificationsBuilding";
import Container from "../../componentes/Container";
import { MdLocationOn } from "react-icons/md";
import Contact from "../../componentes/Contact";
import Footer from "../../componentes/Footer";
import ListRecomendedBuilding from "../../componentes/ListRecomendedBuilding";
import Differential from "../../componentes/Differential";
import Whats from "../../componentes/Whats";
import BuildingIDTitle from "../../componentes/BuildingIDTitle";

const EmpreendimentosID = () => {
  const { id } = useParams();

  const { buildingID, isPending } = useFetchByID(id);

  useEffect(() => {
    if (buildingID) {
      document.title = buildingID.name;
    }
  }, [buildingID]);

  return (
    <Box>
      {buildingID && (
        <Box>
          <CarroselImages images={buildingID.gallery} name={buildingID.name} />
          <BuildingIDTitle
            name={buildingID.name}
            status={buildingID.status}
            city={buildingID.city}
            uf={buildingID.uf}
            address={buildingID.address}
          />
          <AboutBuilding description={buildingID.description} />
          <EspecificationsBuilding
            size={buildingID.size}
            bedroom={buildingID.bedroom}
            bathroom={buildingID.bathroom}
            garage={buildingID.garage}
          />
          <Differential differential={buildingID.differential} />
          <Contact />
          <ListRecomendedBuilding id={buildingID._id} />
          <Footer />
          <Whats />
        </Box>
      )}

      {isPending && <MessageLoading />}
    </Box>
  );
};

export default EmpreendimentosID;
