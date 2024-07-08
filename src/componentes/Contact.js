import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Stack,
  FormErrorMessage,
} from "@chakra-ui/react";
//icons
import { MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { BiSolidCity, BiErrorCircle } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
//form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
//email JS
import emailJS from "@emailjs/browser";
import Container from "./Container";

const schema = yup
  .object({
    nome: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("Campo obrigatório"),
    mensagem: yup.string().required("Campo obrigatório"),
  })
  .required();

export default function Contact() {
  useEffect(() => {
    document.title = "JBN | Fale conosco";
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nome: "",
      email: "",
      mensagem: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const templateParams = {
      from_name: data.nome,
      message: data.mensagem,
      email: data.email,
    };
    emailJS.send(
      "service_tqvnhv4",
      "template_gicaajd",
      templateParams,
      "gIf6J1cd3avjbsC7k"
    );
    reset();
    setFormularioEnviado(true);
  };

  const [formularioEnviado, setFormularioEnviado] = useState(false);

  return (
    <>
      <Box bg="#051C34" color="white" width="100%" mt={12}  overflow="hidden">
        <Container>
          <Box
            borderRadius="lg"
            px={6}
            bg="#051C34"
            color="white"
            py='50px'
          >
            <Box p={0}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contato</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white">
                      Envie sua mensagem e faça uma simulação gratuita com a
                      gente.
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <Stack
                        spacing={3}
                        alignItems="flex-start"
                        justify="flex-start"
                        gap={7}
                      >
                        <Text
                          size="md"
                          width="300px"
                          variant="ghost"
                          color="#DCE2FF"
                          justifyContent="flex-start"
                          display="flex"
                          align="center"
                          gap="2"
                        >
                          <BsPhone size="20px" />
                          (61) 98128-9537
                        </Text>
                        <Text
                          size="md"
                          width="300px"
                          variant="ghost"
                          color="#DCE2FF"
                          justifyContent="flex-start"
                          display="flex"
                          align="center"
                          gap="2"
                        >
                          <MdEmail size="20px" />
                          contato@jbnconstrucoes.com.br
                        </Text>
                        <Text
                          size="md"
                          width="300px"
                          variant="ghost"
                          color="#DCE2FF"
                          justifyContent="flex-start"
                          display="flex"
                          align="center"
                          gap="2"
                        >
                          <MdLocationOn size="20px" />
                          Quadra 6, n° 18, Salas 203/205
                        </Text>
                        <Text
                          size="md"
                          width="300px"
                          variant="ghost"
                          color="#DCE2FF"
                          justifyContent="flex-start"
                          display="flex"
                          align="center"
                          gap="2"
                        >
                          <BiSolidCity size="20px" />
                          Águas Lindas de Goiás - GO
                        </Text>
                      </Stack>
                    </Box>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          {/* Input nome */}
                          <FormControl isInvalid={errors.nome} width={{base: '', md: '500px', lg: '500px'}}>
                            <FormLabel> Nome</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement pointerEvents="none">
                                <BsPerson color="gray.800" />
                              </InputLeftElement>
                              <Input
                                type="text"
                                size="md"
                                focusBorderColor="#051C34"
                                {...register("nome")}
                              />
                            </InputGroup>
                            <FormErrorMessage gap={2}>
                              <BiErrorCircle size={15} /> {errors.nome?.message}
                            </FormErrorMessage>
                          </FormControl>
                          {/* Input email */}
                          <FormControl mt={3} isInvalid={errors.email}>
                            <FormLabel>Email</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement pointerEvents="none">
                                <MdOutlineEmail color="gray.800" />
                              </InputLeftElement>
                              <Input
                                type="text"
                                size="md"
                                focusBorderColor="#051C34"
                                {...register("email")}
                              />
                            </InputGroup>
                            <FormErrorMessage gap={2}>
                              <BiErrorCircle size={15} />{" "}
                              {errors.email?.message}
                            </FormErrorMessage>
                          </FormControl>
                          {/* Input mensagemmail */}
                          <FormControl mt={3} isInvalid={errors.mensagem}>
                            <FormLabel>Mensagem</FormLabel>
                            <Textarea
                              borderColor="gray.300"
                              _hover={{
                                borderRadius: "gray.300",
                              }}
                              placeholder="Digite sua mensagem"
                              focusBorderColor="#051C34"
                              {...register("mensagem")}
                            />
                            <FormErrorMessage gap={2}>
                              <BiErrorCircle size={15} />{" "}
                              {errors.email?.message}
                            </FormErrorMessage>
                          </FormControl>
                          {/* Enviar formulario*/}
                          <FormControl float="right" mt={5}>
                            <Button
                              variant="solid"
                              rounded={"full"}
                              size={"lg"}
                              px={6}
                              bg="#051C34"
                              color="white"
                              _hover={{ bg: "gray.500" }}
                              type="submit"
                            >
                              Enviar
                            </Button>
                            <Text color="green.500" mt={5}>
                              {formularioEnviado && "Email enviado"}
                            </Text>
                          </FormControl>
                        </form>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
