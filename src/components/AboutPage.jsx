import React from 'react';
import { Icon } from '@iconify/react';
import social from "../assets/socials.png";
import digi1 from "../assets/digi (1).png";
import digi2 from "../assets/digi (2).png";
import digi3 from "../assets/digi (3).png";
import digi4 from "../assets/digi (4).png";
import digi5 from "../assets/digi (5).png";
import digi6 from "../assets/digi (6).png";
import digi7 from "../assets/digi (7).png";
import digi8 from "../assets/digi (8).png";
// import section1 from "../assets/section1-img1.png";
// import section2 from "../assets/section1-img2.png";
// import section3 from "../assets/section1-img3.png";
// import section4 from "../assets/section1-img4.png";
// import section5 from "../assets/section1-img5.png";
import confLady from "../assets/test1.png";
import Navbar from './Navbar';
import Footer from './Footer';
import SwiperAboutPage from './SwiperAbout';
import SectionTwo from './SectionTwoAboutPage';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-custom-image text-white ">
        {/* <Navbar className="text-[#ffff] font-bold"/> */}

    {/* Hero Section  */}
      <div className="flex flex-col justify-center  min-h-[50vh] 2xl:h-[100vh] items-center bg-aboutHero-image relative">
      <Navbar className="text-[#ffff] font-bold lg:absolute -translate-y-50 md:-translate-y-50 lg:-translate-y-90 2xl:-translate-y-95 gap-50 md:gap-90 2xl:gap-209"/>
      <div className=" flex flex-col lg:max-w-2xl text-black bg-white lg:py-9 lg:px-9 px-3 py-3 rounded-3xl absolute translate-y-10 md:-translate-y-0 lg:-translate-y-0 2xl:translate-y-10 lg:-translate-x-50 2xl:-translate-x-94 mx-10">
        <h1 className="text-2xl lg:text-4xl font-bold mb-7.5 ">About Us</h1>
        <p className="mb-4.5 text-sm lg:text-xl">Web3 Global Conference LLC is a pioneering blockchain ecosystem company, incorporated in the USA, 
            dedicated to advancing Web3 adoption worldwide. Our mission is to empower businesses and individuals with 
            cutting-edge blockchain solutions tailored to the dynamic needs of the Web3 space.</p>
            <p className="mb-2.5 text-sm lg:text-xl">
            We provide a comprehensive suite of services designed to foster innovation, community growth, 
            and the sustainable development of blockchain technologies.
            </p>
      </div>
    
      <div className="hidden md:block  lg:block lg:max-w-2xl absolute translate-y-30 md:translate-x-55 md:translate-y-35 lg:-translate-y-0 2xl:translate-y-40 lg:translate-x-100 2xl:translate-x-154">
  <img src={social} alt="icon" className="md:w-50 md:h-10 lg:w-70 lg:h-15"/>
</div>

      </div>

    {/* Section Two */}
    <SectionTwo />
  

    {/* Section Three */}
<div className="flex flex-col lg:flex-row justify-center items-center mx-auto w-full max-w-7xl bg-[#5A487A] rounded-3xl py-6 px-4">
  {/* Text Section */}
  <div className="flex flex-col justify-between items-start text-white lg:pr-8 w-full lg:w-1/2 mb-6 lg:mb-0">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center lg:text-left">
      Why Choose Web3 Global Conference LLC?
    </h2>
    <ul className="list-disc pl-6 sm:pl-10 mt-2 text-base sm:text-lg md:text-xl space-y-6">
      <li>
        <span className="font-semibold">Proven Expertise:</span> Our team has organized successful events,
        including the Annual Web3 Global Conference Edition 2024, with over 1000+ attendees, 50+ speakers, and 50+ Web3 entrepreneurs.
      </li>
      <li>
        <span className="font-semibold">Global Network:</span> Connect with influencers, investors, and communities across
        the blockchain ecosystem in Africa and worldwide.
      </li>
      <li>
        <span className="font-semibold">Comprehensive Solutions:</span> From marketing to development, we cover all
        facets of blockchain innovation.
      </li>
    </ul>
  </div>

  {/* Image Section */}
  <div className="w-full lg:w-1/2 flex justify-center items-center">
    <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] h-auto">
      <img src={confLady} alt="Web3 Conference" className="w-full h-auto object-cover rounded-xl" />
    </div>
  </div>
</div>


    {/* Section Four */}
    <div className="w-full px-4 sm:px-6 lg:px-8 mt-10">
  <h3 className="text-xl sm:text-2xl font-bold text-center sm:text-left mb-6">Sponsors and Partners</h3>
        <SwiperAboutPage/>
      </div>

              {/* Video Gallery */}
<div className="w-full px-4 sm:px-6 lg:px-8 mt-10">
  <h3 className="text-xl sm:text-2xl font-bold text-center sm:text-left mb-6">
    From Recent Events
  </h3>
</div>

{/* Responsive Grid for Event Sections */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8 mb-12">
  {[digi1, digi2, digi3, digi4, digi5, digi3, digi8, digi5, digi2, digi7, digi2, digi6, digi4, digi6, digi2, digi5].map((img, index) => (
    <div key={index} className="rounded overflow-hidden shadow-sm">
      <img src={img} alt="Event" className="w-full h-auto object-cover rounded-t" />
      <p className="text-base font-normal bg-[#5A487A] pl-2 py-2 flex items-center justify-between pr-4 text-white">
        Title Of Video
        <Icon
          icon="line-md:hazard-lights-filled-loop"
          width="24"
          height="20"
          className="transform rotate-90"
        />
      </p>
    </div>
  ))}
</div>

      
              <Footer />
    </div>
     
  );
};

export default AboutPage;