import React, { useEffect } from 'react'
import TopBar from '../components/users/TopBar'
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
    User,
} from "lucide-react";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Sidebar from '../components/users/Sidebar';
import axiosInstance from '../components/services/axiosInstance';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { updateParticipantAPI } from '../components/services/allAPIs';

function Profile() {
    const [profile, setProfile] = useState({
        username: "", phonenumber: "", password: "",
        location: "", website: "", bio: "", profileImage: "", email: ""
    })
    const [preview, setPreview] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordMatchError, setPasswordMatchError] = useState(false)
    const navigate = useNavigate()
    console.log("Profile data : ", profile)

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem("user"))
        console.log("data : ", data)
        setProfile({
            username: data.username || "",
            phonenumber: data.phonenumber || "",
            password: "",
            location: data.location || "",
            website: data.website || "",
            bio: data.bio || "",
            profileImage: data.profileImage || "",
            email: data.email || ""
        })
    }, [])

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
            website,
            bio,
            profileImage
        } = profile;

        if (
            !username ||
            !email ||
            !phonenumber ||
            !password ||
            !location ||
            !website ||
            !bio
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
        reqBody.append("website", website);
        reqBody.append("bio", bio);

        if (profileImage instanceof File) {
            reqBody.append("profileImage", profileImage);
        }

        try {
            const result = await updateParticipantAPI(reqBody);

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
                    title: "Something Went Wrong !!!",
                    icon: "error"
                });
            }
        }
        catch (error) {
            Swal.fire({
                title: "Something Went Wrong !!!",
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
        <>
            <div className="flex bg-slate-950">

                <Sidebar />

                <div className="flex-1">

                    <TopBar />

                    <div className="p-8">

                        <div className="min-h-screen bg-[#020617] text-white p-8">

                            {/* Header */}

                            <div className="mb-8">
                                <h1 className="text-4xl font-bold">
                                    Participant Profile
                                </h1>

                                <p className="text-slate-400 mt-2">
                                    Manage your personal information.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-3 gap-8">

                                {/* Left Card */}

                                <div className="bg-slate-900/70 border border-cyan-500/20 rounded-3xl p-8 backdrop-blur-xl">

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

                                        <p className="text-cyan-400">
                                            Event Organizer
                                        </p>

                                        <p className='p-5 text-justify'>{profile.bio}</p>

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
                                                icon={<User size={18} />}
                                                label="Full Name"
                                                name="username"
                                                value={profile.username ?? ""}
                                                onChange={handleChange}
                                            />

                                            <Input
                                                icon={<Mail size={18} />}
                                                label="Email"
                                                name="email"
                                                value={profile.email ?? ""}
                                                onChange={handleChange}
                                            />

                                            <Input
                                                icon={<Phone size={18} />}
                                                label="Phone"
                                                name="phonenumber"
                                                value={profile.phonenumber ?? ""}
                                                onChange={handleChange}
                                            />

                                            {/* <Input
                                                icon={<Building2 size={18} />}
                                                label="Organization"
                                                name="organization"
                                                value={profile.organization}
                                                onChange={handleChange}
                                            /> */}

                                            <Input
                                                icon={<MapPin size={18} />}
                                                label="Location"
                                                name="location"
                                                value={profile.location ?? ""}
                                                onChange={handleChange}
                                            />

                                            <Input
                                                icon={<Lock size={18} />}
                                                label="Password"
                                                name="password"
                                                value={profile.password ?? ""}
                                                type="password"
                                                onChange={handleChange}
                                            />

                                            <Input
                                                icon={<Lock size={18} />}
                                                label="Confirm Password"
                                                name="confirmPassword"
                                                value={confirmPassword}
                                                type="password"
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />

                                            {passwordMatchError && (
                                                <p className="mt-3 text-yellow-600 text-sm text-center">
                                                    Password and confirm password must be same
                                                </p>
                                            )}


                                            <div className="md:col-span-2">

                                                <Input
                                                    icon={<Globe size={18} />}
                                                    label="Website"
                                                    name="website"
                                                    value={profile.website ?? ""}
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
                                                value={profile.bio ?? ""}
                                                onChange={handleChange}
                                                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400"
                                            />

                                        </div>

                                    </div>

                                    <div className="bg-slate-900/70 border border-cyan-500/20 rounded-3xl p-8 flex flex-wrap gap-4 justify-center items-center">

                                        {/* <div className="flex gap-4">

                                            <button className="flex items-center gap-2 px-5 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition">
                                                <Lock size={18} />
                                                Change Password
                                            </button>

                                            <button className="flex items-center gap-2 px-5 py-3 rounded-xl border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition">
                                                <ShieldCheck size={18} />
                                                Two-Factor Auth
                                            </button>

                                        </div> */}

                                        <button className="flex items-center gap-2 px-8 py-3 rounded-xl bg-cyan-500 text-black
                                         font-semibold hover:bg-cyan-400 transition shadow-[0_0_20px_rgba(34,211,238,.4)]"
                                            onClick={handleUpdate} >

                                            <Save size={18} />

                                            Save Changes

                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
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

export default Profile
