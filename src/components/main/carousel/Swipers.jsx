
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slider1 from "../../../assets/contracts/kontrakt_new_m.jpg";
import slider2 from "../../../assets/img/students3.webp";

// CSS
import "./Carusel.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import React from "react";

const Swipers = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default React.memo(Swipers);
