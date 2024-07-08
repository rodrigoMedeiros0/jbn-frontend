import React, { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { Box, Button, Text } from "@chakra-ui/react";

const BannerCentalDeVendas = () => {
  const [mouseScroll, setMouseScroll] = useState(false);

  const changeNone = () => {
    if (window.scrollY > 0) {
      setMouseScroll(true);
    } else {
      setMouseScroll(false);
    }

    window.addEventListener("scroll", changeNone);
  };
  return (
    <Box
      bg="#051C34"
      hideBelow="lx"
      py={{ base: "1rem" }}
      color="white"
      visibility={mouseScroll && "hidden"}
    
    >
      <Box
        maxWidth={"1300px"}
        mx="auto"
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="center"
        px={2}
        gap={2}
      >
        <Text fontSize="md">
          Central de vendas: (61) 98128-9537
        </Text>
        <Button
          leftIcon={<IoLogoWhatsapp color="2AD469" />}
          color="#051C34"
          fontWeight="medium"
          variant='outline'
          px={6}
          bg="gray.100"
        >
          <a href="https://api.whatsapp.com/send?phone=5561981289537&text=Ol%C3%A1,%20tudo%20bem?%0A%0AEstava%20no%20site%20da%20JBN%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20im%C3%B3veis%20de%20voc%C3%AAs.%20%0APoderia%20me%20ajudar?">Fale conosco</a>
        </Button>
      </Box>
    </Box>
  );
};

export default BannerCentalDeVendas;
