import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { Fragment } from "react";
import Image from "next/image";
import { defaultConfigs } from "@/configs";
import { Box } from "@chakra-ui/react";

export default function Caroussel() {
  return (
    <Fragment>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000 }}
        loop
      >
        <SwiperSlide>
          <Box w="full">
            <Image
              src={"/img/banner-one.png"}
              width={1024}
              height={324}
              alt={`${defaultConfigs.companyName} - banner`}
              style={{ objectFit: "cover", width: "100%", userSelect: "none" }}
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full">
            <Image
              src={"/img/banner-two.png"}
              width={1024}
              height={324}
              alt={`${defaultConfigs.companyName} - banner`}
              style={{ objectFit: "cover", width: "100%", userSelect: "none" }}
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full">
            <Image
              src={"/img/banner-three.png"}
              width={1024}
              height={324}
              alt={`${defaultConfigs.companyName} - banner`}
              style={{ objectFit: "cover", width: "100%", userSelect: "none" }}
            />
          </Box>
        </SwiperSlide>
      </Swiper>
    </Fragment>
  );
}
