import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Icon } from "@iconify/react";
import logo from "../assets/logo.png";
import conf1 from "../assets/conf-image.png";
import digi1 from "../assets/digi (1).png";
import digi2 from "../assets/digi (2).png";
import digi3 from "../assets/digi (3).png";
import digi4 from "../assets/digi (4).png";
import digi5 from "../assets/digi (5).png";
import digi6 from "../assets/digi (6).png";
import digi7 from "../assets/digi (7).png";
import digi8 from "../assets/digi (8).png";
import test1 from "../assets/test1.png";
import SwiperHomePage from './SwiperHome';

const LandingPage = () => {
  return (
    <div className="lg:min-h-screen bg-custom-image text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row justify-between py-8 lg:py-16 px-8 lg:px-16 widthMargin relative">
        <div className=" relative 2xl:w-[1040px] 2xl:h-[740px] w-0 h-0 lineImage"></div>
        <div className="w-full lg:mb-0 2xl:ml-20"> 
          <h1 className="text-2xl md:text-4xl lg:text-6xl 2xl:text-8xl font-bold mb-6">
          Web 3 Global
          <span className="hidden lg:inline"><br /></span> Conference
          </h1>
          <p className="lg:text-4xl font-light mb-8 md:text-2xl">
            Uniting leading experts from diverse industries on <span className="hidden lg:inline"><br /></span>a global
            scale
          </p>
          <p className="lg:text-[1.0rem] 2xl:text-2xl mb-8 md:flex 2xl:flex-row lg:flex  lg:gap-4">
            <span className="flex items-center gap-1">
              What is W3GC?
              <Icon icon="tabler:brand-tabler" width="24" height="19" />
            </span>
            <span className="flex items-center gap-1">
              What is the future of Web3?
              <Icon icon="tabler:brand-tabler" width="24" height="19" />
            </span>
            <span className="flex items-center gap-1">
              Why should you care?
              <Icon icon="tabler:brand-tabler" width="24" height="19" />
            </span>
          </p>
        </div>
        <div className="hidden lg:flex lg:w-[400px] 2xl:w-1/3 justify-center mr-10">
          <div className="relative w-200  2xl:w-500 2xl:h-165">
            <div className="absolute inset-0 worldLogo1 w-120 h-120 2xl:w-200 2xl:h-200 lg:translate-x-15 2xl:-translate-y-20 2xl:-translate-x-40"></div>
            <div className="lg:w-120 lg:h-120 lg:bottom-0 2xl:w-200 2xl:h-200 lg:translate-x-15 lg:-translate-y-3 2xl:-translate-y-20 2xl:-translate-x-50 absolute inset-0 worldLogo opacity-75"></div>
          </div>
        </div>
      </section>

      {/* Event Details Card */}
      <SwiperHomePage />

      {/* Featured Speakers */}
      <section className="py-0 lg:py-16 px-8 lg:px-16 widthMargin">
      <h2 className="text-2xl lg:text-3xl font-bold mb-2 mt-5">Top Guest Speakers</h2>
<p className="text-lg text-justify lg:text-2xl mb-5">
  Join industry leaders, innovators, and changemakers as they share insights on technology, entrepreneurship, 
  and the future of the digital world. Our guest speakers bring years of experience, inspiring stories, 
  and actionable knowledge to help you grow and thrive.
</p>
        <div className="md:flex md:flex-row lg:flex  justify-between gap-8">
          
          {/* Speaker 1 */}
           <div className="bg-[#5A487A] rounded-xl p-3 w-60  md:w-40 lg:w-140 lg:flex items-center gap-8 mb-5 lg:mb-0">
            <div className="md:w-30 lg:w-50 lg:h-50 rounded-3xl">
              <img
                src={conf1}
                alt="Logo"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="md:items-center md:flex md:flex-col  md:align-center mt-2">
              <h3 className="md:text-xl lg:text-3xl font-bold">John Doe</h3>
              <p className="text-white md:text-center text-sm lg:text-xl">ACN, Founder MotoCat LTD</p>
              <img src={logo} alt="Logo" className="h-5 lg:h-10 mt-2" />
            </div>
          </div>
          
          {/* Speaker 2 */}
           <div className="bg-[#5A487A] rounded-xl p-3 w-60  md:w-40 lg:w-140 lg:flex items-center gap-8 mb-5 lg:mb-0">
            <div className="md:w-30 lg:w-50 lg:h-50 rounded-3xl">
              <img
                src={conf1}
                alt="Logo"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="md:items-center md:flex md:flex-col  md:align-center mt-2">
              <h3 className="md:text-xl lg:text-3xl font-bold">John Doe</h3>
              <p className="text-white md:text-center text-sm lg:text-xl">ACN, Founder MotoCat LTD</p>
              <img src={logo} alt="Logo" className="h-5 lg:h-10 mt-2" />
            </div>
          </div>
          
          {/* Speaker 3 */}
           <div className="bg-[#5A487A] rounded-xl p-3 w-60  md:w-40 lg:w-140 lg:flex items-center gap-8 mb-5 lg:mb-0">
            <div className="md:w-30 lg:w-50 lg:h-50 rounded-3xl">
              <img
                src={conf1}
                alt="Logo"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="md:items-center md:flex md:flex-col  md:align-center mt-2">
              <h3 className="md:text-xl lg:text-3xl font-bold">John Doe</h3>
              <p className="text-white md:text-center text-sm lg:text-xl">ACN, Founder MotoCat LTD</p>
              <img src={logo} alt="Logo" className="h-5 lg:h-10 mt-2" />
            </div>
          </div>
          
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-16 px-8 lg:px-16 widthMargin">
        <h2 className="text-3xl font-bold mb-4">From recent events</h2>
        <div className="lg:flex justify-between gap-30">
        <p className="text-2xl font-light text-justify">
    Our recent events brought together professionals, thought leaders, and innovators from around the world. 
    <span className="hidden 2xl:inline"><br /></span>
    Attendees engaged in impactful sessions, insightful panel discussions, and meaningful networking opportunities that sparked new ideas and collaborations.
  </p>
          <div className="mt-5 lg:mt-0 lg:text-2xl  rounded-3xl border w-30 lg:w-40 border-white flex lg:items-center text-center align-center justify-center cursor-pointer hover:bg-white hover:text-black transition duration-300 ease-in-out hover:scale-105">
            <p className="my-0 px-2 font-normal lg:px-20 2xl:px-0">More Videos</p>
          </div>
        </div>

        {/* Event Images Section One */}
        <div className="hidden lg:flex lg:h-60 lg:mt-9 lg:gap-3">
          <div className="rounded-0">
            <img src={digi1} alt="Logo" className="h-70 w-120" />
            <p className="text-lg font-nomal bg-[#5A487A] my-0.5 pl-2 flex items-center justify-between pr-4">
              Title Of Video
              <Icon
                icon="line-md:hazard-lights-filled-loop"
                width="24"
                height="20"
                className="transform rotate-90"
              />
            </p>
          </div>
          <div className="rounded-0">
            <img src={digi2} alt="Logo" className="h-70 w-120" />
            <p className="text-lg font-nomal bg-[#5A487A] my-0.5 pl-2 flex items-center justify-between pr-4">
              Title Of Video
              <Icon
                icon="line-md:hazard-lights-filled-loop"
                width="24"
                height="20"
                className="transform rotate-90"
              />
            </p>
          </div>
          <div className="rounded-0">
            <img src={digi3} alt="Logo" className="h-70 w-120" />
            <p className="text-lg font-nomal bg-[#5A487A] my-0.5 pl-2 flex items-center justify-between pr-4">
              Title Of Video
              <Icon
                icon="line-md:hazard-lights-filled-loop"
                width="24"
                height="20"
                className="transform rotate-90"
              />
            </p>
          </div>
          <div className="rounded-0">
            <img src={digi4} alt="Logo" className="h-70 w-120" />
            <p className="text-lg font-nomal bg-[#5A487A] my-0.5 pl-2 flex items-center justify-between pr-4">
              Title Of Video
              <Icon
                icon="line-md:hazard-lights-filled-loop"
                width="24"
                height="20"
                className="transform rotate-90"
              />
            </p>
          </div>
        </div>

        {/* Event Images Section Two */}
        <div className="lg:flex lg:h-60 mt-10 lg:mt-25 gap-3">
          
          <div className="rounded-0 mb-3 md:flex lg:flex-col">
            <img src={digi5} alt="Logo" className="h-70 w-120 lg:mb-2" />
            <p className="text-lg font-nomal bg-[#5A487A] my-0.5 pl-2 md:flex-col flex lg:flex-row items-center md:my-auto lg:justify-between pr-4 md:gap-3 md:py-20 lg:py-0">
              Title Of Video
              <Icon
                icon="line-md:hazard-lights-filled-loop"
                width="24"
                height="20"
                className="transform rotate-90"
              />
            </p>
          </div>

          <div className="rounded-0 mb-3 md:flex lg:flex-col">
            <img src={digi6} alt="Logo" className="h-70 w-120 lg:mb-2" />
            <p className="text-lg font-nomal bg-[#5A487A] my-0.5 pl-2 md:flex-col flex lg:flex-row items-center md:my-auto lg:justify-between pr-4 md:gap-3 md:py-20 lg:py-0">
              Title Of Video
              <Icon
                icon="line-md:hazard-lights-filled-loop"
                width="24"
                height="20"
                className="transform rotate-90"
              />
            </p>
          </div>

          <div className="rounded-0 mb-3 md:flex lg:flex-col">
            <img src={digi7} alt="Logo" className="h-70 w-120 lg:mb-2" />
            <p className="text-lg font-nomal bg-[#5A487A] my-0.5 pl-2 md:flex-col flex lg:flex-row items-center md:my-auto lg:justify-between pr-4 md:gap-3 md:py-20 lg:py-0">
              Title Of Video
              <Icon
                icon="line-md:hazard-lights-filled-loop"
                width="24"
                height="20"
                className="transform rotate-90"
              />
            </p>
          </div>

          <div className="rounded-0 mb-3 md:flex lg:flex-col">
            <img src={digi8} alt="Logo" className="h-70 w-120 lg:mb-2" />
            <p className="text-lg font-nomal bg-[#5A487A] my-0.5 pl-2 md:flex-col flex lg:flex-row items-center md:my-auto lg:justify-between pr-4 md:gap-3 md:py-20 lg:py-0">
              Title Of Video
              <Icon
                icon="line-md:hazard-lights-filled-loop"
                width="24"
                height="20"
                className="transform rotate-90"
              />
            </p>
          </div>
        
        </div>
      </section>

      {/* Testimonials */}
      <section className="lg:py-16 px-8 lg:px-16 widthMargin  ">
        <div className="flex flex-col items-center gap-4 ">
          {/* Testimonial 1 */}
          <div className="lg:flex items-center gap-7 w-90 md:w-150 lg:w-300 2xl:w-400 bg-[#5A487A] py-10 px-5 lg:px-20 mb-10 rounded-4xl">
            <img src={test1} alt="Logo" className="lg:h-100 lg:w-120 text-justify mb-4 lg:mb-0" />
            <p className="text-justify">
  In today’s rapidly evolving world, innovation isn’t just an advantage — it's a necessity. 
  <span className="hidden md:inline"> As we navigate the next frontier of technology, it's critical we align our advancements with purpose and people. 
  From redefining how we connect to reimagining the way industries operate, the potential of Web3 and decentralized systems is only beginning to unfold.
  </span>
  <span className="hidden 2xl:inline"> We stand at the edge of a digital renaissance — one driven by community, creativity, and inclusion. 
  The choices we make today will shape not just our future, but the legacy we leave behind. 
  Let us build boldly, responsibly, and together, creating systems that empower individuals and uplift entire generations.</span>
</p>
          </div>

         {/* Testimonial 2 */}
         <div className="lg:flex items-center gap-7 w-90 md:w-150 lg:w-300 2xl:w-400 bg-[#5A487A] py-10 px-5 lg:px-20 mb-10 rounded-4xl">
            <img src={test1} alt="Logo" className="lg:h-100 lg:w-120 text-justify mb-4 lg:mb-0" />
            <p className="text-justify">
  The world is undergoing a transformation — not just through technology, but through the way we think, lead, and collaborate. 
  <span className="hidden md:inline"> In this new era, innovation must be inclusive, and progress must be purposeful. 
  As leaders, creators, and thinkers, we have the responsibility to ensure that the tools we build solve real problems and serve real people. 
  </span>
  <span className="hidden 2xl:inline"> This is not just about adopting the next trend — it's about shaping the future with intention. 
  We must ask ourselves: are we creating systems that lift others up, that drive equity, and that endure beyond us? 
  Let this be the decade where technology meets humanity at its best — where legacy is defined not by what we build, but by who we empower.</span>
</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      
      <Footer className="bg-white"/>
    </div>
  );
};

export default LandingPage;
