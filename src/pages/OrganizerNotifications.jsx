import {
    Bell,
    CalendarDays,
    Users,
    IndianRupee,
    CircleCheck,
    Clock3,
    Trash2,
    CheckCircle,
    XCircle,
    Calendar,
} from "lucide-react";
import OrganizerSidebar from "../components/organizer/OrganizerSidebar";
import OrganizerHeader from "../components/organizer/OrganizerHeader";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { getOrganizerNotifAPI } from "../components/services/allAPIs";
import Ticket from "./Ticket";

// const notifications = [
//     {
//         id: 1,
//         type: "registration",
//         title: "New Registration",
//         message: "John Anderson registered for Tech Summit 2026.",
//         time: "5 mins ago",
//         read: false,
//     },
//     {
//         id: 2,
//         type: "payment",
//         title: "Payment Received",
//         message: "₹2,500 payment received from Sarah Williams.",
//         time: "20 mins ago",
//         read: false,
//     },
//     {
//         id: 3,
//         type: "event",
//         title: "Event Reminder",
//         message: "Tech Summit 2026 starts tomorrow at 9:00 AM.",
//         time: "2 hours ago",
//         read: true,
//     },
//     {
//         id: 4,
//         type: "approval",
//         title: "Event Approved",
//         message: "Your Startup Expo event has been approved.",
//         time: "Yesterday",
//         read: true,
//     },
//     {
//         id: 5,
//         type: "registration",
//         title: "New Registration",
//         message: "25 new participants joined AI Conference.",
//         time: "Yesterday",
//         read: true,
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

export default function OrganizerNotifications() {
    const [notifications, setNotifications] = useState([])
    const [userData, setUserData] = useState({})
    console.log(userData._id);

    const getNotifs = async () => {
        try {
            const result = await getOrganizerNotifAPI(userData._id)
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

    );
}