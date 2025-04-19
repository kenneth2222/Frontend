import React from 'react';
import social from "../assets/socials.png";
import section1 from "../assets/section1-img1.png";
import section2 from "../assets/section1-img2.png";
import section3 from "../assets/section1-img3.png";
import section4 from "../assets/section1-img4.png";
import section5 from "../assets/section1-img5.png";
import confLady from "../assets/test1.png";
import Navbar from './Navbar';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-custom-image text-white ">
        {/* <Navbar className="text-[#ffff] font-bold"/> */}

    {/* Hero Section  */}
      <div className="flex justify-center h-[100vh] items-center bg-aboutHero-image relative">
      <Navbar className="text-[#ffff] font-bold absolute top-0 gap-209"/>
      <div className="max-w-2xl text-black bg-white py-9 px-9 rounded-3xl absolute translate-y-30 -translate-x-94">
        <h1 className="text-4xl font-bold mb-7.5">About Us</h1>
        <p className="mb-4.5 text-xl">Web3 Global Conference LLC is a pioneering blockchain ecosystem company, incorporated in the USA, 
            dedicated to advancing Web3 adoption worldwide. Our mission is to empower businesses and individuals with 
            cutting-edge blockchain solutions tailored to the dynamic needs of the Web3 space.</p>
            <p className="mb-2.5 text-xl">
            We provide a comprehensive suite of services designed to foster innovation, community growth, 
            and the sustainable development of blockchain technologies.
            </p>
      </div>
      <div className="max-w-2xl absolute translate-y-40 translate-x-154">
        <img src={social} alt="icon" />
      </div>

      </div>

    {/* Section Two */}
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center my-5 gap-4">
        <div className="flex flex-col gap-2 ">
            <div className="flex gap-5 items-center bg-[#5A487A] rounded-3xl py-3 pr-5 pl-4">
            <img src={section1} alt="" className="w-40 h-30"/>
            <p className="pr-20 text-xl font-bold">Blockchain/Web3 <br />Event Management</p>
            </div>
            <div className="flex gap-5 items-center bg-[#5A487A] rounded-3xl py-3 pr-5 pl-4">
            <img src={section2} alt="" className="w-40 h-30"/>
            <p className="pr-20 text-xl font-bold">Education and <br />Workshops</p>
            </div>
            <div className="flex gap-5 items-center bg-[#5A487A] rounded-3xl py-3 pr-5 pl-4">
            <img src={section3} alt="" className="w-40 h-30"/>
            <p className="pr-20 text-xl font-bold">Web3 Marketing and <br />Community Building</p>
            </div>
            <div className="flex gap-5 items-center bg-[#5A487A] rounded-3xl py-3 pr-5 pl-4">
            <img src={section4} alt="" className="w-40 h-30"/>
            <p className="pr-20 text-xl font-bold">Smart Contract <br />Auditing</p>
            </div>
            <div className="flex gap-5 items-center bg-[#5A487A] rounded-3xl py-3 pr-5 pl-4">
            <img src={section5} alt="" className="w-40 h-30"/>
            <p className="pr-20 text-xl font-bold">Tokenomics Design</p>
            </div>
        </div>
        
        <div className="flex flex-col justify-between items-center gap-y-8 pr-5 pl-2">
            <div className="w-full mb-2"> <img src={section1} alt="" className="w-full h-[450px] rounded-none"/></div>
            <div>
              <p className="text-2xl font-bold text-wrap">We organize world-class events that bring together the Web3 community, <br />thought leaders, and innovators.</p>
              <ul className="list-disc pl-10 mt-2 text-xl">
                <li>Flagship Events: Host premier Web3 conferences, such as the Africa Edition 2024, with over <br />1000 attendees.</li>
                <li>Workshops & Meetups: Curate technical and non-technical sessions to educate and inspire <br />blockchain enthusiasts.</li>
                <li>Customized Event Solutions: Tailor event management services for corporate clients, startups, <br />and ecosystems.</li>
              </ul>
            </div>
        </div>

        </div>
    </div>

    {/* Section Three */}
    <div className="flex justify-center items-center mx-auto h-1/2 w-3/4 bg-[#5A487A] rounded-3xl py-3 "> 
      <div className="flex flex-col justify-between items-center pr-5 pl-2">
        <h2 className="text-4xl font-bold mb-3">Why Choose Web3 Global Conference LLC?</h2>
        <ul className="flex flex-col list-disc pl-10 mt-2 text-xl gap-4 gap-y-8">
          <li>Proven Expertise: Our team has organized successful events, including the Annual web3 global 
            conference Edition 2024, with over 1000+ attendees, 50+ speakers and 50+ web3 entrepreneurs.</li>
            <li>Global Network: Connect with influencers, investors, and communities across the blockchain 
              ecosystem in Africa and worldwide.</li>
              <li>Comprehensive Solutions: From marketing to development, we cover all facets of blockchain innovation.</li>
        </ul>
      </div>
      <div>
        <div className="h-[450px] w-[450px] py-3 pr-5 pl-4">
          <img src={confLady} alt="" />
        </div>
      </div>
    </div>


    </div>
  );
};

export default AboutPage;