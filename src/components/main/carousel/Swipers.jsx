
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slider1 from "../../../assets/img/1.JPG";
import slider2 from "../../../assets/img/2.JPG";
import slider3 from "../../../assets/img/1.JPG";
import slider5 from "../../../assets/img/5.jpg";
import slider6 from "../../../assets/img/6.jpg";
import slider7 from "../../../assets/img/7.jpg";
import slider8 from "../../../assets/img/8.jpg";

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
        <SwiperSlide>
          <img src={slider3} alt="" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};
export default React.memo(Swipers);
