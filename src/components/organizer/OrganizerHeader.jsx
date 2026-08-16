import {
    Bell,
    Search,
    UserCircle
} from "lucide-react";
import { useEffect, useState } from "react";
import axiosInstance from "../services/axiosInstance";

export default function OrganizerHeader() {
    const [organizerData,setOrganizerData] = useState({})
      useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem("user"))
        console.log("data : ",data)
        setOrganizerData(data)
      },[])

    return (

        <header className="sticky top-0 bg-slate-950/90 backdrop-blur-lg border-b border-white/10 p-6 flex justify-between items-center z-50">

            <div>

                <h1 className="text-3xl font-bold text-white">

                    Dashboard

                </h1>

                <p className="text-slate-400">

                    Welcome back, {organizerData.username} 👋

                </p>

            </div>

            <div className="flex items-center gap-5">

                {/* <div className="relative">

                    <Search
                        className="absolute left-4 top-3 text-slate-400"
                        size={18}
                    />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-white/5 border border-white/10 rounded-xl
                        pl-12 pr-4 py-3 text-white outline-none
                        focus:border-cyan-400"
                    />

                </div> */}

                <button className="w-48 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white">

                    {/* <Bell className="text-yellow-400" /> */}
                    Notifications

                </button>

                <img
          src= {organizerData?.profileImage != "" ? `${axiosInstance.defaults.baseURL}/uploads/${organizerData?.profileImage}` : "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-cyan-400 object-cover"
        />

            </div>

        </header>

    );

}