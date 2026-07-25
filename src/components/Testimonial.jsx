import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

import john from '../assets/John.png'
import sarah from '../assets/Sarah.png'
import david from '../assets/David.png'

const testimonials = [
  {
    id: 1,
    name: "John Anderson",
    role: "Event Attendee",
    image: john,
    message:
      "The best event platform I've ever used. Booking tickets took less than a minute and everything was perfectly organized.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Organizer",
    image: sarah,
    message:
      "FusionEvents helped us manage registrations effortlessly. The dashboard is clean, fast and incredibly easy to use.",
  },
  {
    id: 3,
    name: "David Miller",
    role: "Conference Speaker",
    image: david,
    message:
      "A premium experience from start to finish. I love the beautiful interface and smooth event management features.",
  },
];

function Testimonial() {
      const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const previous = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const next = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="relative py-28 bg-slate-950 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute left-0 top-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-[4px] text-cyan-400 font-semibold">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">

            What Our

            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Users Say
            </span>

          </h2>

          <p className="mt-6 text-slate-400">
            Trusted by organizers and attendees across India.
          </p>

        </div>

        {/* Slider */}

        <div className="relative overflow-hidden rounded-3xl">

          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >

            {testimonials.map((item) => (

              <div
                key={item.id}
                className="min-w-full px-2"
              >

                <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-violet-500 transition duration-500 hover:shadow-[0_0_35px_rgba(124,58,237,.35)] p-10 md:p-14">

                  {/* Avatar */}

                  <div className="flex justify-center">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-48 h-48 rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_20px_rgba(34,211,238,.45)]"
                    />

                  </div>

                  {/* Stars */}

                  <div className="flex justify-center gap-1 mt-8">

                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        size={22}
                        fill="#FACC15"
                        className="text-yellow-400"
                      />
                    ))}

                  </div>

                  {/* Message */}

                  <p className="text-slate-300 text-xl leading-9 text-center mt-8 italic">

                    "{item.message}"

                  </p>

                  {/* User */}

                  <div className="text-center mt-10">

                    <h3 className="text-white text-xl font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-cyan-400 mt-1">
                      {item.role}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* Buttons */}

          <button
            onClick={previous}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-slate-900/80 backdrop-blur-lg border border-cyan-400/30 text-cyan-400 p-3 rounded-full hover:bg-cyan-400 hover:text-slate-950 transition"
          >
            <ChevronLeft/>
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-slate-900/80 backdrop-blur-lg border border-cyan-400/30 text-cyan-400 p-3 rounded-full hover:bg-cyan-400 hover:text-slate-950 transition"
          >
            <ChevronRight />
          </button>

        </div>

        {/* Indicators */}

        <div className="flex justify-center gap-3 mt-10">

          {testimonials.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-10 bg-cyan-400"
                  : "w-3 bg-slate-600"
              }`}
            />

          ))}

        </div>

      </div>
    </section>
  )
}

export default Testimonial
