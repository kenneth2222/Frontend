import React from 'react';
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import section1 from "../assets/conf-image.png";
import section2 from "../assets/test1.png";
import section3 from "../assets/image15.png";
import section4 from "../assets/image16.png";
import section5 from "../assets/section1-img1.png";
import section6 from "../assets/section1-img2.png";
import section7 from "../assets/section1-img5.png";

const sections = [
  {
    image: section1,
    title: "Moses Jamiu",
    title1: "VP, Web3 Global Conference",
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
    title: "Jessica Smith",
    title1: "Co-Founder, Web3 Academy",
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
    title: "Stephen Christopher",
    title1: "Blockchain Developer",
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
    title: "Tiffany Brown",
    title1: "FBN, Executive Director",
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0); 
  const visibleCount = 4; 

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
 
//   <div className="flex justify-center items-center py-10 px-4 mt-10">
<div className="flex justify-center items-center py-10 px-4 sm:px-6 md:px-10 lg:px-16 mt-10">
      {/* <div className="flex flex-col lg:flex-row justify-center items-center gap-6 w-full max-w-7xl"> */}
        {/* Left Side */}
        {/* <div className="flex flex-col gap-2"> */}
           

          {/* Carousel Items */}
          {/* {visibleSections.map((item, index) => {
            const realIndex = startIndex + index;
            return (
              <div
                key={realIndex}
                onClick={() => setSelectedIndex(realIndex)}
                className={`flex gap-3 items-center bg-[#5A487A] rounded-3xl py-3 px-4 cursor-pointer ${
                  selectedIndex === realIndex ? 'border-2 border-white' : ''
                }`}
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-24 h-20 sm:w-32 sm:h-24 md:w-36 md:h-28 lg:w-40 lg:h-30 object-cover"
                />
                <div>
                <p className="text-md sm:text-lg md:text-xl font-bold">{item.title}</p>
                <p className="text-md sm:text-lg md:text-xl font-bold">{item.title1}</p>
                </div>
              </div>
            );
          })}

          
        </div> */}

        {/* Right Side */}
        {/* <div className="flex flex-col justify-between items-center gap-y-6 w-full lg:w-2/3">
        
          <div className="px-2 sm:px-4 lg:px-0">
            <p className="text-lg sm:text-xl md:text-2xl font-normal text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur. Dui tincidunt tortor maecenas laoreet consequat morbi pellentesque 
            enim. Scelerisque ultrices morbi porttitor leo proin dignissim est. Amet et sapien volutpat eu aliquam. Accumsan varius consectetur at suspendisse. Felis pharetra pulvinar aenean suspendisse velit orci. Elit imperdiet adipiscing lorem quam donec nulla integer faucibus. Faucibus eleifend mauris malesuada lobortis venenatis. Arcu morbi nunc ac sed nascetur id sed ipsum. Sed ut at tortor at. Massa dignissim ornare mattis congue neque vivamus sit facilisi at. Egestas faucibus est aliquam massa fringilla ultrices amet risus in. Porttitor suscipit eget duis ut sed amet commodo magnis. Eget aliquet pharetra aliquam nullam sit mauris aliquet amet tempor. Ut laoreet amet sed pharetra.

    Nisl justo leo porta auctor in nunc tellus. Amet cursus tortor consectetur felis eu urna massa. Adipiscing amet eu 
    sed lectus massa. Ut mauris congue mi in. Feugiat pellentesque ipsum ipsum enim sed vel pulvinar eget tincidunt.
    Porta ligula lacinia ullamcorper eget risus blandit quis. Duis venenatis a fusce vitae tincidunt magnis. 
    Tortor euismod duis in facilisi ut pretium neque.
    
    
            </p>
           
          </div>
        </div> */}
      {/* </div> */}

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 w-full max-w-7xl">
    
    {/* Left Side */}
    <div className="w-full lg:w-1/3 flex flex-col gap-4">
      {visibleSections.map((item, index) => {
        const realIndex = startIndex + index;
        return (
          <div
            key={realIndex}
            onClick={() => setSelectedIndex(realIndex)}
            className={`flex gap-3 items-center bg-[#5A487A] rounded-3xl py-3 px-4 cursor-pointer transition-all duration-200 ${
              selectedIndex === realIndex ? 'border-2 border-white' : ''
            }`}
          >
            <img
              src={item.image}
              alt=""
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover rounded-xl"
            />
            <div>
              <p className="text-base sm:text-lg md:text-xl font-bold text-white">{item.title}</p>
              <p className="text-base sm:text-lg md:text-xl font-bold text-white">{item.title1}</p>
            </div>
          </div>
        );
      })}
    </div>

    {/* Right Side */}
    <div className="w-full lg:w-2/3 flex flex-col justify-center items-center lg:items-start">
      <div className="px-2 sm:px-4 lg:px-0 max-w-full">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-justify text-gray-100 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Dui tincidunt tortor maecenas laoreet consequat morbi pellentesque 
          enim. Scelerisque ultrices morbi porttitor leo proin dignissim est. Amet et sapien volutpat eu aliquam. 
          Accumsan varius consectetur at suspendisse. Felis pharetra pulvinar aenean suspendisse velit orci. 
          Elit imperdiet adipiscing lorem quam donec nulla integer faucibus. Faucibus eleifend mauris malesuada 
          lobortis venenatis. Arcu morbi nunc ac sed nascetur id sed ipsum. Sed ut at tortor at. Massa dignissim 
          ornare mattis congue neque vivamus sit facilisi at. Egestas faucibus est aliquam massa fringilla ultrices 
          amet risus in. Porttitor suscipit eget duis ut sed amet commodo magnis. Eget aliquet pharetra aliquam 
          nullam sit mauris aliquet amet tempor. Ut laoreet amet sed pharetra.

          <br /><br />

          Nisl justo leo porta auctor in nunc tellus. Amet cursus tortor consectetur felis eu urna massa. 
          Adipiscing amet eu sed lectus massa. Ut mauris congue mi in. Feugiat pellentesque ipsum ipsum enim sed 
          vel pulvinar eget tincidunt. Porta ligula lacinia ullamcorper eget risus blandit quis. Duis venenatis 
          a fusce vitae tincidunt magnis. Tortor euismod duis in facilisi ut pretium neque.
        </p>
      </div>
    </div>

  </div>
    </div>
  );
}

export default SectionTwoAboutPage;
