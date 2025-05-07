import React from 'react';
import { useState } from 'react';
import { Icon } from "@iconify/react";
// import { SVGProps } from 'react';

const Footer = () => {

  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        alert("Subscribed successfully!");
        setEmail("");
      } else {
        alert("Subscription failed. Try again.");
      }
    } catch (err) {
      console.error("Error subscribing:", err);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
<footer className="bg-white md:px-2">
        <div className="lg:px-16 h-50 mx-5 lg:flex lg:flex-row flex-col justify-between items-center ">


  {/* This is only visible in small screens */}
  <div className="sm:flex md:flex lg:hidden w-90 lg:h-40 lg:w-120 mt-10 mb-10 mx-0 px-0 flex-col justify-center items-center gap-2 md:translate-x-90 md:-mb-15">

  <div className="bg-[#F5E9DE] h-15 w-90 lg:h-15 lg:w-140 rounded-3xl flex lg:justify-between items-center px-6">
    <input
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="bg-transparent outline-none text-black text-xl lg:flex-1 lg:mr-4 "
    />
    <button onClick={handleSubscribe} className="bg-black text-white h-10 px-3 rounded-3xl lg:flex justify-center items-center">
      Subscribe
    </button>
  </div>
</div>

  

  {/* <!-- First div (Social Media Links) --> */}
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
    <p className="text-black text-lg md:text-2xl ">
      ©{new Date().getFullYear()} W3GC by Web Global Conference LLC. All
      rights reserved. <br />
      <span className="underline">Privacy Policy</span> &{" "}
      <span className="underline">Terms of Use</span>
    </p>
  </div>

{/* This is only visible in large screens */}
<div className="hidden lg:flex lg:h-40 lg:w-120 mt-10 mb-10 footerEmail mx-0 px-0 flex-col justify-center items-center gap-2">
  <p className="hidden lg:ml-72">
    get the <span className="font-bold">latest news</span> as then
    coming
  </p>
  <div className="bg-[#F5E9DE] h-15 w-95 lg:h-15 lg:w-90 2xl:w-140 rounded-3xl flex lg:justify-between items-center px-6">
    <input
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="bg-transparent outline-none text-black text-xl lg:flex-1 lg:mr-4 "
    />
    <button  onClick={handleSubscribe} className="bg-black text-white h-10 px-6 rounded-3xl lg:flex justify-center items-center">
      Subscribe
    </button>
  </div>
</div>





</div>
      </footer>
  );
};

export default Footer;