import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

import { Icon } from '@iconify/react'; 

export default function EventSwiper() {
  const events = [
    {
      title: "Web 3 Global Conference",
      description: "Uniting leading experts from diverse industries on a global scale",
      background: "bg-section1",
    },
    {
      title: "AI Future Summit",
      description: "Exploring innovations reshaping the future with AI technology",
      background: "bg-section2",
    },
    {
      title: "Blockchain Expo",
      description: "Deep dive into decentralized solutions and crypto revolutions",
      background: "bg-section3",
    },
  ];

  const swiperRef = useRef(null);

  return (
    <div className="relative">
      {/* Custom Prev button */}
      <div
        className="bg-[#F5E9DE] text-black w-30 my-8 mx-8 rounded-2xl left-10 absolute top-1/2 transform -translate-y-1/2 flex justify-center items-center gap-2 px-4 py-2 cursor-pointer z-10"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <p className="text-2xl whitespace-nowrap">Prev</p>
        <Icon icon="akar-icons:arrow-left" width="24" height="18" />
      </div>

      {/* Custom Next button */}
      <div
        className="bg-[#F5E9DE] text-black w-30 my-8 mx-8 rounded-2xl right-10 absolute top-1/2 transform -translate-y-1/2 flex justify-center items-center gap-2 px-4 py-2 cursor-pointer z-10"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <Icon icon="akar-icons:arrow-right" width="24" height="18" />
        <p className="text-2xl whitespace-nowrap">Next</p>
      </div>

      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="mySwiper"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <section className={`py-100 ${event.background} lg:px-16 relative`}>
              {/* Main Card */}
              <div className="absolute top-1/2 left-1/2 w-130 h-110 rounded-3xl bg-white transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center p-8">
                <div className="bg-[#F5E9DE] text-black w-40 rounded-2xl mb-6">
                  <p className="py-4 text-center whitespace-nowrap">Upcoming Event</p>
                </div>

                <div className="text-black text-center">
                  <p className="text-5xl font-bold mb-5">{event.title}</p>
                  <p className="text-2xl font-normal">{event.description}</p>
                </div>

                <div className="flex mt-8">
                  <div className="bg-black text-white w-40 mx-4 rounded-2xl cursor-pointer">
                    <p className="py-4 text-center whitespace-nowrap">Book Ticket</p>
                  </div>
                  <div className="bg-[#F5E9DE] text-black w-40 mx-4 rounded-2xl cursor-pointer">
                    <p className="py-4 text-center whitespace-nowrap">Learn More</p>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
