import React from 'react'
import Container from './Container';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { MdLocationOn } from "react-icons/md";


const BuildingIDTitle = ({name, status, city, uf, address}) => {
  return (
    <Container>
            <Flex justify="space-between" align="top" px={6}>
              <Box>
                <Heading
                   color="#051C34"
                   fontWeight="bold"
                   fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
                >
                  {name}
                </Heading>
                <Text>{status}</Text>
                <Box
                  display={{ base: "flex", md: "none" }}
                  alignItems="center"
                  justifyContent="start"
                  gap={2}
                  mt={4}
                
                >
                  <Box>
                    <MdLocationOn size="20px" />
                  </Box>
                  <Box>
                    <Text fontWeight="bold">
                      {city} - {uf}
                    </Text>
                    <Text>{address}</Text>
                  </Box>
                </Box>
              </Box>
              <Box
                display={{ base: "none", md: "flex" }}
                alignItems=""
                justifyContent="end"
                gap={2}
              >
                <Box>
                  <Text textAlign="end" fontWeight="bold">
                    {city} - {uf}
                  </Text>
                  <Text textAlign="end">{address}</Text>
                </Box>
                <Box>
                  <MdLocationOn size="20px" />
                </Box>
              </Box>
            </Flex>
          </Container>
  )
}

export default BuildingIDTitle