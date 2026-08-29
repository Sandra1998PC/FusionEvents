import {
    Bell,
    Users,
    UserCheck,
    CalendarDays,
    IndianRupee,
    TriangleAlert,
    CircleCheck,
    Trash2,
    CheckCheck,
    Clock3,
} from "lucide-react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

const notifications = [
    {
        id: 1,
        type: "user",
        title: "New User Registered",
        message: "Sandra P C created a new participant account.",
        time: "5 mins ago",
        read: false,
    },
    {
        id: 2,
        type: "organizer",
        title: "Organizer Request",
        message: "John Anderson requested organizer approval.",
        time: "20 mins ago",
        read: false,
    },
    {
        id: 3,
        type: "event",
        title: "New Event Created",
        message: "Tech Summit 2026 has been published.",
        time: "1 hour ago",
        read: true,
    },
    {
        id: 4,
        type: "payment",
        title: "Revenue Received",
        message: "₹15,000 received from Music Fiesta registrations.",
        time: "Today",
        read: true,
    },
    {
        id: 5,
        type: "warning",
        title: "Event Reported",
        message: "AI Conference received multiple user reports.",
        time: "Yesterday",
        read: false,
    },
    {
        id: 6,
        type: "success",
        title: "Organizer Approved",
        message: "Startup Hub organizer account approved successfully.",
        time: "Yesterday",
        read: true,
    },
];

const icons = {
    user: {
        icon: Users,
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
    },
    organizer: {
        icon: UserCheck,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
    },
    event: {
        icon: CalendarDays,
        color: "text-orange-400",
        bg: "bg-orange-500/10",
    },
    payment: {
        icon: IndianRupee,
        color: "text-green-400",
        bg: "bg-green-500/10",
    },
    warning: {
        icon: TriangleAlert,
        color: "text-red-400",
        bg: "bg-red-500/10",
    },
    success: {
        icon: CircleCheck,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
    },
};

export default function AdminNotifications() {
    return (
        <div className="flex bg-slate-950 min-h-screen">

            <AdminSidebar />

            <main className="flex-1 lg:ml-72">

                <AdminHeader />

                <div className="p-8">

                    <div className="min-h-screen bg-[#020617] text-white p-8">

                        <div className="min-h-screen bg-[#020617] text-white p-8">

                            {/* Header */}

                            <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-10">

                                <div>
                                    <h1 className="text-4xl font-bold">
                                        Admin Notifications
                                    </h1>

                                    <p className="text-slate-400 mt-2">
                                        Monitor all platform activities and system alerts.
                                    </p>
                                </div>

                                <div className="flex gap-4">

                                    <button
                                        className="flex items-center gap-2 px-5 py-3 rounded-xl
            border border-cyan-500 text-cyan-400
            hover:bg-cyan-500 hover:text-slate-950 transition"
                                    >
                                        <CheckCheck size={18} />
                                        Mark All Read
                                    </button>

                                    <button
                                        className="flex items-center gap-2 px-5 py-3 rounded-xl
            border border-red-500 text-red-400
            hover:bg-red-500 hover:text-white transition"
                                    >
                                        <Trash2 size={18} />
                                        Clear All
                                    </button>

                                </div>

                            </div>

                            {/* Filters */}

                            {/* <div className="flex flex-wrap gap-3 mb-8">

                                {[
                                    "All",
                                    "Users",
                                    "Organizers",
                                    "Events",
                                    "Revenue",
                                    "Warnings",
                                ].map((filter) => (
                                    <button
                                        key={filter}
                                        className="px-5 py-2 rounded-full
            bg-slate-800 border border-slate-700
            hover:border-cyan-400
            hover:text-cyan-400
            transition"
                                    >
                                        {filter}
                                    </button>
                                ))}

                            </div> */}

                            {/* Notifications */}

                            <div className="space-y-5">

                                {notifications.map((item) => {

                                    const Icon = icons[item.type].icon;

                                    return (

                                        <div
                                            key={item.id}
                                            className={`relative flex gap-5 items-start
              p-6 rounded-3xl border backdrop-blur-xl
              transition-all duration-300
              hover:border-cyan-400
              hover:shadow-[0_0_30px_rgba(34,211,238,.2)]
              ${item.read
                                                    ? "bg-slate-900/70 border-slate-700"
                                                    : "bg-cyan-500/5 border-cyan-500/30"
                                                }`}
                                        >

                                            {!item.read && (
                                                <span className="absolute top-5 right-5 w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
                                            )}

                                            {/* Icon */}

                                            <div
                                                className={`w-16 h-16 rounded-2xl flex items-center justify-center ${icons[item.type].bg}`}
                                            >
                                                <Icon
                                                    size={28}
                                                    className={icons[item.type].color}
                                                />
                                            </div>

                                            {/* Message */}

                                            <div className="flex-1">

                                                <h2 className="text-xl font-semibold">
                                                    {item.title}
                                                </h2>

                                                <p className="text-slate-400 mt-2">
                                                    {item.message}
                                                </p>

                                                <div className="flex items-center gap-2 mt-4 text-slate-500">

                                                    <Clock3 size={15} />

                                                    <span>{item.time}</span>

                                                </div>

                                            </div>

                                            {/* Action Buttons */}

                                            <div className="flex gap-3">

                                                <button
                                                    className="w-11 h-11 rounded-xl
                  bg-cyan-500/10 border border-cyan-500/30
                  text-cyan-400
                  hover:bg-cyan-500
                  hover:text-black
                  transition"
                                                >
                                                    <Bell size={18} className="mx-auto" />
                                                </button>

                                                <button
                                                    className="w-11 h-11 rounded-xl
                  bg-red-500/10 border border-red-500/30
                  text-red-400
                  hover:bg-red-500
                  hover:text-white
                  transition"
                                                >
                                                    <Trash2 size={18} className="mx-auto" />
                                                </button>

                                            </div>

                                        </div>

                                    );
                                })}

                            </div>

                        </div>

                    </div>

                </div>

            </main>

        </div>
    );
}