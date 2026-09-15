import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, SearchX } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#080817] flex items-center justify-center px-6 text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-150px] left-[-150px] w-[350px] h-[350px] bg-purple-600/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-[-150px] right-[-150px] w-[350px] h-[350px] bg-cyan-500/20 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl">

        {/* 404 */}
        <h1
          className="text-[120px] sm:text-[160px] font-extrabold leading-none
                     bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400
                     bg-clip-text text-transparent
                     drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]"
        >
          404
        </h1>

        {/* Icon */}
        <div className="flex justify-center mt-2 mb-6">
          <div className="p-4 rounded-full bg-purple-500/10 border border-purple-500/20">
            <SearchX
              size={48}
              strokeWidth={1.5}
              className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
            />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
          Oops! The page you're looking for doesn't exist or may have been
          moved. Let's get you back to FusionEvents.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          {/* Go Back */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-6 py-3
                       rounded-lg border border-gray-700
                       text-gray-300 hover:text-white
                       hover:border-purple-500
                       hover:bg-purple-500/10
                       transition-all duration-300"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          {/* Home */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 px-6 py-3
                       rounded-lg font-medium text-white
                       bg-gradient-to-r from-purple-600 to-cyan-500
                       hover:from-purple-500 hover:to-cyan-400
                       shadow-lg shadow-purple-500/20
                       hover:shadow-purple-500/40
                       transition-all duration-300"
          >
            <Home size={18} />
            Back to Home
          </button>

        </div>

        {/* Footer */}
        <div className="mt-12 text-sm text-gray-600">
          <span className="text-purple-400 font-semibold">Fusion</span>
          <span className="text-cyan-400 font-semibold">Events</span>
          <span className="mx-2">•</span>
          Event Management Platform
        </div>

      </div>
    </div>
  );
};

export default NotFound;