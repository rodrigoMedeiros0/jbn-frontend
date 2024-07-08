import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Container from './Container'
import Titulo from './Titulo'

const Differential = ({differential}) => {
  return (
    <Box>
    <Container>
    <Titulo>
    Diferencial
    </Titulo>
    <Text mt={7} px={6} fontSize={{base: 'md', md:'lg'}} whiteSpace='break-spaces'>
        {differential}
    </Text>
    <Text mt={7} px={6} fontSize={{base: 'md', md:'lg'}}>

    </Text>
</Container>
</Box>
  )
}

export default Differential