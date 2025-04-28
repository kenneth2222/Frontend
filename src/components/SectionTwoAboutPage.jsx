import React from 'react';
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import section1 from "../assets/section1-img1.png";
import section2 from "../assets/section1-img2.png";
import section3 from "../assets/section1-img3.png";
import section4 from "../assets/section1-img4.png";
import section5 from "../assets/section1-img1.png";
import section6 from "../assets/section1-img2.png";
import section7 from "../assets/section1-img5.png";

const sections = [
  {
    image: section1,
    title: "Blockchain/Web3 Event Management",
    description: (
      <>
        <p>We organize world-class events that bring together the Web3 community, thought leaders, and innovators.</p>
        <ul className="list-disc pl-10 mt-2 text-xl">
          <li>Flagship Events: Host premier Web3 conferences, such as the Africa Edition 2024, with over 1000 attendees.</li>
          <li>Workshops & Meetups: Curate technical and non-technical sessions to educate and inspire blockchain enthusiasts.</li>
          <li>Customized Event Solutions: Tailor event management services for corporate clients, startups, and ecosystems.</li>
        </ul>
      </>
    ),
  },
  {
    image: section2,
    title: "Education and Workshops",
    description: (
      <>
        <p>We empower the next generation with blockchain knowledge and skills through tailored workshops and programs.</p>
        <ul className="list-disc pl-10 mt-2 text-xl">
          <li>Beginner to Advanced Training: Cover fundamentals to complex blockchain development.</li>
          <li>Certification Courses: Partner with institutions for verified blockchain education certificates.</li>
        </ul>
      </>
    ),
  },
  {
    image: section3,
    title: "Web3 Marketing and Community Building",
    description: (
      <>
        <p>Helping blockchain projects grow by engaging and nurturing vibrant communities worldwide.</p>
        <ul className="list-disc pl-10 mt-2 text-xl">
          <li>Social Media Campaigns</li>
          <li>Ambassador Programs</li>
          <li>Content Creation</li>
        </ul>
      </>
    ),
  },
  {
    image: section4,
    title: "Smart Contract Auditing",
    description: (
      <>
        <p>We ensure the security and efficiency of smart contracts with rigorous audit processes.</p>
        <ul className="list-disc pl-10 mt-2 text-xl">
          <li>Vulnerability Assessment</li>
          <li>Code Optimization</li>
          <li>Post-Audit Consulting</li>
        </ul>
      </>
    ),
  },
  {
    image: section5,
    title: "Tokenomics Design",
    description: (
      <>
        <p>Strategically crafting token models that drive sustainability and growth in Web3 ecosystems.</p>
        <ul className="list-disc pl-10 mt-2 text-xl">
          <li>Initial Token Distribution Strategies</li>
          <li>Incentive Mechanisms</li>
          <li>Governance Models</li>
        </ul>
      </>
    ),
  },
  {
    image: section6,
    title: "Web3 Marketing and Community Building",
    description: (
      <>
        <p>Helping blockchain projects grow by engaging and nurturing vibrant communities worldwide.</p>
        <ul className="list-disc pl-10 mt-2 text-xl">
          <li>Social Media Campaigns</li>
          <li>Ambassador Programs</li>
          <li>Content Creation</li>
        </ul>
      </>
    ),
  },
  {
    image: section7,
    title: "Blockchain/Web3 Event Management",
    description: (
      <>
        <p>We organize world-class events that bring together the Web3 community, thought leaders, and innovators.</p>
        <ul className="list-disc pl-10 mt-2 text-xl">
          <li>Flagship Events: Host premier Web3 conferences, such as the Africa Edition 2024, with over 1000 attendees.</li>
          <li>Workshops & Meetups: Curate technical and non-technical sessions to educate and inspire blockchain enthusiasts.</li>
          <li>Customized Event Solutions: Tailor event management services for corporate clients, startups, and ecosystems.</li>
        </ul>
      </>
    ),
  },
];

function SectionTwoAboutPage() {
  const [selectedIndex, setSelectedIndex] = useState(0); // Initially select the first one
  const [startIndex, setStartIndex] = useState(0); // For visible slice
  const visibleCount = 5; // How many to show at once

  const selectedSection = sections[selectedIndex];

   // Handlers for Up and Down
   const handleUp = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleDown = () => {
    if (startIndex + visibleCount < sections.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const visibleSections = sections.slice(startIndex, startIndex + visibleCount);

return (
    <div className="flex justify-center items-center py-15">
      <div className="flex justify-center items-center my-5 gap-4">

        {/* Left Side */}
        <div className="flex flex-col gap-2">

          {/* Up Arrow */}
          <div className="flex justify-center">
          {startIndex > 0 && ( // Only show if not at the top
    <button onClick={handleUp} className="text-white text-2xl cursor-pointer">
      <FaChevronUp />
    </button>
  )}
          </div>

          {/* Carousel Items */}
          {visibleSections.map((item, index) => {
            const realIndex = startIndex + index;
            return (
              <div
                key={realIndex}
                onClick={() => setSelectedIndex(realIndex)}
                className={`flex gap-5 items-center bg-[#5A487A] rounded-3xl py-3 pr-5 pl-4 cursor-pointer ${selectedIndex === realIndex ? 'border-2 border-white' : ''}`}
              >
                <img src={item.image} alt="" className="w-40 h-30" />
                <p className="pr-20 text-xl font-bold">{item.title}</p>
              </div>
            );
          })}

          {/* Down Arrow */}
          <div className="flex justify-center">
          {startIndex + visibleCount < sections.length && ( // Only show if not at the bottom
    <button onClick={handleDown} className="text-white text-2xl cursor-pointer">
      <FaChevronDown />
    </button>
  )}
          </div>

        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-between items-center gap-y-8 pr-5 pl-2">
          <div className="w-full mb-2">
            <img src={selectedSection.image} alt="" className="w-full h-[450px] rounded-none" />
          </div>
          <div>
            <p className="text-2xl font-bold text-wrap">
              We organize world-class events that bring together the Web3 community, <br />
              thought leaders, and innovators.
            </p>
            <ul className="list-disc pl-10 mt-2 text-xl">
              <li>Flagship Events: Host premier Web3 conferences, such as the Africa Edition 2024, with over <br />1000 attendees.</li>
              <li>Workshops & Meetups: Curate technical and non-technical sessions to educate and inspire <br />blockchain enthusiasts.</li>
              <li>Customized Event Solutions: Tailor event management services for corporate clients, startups, <br />and ecosystems.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SectionTwoAboutPage;
