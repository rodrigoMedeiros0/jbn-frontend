import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

const CardValores = () => {
  return (
    <Box
      maxW={"445px"}
      // eslint-disable-next-line react-hooks/rules-of-hooks
      rounded={"md"}
      overflow={"hidden"}
      display="flex"
      flexDirection="column"
    >
      <Stack p={3}>
        <Box mt={2}></Box>
        <Heading fontSize={"2xl"} mt={3}>
          Valores
        </Heading>

        <UnorderedList color={"gray.500"} mt={2}>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </UnorderedList>
      </Stack>
    </Box>
  );
};

export default CardValores;
