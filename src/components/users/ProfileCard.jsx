import {
  Mail,
  Phone,
  Lock,
  User
} from "lucide-react";

import profile from "../../assets/ProfileImg.avif";

export default function ProfileCard() {

  return (

    <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 h-fit">

      <div className="flex flex-col items-center">

        <img
          src={profile}
          alt="Profile"
          className="w-36 h-36 rounded-full border-4 border-cyan-400 object-cover"
        />

        <h2 className="text-white text-2xl font-bold mt-5">
          Sandra P C
        </h2>

        <p className="text-cyan-400">
          Event Enthusiast
        </p>

      </div>

      <div className="mt-8 space-y-5">

        <div className="flex items-center gap-3">

          <User className="text-cyan-400"/>

          <div>

            <p className="text-slate-400 text-sm">
              Personal Information
            </p>

            <p className="text-white">
              Software Developer
            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <Mail className="text-cyan-400"/>

          <div>

            <p className="text-slate-400 text-sm">
              Email
            </p>

            <p className="text-white">
              sandra@example.com
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
              +91 9876543210
            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <Lock className="text-cyan-400"/>

          <div>

            <p className="text-slate-400 text-sm">
              Password
            </p>

            <p className="text-white">
              ••••••••••
            </p>

          </div>

        </div>

      </div>

      <button className="mt-8 w-full py-3 rounded-xl bg-cyan-400 text-slate-900 font-semibold hover:bg-cyan-300 transition">

        Edit Profile

      </button>

    </div>

  );

}