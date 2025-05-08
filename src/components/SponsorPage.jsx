import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import image from "../assets/WBGC.png";
import FaqAccordion from './FaqAccordion';


const SponsorPage = () => {
    return (
      <div className="lg:min-h-screen bg-custom-image text-white">
        <Navbar />
        <div className="flex flex-col lg:flex-row items-stretch justify-center p-6 gap-10 max-w-screen mx-[50px]">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-auto">
            <img
              src={image}
              alt="Sponsorship visual"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
  
          {/* Form Section */}
          <div className="w-full lg:w-1/2 flex items-stretch">
            <form className="w-full  text-black p-8 rounded-lg shadow-lg flex flex-col justify-center">
              
              {/* Firstname and Lastname in a row */}
              <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
                <div className="flex-1 mb-4 sm:mb-0 ">
                  <label className="block mb-2 font-medium text-white">First Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 bg-[#f5f5f5]"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-2 font-medium text-white">Last Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 bg-[#f5f5f5]"
                    required
                  />
                </div>
              </div>
  
              {/* Email */}
              <div className="mb-4">
                <label className="block mb-2 font-medium text-white">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 bg-[#f5f5f5]"
                  required
                />
              </div>
  
              {/* Phone */}
              <div className="mb-4">
                <label className="block mb-2 font-medium text-white">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 bg-[#f5f5f5]"
                  required
                />
              </div>
  
              {/* Mailing List */}
              <div className="mb-4">
  <label className="block mb-2 font-medium text-white">Join our Mailing List</label>
  <div className="flex flex-col sm:flex-row gap-4 items-center">
    <input
      type="email"
      placeholder="Enter your email address"
      className="w-[550px] p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 text-xl placeholder:text-xl bg-[#f5f5f5]"
      required
    />
    <button
      type="submit"
      className="bg-[#DF1C2F] text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
    >
      Join Now
    </button>
  </div>
  <p className="text-[1.1rem] mt-4 text-white">By providing your email address, you agree <br />to receive marketing communications <br />from Web3GC.</p>
  <p className="text-[1.1rem] mt-4 text-white">For more about how we use your <br />information, see our Privacy Policy.</p>
</div>
  
            </form>
          </div>
        </div>

        <div className="bg-[#f5f5f5] w-full  mt-8 p-6  shadow-md">
  <FaqAccordion />
</div>

{/* <Footer className="bg-[#f5f5f5]"/> */}
<Footer className="border-t border-gray-300 pt-8 bg-gradient-to-b from-[#f5f5f5] to-white"/>




      </div>
    );
  };
  

export default SponsorPage