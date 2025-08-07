import React from "react";
import GolfBallOrbit from "./GolfBallOrbit";
import GlowingButtons from "./GlowingButtons";

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white px-4 sm:px-6 md:px-10 py-20 flex flex-col md:flex-row items-center justify-between min-h-screen overflow-hidden">
      {/* Left: Text Content */}
      <div className="z-10 md:pl-12 max-w-3xl space-y-8 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight">
          Real-time golf<br />
          analysis from<br />
          the future
        </h1>

        <div className="space-y-4">
          {/* Star rating and quote */}
          <div className="flex items-center justify-center md:justify-start space-x-3 flex-wrap">
            <div className="flex space-x-1 text-blue-500 text-lg">
              {Array(5).fill(0).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <span className="text-sm text-gray-400">
              “Now I’m hitting birdies instead of branches.”
            </span>
          </div>

          {/* User info */}
          <div className="flex items-center justify-center md:justify-start space-x-2 text-sm text-gray-300">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="User"
              className="w-6 h-6 rounded-full"
            />
            <span className="font-medium">Tiger Forests, USA</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start space-x-4 pt-6">
          <GlowingButtons />
        </div>
      </div>

      {/* Right: Golf Ball and Orbit Animation */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center mt-16 md:mt-0">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
          <GolfBallOrbit />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
