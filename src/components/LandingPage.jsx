import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-purple-900 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-4 px-8 lg:px-16">
        <div className="logo">
          <h1 className="text-xl font-bold">Web3GlobalConference</h1>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-purple-300">Home</a>
          <a href="#" className="hover:text-purple-300">About</a>
          <a href="#" className="hover:text-purple-300">Speakers</a>
          <a href="#" className="hover:text-purple-300">Schedule</a>
          <a href="#" className="hover:text-purple-300">Contact</a>
        </div>
        <div>
          <button className="px-4 py-2 bg-blue-500 rounded-full hover:bg-blue-600">Register</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between py-16 px-8 lg:px-16">
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Web 3 Global Conference</h1>
          <p className="text-xl mb-8">Join the future of the web with industry leaders and innovators</p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            {/* 3D Sphere Animation - simplified representation */}
            <div className="w-64 h-64 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-80 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Event Details Card */}
      <section className="py-16 px-8 lg:px-16 flex justify-center">
        <div className="bg-blue-600 rounded-2xl p-8 w-full max-w-3xl flex flex-col md:flex-row items-center justify-between">
          <div>
            <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-bold">LIVE</span>
            <h2 className="text-3xl font-bold my-4">Web 3 Global Conference</h2>
            <p className="mb-4">The premier event for Web3 enthusiasts and professionals</p>
          </div>
          <div className="text-center mt-6 md:mt-0">
            <span className="text-5xl font-bold">100+</span>
            <p>Speakers</p>
            <button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100">Register Now</button>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-16 px-8 lg:px-16">
        <h2 className="text-3xl font-bold mb-8">Featured Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Speaker 1 */}
          <div className="bg-purple-800 rounded-xl p-6">
            <div className="w-24 h-24 bg-gray-400 rounded-full mb-4"></div>
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-purple-300">Blockchain Expert</p>
          </div>
          {/* Speaker 2 */}
          <div className="bg-purple-800 rounded-xl p-6">
            <div className="w-24 h-24 bg-gray-400 rounded-full mb-4"></div>
            <h3 className="text-xl font-bold">Jane Smith</h3>
            <p className="text-purple-300">DeFi Specialist</p>
          </div>
          {/* Speaker 3 */}
          <div className="bg-purple-800 rounded-xl p-6">
            <div className="w-24 h-24 bg-gray-400 rounded-full mb-4"></div>
            <h3 className="text-xl font-bold">Mike Johnson</h3>
            <p className="text-purple-300">Web3 Architect</p>
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-16 px-8 lg:px-16">
        <h2 className="text-3xl font-bold mb-8">Event Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Gallery Image 1 */}
          <div className="bg-blue-500 rounded-xl h-48 overflow-hidden">
            <img src="/api/placeholder/400/300" alt="Conference" className="w-full h-full object-cover" />
          </div>
          {/* Gallery Image 2 */}
          <div className="bg-purple-500 rounded-xl h-48 overflow-hidden">
            <img src="/api/placeholder/400/300" alt="Conference" className="w-full h-full object-cover" />
          </div>
          {/* Gallery Image 3 */}
          <div className="bg-indigo-500 rounded-xl h-48 overflow-hidden">
            <img src="/api/placeholder/400/300" alt="Conference" className="w-full h-full object-cover" />
          </div>
          {/* Gallery Image 4 */}
          <div className="bg-blue-700 rounded-xl h-48 overflow-hidden">
            <img src="/api/placeholder/400/300" alt="Conference" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-purple-800 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-20 h-20 bg-gray-400 rounded-full mr-4">
                <img src="/api/placeholder/80/80" alt="Testimonial" className="w-full h-full rounded-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-purple-300">CEO, TechCorp</p>
              </div>
            </div>
            <p className="text-sm">
              "The Web3 Global Conference was an incredible experience. The insights shared by speakers were invaluable for our company's blockchain strategy."
            </p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-purple-800 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-20 h-20 bg-gray-400 rounded-full mr-4">
                <img src="/api/placeholder/80/80" alt="Testimonial" className="w-full h-full rounded-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Maria Garcia</h3>
                <p className="text-purple-300">Blockchain Developer</p>
              </div>
            </div>
            <p className="text-sm">
              "As a developer, I found the technical sessions extremely helpful. The networking opportunities were also fantastic - I made connections that have already led to new projects."
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 lg:px-16 border-t border-purple-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Web3GlobalConference</h2>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-purple-300 hover:text-white">Twitter</a>
            <a href="#" className="text-purple-300 hover:text-white">LinkedIn</a>
            <a href="#" className="text-purple-300 hover:text-white">Instagram</a>
          </div>
        </div>
        <div className="mt-8 text-center text-purple-300 text-sm">
          &copy; 2025 Web3 Global Conference. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;