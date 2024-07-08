import React from 'react';
import { Box } from '@chakra-ui/react'

const Container = ({ children }) => {
  return (
    <Box px={6} maxWidth={'1300px'} mx="auto" mt={8}>
        {children}
    </Box>
  )
}

export default Container