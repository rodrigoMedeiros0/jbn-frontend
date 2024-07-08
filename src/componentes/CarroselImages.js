import React, { useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function CarroselImages({ images, name }) {
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [imageModal, setImageModal] = useState(null);

  const handleImageClick = () => {
    setShowFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setShowFullScreen(false);
    setImageModal(null);
  };

  return (
    <Box>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        navigation
        modules={[Navigation]}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              height={{ base: "250px", md: "500px", lg: "670px" }}
              width={{ base: "100%" }}
              src={img.url}
              objectFit="cover"
              cursor="zoom-in"
              onClick={() => {
                setImageModal(img.url);
                handleImageClick();
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal
        isOpen={showFullScreen}
        onClose={handleCloseFullScreen}
        size={{base:"sm", md:"full"}}
        variant=''
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Image
            maxH='90vh'
              src={imageModal}
              objectFit="contain"
              alt="imagem do empreendimento apliada"
              mx='auto'
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
