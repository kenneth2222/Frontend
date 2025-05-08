import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import image from "../assets/Sponsor.jpg";
import FaqAccordion from './FaqAccordion';


const SponsorPage = () => {
    return (
      <div className="min-h-screen bg-custom-image text-white">
        <Navbar />
  
        <div className="flex flex-col lg:flex-row items-stretch justify-center px-4 sm:px-6 md:px-10 lg:px-12 xl:px-20 2xl:px-32 py-10 gap-10 max-w-screen-3xl mx-auto">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={image}
              alt="Sponsorship visual"
              className="w-full h-full max-h-[600px] object-cover rounded-lg"
            />
          </div>
  
          {/* Form Section */}
          <div className="w-full lg:w-1/2 flex items-stretch">
            <form className="w-full text-black p-6 sm:p-8 rounded-lg shadow-lg flex flex-col justify-center bg-white">
              {/* Firstname and Lastname */}
              <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
                <div className="flex-1 mb-4 sm:mb-0">
                  <label className="block mb-2 font-medium text-black">First Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 bg-[#f5f5f5]"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-2 font-medium text-black">Last Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 bg-[#f5f5f5]"
                    required
                  />
                </div>
              </div>
  
              {/* Email */}
              <div className="mb-4">
                <label className="block mb-2 font-medium text-black">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 bg-[#f5f5f5]"
                  required
                />
              </div>
  
              {/* Phone */}
              <div className="mb-4">
                <label className="block mb-2 font-medium text-black">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 bg-[#f5f5f5]"
                  required
                />
              </div>
  
              {/* Mailing List */}
              <div className="mb-4">
                <label className="block mb-2 font-medium text-black">Join our Mailing List</label>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full md:w-auto flex-1 p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 text-base bg-[#f5f5f5]"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-[#DF1C2F] text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
                  >
                    Join Now
                  </button>
                </div>
                <p className="text-[1rem] mt-4 text-black">
                  By providing your email address, you agree to receive marketing communications from Web3GC.
                </p>
                <p className="text-[1rem] mt-4 text-black">
                  For more about how we use your information, see our Privacy Policy.
                </p>
              </div>
            </form>
          </div>
        </div>
  
        <div className="bg-[#f5f5f5] w-full mt-8 px-4 sm:px-6 md:px-10 lg:px-20 py-6 shadow-md">
          <FaqAccordion />
        </div>
  
        <Footer className="border-t border-gray-300 pt-8 bg-gradient-to-b from-[#f5f5f5] to-white" />
      </div>
    );
  };
  
  export default SponsorPage;
  