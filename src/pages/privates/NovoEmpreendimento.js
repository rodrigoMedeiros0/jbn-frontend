//React library
import { useContext, useState } from "react";
import React from "react";
//chakra ui
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
  useToast
} from "@chakra-ui/react";
//icons
import { BiErrorCircle } from "react-icons/bi";
//form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//my components
import AlertMessage from "../../componentes/AlertMessage";
//context
import { AuthContext } from "../../contexts/auth";
//schema YUP form
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
    address: yup
    .string()
    .required("Campo obrigatório")
    .min(4, "O número minimo de caracteres é 4")
    .max(70, "O número máximo de caracteres é 70"),
  gallery: yup.mixed().test("required", "Insira uma foto", (value) => {
    return value && value.length;
  }),
  location: yup
    .string()
    .required("Campo obrigatório")
    .url("URL inválida")
    .min(10, "O número minimo de caracteres é 10")
    .max(200, "O número máximo de caracteres é 200"),
  description: yup
    .string()
    .required("Campo obrigatório")
    .min(10, "O número minimo de caracteres é 10"),
    differential: yup
    .string()
    .required("Campo obrigatório")
    .min(10, "O número minimo de caracteres é 10")
});

const NovoEmpreendimento = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      status: "Em construção",
      size: 1,
      badroom: 1,
      bathroom: 1,
      garage: 0,
      city: "",
      image: "",
      description: "",
      differential:"",
      address: "",
    },
    resolver: yupResolver(schema),
  });

  const toast = useToast()

  const [isPending, setIsPedending] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useContext(AuthContext);

  const onSubmit = async (data, event) => {
    event.preventDefault();
    setError()
    
     const formData = new FormData();
     formData.append("name", data.name);
     formData.append("status", data.status);
     formData.append("description", data.description);
     formData.append("differential", data.differential);
     formData.append("size", data.size);
     formData.append("bedroom", data.badroom);
     formData.append("bathroom", data.bathroom);
     formData.append("garage", data.garage);
     formData.append("location", data.location);
     formData.append("city", data.city);
     formData.append("address", data.address);
     formData.append("uf", data.uf);

     for (let i = 0; i < data.gallery.length; i++) {
      formData.append('gallery', data.gallery[i])
   }
     
       try {
        setError(null)
        setIsPedending(true)
        await fetch('https://backend-jbn.onrender.com/building/', { method: 'POST',  headers: { "Authorization": `Bearer ${token}`}, body: formData})
        .then(res => res.json())
        .then(json => {
          setIsPedending(false)
          reset()
          setError(null)
          toast({
            title: 'Empreendimento criado com sucesso',
            position: 'top',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        })
        
     } catch (error) {
        setError("Erro ao criar o empreendimento, verifique se há alguma imagem maior que 2 mb");
        setIsPedending(false)
      }
 }
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
          Cadastro
        </Text>
        <Box mt={5} mx="auto">
          {error && <AlertMessage status='error' message={error} />}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex gap={10} flexDir={{ base: "column", lg: "row" }}>
              <FormControl isInvalid={errors.name}>
                <FormLabel> Nome do Empreendimento</FormLabel>
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
              <FormControl>
                <FormLabel>Status</FormLabel>
                <RadioGroup defaultValue="Em construção">
                  <HStack spacing="24px">
                    <Radio
                      colorScheme="gray"
                      defaultChecked
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
                      defaultValue={getValues("size")}
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
                      defaultValue={getValues("badroom")}
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
                        setValue("bathroom", Number(getValues("bathroom")) - 1);
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
                      defaultValue={getValues("bathroom")}
                      {...register("bathroom")}
                    />
                    <Button
                      background="gray.300"
                      fontWeight="bold"
                      onClick={() => {
                        setValue("bathroom", Number(getValues("bathroom")) + 1);
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
                      defaultValue={getValues("garage")}
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
            <FormControl isInvalid={errors.gallery} mt={8} w='450px'>
                <FormLabel> Imagem do empreendimento</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <Input
                    type="file"
                    size="md"
                    border="none"
                    py={1}
                    accept=".jpg, .png, .jpeg"
                    multiple
                    {...register("gallery")}
                  />
                </InputGroup>
                <FormErrorMessage gap={2}>
                  <BiErrorCircle size={15} /> {errors.gallery?.message}
                </FormErrorMessage>
              </FormControl>
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
                isLoading={isPending}
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

export default NovoEmpreendimento;
