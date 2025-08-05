
import React from "react";

const GlowingButtons = () => {
  return (
    <div className="flex space-x-6 items-center justify-center  bg-black">
      <button className="relative px-6 py-2 rounded-full text-white font-semibold border border-blue-500 bg-gradient-to-r from-blue-700 to-blue-500 shadow-md hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 group">
        <span className="z-10 relative">Get Forecaster</span>
        {/* <span className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></span> */}
        <span className="absolute inset-0 rounded-full bg-blue-500 blur-md opacity-0 group-hover:opacity-60 transition-all duration-300"></span>
      </button>

      <button className="relative px-6 py-2 rounded-full text-white font-semibold border border-blue-500 bg-gradient-to-r from-blue-700 to-blue-500 shadow-md hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 group">
        <span className="z-10 relative">How it works</span>
        {/* <span className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></span> */}
        <span className="absolute inset-0 rounded-full bg-blue-500 blur-md opacity-0 group-hover:opacity-60 transition-all duration-300"></span>
      </button>
    </div>
  );
};

export default GlowingButtons;
