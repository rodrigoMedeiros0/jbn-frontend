import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  Text,
  useToast,
} from "@chakra-ui/react";

import { BiErrorCircle } from "react-icons/bi";
//React library
import { useContext, useState } from "react";
//form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import ModalLoading from "../../componentes/ModalLoading";

import { AuthContext } from "../../contexts/auth";

const schema = yup.object({
  name: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "O número minimo de caracteres é 3")
    .max(30, "O número máximo de caracteres é 30"),
  email: yup.string().required("Campo obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(8, "A senha deve conter no minimo 8 caracteres"),
  confirmPassword: yup
    .string()
    .required("Campo obrigatório")
    .min(8, "A senha deve conter no minimo 8 caracteres")
    .oneOf([yup.ref("password")], "As senhas não combinam"),
});

const NovoUsuario = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const toast = useToast();
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data, event) => {
    event.preventDefault();
    setLoading(true);

    fetch("https://backend-jbn.onrender.com/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        toast({
          title: data.message,
          position: "top",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
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
      <Box mx={6}>
        <Text fontSize="xl" fontWeight="bold">
          Novo Usuário
        </Text>
        <Box mt={5}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex gap={10} flexDir={{ base: "column", lg: "row" }}>
              <ModalLoading />
              <FormControl isInvalid={errors.name}>
                <FormLabel>Nome</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <Input
                    type="text"
                    size="md"
                    focusBorderColor="#051C34"
                    {...register("name")}
                  />
                </InputGroup>
                <FormErrorMessage gap={2}>
                  <BiErrorCircle size={15} /> {errors.name?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.email}>
                <FormLabel>Email</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <Input
                    type="email"
                    size="md"
                    focusBorderColor="#051C34"
                    {...register("email")}
                  />
                </InputGroup>
                <FormErrorMessage gap={2}>
                  <BiErrorCircle size={15} /> {errors.email?.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>
            <Flex gap={10} flexDir={{ base: "column", lg: "row" }} mt={5}>
              <FormControl isInvalid={errors.password}>
                <FormLabel>Senha</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <Input
                    type="password"
                    size="md"
                    focusBorderColor="#051C34"
                    {...register("password")}
                  />
                </InputGroup>
                <FormErrorMessage gap={2}>
                  <BiErrorCircle size={15} /> {errors.password?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.confirmPassword}>
                <FormLabel>Confirmar senha</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <Input
                    type="password"
                    size="md"
                    focusBorderColor="#051C34"
                    {...register("confirmPassword")}
                  />
                </InputGroup>
                <FormErrorMessage gap={2}>
                  <BiErrorCircle size={15} /> {errors.confirmPassword?.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>
            <Flex justify="flex-end">
              <Button
                rounded={"full"}
                size={"lg"}
                width={"100px"}
                fontWeight={"normal"}
                px={6}
                bg={"#051C34"}
                color="white"
                _hover={{ bg: "gray.700" }}
                mt={12}
                type="submit"
                isLoading={loading}                     
              >
                Criar
              </Button>
            </Flex>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default NovoUsuario;
