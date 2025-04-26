import React from 'react';
// import Navbar from './components/Navbar';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
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
import emailBg from "../assets/email-bg.png";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-custom-image text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between py-16 px-8 lg:px-16 widthMargin relative">
        <div className="relative w-240 h-240 lineImage"></div>
        <div className="lg:w-1/2 mb-70 ml-20">
          <h1 className="text-8xl font-bold mb-6">
            Web 3 Global <br />
            Conference
          </h1>
          <p className="text-3xl font-light mb-8">
            Uniting leading experts from diverse industries on <br />a global
            scale
          </p>
          <p className="text-xl mb-8 flex items-center gap-4">
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
        <div className="lg:w-1/2 flex justify-center mr-10">
          <div className="relative w-200 h-200">
            <div className="absolute inset-0 worldLogo1"></div>
            <div className="absolute inset-0 worldLogo opacity-75"></div>
          </div>
        </div>
      </section>

      {/* Event Details Card */}
      <SwiperHomePage />

      {/* Featured Speakers */}
      <section className="py-16 px-8 lg:px-16 widthMargin">
        <h2 className="text-3xl font-bold mb-2">Top Guest Speakers</h2>
        <p className="text-2xl mb-5">
          Lorem ipsum dolor sit amet consectetur. Dui tincidunt tortor maecenas
          laoreet consequat morbi pellentesque enim. Scelerisque ultrices morbi
          porttitor leo proin dignissim est. Amet et sapien volutpat eu aliquam.
        </p>
        <div className="flex justify-between gap-8">
          {/* Speaker 1 */}
          <div className="bg-[#5A487A] rounded-xl p-3 w-140 flex items-center gap-8">
            <div className="w-50 h-50 rounded-3xl">
              <img
                src={conf1}
                alt="Logo"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold">John Doe</h3>
              <p className="text-white">ACN, Founder MotoCat LTD</p>
              <img src={logo} alt="Logo" className="h-10 mt-2" />
            </div>
          </div>
          {/* Speaker 2 */}
          <div className="bg-[#5A487A] rounded-xl p-3 w-140 flex items-center gap-8">
            <div className="w-50 h-50 rounded-3xl">
              <img
                src={conf1}
                alt="Logo"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold">John Doe</h3>
              <p className="text-white">ACN, Founder MotoCat LTD</p>
              <img src={logo} alt="Logo" className="h-10 mt-2" />
            </div>
          </div>
          {/* Speaker 3 */}
          <div className="bg-[#5A487A] rounded-xl p-3 w-140 flex items-center gap-8">
            <div className="w-50 h-50 rounded-3xl">
              <img
                src={conf1}
                alt="Logo"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold">John Doe</h3>
              <p className="text-white">ACN, Founder MotoCat LTD</p>
              <img src={logo} alt="Logo" className="h-10 mt-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-16 px-8 lg:px-16 widthMargin">
        <h2 className="text-3xl font-bold mb-4">From recent events</h2>
        <div className="flex justify-between">
          <p className="text-2xl font-light">
            Lorem ipsum dolor sit amet consectetur. Dui tincidunt tortor
            maecenas laoreet consequat morbi <br />
            pellentesque enim. Scelerisque ultrices morbi porttitor leo proin
            dignissim est. Amet et sapien volutpat eu aliquam.
          </p>
          <div className="text-2xl rounded-3xl border w-40 border-white flex items-center  cursor-pointer hover:bg-white hover:text-black transition duration-300 ease-in-out hover:scale-105">
            <p className="my-0 px-2 font-normal">More Videos</p>
          </div>
        </div>

        {/* Event Images Section One */}
        <div className="flex h-60  mt-9 gap-3">
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
        <div className="flex h-60 mt-25 gap-3">
          <div className="rounded-0">
            <img src={digi5} alt="Logo" className="h-70 w-120" />
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
            <img src={digi6} alt="Logo" className="h-70 w-120" />
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
            <img src={digi7} alt="Logo" className="h-70 w-120" />
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
            <img src={digi8} alt="Logo" className="h-70 w-120" />
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
      </section>

      {/* Testimonials */}
      <section className="py-16 px-8 lg:px-16 widthMargin">
        <div className="flex flex-col items-center">
          {/* Testimonial 1 */}
          <div className="flex items-center gap-7 w-400 bg-[#5A487A] py-10 px-20 mb-10 rounded-4xl">
            <img src={test1} alt="Logo" className="h-100 w-120" />
            <p>
              Lorem ipsum dolor sit amet consectetur. Dui tincidunt tortor
              maecenas laoreet consequat morbi pellentesque enim. Scelerisque
              ultrices morbi porttitor leo proin dignissim est. Amet et sapien
              volutpat eu aliquam. Accumsan varius consectetur at suspendisse.
              Felis pharetra pulvinar aenean suspendisse velit orci. Elit
              imperdiet adipiscing lorem quam donec nulla integer faucibus.
              Faucibus eleifend mauris malesuada lobortis venenatis. Arcu morbi
              nunc ac sed nascetur id sed ipsum. Sed ut at tortor at. Massa
              dignissim ornare mattis congue neque vivamus sit facilisi at.
              Egestas faucibus est aliquam massa fringilla ultrices amet risus
              in. Porttitor suscipit eget duis ut sed amet commodo magnis. Eget
              aliquet pharetra aliquam nullam sit mauris aliquet amet tempor. Ut
              laoreet amet sed pharetra. Massa dignissim ornare mattis congue
              neque vivamus sit facilisi at. Egestas faucibus est aliquam massa
              fringilla ultrices amet risus in. Porttitor suscipit eget duis ut
              sed amet commodo magnis. Eget aliquet pharetra aliquam nullam sit
              mauris aliquet amet tempor. Ut laoreet amet sed pharetra.
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="flex items-center gap-7 w-400 bg-[#5A487A] py-10 px-20 rounded-4xl">
            <p>
              Lorem ipsum dolor sit amet consectetur. Dui tincidunt tortor
              maecenas laoreet consequat morbi pellentesque enim. Scelerisque
              ultrices morbi porttitor leo proin dignissim est. Amet et sapien
              volutpat eu aliquam. Accumsan varius consectetur at suspendisse.
              Felis pharetra pulvinar aenean suspendisse velit orci. Elit
              imperdiet adipiscing lorem quam donec nulla integer faucibus.
              Faucibus eleifend mauris malesuada lobortis venenatis. Arcu morbi
              nunc ac sed nascetur id sed ipsum. Sed ut at tortor at. Massa
              dignissim ornare mattis congue neque vivamus sit facilisi at.
              Egestas faucibus est aliquam massa fringilla ultrices amet risus
              in. Porttitor suscipit eget duis ut sed amet commodo magnis. Eget
              aliquet pharetra aliquam nullam sit mauris aliquet amet tempor. Ut
              laoreet amet sed pharetra. Massa dignissim ornare mattis congue
              neque vivamus sit facilisi at. Egestas faucibus est aliquam massa
              fringilla ultrices amet risus in. Porttitor suscipit eget duis ut
              sed amet commodo magnis. Eget aliquet pharetra aliquam nullam sit
              mauris aliquet amet tempor. Ut laoreet amet sed pharetra.
            </p>
            <img src={test1} alt="Logo" className="h-100 w-120" />
          </div>
        </div>
      </section>

      {/* Footer */}
      
      <Footer />
    </div>
  );
};

export default LandingPage;
