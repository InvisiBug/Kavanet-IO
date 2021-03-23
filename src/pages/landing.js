import React from "react";
import { LandingNavBar } from "../UILibrary";
import Nav2 from "../UILibrary/nav2";
import bg1 from "../images/bg1.png";

const Landing = () => {
  return (
    <>
      <div className="bg-gray-700 overflow-hidden h-screen">
        <img
          // src="https://blendswap.com/static/blendImages/2016/10/12/Blend/86275/54a27662881ee2087381e8c6f19a9922.jpg"
          src={bg1}
          className="absolute h-full w-full object-cover"
        />
        {/* <div className="inset-0 absolute bg-gradient-to-r from-gray-100 to-transparent"></div> */}
        <div className="inset-0 bg-black opacity-20 absolute" />
        {/* <div className="inset-0 bg-gradient-to-r from-gray-400 to-blue-500 opacity-20 absolute" /> */}
        <Nav2 />
        <div className="container mx-auto h-full relative z-10 flex items-center">
          <div className="w-full flex flex-col items-center relative z-10">
            <h1 className="font-extrabold text-7xl text-center  sm:text-8xl text-white leading-tight mt-4 text-shadow-lg">
              Kavanet.io
            </h1>
            <a
              href="#"
              className="block bg-gray-800 hover:bg-gray-900 py-3 px-4 text-lg text-white font-bold uppercase mt-10 rounded-lg shadow"
            >
              Enter
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;

{
  /* <div class="bg-indigo-900 relative overflow-hidden h-screen">
  <img
    src="/images/landscape/6.svg"
    class="absolute h-full w-full object-cover"
  />
  <div class="inset-0 bg-black opacity-25 absolute"></div>
  <header class="absolute top-0 left-0 right-0 z-20">
    <nav class="container mx-auto px-6 md:px-12 py-4">
      <div class="md:flex justify-center items-center">
        <div class="flex justify-between items-center">
          <div class="md:hidden">
            <button class="text-white focus:outline-none">
              <svg
                class="h-12 w-12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="hidden md:flex items-center">
          <a class="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
            Ticket
          </a>
          <a class="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
            Info
          </a>
          <a class="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  </header>
  <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
    <div class="w-full flex flex-col items-center relative z-10">
      <h1 class="font-extrabold text-7xl text-center sm:text-8xl text-white leading-tight mt-4">
        Life-changing
      </h1>
      <a
        href="#"
        class="block bg-gray-800 hover:bg-gray-900 py-3 px-4 text-lg text-white font-bold uppercase mt-10"
      >
        Start Now
      </a>
    </div>
  </div>
</div>; */
}
