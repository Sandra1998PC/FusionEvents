import React, { useEffect, useState } from 'react'
import {
    Bell,
    Search,
    UserCircle
} from "lucide-react";
import axiosInstance from '../services/axiosInstance';

function AdminHeader() {
    const [adminData,setAdminData] = useState({})
          useEffect(() => {
            const data = JSON.parse(sessionStorage.getItem("user"))
            console.log("data : ",data)
            setAdminData(data)
          },[])
    return (
        <header className="sticky top-0 bg-slate-950/90 backdrop-blur-lg border-b border-white/10 p-6 flex justify-between items-center z-50">

            <div className="mb-10">
                <h1 className="text-4xl font-bold text-slate-400">
                    Admin Dashboard
                </h1>

                <p className="text-slate-400 mt-2">
                    Monitor users, organizers, events, revenue, and overall platform performance.
                </p>
            </div>

            <div className="flex items-center gap-5">

                <button className="w-48 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white">

                    {/* <Bell className="text-yellow-400" /> */}
                    Notifications

                </button>

                {/* <UserCircle
                    className="text-cyan-400"
                    size={40}
                /> */}

            </div>

            <button className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-3 py-2 hover:border-violet-500 hover:shadow-[0_0_20px_rgba(124,58,237,.35)] transition">

            <img
              src= {adminData?.profileImage != "" ? `${axiosInstance.defaults.baseURL}/uploads/${adminData?.profileImage}` : "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"}
              // src = "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
              alt="Profile"
              className="w-11 h-11 rounded-full border-2 border-cyan-400 object-cover"
            />

            <div className="hidden md:block text-left">

              <h4 className="text-white font-semibold">
                {adminData.username}
              </h4>

              <p className="text-slate-400 text-sm">
                {adminData.role}
              </p>

            </div>

            {/* <ChevronDown
              size={18}
              className="text-slate-400"
            /> */}

          </button>

        </header>
    )
}

export default AdminHeader
