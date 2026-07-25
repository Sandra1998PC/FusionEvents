import React from "react";
import {
    Eye,
    Pencil,
    Trash2,
    Calendar,
    MapPin,
    Users,
} from "lucide-react";
import OrganizerSidebar from "./OrganizerSidebar";
import OrganizerHeader from "./OrganizerHeader";

const events = [
    {
        id: 1,
        image:
            "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600",
        title: "Tech Summit 2026",
        date: "12 Aug 2026",
        venue: "Bangalore",
        participants: 350,
        status: "Upcoming",
    },
    {
        id: 2,
        image:
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600",
        title: "Music Fiesta",
        date: "22 Aug 2026",
        venue: "Kochi",
        participants: 620,
        status: "Live",
    },
    {
        id: 3,
        image:
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600",
        title: "Startup Expo",
        date: "5 Sep 2026",
        venue: "Calicut",
        participants: 180,
        status: "Upcoming",
    },
    {
        id: 4,
        image:
            "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=600",
        title: "AI Conference",
        date: "14 Jul 2026",
        venue: "Trivandrum",
        participants: 510,
        status: "Completed",
    },
];

const badgeColor = (status) => {
    switch (status) {
        case "Live":
            return "bg-green-500/20 text-green-400 border-green-500/40";

        case "Upcoming":
            return "bg-cyan-500/20 text-cyan-400 border-cyan-500/40";

        default:
            return "bg-slate-700/40 text-slate-300 border-slate-600";
    }
};

export default function ManageEventsTable() {
    return (
        <div className="flex bg-slate-950 min-h-screen">

            <OrganizerSidebar />

            <main className="flex-1 lg:ml-72">

                <OrganizerHeader />

                <div className="p-8">

                    <div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl border border-cyan-500/20 mt-10 overflow-hidden">

                        <div className="flex items-center justify-between p-6 border-b border-slate-700">
                            <h2 className="text-2xl font-bold text-white">
                                Manage Events
                            </h2>

                            <span className="text-slate-400">
                                {events.length} Events
                            </span>
                        </div>

                        <div className="overflow-x-auto">

                            <table className="w-full">

                                <thead className="bg-slate-800/60 text-slate-300">

                                    <tr>

                                        <th className="px-6 py-4 text-left">Image</th>

                                        <th className="px-6 py-4 text-left">Title</th>

                                        <th className="px-6 py-4 text-left">Date</th>

                                        <th className="px-6 py-4 text-left">Venue</th>

                                        <th className="px-6 py-4 text-center">Participants</th>

                                        <th className="px-6 py-4 text-center">Status</th>

                                        <th className="px-6 py-4 text-center">Actions</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {events.map((event) => (

                                        <tr
                                            key={event.id}
                                            className="border-t border-slate-800 hover:bg-slate-800/50 transition"
                                        >
                                            {/* Image */}

                                            <td className="px-6 py-4">

                                                <img
                                                    src={event.image}
                                                    alt={event.title}
                                                    className="w-24 h-16 rounded-xl object-cover"
                                                />

                                            </td>

                                            {/* Title */}

                                            <td className="px-6 py-4">

                                                <h3 className="font-semibold text-white">
                                                    {event.title}
                                                </h3>

                                            </td>

                                            {/* Date */}

                                            <td className="px-6 py-4">

                                                <div className="flex items-center gap-2 text-slate-300">

                                                    <Calendar size={16} className="text-cyan-400" />

                                                    {event.date}

                                                </div>

                                            </td>

                                            {/* Venue */}

                                            <td className="px-6 py-4">

                                                <div className="flex items-center gap-2 text-slate-300">

                                                    <MapPin size={16} className="text-cyan-400" />

                                                    {event.venue}

                                                </div>

                                            </td>

                                            {/* Participants */}

                                            <td className="px-6 py-4 text-center">

                                                <div className="flex justify-center items-center gap-2">

                                                    <Users size={16} className="text-cyan-400" />

                                                    <span className="text-white">
                                                        {event.participants}
                                                    </span>

                                                </div>

                                            </td>

                                            {/* Status */}

                                            <td className="px-6 py-4 text-center">

                                                <span
                                                    className={`px-4 py-2 rounded-full text-sm border ${badgeColor(
                                                        event.status
                                                    )}`}
                                                >
                                                    {event.status}
                                                </span>

                                            </td>

                                            {/* Actions */}

                                            <td className="px-6 py-4">

                                                <div className="flex justify-center gap-3">

                                                    <button
                                                        className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-white transition"
                                                        title="View"
                                                    >
                                                        <Eye size={18} className="mx-auto" />
                                                    </button>

                                                    <button
                                                        className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500 hover:text-white transition"
                                                        title="Edit"
                                                    >
                                                        <Pencil size={18} className="mx-auto" />
                                                    </button>

                                                    <button
                                                        className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white transition"
                                                        title="Delete"
                                                    >
                                                        <Trash2 size={18} className="mx-auto" />
                                                    </button>

                                                </div>

                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </main>

        </div>
    );
}