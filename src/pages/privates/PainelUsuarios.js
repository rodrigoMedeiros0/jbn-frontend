//react + router dom 
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//charkra ui 
import {
  Box,
  Button,
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
//context
import { AuthContext } from "../../contexts/auth";

const PainelUsuarios = () => {
  const [users, setUsers] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://backend-jbn.onrender.com/auth/users", {
      headers: { "Authorization": `Bearer ${token}`},
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, [token]);

  return (
    <Box
      maxWidth="1000px"
      display="flex"
      justifyContent="center"
      mx="auto"
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
          Usuários cadastrados
        </Text>
        <Link to="/autenticado/usuarios/novo">
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
              <Th>Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            {(users.length > 0) &&
              users.map((user) => (
                <Tr key={user.email}>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PainelUsuarios;
