import { useState } from "react";
import {
    User,
    Mail,
    Phone,
    MapPin,
    Camera,
    Save,
    ShieldCheck,
} from "lucide-react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

export default function AdminProfile() {
    const [profile, setProfile] = useState({
        fullName: "Admin User",
        email: "admin@fusionevents.com",
        phone: "+91 9876543210",
        location: "Kochi, Kerala",
        role: "Admin",
    });

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="flex bg-slate-950 min-h-screen">

            <AdminSidebar />

            <main className="flex-1 lg:ml-72">

                <AdminHeader />

                <div className="p-8">

                    <div className="min-h-screen bg-[#020617] text-white p-8">

                        <div className="min-h-screen bg-[#020617] text-white p-8">

                            {/* Header */}

                            <div className="mb-8">
                                <h1 className="text-4xl font-bold">
                                    Admin Profile
                                </h1>

                                <p className="text-slate-400 mt-2">
                                    Manage your administrator account settings.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-3 gap-8">

                                {/* Left Card */}

                                <div className="bg-slate-900/70 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8">

                                    <div className="flex flex-col items-center">

                                        <div className="relative">

                                            <img
                                                src="https://i.pravatar.cc/300"
                                                alt="Admin"
                                                className="w-36 h-36 rounded-full object-cover border-4 border-cyan-500"
                                            />

                                            <div
                                                className="absolute bottom-2 right-2
                w-10 h-10 rounded-full
                bg-cyan-500 text-slate-950
                flex items-center justify-center"
                                            >
                                                <Camera size={24}className="text-white" />
                                            </div>

                                        </div>

                                        <h2 className="text-2xl font-bold mt-5">
                                            {profile.fullName}
                                        </h2>

                                        <p className="text-cyan-400 mt-1">
                                            {profile.role}
                                        </p>

                                        <div
                                            className="mt-6 px-4 py-2 rounded-full
              bg-green-500/10 border border-green-500/30
              text-green-400 flex items-center gap-2"
                                        >
                                            <ShieldCheck size={18} />
                                            Verified Admin
                                        </div>

                                    </div>
                                </div>

                                {/* Right Section */}

                                <div className="lg:col-span-2 bg-slate-900/70 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8">

                                    <h2 className="text-2xl font-semibold mb-8">
                                        Personal Information
                                    </h2>

                                    <div className="grid md:grid-cols-2 gap-6">

                                        {/* Full Name */}

                                        <div>
                                            <label className="block mb-2 text-slate-300">
                                                Full Name
                                            </label>

                                            <div className="relative">

                                                <User
                                                    size={18}
                                                    className="absolute left-4 top-4 text-cyan-400"
                                                />

                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    value={profile.fullName}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-800 border border-slate-700
                  rounded-xl pl-12 pr-4 py-3
                  focus:border-cyan-400 outline-none"
                                                />

                                            </div>
                                        </div>

                                        {/* Email */}

                                        <div>
                                            <label className="block mb-2 text-slate-300">
                                                Email
                                            </label>

                                            <div className="relative">

                                                <Mail
                                                    size={18}
                                                    className="absolute left-4 top-4 text-cyan-400"
                                                />

                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={profile.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-800 border border-slate-700
                  rounded-xl pl-12 pr-4 py-3
                  focus:border-cyan-400 outline-none"
                                                />

                                            </div>
                                        </div>

                                        {/* Phone */}

                                        <div>
                                            <label className="block mb-2 text-slate-300">
                                                Phone
                                            </label>

                                            <div className="relative">

                                                <Phone
                                                    size={18}
                                                    className="absolute left-4 top-4 text-cyan-400"
                                                />

                                                <input
                                                    type="text"
                                                    name="phone"
                                                    value={profile.phone}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-800 border border-slate-700
                  rounded-xl pl-12 pr-4 py-3
                  focus:border-cyan-400 outline-none"
                                                />

                                            </div>
                                        </div>

                                        {/* Location */}

                                        <div>
                                            <label className="block mb-2 text-slate-300">
                                                Location
                                            </label>

                                            <div className="relative">

                                                <MapPin
                                                    size={18}
                                                    className="absolute left-4 top-4 text-cyan-400"
                                                />

                                                <input
                                                    type="text"
                                                    name="location"
                                                    value={profile.location}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-800 border border-slate-700
                  rounded-xl pl-12 pr-4 py-3
                  focus:border-cyan-400 outline-none"
                                                />

                                            </div>
                                        </div>

                                        {/* Role */}

                                        <div className="md:col-span-2">
                                            <label className="block mb-2 text-slate-300">
                                                Role
                                            </label>

                                            <input
                                                type="text"
                                                value={profile.role}
                                                disabled
                                                className="w-full bg-slate-800 border border-slate-700
                rounded-xl px-4 py-3 text-slate-400 cursor-not-allowed"
                                            />
                                        </div>

                                    </div>

                                    {/* Buttons */}

                                    <div className="flex justify-end mt-10">

                                        <button
                                            className="flex items-center gap-2
              px-8 py-3 rounded-xl
              bg-cyan-500 text-slate-950
              font-semibold
              hover:bg-cyan-400
              transition
              shadow-[0_0_20px_rgba(34,211,238,.4)]"
                                        >
                                            <Save size={18} />
                                            Save Changes
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </main>

        </div>
    );
}