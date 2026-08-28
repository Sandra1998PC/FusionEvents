import React, { useEffect, useState } from 'react'
import {
    Bell,
    Calendar,
    CheckCircle,
    IndianRupee,
    Ticket,
    Users,
    XCircle,
} from "lucide-react";
import TopBar from '../components/users/TopBar';
import Sidebar from '../components/users/Sidebar';
import Swal from 'sweetalert2';
import { getUserNotifAPI } from '../components/services/allAPIs';

// const notifications = [
//     {
//         id: 1,
//         title: "Registration Successful",
//         message: "You have registered for Tech Summit 2026.",
//         time: "5 minutes ago",
//         icon: CheckCircle,
//         color: "text-green-400",
//         bg: "bg-green-500/10",
//     },
//     {
//         id: 2,
//         title: "Ticket Downloaded",
//         message: "Your event ticket has been downloaded.",
//         time: "1 hour ago",
//         icon: Ticket,
//         color: "text-cyan-400",
//         bg: "bg-cyan-500/10",
//     },
//     {
//         id: 3,
//         title: "Event Reminder",
//         message: "Tech Summit 2026 starts tomorrow at 9:00 AM.",
//         time: "Yesterday",
//         icon: Bell,
//         color: "text-yellow-400",
//         bg: "bg-yellow-500/10",
//     },
//     {
//         id: 4,
//         title: "Registration Cancelled",
//         message: "Your registration has been cancelled successfully.",
//         time: "2 days ago",
//         icon: XCircle,
//         color: "text-red-400",
//         bg: "bg-red-500/10",
//     },
//     {
//         id: 5,
//         title: "Schedule Updated",
//         message: "Workshop timing has been updated.",
//         time: "3 days ago",
//         icon: Calendar,
//         color: "text-purple-400",
//         bg: "bg-purple-500/10",
//     },
// ];

const icons = [
    {
        type: "success",
        icon: CheckCircle,
        color: "text-green-400",
        bg: "bg-green-500/10",
    },
    {
        type: "ticket",
        icon: Ticket,
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
    },
    {
        type: "notif",
        icon: Bell,
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
    },
    {
        type: "cancel",
        icon: XCircle,
        color: "text-red-400",
        bg: "bg-red-500/10",
    },
    {
        type: "calender",
        icon: Calendar,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
    },
    {
        type: "payment",
        icon: IndianRupee,
        bg: "bg-green-500/10",
        color: "text-green-400",
    },
    {
        type: "registration",
        icon: Users,
        bg: "bg-cyan-500/10",
        color: "text-cyan-400",
    }
]


function UserNotifications() {
    const [notifications, setNotifications] = useState([])
    const [userData, setUserData] = useState({})
    console.log(userData._id);

    const getNotifs = async () => {
        debugger
        try {
            const result = await getUserNotifAPI(userData._id)
            console.log(result)
            if (result.status == 200) {
                const data = result.data
                console.log(`Notif Data : `, data)
                setNotifications(data)
            }
            else {
                Swal.fire({
                    title: "Something went Wrong !!!",
                    icon: "error"
                });
            }
        }
        catch (error) {
            console.log(error)
            Swal.fire({
                title: "Something went Wrong !!!",
                icon: "error"
            });
        }
    }
    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem("user"))
        console.log("data : ", data)
        setUserData(data)
    }, [])
    useEffect(() => {
        if (userData?._id) {
            getNotifs();
        }
    }, [userData]);
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
                                {notifications?.map((item) => {

                                    const iconData = icons.find(
                                        ele => ele.type === item.type
                                    );

                                    const Icon = iconData?.icon;

                                    return (
                                        <div
                                            key={item._id}
                                            className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,.2)] transition"
                                        >

                                            <div className="flex items-start gap-4">

                                                <div
                                                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconData?.bg}`}
                                                >
                                                    {Icon && (
                                                        <Icon
                                                            size={22}
                                                            className={iconData?.color}
                                                        />
                                                    )}
                                                </div>

                                                <div className="flex-1">

                                                    <div className="flex justify-between items-center">

                                                        <h3 className="text-white font-semibold text-lg">
                                                            {item.userTitle}
                                                        </h3>

                                                    </div>

                                                    <p className="text-slate-400 mt-2">
                                                        {item.Message}
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
