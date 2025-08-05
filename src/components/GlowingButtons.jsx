import React from "react";

const GlowingButtons = () => {
  return (
    <div className="flex space-x-6 items-center justify-center  bg-black">
      {['Get Forecaster', 'How it works'].map((label) => (
        <button
          key={label}
          className="relative px-6 py-2 rounded-full hover:shadow-[0_0_80px_12px_rgba(0,150,255,0.6)] text-white font-semibold border border-blue-500 bg-gradient-to-r from-blue-700 to-blue-500 shadow-md group transition-all duration-300 hover:scale-105"
        >
          {/* Foreground Text */}
          <span className="z-10 relative">{label}</span>

          {/* Glowing Background */}
          <span className="absolute inset-0 rounded-full bg-blue-500 blur-md opacity-30 group-hover:opacity-60 transition-all duration-300 pointer-events-none"></span>
        </button>
      ))}
    </div>
  );
};

export default GlowingButtons;
