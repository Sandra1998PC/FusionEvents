import {
  LayoutDashboard,
  CalendarDays,
  Ticket,
  Bookmark,
  Bell,
  User,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/users/id/dashboard",
  },
  {
    name: "My Events",
    icon: CalendarDays,
    path: "/users/events",
  },
  {
    name: "Tickets",
    icon: Ticket,
    path: "/users/tickets",
  },
  // {
  //   name: "Bookmarks",
  //   icon: Bookmark,
  //   path: "/dashboard/bookmarks",
  // },
  {
    name: "Notifications",
    icon: Bell,
    path: "/users/notifications",
  },
  {
    name: "Profile",
    icon: User,
    path: "/users/editprofile",
  },
];

const Sidebar = () => {
  const navigate = useNavigate()

  const logOut = () => {
    sessionStorage.clear()
    navigate("/login")
  }
  return (
    <aside className="w-72 h-screen sticky top-0 bg-slate-950/90 backdrop-blur-xl border-r border-cyan-500/20 flex flex-col">

      {/* Logo */}

      <div className="h-20 flex items-center justify-center border-b border-white/10">

        <h1 className="text-3xl font-bold">

          <span className="text-cyan-400">
            Fusion
          </span>

          <span className="text-violet-500">
            Events
          </span>

        </h1>

      </div>

      {/* Menu */}

      <div className="flex-1 py-8 px-5">

        <nav className="space-y-3">

          {menuItems.map((item) => {

            const Icon = item.icon;

            return (

              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300
                  ${isActive
                    ? "bg-cyan-400/10 border border-cyan-400 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,.35)]"
                    : "text-slate-300 hover:bg-white/5 hover:border hover:border-violet-500/40 hover:text-white hover:shadow-[0_0_25px_rgba(124,58,237,.25)]"
                  }`
                }
              >

                <Icon
                  size={22}
                  className="group-hover:scale-110 transition"
                />

                <span className="font-medium">
                  {item.name}
                </span>

              </NavLink>

            );

          })}

        </nav>

      </div>

      {/* Logout */}

      <div className="p-5 border-t border-white/10">

        <button className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl border border-red-500/40 
        text-red-400 hover:bg-red-500 hover:text-white transition duration-300"
        onClick={logOut}>

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
};

export default Sidebar;