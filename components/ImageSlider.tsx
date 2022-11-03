import React from "react";
import Image from "next/image";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper";

type ImageSliderProps = {
  images: string[];
};

const ImageSlider = ({ images }: ImageSliderProps) => {
  return (
    <div className="w-full border-2 rounded-md">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        effect="slide"
        speed={800}
        slidesPerView={1}
        pagination={true}
        loop={true}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt="Demo image"
                layout="responsive"
                width={535}
                height={296}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
