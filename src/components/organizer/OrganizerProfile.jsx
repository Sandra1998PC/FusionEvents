import { useState } from "react";
import {
    Camera,
    Mail,
    Phone,
    MapPin,
    Building2,
    Globe,
    //   Facebook,
    //   Instagram,
    //   Linkedin,
    CalendarDays,
    Users,
    IndianRupee,
    Save,
    Lock,
    ShieldCheck,
} from "lucide-react";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import OrganizerSidebar from "./OrganizerSidebar";
import OrganizerHeader from "./OrganizerHeader";

export default function OrganizerProfile() {
    const [profile, setProfile] = useState({
        name: "John Anderson",
        email: "john@fusionevents.com",
        phone: "+91 9876543210",
        organization: "Fusion Events Pvt Ltd",
        location: "Bangalore, India",
        website: "www.fusionevents.com",
        bio: "Professional event organizer with experience in technology, business, and entertainment events.",
        facebook: "",
        instagram: "",
        linkedin: "",
    });

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="flex bg-slate-950 min-h-screen">

            <OrganizerSidebar />

            <main className="flex-1 lg:ml-72">

                <OrganizerHeader />

                <div className="p-8">

                    <div className="min-h-screen bg-[#020617] text-white p-8">

                        {/* Header */}

                        <div className="mb-8">
                            <h1 className="text-4xl font-bold">
                                Organizer Profile
                            </h1>

                            <p className="text-slate-400 mt-2">
                                Manage your personal information and organization details.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">

                            {/* Left Card */}

                            <div className="bg-slate-900/70 border border-cyan-500/20 rounded-3xl p-8 backdrop-blur-xl">

                                <div className="flex flex-col items-center">

                                    <div className="relative">

                                        <img
                                            src="https://i.pravatar.cc/200"
                                            alt="Profile"
                                            className="w-36 h-36 rounded-full border-4 border-cyan-400 object-cover"
                                        />

                                        <button
                                            className="absolute bottom-2 right-2
                w-10 h-10 rounded-full
                bg-cyan-500
                text-black
                flex items-center justify-center
                hover:scale-110 transition"
                                        >
                                            <Camera size={18} />
                                        </button>

                                    </div>

                                    <h2 className="text-2xl font-bold mt-5">
                                        {profile.name}
                                    </h2>

                                    <p className="text-cyan-400">
                                        Event Organizer
                                    </p>

                                </div>

                                {/* Statistics */}

                                <div className="grid grid-cols-3 gap-4 mt-10">

                                    <div className="bg-slate-800 rounded-2xl p-4 text-center">

                                        <CalendarDays className="mx-auto text-cyan-400" />

                                        <h3 className="text-2xl font-bold mt-2">
                                            28
                                        </h3>

                                        <p className="text-xs text-slate-400">
                                            Events
                                        </p>

                                    </div>

                                    <div className="bg-slate-800 rounded-2xl p-4 text-center">

                                        <Users className="mx-auto text-cyan-400" />

                                        <h3 className="text-2xl font-bold mt-2">
                                            2450
                                        </h3>

                                        <p className="text-xs text-slate-400">
                                            Participants
                                        </p>

                                    </div>

                                    <div className="bg-slate-800 rounded-2xl p-4 text-center">

                                        <IndianRupee className="mx-auto text-cyan-400" />

                                        <h3 className="text-2xl font-bold mt-2">
                                            3.4L
                                        </h3>

                                        <p className="text-xs text-slate-400">
                                            Revenue
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* Right Section */}

                            <div className="lg:col-span-2 space-y-8">

                                {/* Personal Details */}

                                <div className="bg-slate-900/70 border border-cyan-500/20 rounded-3xl p-8">

                                    <h2 className="text-2xl font-bold mb-6">
                                        Personal Information
                                    </h2>

                                    <div className="grid md:grid-cols-2 gap-6">

                                        <Input
                                            icon={<Mail size={18} />}
                                            label="Email"
                                            name="email"
                                            value={profile.email}
                                            onChange={handleChange}
                                        />

                                        <Input
                                            icon={<Phone size={18} />}
                                            label="Phone"
                                            name="phone"
                                            value={profile.phone}
                                            onChange={handleChange}
                                        />

                                        <Input
                                            icon={<Building2 size={18} />}
                                            label="Organization"
                                            name="organization"
                                            value={profile.organization}
                                            onChange={handleChange}
                                        />

                                        <Input
                                            icon={<MapPin size={18} />}
                                            label="Location"
                                            name="location"
                                            value={profile.location}
                                            onChange={handleChange}
                                        />

                                        <div className="md:col-span-2">

                                            <Input
                                                icon={<Globe size={18} />}
                                                label="Website"
                                                name="website"
                                                value={profile.website}
                                                onChange={handleChange}
                                            />

                                        </div>

                                    </div>

                                    {/* Bio */}

                                    <div className="mt-6">

                                        <label className="block mb-2 font-medium">
                                            Bio
                                        </label>

                                        <textarea
                                            rows="4"
                                            name="bio"
                                            value={profile.bio}
                                            onChange={handleChange}
                                            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400"
                                        />

                                    </div>

                                </div>

                                {/* Social Links */}

                                <div className="bg-slate-900/70 border border-cyan-500/20 rounded-3xl p-8">

                                    <h2 className="text-2xl font-bold mb-6">
                                        Social Links
                                    </h2>

                                    <div className="space-y-5">

                                        <Input
                                            icon={<FaFacebookSquare size={18} />}
                                            label="Facebook"
                                            name="facebook"
                                            value={profile.facebook}
                                            onChange={handleChange}
                                        />

                                        <Input
                                            icon={<FaSquareInstagram size={18} />}
                                            label="Instagram"
                                            name="instagram"
                                            value={profile.instagram}
                                            onChange={handleChange}
                                        />

                                        <Input
                                            icon={<FaLinkedin size={18} />}
                                            label="LinkedIn"
                                            name="linkedin"
                                            value={profile.linkedin}
                                            onChange={handleChange}
                                        />

                                    </div>

                                </div>

                                {/* Settings */}

                                <div className="bg-slate-900/70 border border-cyan-500/20 rounded-3xl p-8 flex flex-wrap gap-4 justify-between items-center">

                                    <div className="flex gap-4">

                                        <button className="flex items-center gap-2 px-5 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition">
                                            <Lock size={18} />
                                            Change Password
                                        </button>

                                        <button className="flex items-center gap-2 px-5 py-3 rounded-xl border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition">
                                            <ShieldCheck size={18} />
                                            Two-Factor Auth
                                        </button>

                                    </div>

                                    <button className="flex items-center gap-2 px-8 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition shadow-[0_0_20px_rgba(34,211,238,.4)]">

                                        <Save size={18} />

                                        Save Changes

                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </main>

        </div>

    );
}

function Input({ icon, label, ...props }) {
    return (
        <div>
            <label className="block mb-2 font-medium">
                {label}
            </label>

            <div className="relative">

                <span className="absolute left-4 top-4 text-cyan-400">
                    {icon}
                </span>

                <input
                    {...props}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:border-cyan-400"
                />

            </div>
        </div>
    );
}