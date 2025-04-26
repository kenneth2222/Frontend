import React from 'react';
import { Icon } from "@iconify/react";
import { SVGProps } from 'react';

const Footer = () => {
  return (
<footer className="bg-white">
        <div className=" lg:px-16 h-50 mx-20 flex justify-between items-center">
          <div>
            <p className="text-black text-xl font-bold mb-4">Follow us</p>
            <div className="flex gap-4 mt-2 mb-7">
            
              <Icon 
              icon="brandico:facebook-rect" 
              width="24" 
              height="24"
              className="mr-4 bg text-black hover:cursor-pointer"
              />

              <Icon
                icon="akar-icons:twitter-fill"
                width="24"
                height="24"
                className="mr-4 text-black hover:cursor-pointer"
              />
              <Icon
                icon="akar-icons:linkedin-fill"
                width="24"
                height="24"
                className="mr-4 text-black hover:cursor-pointer"
              />
              <Icon
                icon="akar-icons:instagram-fill"
                width="24"
                height="24"
                className="mr-4 text-black hover:cursor-pointer"
              />
            </div>
            <p className="text-black text-xl">
              ©{new Date().getFullYear()} W3GC by Web Global Conference LLC. All
              rights reserved. <br />
              <span className="underline">Privacy Policy</span> &{" "}
              <span className="underline">Terms of Use</span>
            </p>
          </div>

          <div className="h-40 w-120  mt-10 mb-10 footerEmail mx-0 px-0 flex flex-col justify-center items-center gap-2">
            <p className="ml-72">
              get the <span className="font-bold">latest news</span> as then
              coming{" "}
            </p>
            {/* <div className="bg-[#F5E9DE] h-15 w-140 rounded-3xl flex justify-between items-center px-6">
              <p className="text-black text-xl">Email</p>
              <div className="bg-black h-10 w-30 rounded-3xl flex justify-center items-center">
                Subscribe
              </div>
            </div> */
            <div className="bg-[#F5E9DE] h-15 w-140 rounded-3xl flex justify-between items-center px-6">
  <input
    type="email"
    placeholder="Enter your email"
    className="bg-transparent outline-none text-black text-xl flex-1 mr-4"
  />
  <button className="bg-black text-white h-10 px-6 rounded-3xl flex justify-center items-center">
    Subscribe
  </button>
</div>}
          </div>
        </div>
      </footer>
  );
};

export default Footer;