import { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { updateAdminAPI } from "../services/allAPIs";
import axiosInstance from "../services/axiosInstance";

export default function AdminProfile() {
    const [profile, setProfile] = useState({})
    const [preview, setPreview] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordMatchError, setPasswordMatchError] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem("user"))
        console.log("data : ", data)
        setProfile(data)
        setConfirmPassword(data.password)
    }, [])

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileUpload = (e) => {
        const imageFile = e.target.files[0];
        if (imageFile.type.startsWith("image/")) {
            setProfile({ ...profile, profileImage: imageFile })
            const imageURL = URL.createObjectURL(imageFile)
            console.log(imageURL);
            setPreview(imageURL)
        }
    }

    const handleUpdate = async () => {
        console.log("inside handle update")
        const {
            username,
            email,
            phonenumber,
            password,
            location,
            profileImage
        } = profile;

        if (
            !username ||
            !email ||
            !phonenumber ||
            !password ||
            !location
        ) {
            Swal.fire({
                title: "Please Fill the form Completely!!!",
                icon: "error"
            });
            return;
        }

        if (password !== confirmPassword) {
            Swal.fire({
                title: "Passwords do not match!",
                icon: "error"
            });
            return;
        }

        const reqBody = new FormData();

        reqBody.append("username", username);
        reqBody.append("email", email);
        reqBody.append("phonenumber", phonenumber);
        reqBody.append("password", password);
        reqBody.append("location", location);

        if (profileImage instanceof File) {
            reqBody.append("profileImage", profileImage);
        }



        try {
            const result = await updateAdminAPI(reqBody);
            if (result.status === 200) {
                Swal.fire({
                    title: "Profile Updated Successfully !!!",
                    icon: "success"
                });

                setTimeout(() => {
                    sessionStorage.clear();
                    navigate("/login");
                }, 2500);
            }
            else {
                Swal.fire({
                    title: "Something went Wrong !!!",
                    icon: "error"
                });
            }
        }
        catch (error) {
            console
            Swal.fire({
                title: "Something went Wrong !!!",
                icon: "error"
            });
        }
    };

    useEffect(() => {
        if (!profile?.password || !confirmPassword) {
            setPasswordMatchError(false);
            return;
        }
        setPasswordMatchError(profile.password !== confirmPassword);
    }, [profile.password, confirmPassword]);
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
                                            <label htmlFor="userProfile" className="relative block  cursor-pointer relative">
                                                <input type="file" id="userProfile" hidden accept="image/*"
                                                    onChange={(e) => handleFileUpload(e)} />

                                                {profile?.profileImage ? (
                                                    <img
                                                        src={
                                                            preview
                                                                ? preview
                                                                : profile.profileImage.startsWith(
                                                                    "https://lh3.googleusercontent.com"
                                                                )
                                                                    ? profile.profileImage
                                                                    : `${axiosInstance.defaults.baseURL}/uploads/${profile.profileImage}`
                                                        }
                                                        alt="user"
                                                        className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-gray-300 object-cover"
                                                    />
                                                ) : (
                                                    <img
                                                        src={
                                                            preview ||
                                                            "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
                                                        }
                                                        alt="user"
                                                        className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-gray-300 object-cover"
                                                    />
                                                )}

                                                <div
                                                    className="absolute bottom-2 right-2
                                                w-10 h-10 rounded-full
                                                bg-cyan-500 text-slate-950
                                                flex items-center justify-center"
                                                >
                                                    <Camera size={24} className="text-white" />
                                                </div>
                                            </label>

                                        </div>

                                        <h2 className="text-2xl font-bold mt-5">
                                            {profile.username}
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
                                                {profile.username}
                                            </label>

                                            <div className="relative">

                                                <User
                                                    size={18}
                                                    className="absolute left-4 top-4 text-cyan-400"
                                                />

                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    value={profile.username}
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
                                                    value={profile.phonenumber}
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
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div>
                                            <label className="block mb-2 text-slate-300">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                value={profile.password}
                                                onChange={handleChange}
                                                className="w-full bg-slate-800 border border-slate-700
                                                    rounded-xl pl-12 pr-4 py-3
                                                    focus:border-cyan-400 outline-none"
                                            />
                                        </div>

                                        <div >
                                            <label className="block mb-2 text-slate-300">
                                                Confirm Password
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                className="w-full bg-slate-800 border border-slate-700
                                                    rounded-xl pl-12 pr-4 py-3
                                                    focus:border-cyan-400 outline-none"
                                            />
                                        </div>

                                        {passwordMatchError && (
                                            <p className="mt-3 text-yellow-600 text-sm text-center">
                                                Password and confirm password must be same
                                            </p>
                                        )}

                                    </div>

                                    {/* Buttons */}

                                    <div className="flex justify-center mt-10">

                                        <button
                                            className="flex items-center gap-2
                                            px-8 py-3 rounded-xl
                                            bg-cyan-500 text-slate-950
                                            font-semibold
                                            hover:bg-cyan-400
                                            transition
                                            shadow-[0_0_20px_rgba(34,211,238,.4)]"
                                            onClick={handleUpdate}
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