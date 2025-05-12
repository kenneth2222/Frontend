import React from 'react';
import { Icon } from '@iconify/react';
import social from "../assets/socials.png";
import digi1 from "../assets/digi (1).png";
import digi2 from "../assets/digi (2).png";
import digi3 from "../assets/digi (3).png";
import digi4 from "../assets/digi (4).png";
import digi5 from "../assets/digi (5).png";
import digi8 from "../assets/digi (8).png";
import test1 from "../assets/test1.png";
import Navbar from './Navbar';
import Footer from './Footer';
import SwiperAboutPage from './SwiperAbout';
import SectionTwo from './SectionTwoEventsPage';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-custom-image text-white ">
        {/* <Navbar className="text-[#ffff] font-bold"/> */}

    {/* Hero Section  */}
      <div className="flex flex-col justify-center  min-h-[50vh] 2xl:h-[100vh] items-center bg-section1 relative">
      {/* <Navbar className="text-[#ffff] font-bold lg:absolute -translate-y-50 md:-translate-y-50 lg:-translate-y-90 2xl:-translate-y-95 gap-50 md:gap-90 2xl:gap-209"/> */}
      <Navbar className="text-white font-bold absolute -top-2  lg:-top-25 xl:-top-50 left-0 w-full px-4 py-3 flex justify-between items-center z-50 bg-transparent" />

 <div className="relative flex flex-col text-black bg-white py-6 px-4 md:px-6 lg:py-9 lg:px-9 lg:max-w-2xl rounded-3xl mx-4 sm:mx-6 md:mx-10 lg:mx-0 translate-y-0 lg:translate-y-10 lg:-translate-x-1/2">
  
  {/* Main Card */}
  <div className="relative w-full rounded-3xl bg-white flex flex-col justify-center items-center md:items-start p-6 md:p-8 lg:pl-15">
    
    {/* Badge */}
    <div className="bg-[#F5E9DE] text-black px-6 py-2 rounded-2xl mb-4 md:mb-6">
      <p className="text-center text-sm md:text-base">Upcoming Event</p>
    </div>

    {/* Title and Description */}
    <div className="text-black text-center md:text-left">
      <p className="text-2xl md:text-3xl font-bold mb-3 md:mb-5 lg:text-6xl">AI/Blockchain:</p>
      <p className="text-sm md:text-lg lg:text-2xl font-normal">
        The Dawn of Decentralized Intelligence
      </p>
    </div>

    {/* Button */}
    <div className="mt-6 flex justify-center md:justify-start">
      <div className="bg-black text-white px-6 py-3 rounded-2xl cursor-pointer">
        <p className="whitespace-nowrap text-sm md:text-base">Book Ticket</p>
      </div>
    </div>
    
  </div>
</div>



    
      <div className="hidden md:block  lg:block lg:max-w-2xl absolute translate-y-30 md:translate-x-55 md:translate-y-35 lg:-translate-y-0 2xl:translate-y-40 lg:translate-x-100 2xl:translate-x-154">
  <img src={social} alt="icon" className="md:w-50 md:h-10 lg:w-70 lg:h-15"/>
</div>

      </div>

        



    {/* Section Two */}
    <SectionTwo />


      {/* Testimonials */}
<section className="py-12 px-4 sm:px-8 lg:px-16">
  <div className="flex flex-col items-center gap-10 max-w-screen-xl mx-auto">
    
    {/* Testimonial 1 */}
    <div className="flex flex-col lg:flex-row items-center gap-6 bg-[#5A487A] rounded-4xl p-6 sm:p-10 lg:p-14 w-full">
      <img src={test1} alt="Logo" className="w-full sm:w-60 lg:w-48 xl:w-60 h-auto mb-4 lg:mb-0 object-contain" />
      <p className="text-justify text-white">
        In today’s rapidly evolving world, innovation isn’t just an advantage — it's a necessity.
        <span className="hidden md:inline"> As we navigate the next frontier of technology, it's critical we align our advancements with purpose and people. 
          From redefining how we connect to reimagining the way industries operate, the potential of Web3 and decentralized systems is only beginning to unfold.
        </span>
        <span className="hidden 2xl:inline"> We stand at the edge of a digital renaissance — one driven by community, creativity, and inclusion. 
          The choices we make today will shape not just our future, but the legacy we leave behind. 
          Let us build boldly, responsibly, and together, creating systems that empower individuals and uplift entire generations.
        </span>
      </p>
    </div>

    {/* Testimonial 2 */}
    <div className="flex flex-col lg:flex-row-reverse items-center gap-6 bg-[#5A487A] rounded-4xl p-6 sm:p-10 lg:p-14 w-full">
      <img src={test1} alt="Logo" className="w-full sm:w-60 lg:w-48 xl:w-60 h-auto mb-4 lg:mb-0 object-contain" />
      <p className="text-justify text-white">
        The world is undergoing a transformation — not just through technology, but through the way we think, lead, and collaborate.
        <span className="hidden md:inline"> In this new era, innovation must be inclusive, and progress must be purposeful. 
          As leaders, creators, and thinkers, we have the responsibility to ensure that the tools we build solve real problems and serve real people.
        </span>
        <span className="hidden 2xl:inline"> This is not just about adopting the next trend — it's about shaping the future with intention.
          We must ask ourselves: are we creating systems that lift others up, that drive equity, and that endure beyond us?
          Let this be the decade where technology meets humanity at its best — where legacy is defined not by what we build, but by who we empower.
        </span>
      </p>
    </div>

  </div>
</section>




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
  {[digi1, digi2, digi3, digi4, digi5, digi3, digi8, digi5].map((img, index) => (
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

      
              <Footer className="bg-white"/>
    </div>
     
  );
};

export default AboutPage;