import React from "react";

const GolfBallOrbit = () => {
  return (
    <div className="relative w-[600px] h-[600px] flex items-center justify-center mx-auto bg-black rounded-full overflow-hidden">
      {/* GOLF BALL */}
      <div className="z-10 rounded-full shadow-lg">
        <img src="/golfball.png" alt="Golf Ball" className="animate-spin-slow h-48 w-48 object-contain" />
      </div>

      {/* ORBIT RINGS */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="absolute w-[500px] h-[500px] rounded-full border border-blue-500/20 animate-pulseGlow" />
        <div className="absolute w-[380px] h-[380px] rounded-full border border-blue-500/20 animate-pulseGlow" />
        <div className="absolute w-[270px] h-[270px] rounded-full border border-blue-500/20 animate-pulseGlow" />
      </div>

      {/* ORBITING LABELS */}
      <div className="absolute w-full h-full pointer-events-none z-10">
        {/* SPIN - inner orbit */}
        <div className="absolute w-full h-full animate-spin-slow">
          <div className="absolute top-[130px] left-1/2 transform -translate-x-1/2">
            <div className="backdrop-blur-md bg-white/10 text-white px-6 py-3 rounded-xl shadow-xl animate-reverse-spin-slow">
              <div className="text-sm text-blue-400">SPIN</div>
              <div className="text-lg font-semibold">4000rpm</div>
            </div>
          </div>
        </div>

        {/* SWING SPEED - middle orbit */}
        <div className="absolute w-full h-full animate-spin-medium">
          <div className="absolute bottom-[110px] left-1/2 transform -translate-x-1/2">
            <div className="backdrop-blur-md bg-white/10 text-white px-6 py-3 rounded-xl shadow-xl animate-reverse-spin-medium">
              <div className="text-sm text-blue-400">SWING SPEED</div>
              <div className="text-lg font-semibold">90mph</div>
            </div>
          </div>
        </div>

        {/* ACCURACY - outer orbit */}
        <div className="absolute w-full h-full animate-spin-slower">
          <div className="absolute top-1/2 right-[80px] transform -translate-y-1/2">
            <div className="backdrop-blur-md bg-white/10 text-white px-6 py-3 rounded-xl shadow-xl animate-reverse-spin-slower">
              <div className="text-sm text-blue-400">ACCURACY</div>
              <div className="text-lg font-semibold">27%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GolfBallOrbit;
