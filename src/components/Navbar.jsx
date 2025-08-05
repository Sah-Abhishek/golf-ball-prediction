import React from "react";

const Navbar = () => {
  return (
    <div className="w-full z-50 px-4 md:px-8 py-4 sticky
     top-0 bg-black">
      <nav className="w-full bg-white/10 max-w-6xl mx-auto px-6 py-4 flex items-center justify-between bg-black/60 backdrop-blur-md rounded-xl shadow-md">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-500 rounded grid place-items-center text-white font-bold text-xl">
            <span className="text-white">🔷</span>
          </div>
          <span className="text-white text-lg font-semibold">Forecaster</span>
        </div>

        {/* Right: Nav Links */}
        <div className="flex space-x-6">
          <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
          <a href="#modes" className="text-gray-300 hover:text-white transition">Modes</a>
          <a href="#membership" className="text-gray-300 hover:text-white transition">Membership</a>
          <a href="#faq" className="text-gray-300 hover:text-white transition">FAQ</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
