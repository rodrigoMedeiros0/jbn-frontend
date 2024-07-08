import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  Radio,
  RadioGroup,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { BiErrorCircle } from "react-icons/bi";
import { useParams } from "react-router-dom";
//form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// my components";
import ModalLoading from "../../componentes/ModalLoading";
import AlertMessage from "../../componentes/AlertMessage";
import { useFetchByID } from "../../hooks/useFetchByID";
import MessageLoading from "../../componentes/MessageLoading";
//context
import { AuthContext } from "../../contexts/auth";

const schema = yup.object({
  name: yup
    .string()
    .required("Campo obrigatório")
    .min(4, "O número minimo de caracteres é 4")
    .max(70, "O número máximo de caracteres é 70"),
  status: yup.string().required("Campo obrigatório"),
  size: yup
    .number()
    .required("Campo obrigatório")
    .min(1, "Valor menor que 1")
    .max(3000, "Valor muito alto"),
  badroom: yup
    .number()
    .required("Campo obrigatório")
    .min(1, "Valor menor que 1")
    .max(20, "Valor muito alto"),
  bathroom: yup
    .number()
    .required("Campo obrigatório")
    .min(1, "Valor menor que 1")
    .max(20, "Valor muito alto"),
  garage: yup
    .number()
    .required("Campo obrigatório")
    .min(0, "Valor menor que 0")
    .max(10, "Valor muito alto"),
  city: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "O número minimo de caracteres é 3")
    .max(70, "O número máximo de caracteres é 70"),
  uf: yup
    .string()
    .required("Campo obrigatório")
    .min(2, "O número minimo de caracteres é 2")
    .max(2, "O número máximo de caracteres é 2"),
  location: yup
    .string()
    .required("Campo obrigatório")
    .url("URL inválida")
    .min(10, "O número minimo de caracteres é 10")
    .max(200, "O número máximo de caracteres é 200"),
  description: yup
    .string()
    .required("Campo obrigatório")
    .min(4, "O número minimo de caracteres é 4"),
  address: yup
    .string()
    .required("Campo obrigatório")
    .min(4, "O número minimo de caracteres é 4"),
  differential: yup
    .string()
    .required("Campo obrigatório")
    .min(10, "O número minimo de caracteres é 10"),
});

const AtualizarEmpreendimento = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { id } = useParams();
  const { buildingID, isPending, error } = useFetchByID(id);
  const { token } = useContext(AuthContext);
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const onSubmit = async (data, event) => {
    setLoading(true);
    const building = {
      name: data.name,
      status: data.status,
      description: data.description,
      differential: data.differential,
      address: data.address,
      size: data.size,
      bedroom: data.badroom,
      bathroom: data.bathroom,
      garage: data.garage,
      location: data.location,
      city: data.city,
      uf: data.uf,
    };

    try {
      setLoading(true);
      await fetch(`https://backend-jbn.onrender.com/building/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(building),
      })
        .then((res) => res.json())
        .then((json) => {
          setLoading(false);
          toast({
            title: "Atualização feita com sucesso",
            description: json.message,
            position: "top",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        });
    } catch (error) {
      setErr("Erro ao atualizar o empreendimento, verifique todos os campos");
      setLoading(false);
    }
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
      {error && <AlertMessage status="error" message={error} />}
      {err && <AlertMessage status="error" message={err} />}
      {isPending && <MessageLoading />}

      <Box mx={6}>
        {buildingID && (
          <Box mt={5} mx="auto">
            <Text fontSize="xl" fontWeight="bold">
              Atualização do empreendimento
            </Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalLoading loading={loading} />
              <Flex gap={10} flexDir={{ base: "column", lg: "row" }}>
                <FormControl isInvalid={errors.name}>
                  <FormLabel> Nome do Empreendimento</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <Input
                      type="text"
                      size="md"
                      focusBorderColor="#051C34"
                      {...register("name")}
                      defaultValue={buildingID.name}
                    />
                  </InputGroup>
                  <FormErrorMessage gap={2}>
                    <BiErrorCircle size={15} /> {errors.name?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel>Status</FormLabel>
                  <RadioGroup defaultValue={buildingID.status}>
                    <HStack spacing="24px">
                      <Radio
                        colorScheme="gray"
                        value="Em construção"
                        {...register("status")}
                      >
                        Em construção
                      </Radio>
                      <Radio
                        colorScheme="gray"
                        value="Concluído"
                        {...register("status")}
                      >
                        Concluído
                      </Radio>
                      <Radio
                        colorScheme="gray"
                        value="Em execução"
                        {...register("status")}
                      >
                        Em execução
                      </Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>
              </Flex>
              <Flex
                gap={2}
                flexDir={{ base: "column", lg: "row" }}
                justify="space-between"
                mt={8}
              >
                <FormControl isInvalid={errors.size}>
                  <FormLabel> Tamanho em m²</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <Flex flexDir="row" gap={2}>
                      <Input
                        type="number"
                        size="md"
                        color="#051C34"
                        fontWeight="bold"
                        focusBorderColor="#051C34"
                        defaultValue={buildingID.size}
                        width="80px"
                        {...register("size")}
                        step={0.01}
                      />
                    </Flex>
                  </InputGroup>
                  <FormErrorMessage gap={2}>
                    <BiErrorCircle size={15} /> {errors.size?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.badroom}>
                  <FormLabel> N° de quartos</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <Flex flexDir="row" gap={2}>
                      <Button
                        background="gray.300"
                        fontWeight="bold"
                        onClick={() => {
                          setValue("badroom", Number(getValues("badroom")) - 1);
                        }}
                      >
                        -
                      </Button>
                      <Input
                        type="number"
                        size="md"
                        color="#051C34"
                        focusBorderColor="#051C34"
                        fontWeight="bold"
                        width="55px"
                        defaultValue={buildingID.bedroom}
                        {...register("badroom")}
                      />
                      <Button
                        background="gray.300"
                        fontWeight="bold"
                        onClick={() => {
                          setValue("badroom", Number(getValues("badroom")) + 1);
                        }}
                      >
                        +
                      </Button>
                    </Flex>
                  </InputGroup>
                  <FormErrorMessage gap={2}>
                    <BiErrorCircle size={15} /> {errors.badroom?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.bathroom}>
                  <FormLabel> N² de banheiros</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <Flex flexDir="row" gap={2}>
                      <Button
                        background="gray.300"
                        fontWeight="bold"
                        onClick={() => {
                          setValue(
                            "bathroom",
                            Number(getValues("bathroom")) - 1
                          );
                        }}
                      >
                        -
                      </Button>
                      <Input
                        type="number"
                        size="md"
                        color="#051C34"
                        focusBorderColor="#051C34"
                        fontWeight="bold"
                        width="55px"
                        defaultValue={buildingID.bathroom}
                        {...register("bathroom")}
                      />
                      <Button
                        background="gray.300"
                        fontWeight="bold"
                        onClick={() => {
                          setValue(
                            "bathroom",
                            Number(getValues("bathroom")) + 1
                          );
                        }}
                      >
                        +
                      </Button>
                    </Flex>
                  </InputGroup>
                  <FormErrorMessage gap={2}>
                    <BiErrorCircle size={15} /> {errors.bathroom?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.garage}>
                  <FormLabel> Garagem</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <Flex flexDir="row" gap={2}>
                      <Button
                        background="gray.300"
                        fontWeight="bold"
                        onClick={() => {
                          setValue("garage", Number(getValues("garage")) - 1);
                        }}
                      >
                        -
                      </Button>
                      <Input
                        type="number"
                        size="md"
                        color="#051C34"
                        focusBorderColor="#051C34"
                        fontWeight="bold"
                        width="55px"
                        defaultValue={buildingID.garage}
                        {...register("garage")}
                      />
                      <Button
                        background="gray.300"
                        fontWeight="bold"
                        onClick={() => {
                          setValue("garage", Number(getValues("garage")) + 1);
                        }}
                      >
                        +
                      </Button>
                    </Flex>
                  </InputGroup>
                  <FormErrorMessage gap={2}>
                    <BiErrorCircle size={15} /> {errors.garage?.message}
                  </FormErrorMessage>
                </FormControl>
              </Flex>
              <Flex gap={10} flexDir={{ base: "column", lg: "row" }} mt={8}>
                <FormControl isInvalid={errors.city}>
                  <FormLabel>Cidade</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <Input
                      type="text"
                      size="md"
                      focusBorderColor="#051C34"
                      defaultValue={buildingID.city}
                      {...register("city")}
                    />
                  </InputGroup>
                  <FormErrorMessage gap={2}>
                    {errors.city?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.uf}>
                  <FormLabel>UF</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <Input
                      type="text"
                      size="md"
                      focusBorderColor="#051C34"
                      defaultValue={buildingID.uf}
                      {...register("uf")}
                    />
                  </InputGroup>
                  <FormErrorMessage gap={2}>
                    {errors.uf?.message}
                  </FormErrorMessage>
                </FormControl>
              </Flex>
              <Flex gap={10} flexDir={{ base: "column", md: "row" }} mt={8}>
                <FormControl isInvalid={errors.address}>
                  <FormLabel> Endereço </FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <Input
                      type="text"
                      size="md"
                      focusBorderColor="#051C34"
                      defaultValue={buildingID.address}
                      {...register("address")}
                    />
                  </InputGroup>
                  <FormErrorMessage gap={2}>
                    <BiErrorCircle size={15} /> {errors.address?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.location}>
                  <FormLabel>Link da localização</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <Input
                      type="text"
                      size="md"
                      focusBorderColor="#051C34"
                      defaultValue={buildingID.location}
                      {...register("location")}
                    />
                  </InputGroup>
                  <FormErrorMessage gap={2}>
                    <BiErrorCircle size={15} /> {errors.location?.message}
                  </FormErrorMessage>
                </FormControl>
              </Flex>
              <FormControl mt={8} isInvalid={errors.description}>
                <FormLabel>Descrição</FormLabel>
                <Textarea
                  height="140px"
                  placeholder=" Descrição do empreendimento"
                  focusBorderColor="#051C34"
                  defaultValue={buildingID.description}
                  {...register("description")}
                />
                <Flex
                  direction={{ base: "column", md: "row" }}
                  justify="space-between"
                >
                  <FormErrorMessage gap={2}>
                    <BiErrorCircle size={15} /> {errors.description?.message}
                  </FormErrorMessage>
                </Flex>
              </FormControl>
              <FormControl mt={8} isInvalid={errors.differential}>
                <FormLabel>Diferenciais do Empreendimento</FormLabel>
                <Textarea
                  height="140px"
                  placeholder=" Diferenciais do Empreendimento"
                  focusBorderColor="#051C34"
                  {...register("differential")}
                  defaultValue={buildingID.differential}
                />
                <Flex
                  direction={{ base: "column", md: "row" }}
                  justify="space-between"
                >
                  <FormErrorMessage gap={2}>
                    <BiErrorCircle size={15} /> {errors.differential?.message}
                  </FormErrorMessage>
                </Flex>
              </FormControl>
              <Flex justify="flex-end" mt={8}>
                <Button
                  rounded={"lg"}
                  px={8}
                  bg={"orange.400"}
                  color="white"
                  _hover={{
                    background: "orange.700",
                    color: "white",
                  }}
                  type="submit"
                  isLoading={loading}
                >
                  Atualizar
                </Button>
              </Flex>
            </form>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AtualizarEmpreendimento;
