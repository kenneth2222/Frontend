import React, { useRef, useState } from 'react';
import img1 from "../assets/image 10.png";
import img2 from "../assets/image 11.png";
import img3 from "../assets/image 12.png";
import img4 from "../assets/image 13.png";
import img5 from "../assets/image 14.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'Swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';




export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

//   let appendNumber = 4;
//   let prependNumber = 1;

//   const prepend2 = () => {
//     swiperRef.prependSlide([
//       '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
//       '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
//     ]);
//   };

//   const prepend = () => {
//     swiperRef.prependSlide(
//       '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
//     );
//   };

//   const append = () => {
//     swiperRef.appendSlide(
//       '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
//     );
//   };

//   const append2 = () => {
//     swiperRef.appendSlide([
//       '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
//       '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
//     ]);
//   };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={10}
        centeredSlides={true}
        spaceBetween={2}
        loop={true}
        speed={4000} // 2 seconds for a smooth transition
        // pagination={{
        //   type: '',
        // }}
        navigation={true}
        autoplay={{
            delay: 0,       // Slide every 2 seconds
            disableOnInteraction: false,  // Keeps autoplay even after user interaction
          }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
      </Swiper>

   
    </>
  );
}
