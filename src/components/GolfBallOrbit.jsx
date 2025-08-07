import React from "react";

const GolfBallOrbit = () => {
  return (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center mx-auto bg-black rounded-full overflow-hidden">
      {/* GOLF BALL */}
      <div className="z-10 rounded-full shadow-lg">
        <img
          src="/golfball.png"
          alt="Golf Ball"
          className="animate-spin-slow h-24 sm:h-36 md:h-48 w-auto object-contain"
        />
      </div>

      {/* ORBIT RINGS */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="absolute w-full sm:w-[95%] md:w-[85%] h-full sm:h-[95%] md:h-[85%] rounded-full border border-blue-400/40 animate-pulseGlow" />
        <div className="absolute w-[80%] sm:w-[75%] md:w-[70%] h-[80%] sm:h-[75%] md:h-[70%] rounded-full border border-blue-400/40 animate-pulseGlow" />
        <div className="absolute w-[60%] sm:w-[55%] md:w-[50%] h-[60%] sm:h-[55%] md:h-[50%] rounded-full border border-blue-400/40 animate-pulseGlow" />
      </div>

      {/* ORBITING LABELS */}
      <div className="absolute w-full h-full pointer-events-none z-10">
        {/* SPIN - inner orbit */}
        <div className="absolute w-full h-full animate-spin-slow">
          <div className="absolute top-[10%] sm:top-[12%] left-1/2 transform -translate-x-1/2">
            <div className="backdrop-blur-md bg-white/10 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-xl shadow-xl animate-reverse-spin-slow text-xs sm:text-sm">
              <div className="text-blue-400">SPIN</div>
              <div className="font-semibold">4000rpm</div>
            </div>
          </div>
        </div>

        {/* SWING SPEED - middle orbit */}
        <div className="absolute w-full h-full animate-spin-medium">
          <div className="absolute bottom-[10%] sm:bottom-[12%] left-1/2 transform -translate-x-1/2">
            <div className="backdrop-blur-md bg-white/10 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-xl shadow-xl animate-reverse-spin-medium text-xs sm:text-sm">
              <div className="text-blue-400">SWING SPEED</div>
              <div className="font-semibold">90mph</div>
            </div>
          </div>
        </div>

        {/* ACCURACY - outer orbit */}
        <div className="absolute w-full h-full animate-spin-slower">
          <div className="absolute top-1/2 right-[6%] sm:right-[8%] transform -translate-y-1/2">
            <div className="backdrop-blur-md bg-white/10 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-xl shadow-xl animate-reverse-spin-slower text-xs sm:text-sm">
              <div className="text-blue-400">ACCURACY</div>
              <div className="font-semibold">27%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GolfBallOrbit;
