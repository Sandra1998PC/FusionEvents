import {
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";
import { BsBellFill } from "react-icons/bs";
import profile from "../../assets/ProfileImg.avif";
import { useEffect, useState } from "react";
import axiosInstance from "../services/axiosInstance";

const TopBar = () => {
  const [participantData,setParticipantData] = useState({})
  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("user"))
    console.log("data : ",data)
    setParticipantData(data)
  },[])
  return (
    <header className="sticky top-0 z-40 h-20 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20">

      <div className="h-full flex items-center justify-between px-8">

        {/* Search */}

        <div className="relative w-full max-w-lg">

          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400"
          />

          <input
            type="text"
            placeholder="Search events..."
            className="w-full pl-14 pr-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 hover:border-cyan-400/40"
          />

        </div>
     
        {/* Right Side */}

        <div className="flex items-center gap-6">

          {/* Notification */}

          <button className="relative z-20 w-36 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,.35)] transition">

            {/* <Bell size={22} className="text-yellow-500 w-5 h-5"/> */}
            {/* < BsBellFill className="text-yellow-500 w-25 h-10" /> */}
            Notification
           
            {/* Notification Badge */}

            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-semibold">

              3

            </span>

          </button>

          {/* Profile */}

          <button className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-3 py-2 hover:border-violet-500 hover:shadow-[0_0_20px_rgba(124,58,237,.35)] transition">

            <img
              src= {participantData?.profileImage != "" ? `${axiosInstance.defaults.baseURL}/uploads/${participantData?.profileImage}` : "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"}
              // src = "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
              alt="Profile"
              className="w-11 h-11 rounded-full border-2 border-cyan-400 object-cover"
            />

            <div className="hidden md:block text-left">

              <h4 className="text-white font-semibold">
                {participantData.username}
              </h4>

              <p className="text-slate-400 text-sm">
                Participant
              </p>

            </div>

            {/* <ChevronDown
              size={18}
              className="text-slate-400"
            /> */}

          </button>

        </div>

      </div>

    </header>
  );
};

export default TopBar;