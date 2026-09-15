import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050816]/95">
      <div className="flex flex-col items-center gap-5">

        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-cyan-400/20"></div>

          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-purple-500 animate-spin"></div>

          {/* Center */}
          <div className="absolute inset-3 flex items-center justify-center rounded-full bg-[#0b1026] shadow-[0_0_25px_rgba(34,211,238,0.5)]">
            <span className="text-cyan-400 font-bold text-lg">F</span>
          </div>
        </div>

        {/* Text */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-white tracking-wider">
            Fusion<span className="text-cyan-400">Events</span>
          </h2>

          <p className="mt-1 text-sm text-gray-400 animate-pulse">
            Loading...
          </p>
        </div>

      </div>
    </div>
  );
};

export default Loader;