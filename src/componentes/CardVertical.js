import React, { useEffect, useState } from "react";

import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  Badge,
} from "@chakra-ui/react";

//icons
import { BiBed } from "react-icons/bi";
import { FaShower } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";

const CardVertical = ({
  name,
  image,
  status,
  address,
  city,
  uf,
  bedroom,
  bathroom,
  garage,
  id,
  linkRef
}) => {
  const [bgStatus, setBgStatus] = useState(status);

  useEffect(() => {
    if (status === "Em construção") {
      setBgStatus("orange");
    } else if (status === "Concluído") {
      setBgStatus("blue");
    } else {
      setBgStatus("gray");
    }
  }, [status]);

  return (
    <Box
      maxW={"400px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      display="flex"
      flexDirection="column"
    >
      <a href={`${linkRef}${id}`}>
        <Image
          height="200px"
          w="100%"
          src={image}
          fill
          alt={name}
        />
      </a>

      <Stack p={3}>
        <Box mt={2}>
          <Badge
            variant="outline"
            colorScheme={`${bgStatus}`}
            textTransform="initial"
            px={4}
            rounded="1rem"
            fontSize="1rem"
            py={0.9}
          >
            {status}
          </Badge>
        </Box>
        <a href={`${linkRef}${id}`}>
          <Heading fontSize={"2xl"} mt={3}>
            {name}
          </Heading>
        </a>

        <Text color={"gray.500"} mt={2}>
          {address}
        </Text>
        <Text color={"gray.500"}>
          {city} - {uf}{" "}
        </Text>
      </Stack>

      <Stack
        mt={1}
        direction={"row"}
        spacing={4}
        p={3}
        fontSize="lg"
        color="#051C34"
      >
        <Text display="flex" alignItems="center" gap={2}>
          <BiBed /> {bedroom}
        </Text>
        <Text display="flex" alignItems="center" gap={2}>
          <FaShower /> {bathroom}
        </Text>
        {garage > 0 && (
          <Text display="flex" alignItems="center" gap={2}>
            <GiHomeGarage /> {garage}
          </Text>
        )}
      </Stack>
    </Box>
  );
};

export default CardVertical;
