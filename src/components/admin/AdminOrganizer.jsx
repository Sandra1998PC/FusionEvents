import React from 'react'
import { Eye, Pencil, Trash2 } from "lucide-react";
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

const events = [
    {
        id: 1,
        title: "Tech Summit 2026",
        organizer: "John Anderson",
        participants: 320,
        revenue: "₹1,25,000",
        status: "Upcoming",
    },
    {
        id: 2,
        title: "Startup Expo",
        organizer: "Sarah Williams",
        participants: 180,
        revenue: "₹82,500",
        status: "Live",
    },
    {
        id: 3,
        title: "AI Conference",
        organizer: "David Miller",
        participants: 420,
        revenue: "₹2,30,000",
        status: "Completed",
    },
];

const badgeColor = (status) => {
    switch (status) {
        case "Active":
        case "Upcoming":
            return "bg-emerald-500/20 text-emerald-400";

        case "Pending":
            return "bg-yellow-500/20 text-yellow-400";

        case "Blocked":
            return "bg-red-500/20 text-red-400";

        case "Live":
            return "bg-cyan-500/20 text-cyan-400";

        case "Completed":
            return "bg-purple-500/20 text-purple-400";

        default:
            return "bg-slate-500/20 text-slate-300";
    }
};

const iconBtn =
    "p-2 rounded-lg transition hover:bg-slate-700 hover:text-cyan-400";

function AdminOrganizer() {
    return (
        <div className="flex bg-slate-950 min-h-screen">

            <AdminSidebar />

            <main className="flex-1 lg:ml-72">

                <AdminHeader />

                <div className="p-8">

                    <div className="min-h-screen bg-[#020617] text-white p-8">

                        <div className="space-y-10">
                            {/* EVENTS TABLE */}

                            <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">

                                <div className="px-8 py-6 border-b border-slate-800 flex items-center justify-between">

                                    <h2 className="text-xl font-bold text-white">
                                        Events
                                    </h2>

                                    <button className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition">
                                        View All
                                    </button>

                                </div>

                                <div className="overflow-x-auto">

                                    <table className="w-full">

                                        <thead className="bg-slate-950">

                                            <tr className="text-slate-400">

                                                <th className="text-left px-6 py-4">
                                                    Title
                                                </th>

                                                <th className="text-left px-6 py-4">
                                                    Organizer
                                                </th>

                                                <th className="text-left px-6 py-4">
                                                    Participants
                                                </th>

                                                <th className="text-left px-6 py-4">
                                                    Revenue
                                                </th>

                                                <th className="text-left px-6 py-4">
                                                    Status
                                                </th>

                                                <th className="text-center px-6 py-4">
                                                    Actions
                                                </th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            {events.map((event) => (

                                                <tr
                                                    key={event.id}
                                                    className="border-b border-slate-800 hover:bg-slate-800/40 transition"
                                                >
                                                    <td className="px-6 py-5 text-white font-medium">
                                                        {event.title}
                                                    </td>

                                                    <td className="px-6 py-5 text-slate-300">
                                                        {event.organizer}
                                                    </td>

                                                    <td className="px-6 py-5 text-slate-300">
                                                        {event.participants}
                                                    </td>

                                                    <td className="px-6 py-5 text-cyan-400 font-semibold">
                                                        {event.revenue}
                                                    </td>

                                                    <td className="px-6 py-5">

                                                        <span
                                                            className={`px-4 py-1 rounded-full text-sm font-medium ${badgeColor(
                                                                event.status
                                                            )}`}
                                                        >
                                                            {event.status}
                                                        </span>

                                                    </td>

                                                    <td className="px-6 py-5">

                                                        <div className="flex justify-center gap-3">

                                                            <button className={iconBtn}>
                                                                <Eye size={18} />
                                                            </button>

                                                            <button className={iconBtn}>
                                                                <Pencil size={18} />
                                                            </button>

                                                            <button className="p-2 rounded-lg hover:bg-red-500/20 hover:text-red-400 transition">
                                                                <Trash2 size={18} />
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

                    </div>

                </div>

            </main>

        </div>
    )
}

export default AdminOrganizer
