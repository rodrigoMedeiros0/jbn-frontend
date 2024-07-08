import React from 'react'
import Container from './Container'
import { Box, Text } from '@chakra-ui/react'
import Titulo from './Titulo'

const AboutBuilding = ({description}) => {
  return (
    <Box>
        <Container>
        <Titulo>
        Sobre
        </Titulo>
        <Text mt={7} px={6} fontSize={{base: 'md', md:'lg'}} whiteSpace='break-spaces'>
            {description}
        </Text>
    </Container>
    </Box>
  )
}

export default AboutBuilding