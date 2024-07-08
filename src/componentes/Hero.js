import React from "react";
import { Box, Image } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import imageResLondres from "../assets/bannerLondres.jpg";
import imageResRoma from "../assets/bannerRoma.jpg";

export default function Hero() {
  return (
    <Box>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Image
            height={{ base: "250px", md: "500px", lg: "670px" }}
            width={{ base: "100%" }}
            src={imageResLondres}
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={{ base: "250px", md: "500px", lg: "670px" }}
            width={{ base: "100%" }}
            src={imageResRoma}
            objectFit="cover"
          />
        </SwiperSlide>
        
      </Swiper>
    </Box>
  );
}
