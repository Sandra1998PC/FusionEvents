import { Calendar, Clock3, ImagePlus, Images, MapPin } from "lucide-react";
import { useState } from "react";
import OrganizerSidebar from "../components/organizer/OrganizerSidebar";
import OrganizerHeader from "../components/organizer/OrganizerHeader";

export default function CreateEvent() {
    const [banner, setBanner] = useState(null);
    const [gallery, setGallery] = useState([]);

    const handleBanner = (e) => {
        setBanner(e.target.files[0]);
    };

    const handleGallery = (e) => {
        setGallery([...e.target.files]);
    };

    return (
        <div className="flex bg-slate-950 min-h-screen">

            <OrganizerSidebar />

            <main className="flex-1 lg:ml-72">

                <OrganizerHeader />

                <div className="p-8">

                    <div className="min-h-screen bg-[#020617] p-8 text-white">

                        {/* Heading */}

                        <div className="mb-10">
                            <h1 className="text-4xl font-bold">
                                Create Event
                            </h1>

                            <p className="text-slate-400 mt-2">
                                Create and publish a new event for Fusion Events.
                            </p>
                        </div>

                        {/* Form */}

                        <form className="bg-slate-900/70 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8">

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                                {/* Event Name */}

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Event Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter event name"
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none"
                                    />
                                </div>

                                {/* Category */}

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Category
                                    </label>

                                    <select
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none"
                                    >
                                        <option>Technology</option>
                                        <option>Business</option>
                                        <option>Music</option>
                                        <option>Education</option>
                                        <option>Sports</option>
                                        <option>Art</option>
                                    </select>
                                </div>

                                {/* Description */}

                                <div className="lg:col-span-2">
                                    <label className="block mb-2 font-medium">
                                        Description
                                    </label>

                                    <textarea
                                        rows="5"
                                        placeholder="Write event description..."
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none resize-none"
                                    ></textarea>
                                </div>

                                {/* Venue */}

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Venue
                                    </label>

                                    <div className="relative">

                                        <MapPin
                                            className="absolute left-4 top-4 text-cyan-400"
                                            size={18}
                                        />

                                        <input
                                            type="text"
                                            placeholder="Venue"
                                            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-3 focus:border-cyan-400 outline-none"
                                        />

                                    </div>
                                </div>

                                {/* Date */}

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Date
                                    </label>

                                    <div className="relative">

                                        <Calendar
                                            className="absolute left-4 top-4 text-cyan-400"
                                            size={18}
                                        />

                                        <input
                                            type="date"
                                            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-3 focus:border-cyan-400 outline-none"
                                        />

                                    </div>
                                </div>

                                {/* Time */}

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Time
                                    </label>

                                    <div className="relative">

                                        <Clock3
                                            className="absolute left-4 top-4 text-cyan-400"
                                            size={18}
                                        />

                                        <input
                                            type="time"
                                            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-3 focus:border-cyan-400 outline-none"
                                        />

                                    </div>
                                </div>

                                {/* Price */}

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Price (₹)
                                    </label>

                                    <input
                                        type="number"
                                        placeholder="500"
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none"
                                    />
                                </div>

                                {/* Seats */}

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Seats
                                    </label>

                                    <input
                                        type="number"
                                        placeholder="100"
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none"
                                    />
                                </div>

                                {/* Banner Upload */}

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Banner Upload
                                    </label>

                                    <label className="cursor-pointer flex flex-col items-center justify-center h-48 rounded-2xl border-2 border-dashed border-cyan-500/30 hover:border-cyan-400 transition">

                                        <ImagePlus
                                            size={45}
                                            className="text-cyan-400 mb-3"
                                        />

                                        <p className="text-slate-400">
                                            Click to upload banner
                                        </p>

                                        {banner && (
                                            <p className="text-cyan-400 mt-2">
                                                {banner.name}
                                            </p>
                                        )}

                                        <input
                                            type="file"
                                            hidden
                                            onChange={handleBanner}
                                        />

                                    </label>
                                </div>

                                {/* Gallery Upload */}

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Gallery Upload
                                    </label>

                                    <label className="cursor-pointer flex flex-col items-center justify-center h-48 rounded-2xl border-2 border-dashed border-cyan-500/30 hover:border-cyan-400 transition">

                                        <Images
                                            size={45}
                                            className="text-cyan-400 mb-3"
                                        />

                                        <p className="text-slate-400">
                                            Upload gallery images
                                        </p>

                                        {gallery.length > 0 && (
                                            <p className="text-cyan-400 mt-2">
                                                {gallery.length} Files Selected
                                            </p>
                                        )}

                                        <input
                                            type="file"
                                            multiple
                                            hidden
                                            onChange={handleGallery}
                                        />

                                    </label>
                                </div>

                            </div>

                            {/* Buttons */}

                            <div className="flex flex-wrap justify-end gap-5 mt-10">

                                <button
                                    type="button"
                                    className="px-8 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition"
                                >
                                    Save Draft
                                </button>

                                <button
                                    type="submit"
                                    className="px-8 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition shadow-[0_0_20px_rgba(34,211,238,.4)]"
                                >
                                    Publish Event
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </main>

        </div>

    );
}