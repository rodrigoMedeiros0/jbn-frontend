import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
} from "@chakra-ui/react";
import React from "react";

const ModalLoading = ({loading}) => {
  return (
    <Modal isOpen={loading}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Carregando</ModalHeader>
        <ModalBody>
          <Spinner size="xl" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalLoading;
