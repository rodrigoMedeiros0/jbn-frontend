import React from 'react'
import Container from './Container'
import { Flex, Spinner, Text } from '@chakra-ui/react'

const MessageLoading = () => {
  return (
    <Container>
        <Flex flexDir={'row'} gap={{base: 2, md: 5}} py={6}>
        <Text fontSize='xl' mb={4}>Carregando empreendimentos, por favor aguarde.</Text>
        <Spinner />
        </Flex>
      </Container>
  )
}

export default MessageLoading