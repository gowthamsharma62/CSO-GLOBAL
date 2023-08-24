import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";

export default function Landing() {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        setWrapperSize={true}
        modules={[Pagination, Navigation]}
        className="mySwiper bg-[url('/hero/background.png')] bg-cover xl:h-full bg-fixed non-footer-container flex items-center"
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        navigation={true}
      >
        <SwiperSlide>
          <div className="flex justify-center">
            <img
              className="object-cover px-10 items-center"
              width={1280}
              height={500}
              src="/slides/landing/1.png"
              alt="image slide 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img
              className="object-cover px-10 items-center"
              width={1280}
              height={500}
              src="/slides/landing/2.png"
              alt="image slide 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center py-10">
            <img
              className="object-cover px-10 items-center"
              width={1280}
              height={500}
              src="/slides/landing/3.png"
              alt="image slide 1"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
