import React, { useState, useContext } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
//Context component
import { AuthContext } from "../../contexts/auth";
//form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BiErrorCircle } from "react-icons/bi";
import { Navigate } from "react-router-dom";
import AlertMessage from "../../componentes/AlertMessage";
import Footer from "../../componentes/Footer";

const schema = yup.object({
  email: yup.string().required("Campo obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(8, "A senha deve conter no minimo 8 caracteres"),
});

const Login = () => {
  const { authenticated, login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", senha: "" },
    resolver: yupResolver(schema),
  });

  const [isPending, setIsPedending] = useState(false);
  const [error, setError] = useState();

  const onSubmit = async (data, event) => {
    event.preventDefault();
    setIsPedending(true);

    const { email, password } = data;

    const user = {
      email,
      password,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };

    try {
      const response = await fetch(
        "https://backend-jbn.onrender.com/auth/login",
        requestOptions
      );

      if (!response.ok) {
        throw new Error(response.statusText);
        setIsPedending(false);
      }

      const json = await response.json();
      setIsPedending(false);
      const token = json.token;
      const email = json.userData.email;
      login(email, token);
    } catch (error) {
      setError(
        "Erro ao efetuar o login, verifique se o email e senha existem e se estão corretos"
      );
      setIsPedending(false);
    }
  };

  if (authenticated) {
    return <Navigate to="/autenticado/empreendimentos" />;
  }

  return (
    <>
      <Flex mt={12} py={12} align={"center"} justify={"center"} mb="100px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"} mt={2}>
              <Heading fontSize={{ base: "3xl", md: "4xl" }}>
                Entre com sua conta
              </Heading>
              <Text>Apenas administradores tem acesso</Text>
            </Stack>
            <Box mt={1} width="500px">
              <Stack spacing={4}>
                {error && <AlertMessage status="error" message={error} />}
                <FormControl isInvalid={errors.email}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    focusBorderColor="#051C34"
                    {...register("email")}
                  />
                  <FormErrorMessage gap={2}>
                    <BiErrorCircle size={15} /> {errors.email?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.password}>
                  <FormLabel>Senha</FormLabel>
                  <Input
                    type="password"
                    focusBorderColor="#051C34"
                    {...register("password")}
                  />
                  <FormErrorMessage gap={2}>
                    <BiErrorCircle size={15} /> {errors.password?.message}
                  </FormErrorMessage>
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    rounded={"full"}
                    size={"lg"}
                    fontWeight={"normal"}
                    px={6}
                    bg={"#051C34"}
                    color="white"
                    _hover={{ bg: "gray.700" }}
                    type="submit"
                    isLoading={isPending}
                  >
                    Entrar
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </form>
      </Flex>
      <Footer />
    </>
  );
};

export default Login;
