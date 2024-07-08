import { Box, Button, Flex, Image, Text, useToast } from "@chakra-ui/react";
//react
import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
//images
import trash from "../../assets/trash.png";
import AlertMessage from "../../componentes/AlertMessage";
//my hooks
import { useFetchByID } from "../../hooks/useFetchByID";
import MessageLoading from "../../componentes/MessageLoading";
//Context
import { AuthContext } from "../../contexts/auth";

const DeletarEmpreendimento = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState();

  const { id } = useParams();
  const { buildingID, isPending, error } = useFetchByID(id);
  const toast = useToast();
  const { token } = useContext(AuthContext);

  const handleDeleteBuilding = () => {
    setLoading(true);
    fetch(`https://backend-jbn.onrender.com/building/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (response) => {
        if (response.ok) {
          setLoading(false);
          setSuccess(true);
          toast({
            title: "Empreendimento deletado com sucesso",
            description: response.message,
            position: "top",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        setErr("Erro ao deletar empreendimento, tente novamente");
      });
  };

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
      {isPending && <MessageLoading />}
      {error && <AlertMessage status="error" message={error} />}
      {err && <AlertMessage status="error" message={err} />}

      {(buildingID && !success) && (
        <Box>
          <Image
            src={trash}
            boxSize="100px"
            objectFit="cover"
            alt="imagem lixeira"
            mt="5rem"
            mx="auto"
          />
          <Text fontWeight="bold" fontSize="3xl" textAlign="center" my={5}>
            {buildingID.name}
          </Text>
          <Text textAlign="center">
            Você tem certeza que deseja deletar esse empreedimento?
          </Text>
          <Flex flexDir="row" justifyContent="center" mt="3rem" gap={14}>
            <Link to={"/autenticado/empreendimentos"}>
              <Button rounded={"lg"} px={6} _hover={{ bg: "gray.300" }}>
                Voltar
              </Button>
            </Link>
            <Button
              rounded={"lg"}
              px={6}
              bg={"red.500"}
              color="white"
              _hover={{ bg: "red.700" }}
              onClick={handleDeleteBuilding}
              isLoading={loading}
            >
              Excluir
            </Button>
          </Flex>
        </Box>
      )}

      {(!buildingID || success) && !isPending && (
        <Box>
          <Text fontSize='xl'>Nenhum empreendimento encontrado</Text>
          <Link to={"/autenticado/empreendimentos"}>
            <Button rounded={"lg"} px={6} _hover={{ bg: "gray.300" }} mt={4}>
              Voltar
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default DeletarEmpreendimento;
