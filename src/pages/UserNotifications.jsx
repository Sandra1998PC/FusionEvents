import React from 'react'
import {
    Bell,
    Calendar,
    CheckCircle,
    Ticket,
    XCircle,
} from "lucide-react";
import TopBar from '../components/users/TopBar';
import Sidebar from '../components/users/Sidebar';

const notifications = [
    {
        id: 1,
        title: "Registration Successful",
        message: "You have registered for Tech Summit 2026.",
        time: "5 minutes ago",
        icon: CheckCircle,
        color: "text-green-400",
        bg: "bg-green-500/10",
    },
    {
        id: 2,
        title: "Ticket Downloaded",
        message: "Your event ticket has been downloaded.",
        time: "1 hour ago",
        icon: Ticket,
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
    },
    {
        id: 3,
        title: "Event Reminder",
        message: "Tech Summit 2026 starts tomorrow at 9:00 AM.",
        time: "Yesterday",
        icon: Bell,
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
    },
    {
        id: 4,
        title: "Registration Cancelled",
        message: "Your registration has been cancelled successfully.",
        time: "2 days ago",
        icon: XCircle,
        color: "text-red-400",
        bg: "bg-red-500/10",
    },
    {
        id: 5,
        title: "Schedule Updated",
        message: "Workshop timing has been updated.",
        time: "3 days ago",
        icon: Calendar,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
    },
];


function UserNotifications() {
    return (
        <div className="flex bg-slate-950">

            <Sidebar />

            <div className="flex-1">

                <TopBar />

                <main className="p-8">

                    <div className="min-h-screen bg-slate-950 px-6 py-10">
                        <div className="max-w-5xl mx-auto">

                            {/* Header */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                                        <Bell className="text-cyan-400" size={28} />
                                    </div>

                                    <div>
                                        <h1 className="text-3xl font-bold text-white">
                                            Notifications
                                        </h1>
                                        <p className="text-slate-400">
                                            Stay updated with your recent activities
                                        </p>
                                    </div>
                                </div>

                                <button className="px-5 py-2 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition">
                                    Mark All Read
                                </button>
                            </div>

                            {/* Notifications */}
                            <div className="space-y-5">
                                {notifications.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.id}
                                            className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,.2)] transition"
                                        >
                                            <div className="flex items-start gap-4">

                                                <div
                                                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg}`}
                                                >
                                                    <Icon size={22} className={item.color} />
                                                </div>

                                                <div className="flex-1">
                                                    <div className="flex justify-between items-center">
                                                        <h3 className="text-white font-semibold text-lg">
                                                            {item.title}
                                                        </h3>

                                                        <span className="text-sm text-slate-500">
                                                            {item.time}
                                                        </span>
                                                    </div>

                                                    <p className="text-slate-400 mt-2">
                                                        {item.message}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>

                </main>

            </div>

        </div>

    )
}

export default UserNotifications
