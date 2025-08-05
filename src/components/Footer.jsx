import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Branding */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">Forcaster</h2>
          <p className="text-sm text-gray-400">
            Premium feedback tools that don’t take themselves too seriously.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Newsletter or Socials */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Stay in the loop</h3>
          <p className="text-sm text-gray-400 mb-4">Subscribe to our occasional nonsense.</p>
          <form className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-sm text-white px-4 py-2 rounded-md w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-gray-800 mt-16 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} YourBrand. All rights reserved. Built with caffeine and sarcasm.
      </div>
    </footer>
  );
};

export default Footer;
