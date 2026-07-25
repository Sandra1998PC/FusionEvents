import {
    Bell,
    CalendarDays,
    Users,
    IndianRupee,
    CircleCheck,
    Clock3,
    Trash2,
} from "lucide-react";
import OrganizerSidebar from "../components/organizer/OrganizerSidebar";
import OrganizerHeader from "../components/organizer/OrganizerHeader";

const notifications = [
    {
        id: 1,
        type: "registration",
        title: "New Registration",
        message: "John Anderson registered for Tech Summit 2026.",
        time: "5 mins ago",
        read: false,
    },
    {
        id: 2,
        type: "payment",
        title: "Payment Received",
        message: "₹2,500 payment received from Sarah Williams.",
        time: "20 mins ago",
        read: false,
    },
    {
        id: 3,
        type: "event",
        title: "Event Reminder",
        message: "Tech Summit 2026 starts tomorrow at 9:00 AM.",
        time: "2 hours ago",
        read: true,
    },
    {
        id: 4,
        type: "approval",
        title: "Event Approved",
        message: "Your Startup Expo event has been approved.",
        time: "Yesterday",
        read: true,
    },
    {
        id: 5,
        type: "registration",
        title: "New Registration",
        message: "25 new participants joined AI Conference.",
        time: "Yesterday",
        read: true,
    },
];

const iconStyle = {
    registration: {
        icon: Users,
        bg: "bg-cyan-500/10",
        color: "text-cyan-400",
    },
    payment: {
        icon: IndianRupee,
        bg: "bg-green-500/10",
        color: "text-green-400",
    },
    event: {
        icon: CalendarDays,
        bg: "bg-purple-500/10",
        color: "text-purple-400",
    },
    approval: {
        icon: CircleCheck,
        bg: "bg-emerald-500/10",
        color: "text-emerald-400",
    },
};

export default function OrganizerNotifications() {
    return (
        <div className="flex bg-slate-950 min-h-screen">

            <OrganizerSidebar />

            <main className="flex-1 lg:ml-72">

                <OrganizerHeader />

                <div className="p-8">

                    <div className="min-h-screen bg-[#020617] text-white p-8">

                        {/* Header */}

                        <div className="flex justify-between items-center mb-8">

                            <div>
                                <h1 className="text-4xl font-bold">
                                    Notifications
                                </h1>

                                <p className="text-slate-400 mt-2">
                                    Stay updated with your events and registrations.
                                </p>
                            </div>

                            <button className="px-5 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition">
                                Mark All as Read
                            </button>

                        </div>

                        {/* Notification List */}

                        <div className="space-y-5">

                            {notifications.map((item) => {
                                const Icon = iconStyle[item.type].icon;

                                return (
                                    <div
                                        key={item.id}
                                        className={`relative flex items-start gap-5 p-6 rounded-3xl border transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,.25)]
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
                                            className={`w-16 h-16 rounded-2xl flex items-center justify-center ${iconStyle[item.type].bg}`}
                                        >
                                            <Icon
                                                size={28}
                                                className={iconStyle[item.type].color}
                                            />
                                        </div>

                                        {/* Content */}

                                        <div className="flex-1">

                                            <h2 className="text-xl font-semibold">
                                                {item.title}
                                            </h2>

                                            <p className="text-slate-400 mt-2">
                                                {item.message}
                                            </p>

                                            <div className="flex items-center gap-2 mt-4 text-sm text-slate-500">

                                                <Clock3 size={15} />

                                                {item.time}

                                            </div>

                                        </div>

                                        {/* Actions */}

                                        <div className="flex gap-3">

                                            <button className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black transition">
                                                <Bell size={18} className="mx-auto" />
                                            </button>

                                            <button className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white transition">
                                                <Trash2 size={18} className="mx-auto" />
                                            </button>

                                        </div>

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                </div>

            </main>

        </div>

    );
}