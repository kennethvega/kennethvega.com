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
    <div className="bg-cover border-2 rounded-md flex justify-center items-center xmd:max-w-[42rem]">
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
              <Image src={image} alt="Demo image" width={699} height={387} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
