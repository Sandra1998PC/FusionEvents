import React from 'react'
import {
  LayoutDashboard,
  CalendarDays,
  Ticket,
  Bookmark,
  Bell,
  User,
  LogOut,
  Users,
  Users2,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin/:id/dashboard",
  },
  {
    name: "Manage User",
    icon: Users,
    path: "/admin/:id/usermanagement",
  },
  {
    name: "Manage Events",
    icon: Users2,
    path: "/admin/:id/eventmanagement",
  },
  {
    name: "Notifications",
    icon: Bell,
    path: "/admin/:id/notifications",
  },
  {
    name: "Profile",
    icon: User,
    path: "/admin/:id/profile",
  },
];

function AdminSidebar() {
    const navigate = useNavigate()
  return (
     <aside className="fixed left-0 top-0 h-screen w-72 bg-slate-900 border-r border-white/10">

            <div className="p-8">

                <h1 className="text-3xl font-bold text-cyan-400">

                    Fusion Events

                </h1>

                <p className="text-slate-400 mt-2">

                    Admin Panel

                </p>

            </div>

            <nav className="px-4 mt-8">

                {

                    menuItems.map((menu, index) => {

                        const Icon = menu.icon;

                        return (

                            <button
                                key={index}
                                onClick={() => navigate(menu.path)}
                                className="w-full flex items-center gap-4 px-5 py-4 rounded-xl mb-3
                                text-slate-300 hover:bg-cyan-400 hover:text-slate-900 transition"
                                >

                                <Icon size={22} />

                                {menu.name}

                            </button>

                        );

                    })

                }

            </nav>

        </aside>
  )
}

export default AdminSidebar
