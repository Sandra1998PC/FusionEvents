import {
    LayoutDashboard,
    CalendarPlus,
    CalendarDays,
    Users,
    IndianRupee,
    FileBarChart2,
    Settings,
    Bell,
    User,
    LogOut
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const menus = [

    {
        title: "Dashboard",
        icon: LayoutDashboard,
        path: "/organizer/:id/dashboard"
    },

    {
        title: "Create Event",
        icon: CalendarPlus,
        path: "/organizer/:id/createevent"
    },

    {
        title: "Manage Events",
        icon: CalendarDays,
        path: "/organizer/:id/manageevents"
    },

    // {
    //     title: "Participants",
    //     icon: Users,
    //     path: "/organizer/:id/dashboard"
    // },

    // {
    //     title: "Revenue",
    //     icon: IndianRupee,
    //     path: "/organizer/:id/dashboard"
    // },

    // {
    //     title: "Reports",
    //     icon: FileBarChart2,
    //     path: "/organizer/:id/dashboard"
    // },

    // {
    //     title: "Settings",
    //     icon: Settings,
    //     path: "/organizer/:id/dashboard"
    // },
    {
        title: "Notifications",
        icon: Bell,
        path: "/organizer/:id/notifications"
    },
    {
        title: "Profile",
        icon: User,
        path: "/organizer/:id/profile"
    }

];

export default function OrganizerSidebar() {

    const navigate = useNavigate()

    return (

        <aside className="fixed left-0 top-0 h-screen w-72 bg-slate-900 border-r border-white/10">

            <div className="p-8">

                <h1 className="text-3xl font-bold">

                    <span className="text-cyan-400">
                        Fusion
                    </span>

                    <span className="text-violet-500">
                        Events
                    </span>

                </h1>

                <p className="text-slate-400 mt-2">

                    Organizer Panel

                </p>

            </div>

            <nav className="px-4 mt-8">

                {

                    menus.map((menu, index) => {

                        const Icon = menu.icon;

                        return (

                            <button
                                key={index}
                                onClick={() => navigate(menu.path)}
                                className="w-full flex items-center gap-4 px-5 py-4 rounded-xl mb-3
                                text-slate-300 hover:bg-cyan-400 hover:text-slate-900 transition"
                            >

                                <Icon size={22} />

                                {menu.title}

                            </button>

                        );

                    })

                }

            </nav>

            {/* Logout */}

            <div className="p-5 border-t border-white/10  absolute bottom-0 left-10">

                <button className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl border border-red-500/40 text-red-400 hover:bg-red-500 hover:text-white transition duration-300">

                    <LogOut size={20} />

                    Logout

                </button>

            </div>

        </aside>

    );

}