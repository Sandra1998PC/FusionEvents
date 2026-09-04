import {
  Mail,
  Phone,
  Lock,
  User
} from "lucide-react";

import profile from "../../assets/ProfileImg.avif";
import axiosInstance from "../services/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProfileCard() {
  const navigate = useNavigate()
  const [profileData,setprofileData] = useState({})
        useEffect(() => {
          const data = JSON.parse(sessionStorage.getItem("user"))
          console.log("data : ",data)
          setprofileData(data)
        },[])
  return (

    <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 h-fit">

      <div className="flex flex-col items-center">

        <img
          src= {profileData?.profileImage != "" ? `${axiosInstance.defaults.baseURL}/uploads/${profileData?.profileImage}` : "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"}
          alt="Profile"
          className="w-36 h-36 rounded-full border-4 border-cyan-400 object-cover"
        />

        <h2 className="text-white text-2xl font-bold mt-5">
          {profileData.username}
        </h2>

        <p className="text-cyan-400">
          Event Enthusiast
        </p>

      </div>

      <div className="mt-8 space-y-5">

        {/* <div className="flex items-center gap-3">

          <User className="text-cyan-400"/>

        </div> */}

        <div className="flex items-center gap-3">

          <Mail className="text-cyan-400"/>

          <div>

            <p className="text-slate-400 text-sm">
              Email
            </p>

            <p className="text-white">
              {profileData.email}
            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <Phone className="text-cyan-400"/>

          <div>

            <p className="text-slate-400 text-sm">
              Phone
            </p>

            <p className="text-white">
              +91 {profileData.phonenumber}
            </p>

          </div>

        </div>

      </div>

      <button className="mt-8 w-full py-3 rounded-xl bg-cyan-400 text-slate-900
       font-semibold hover:bg-cyan-300 transition" onClick={() => navigate(`/users/editprofile`)}>

        Edit Profile

      </button>

    </div>

  );

}