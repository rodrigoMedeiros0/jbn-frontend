import { Button, Link } from "@chakra-ui/react";
import React from "react";
import { LiaWhatsapp } from "react-icons/lia";

const Whats = () => {
  return (
    <Button
      fontWeight="medium"
      bg="#2AD469"
      position="fixed"
      zIndex={1000}
      rounded="full"
      width="60px"
      height="60px"
      bottom={{ base: "20px", md: "40px" }}
      right={{ base: "20px", md: "40px" }}
      color="#2AD469"
      borderRadius="50px"
      textAlign="center"
      boxShadow="2px 2px 3px #999"
      _hover={{ bg: "#2AD469" }}
    >
      <Link
        href="https://api.whatsapp.com/send?phone=5561981289537&text=Ol%C3%A1,%20tudo%20bem?%0A%0AEstava%20no%20site%20da%20JBN%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20im%C3%B3veis%20de%20voc%C3%AAs.%20%0APoderia%20me%20ajudar?"
        isExternal
      >
        <LiaWhatsapp size={44} color="white" />
      </Link>
    </Button>
  );
};

export default Whats;
