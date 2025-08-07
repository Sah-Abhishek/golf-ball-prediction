import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full z-50 px-4 md:px-8 py-4 sticky top-0">
      <div className="relative"> {/* <-- Important for absolute positioning */}
        <nav className="w-full bg-white/10 max-w-6xl mx-auto px-6 py-4 flex items-center justify-between bg-black/60 backdrop-blur-md rounded-xl shadow-md">
          {/* Left: Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded grid place-items-center text-white font-bold text-xl">
              <span className="text-white">🔷</span>
            </div>
            <span className="text-white text-lg font-semibold">Forecaster</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
            <a href="#modes" className="text-gray-300 hover:text-white transition">Modes</a>
            <a href="#membership" className="text-gray-300 hover:text-white transition">Membership</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition">FAQ</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Toggle menu">
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Overlay */}
        {menuOpen && (
          <div className="absolute left-0 right-0 mt-2 bg-black/80 backdrop-blur-md rounded-xl shadow-md px-6 py-4 space-y-4 text-white md:hidden z-40">
            <a href="#features" className="block hover:text-blue-400 transition">Features</a>
            <a href="#modes" className="block hover:text-blue-400 transition">Modes</a>
            <a href="#membership" className="block hover:text-blue-400 transition">Membership</a>
            <a href="#faq" className="block hover:text-blue-400 transition">FAQ</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
