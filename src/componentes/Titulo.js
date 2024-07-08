import React from 'react'
import Container from './Container'
import { Heading } from '@chakra-ui/react'

const Titulo = ( {children} ) => {
  return (
    <Container>
        <Heading color="#051C34" fontSize={{base:'2xl' , md:"3xl"}}>
            {children}
        </Heading>
    </Container>
  )
}

export default Titulo