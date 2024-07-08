//react + router dom
import React from "react";
import { Link } from "react-router-dom";
//chakra ui
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
//my components
import AlertMessage from "../../componentes/AlertMessage";
import MessageLoading from "../../componentes/MessageLoading";
//my hooks
import { useFetch } from "../../hooks/useFetch";

const PainelEmpreendimentos = () => {
  const { isPending, error, allBuildings } = useFetch();

  return (
    <Box
      maxWidth="1000px"
      display="flex"
      justifyContent="end"
      flexDirection="column"
      mt={12}
      px={6}
      ml={{ base: "0", lg: "18rem" }}
    >
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justify={{ base: "space-between" }}
        align={"center"}
        gap={8}
      >
        <Text fontSize="xl" fontWeight="bold">
          Empreendimentos da JBN
        </Text>
        <Link to="/autenticado/empreendimentos/novo">
          <Button
            rounded={"full"}
            size={"lg"}
            width={"100px"}
            fontWeight={"normal"}
            px={6}
            bg={"#051C34"}
            color="white"
            _hover={{ bg: "gray.700" }}
          >
            Novo
          </Button>
        </Link>
      </Flex>
      <TableContainer mt={10} fontSize="lg">
        <Table variant="simple" colorScheme="blackAlpha">
          <Thead>
            <Tr bg="gray.300">
              <Th>Nome</Th>
              <Th>Ação</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allBuildings &&
              allBuildings.length > 0 &&
              allBuildings.map((building) => (
                <Tr key={building._id}>
                  <Td>{building.name}</Td>
                  <Td>
                    <ButtonGroup>
                      <Link to={`atualizar/${building._id}`}>
                        <Button
                          rounded={"lg"}
                          px={3}
                          bg={"orange.400"}
                          color="white"
                          _hover={{ bg: "orange.700" }}
                        >
                          Editar
                        </Button>
                      </Link>
                      <Link to={`deletar/${building._id}`}>
                        <Button
                          rounded={"lg"}
                          px={3}
                          bg={"red.500"}
                          color="white"
                          _hover={{ bg: "red.700" }}
                        >
                          Excluir
                        </Button>
                      </Link>
                    </ButtonGroup>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>

      {isPending && <MessageLoading />}
      {error && <AlertMessage status="error" message={error} />}
      {allBuildings && allBuildings.length === 0 && <Box mt={5}><Text>Nenhum empreendimento foi encontrado no banco de dados</Text></Box>}
    </Box>
  );
};

export default PainelEmpreendimentos;
