import React from "react";
import Nav2 from "../UILibrary/nav2";

const Index = () => {
  return (
    <>
      <div className="bg-gray-700 overflow-hidden h-screen">
        <img
          src="https://blendswap.com/static/blendImages/2016/10/12/Blend/86275/54a27662881ee2087381e8c6f19a9922.jpg"
          className="absolute h-full w-full object-cover"
        />
        <div className="inset-0 bg-black opacity-20 absolute" />
        <Nav2 />
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
          <div className="w-full flex flex-col items-center relative z-10">
            <h1 className="font-extrabold text-7xl text-center  sm:text-8xl text-white leading-tight mt-4 ">
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

export default Index;

{
  /* <HomeScreenLayout>
        <Experiments bgColour={"bg-indigo-500"} />
        <Gallery bgColour={"bg-green-300"} />
      </HomeScreenLayout> */
}
