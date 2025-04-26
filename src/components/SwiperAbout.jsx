import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// images
import partner1 from "../assets/Web3GC_Partners/partner1.jpeg";
import partner2 from "../assets/Web3GC_Partners/partner2.jpg";
import partner3 from "../assets/Web3GC_Partners/partner3.png";
import partner5 from "../assets/Web3GC_Partners/partner5.jpeg";
import partner6 from "../assets/Web3GC_Partners/partner6.jpg";
import partner9 from "../assets/Web3GC_Partners/partner9.jpeg";
import partner10 from "../assets/Web3GC_Partners/partner10.jpg";
import partner14 from "../assets/Web3GC_Partners/partner14.jpeg";
import partner16 from "../assets/Web3GC_Partners/partner16.jpeg";
import partner17 from "../assets/Web3GC_Partners/partner17.jpeg";

export default function App() {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <div className="relative w-full">
      <Swiper
        slidesPerView={8}
        centeredSlides={true}
        spaceBetween={2}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl,
          nextEl,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {/* slides */}
        <SwiperSlide><img src={partner1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partner2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partner3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partner5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partner6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partner9} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partner10} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partner14} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partner16} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partner17} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partner5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partner1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partner2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partner14} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partner16} alt="" /></SwiperSlide>
        <SwiperSlide><img src={partner17} alt="" /></SwiperSlide>
      </Swiper>

      {/* Custom navigation buttons */}
      <div
        ref={(node) => setPrevEl(node)}
        className="swiper-button-prev text-black absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      ></div>
      <div
        ref={(node) => setNextEl(node)}
        className="swiper-button-next text-black absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      ></div>
    </div>
  );
}


