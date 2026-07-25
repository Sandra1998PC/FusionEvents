import {
    CalendarDays,
    MapPin,
    Ticket,
    ArrowRight,
} from "lucide-react";

import music from '../assets/Music.png'
import art from '../assets/Art.png'
import business from '../assets/Business.png'
import education from '../assets/Education.png'
import sports from '../assets/Sports.png'
import technology from '../assets/Technology.png'

const events = [
    {
        id: 1,
        name: "Summer Music Festival",
        location: "Kochi",
        date: "12 Aug 2026",
        price: "₹999",
        category: "Music",
        image: music,
    },
    {
        id: 2,
        name: "Startup Summit",
        location: "Bangalore",
        date: "18 Aug 2026",
        price: "₹1499",
        category: "Business",
        image: business,
    },
    {
        id: 3,
        name: "AI Tech Conference",
        location: "Hyderabad",
        date: "25 Aug 2026",
        price: "₹1999",
        category: "Technology",
        image: technology,
    },
    {
        id: 4,
        name: "Creative Art Expo",
        location: "Calicut",
        date: "30 Aug 2026",
        price: "₹699",
        category: "Art",
        image: art,
    },
    {
        id: 5,
        name: "Football Championship",
        location: "Goa",
        date: "4 Sept 2026",
        price: "₹799",
        category: "Sports",
        image: sports,
    },
    {
        id: 6,
        name: "Education Expo",
        location: "Trivandrum",
        date: "10 Sept 2026",
        price: "Free",
        category: "Education",
        image: education,
    },
];

const FeaturedEvents = () => {
    return (
        <section className="relative py-28 bg-slate-950 overflow-hidden">

            {/* Background Glow */}

            <div className="absolute -left-20 top-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-violet-600/10 blur-[140px]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                {/* Heading */}

                <div className="text-center mb-16">

                    <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">
                        Events
                    </span>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">

                        Featured

                        <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                            {" "}
                            Events
                        </span>

                    </h2>

                    <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
                        Explore the most popular events happening around you.
                        Register now and make unforgettable memories.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {events.map((event) => (

                        <div
                            key={event.id}
                            className="group rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-violet-500 transition duration-500 hover:-translate-y-3 hover:shadow-[0_0_35px_rgba(124,58,237,0.45)]"
                        >

                            {/* Image */}

                            <div className="relative overflow-hidden h-60">

                                <img
                                    src={event.image}
                                    alt={event.name}
                                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                {/* Gradient */}

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

                                {/* Category */}

                                <span className="absolute top-4 left-4 px-4 py-1 rounded-full text-xs font-semibold bg-cyan-400/20 border border-cyan-400/30 text-cyan-300 backdrop-blur-lg">

                                    {event.category}

                                </span>

                            </div>

                            {/* Content */}

                            <div className="p-6">

                                <h3 className="text-2xl font-semibold text-white mb-5">

                                    {event.name}

                                </h3>

                                <div className="space-y-3 text-slate-300">

                                    <div className="flex items-center gap-3">
                                        <MapPin size={18} className="text-cyan-400" />
                                        {event.location}
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <CalendarDays size={18} className="text-violet-400" />
                                        {event.date}
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Ticket size={18} className="text-green-400" />
                                        {event.price}
                                    </div>

                                </div>

                                {/* Button */}

                                <button className="mt-8 w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-400 to-violet-600 flex justify-center items-center gap-2 transition duration-300 hover:scale-105 shadow-[0_0_25px_rgba(34,211,238,0.4)]">

                                    Register

                                    <ArrowRight
                                        size={18}
                                        className="group-hover:translate-x-1 transition"
                                    />

                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default FeaturedEvents;