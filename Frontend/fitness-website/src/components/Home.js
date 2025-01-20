import React from "react";
import headerImage from "./images/header.png";


const HomePage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Circle */}
      <div className="absolute top-1/4 right-10 w-[400px] h-[400px] rounded-full bg-orange-500 opacity-20"></div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-20 relative z-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-blue-500 font-bold text-lg uppercase">
            Best Fitness In The Town
          </h2>
          <h1 className="text-5xl lg:text-6xl font-bold">
            Make Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Body Shape</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Unleash your potential and embark on a journey towards a stronger,
            fitter, and more confident you. Sign up for 'Make Your Body Shape'
            now and witness the incredible transformation your body is capable
            of!
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          {/* <img
            src="/images/header.png" // Replace with your image path
            alt="Fitness Trainer"
            className="w-[300px] lg:w-[400px] object-cover"
          /> */}
          <img
  src={headerImage}
  alt="Fitness Trainer"
  className="w-[300px] lg:w-[400px] object-cover"
/>

        </div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 text-[10rem] lg:text-[15rem] font-bold text-gray-800 tracking-wider">
        FITNESS
      </div>
    </div>
  );
};

export default HomePage;
