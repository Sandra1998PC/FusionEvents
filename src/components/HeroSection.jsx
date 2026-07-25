import { ArrowRight, PlusCircle } from "lucide-react";

const HeroSection = () => {
  return (
   <div>
        <section className="relative min-h-screen flex items-center overflow-hidden pt-30">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/images/event-bg.jpg"
              alt="Event Crowd"
              className="w-full h-full object-cover"
            />
    
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-violet-950/70"></div>
    
            {/* Extra Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(124,58,237,0.25),transparent_45%)]"></div>
          </div>
    
          {/* Decorative Blurs */}
          <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-cyan-500/20 blur-[120px]"></div>
    
          <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-violet-600/20 blur-[140px]"></div>
    
          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <div className="max-w-3xl">
    
              {/* Badge */}
    
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 bg-slate-900/40 backdrop-blur-lg text-cyan-300 mb-8">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                The Future of Event Management
              </div>
    
              {/* Heading */}
    
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                Where Amazing
                <br />
    
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                  Events
                </span>
    
                <br />
    
                Come Together
              </h1>
    
              {/* Sub Heading */}
    
              <p className="mt-8 text-lg md:text-xl text-slate-300 leading-8 max-w-2xl">
                Create, discover and attend unforgettable events effortlessly.
                From conferences and concerts to workshops and celebrations,
                FusionEvents brings organizers and attendees together on one
                seamless platform.
              </p>
    
              {/* Buttons */}
    
              <div className="mt-12 flex flex-wrap gap-5">
    
                <button className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600 text-white font-semibold shadow-[0_0_35px_rgba(34,211,238,0.45)] hover:scale-105 transition duration-300">
    
                  Explore Events
    
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition"
                  />
    
                </button>
    
                <button className="flex items-center gap-2 px-8 py-4 rounded-xl border border-cyan-400 text-cyan-300 backdrop-blur-lg bg-slate-900/30 hover:bg-cyan-400 hover:text-slate-950 transition duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]">
    
                  <PlusCircle size={20} />
    
                  Create Event
    
                </button>
    
              </div>
    
              {/* Stats */}
    
              <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl">
    
                <div>
                  <h2 className="text-3xl font-bold text-cyan-400">500+</h2>
                  <p className="text-slate-400 mt-2">Events Hosted</p>
                </div>
    
                <div>
                  <h2 className="text-3xl font-bold text-violet-400">20K+</h2>
                  <p className="text-slate-400 mt-2">Happy Users</p>
                </div>
    
                <div>
                  <h2 className="text-3xl font-bold text-cyan-400">100+</h2>
                  <p className="text-slate-400 mt-2">Organizers</p>
                </div>
    
              </div>
    
            </div>
          </div>
        </section>
   </div>
  );
};

export default HeroSection;