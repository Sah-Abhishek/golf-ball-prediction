
import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-[#1a1a1a] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6">

        {/* Instant Shot Breakdown */}
        <div className="relative rounded-xl overflow-hidden md:col-span-2 md:row-span-2">
          <img
            src="https://images.unsplash.com/photo-1591491640784-3232eb748d4b?q=80&w=687&auto=format&fit=crop"
            alt="Instant Shot Breakdown"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-6">
            <h2 className="text-3xl font-semibold">Instant Shot Breakdown</h2>
            <p className="text-sm mt-2 text-gray-200">
              AI-driven insights like “Wind at 12 mph, trajectory optimal for birdies.”
            </p>
          </div>
        </div>

        {/* Real-time Audio Feedback */}
        <div className="relative rounded-xl overflow-hidden md:col-span-2 md:row-span-1">
          <img
            src="https://images.unsplash.com/photo-1635163103213-043efbb0e7f6?q=80&w=1470&auto=format&fit=crop"
            alt="Real-time Audio Feedback"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-6">
            <h2 className="text-3xl font-semibold">Real-time Audio Feedback</h2>
            <p className="text-sm mt-2 text-gray-300">
              Live feedback through your Bluetooth earbuds, tailored to your preferred tone: supportive, neutral, or downright snarky.
            </p>
          </div>
        </div>

        {/* Bunker Avoidance */}
        <div className="relative rounded-xl overflow-hidden md:col-span-1 md:row-span-1">
          <img
            src="/phoneMockup.png"
            alt="Bunker Avoidance"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Death by Data */}
        <div className="bg-[#111111] p-6 rounded-xl md:col-span-1 md:row-span-1 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold">Death By Data</h2>
          <p className="text-sm mt-2 text-gray-300">
            Every swing, slice, and missed putt is stored in the app for review, so you can relive your worst shots whenever you want.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;

