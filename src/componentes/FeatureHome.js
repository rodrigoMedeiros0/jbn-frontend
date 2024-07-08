import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  IconButton,
} from '@chakra-ui/react'
import imageFamily from "../assets/family.jpeg"

export default function FeatureHome() {
  return (
    <Container maxW={'1300px'} mx="auto" color="#051C34">
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', lg: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
            >
              Saia do aluguel,
            </Text>
            <br />
            <Text as={'span'} color={'#051C34'}>
              Você merece mais!
            </Text>
          </Heading>
          <Text color={'#051C34'} maxWidth='500px' fontSize={{base:'lg' , md:"xl"}}>
            Venha realizar seu sonho de sair do aluguel com a gente, somos uma empresa há 10 anos no mercado e que vem crescendo cada vez mais e oferecemos um modelo de simulação gratuito e exlusivo para encontrar a melhor opção.
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }} mx={{base:'auto' , md:"0"}}>
            <a href='https://api.whatsapp.com/send?phone=5561981289537&text=Ol%C3%A1,%20tudo%20bem?%0A%0AEstava%20no%20site%20da%20JBN%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20im%C3%B3veis%20de%20voc%C3%AAs.%20%0APoderia%20me%20ajudar?'>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              bg={'#051C34'}
              color="white"
              _hover={{ bg: 'gray.700' }}>
              Simulação gratuita
            </Button>
            </a>
           <a href='/quem-somos'>
           <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              >
              Conhecer a empresa
            </Button>
           </a>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
            maxWidth='600px'
            >
            <IconButton
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
            />
            <Image
              alt={'Imagem com uma família feliz'}
              fit={'fill'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                imageFamily
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}
