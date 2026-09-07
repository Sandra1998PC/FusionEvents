import React from 'react'
import axiosInstance from '../services/axiosInstance';

function ViewUserModal({ user, onClose }) {
    if (!user) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">

            <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-cyan-500/20 bg-[#0f172a] shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-700 px-6 py-5">

                    <div>
                        <h2 className="text-xl font-bold text-white">
                            User Details
                        </h2>

                        <p className="text-sm text-slate-400 mt-1">
                            View user information
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="text-2xl text-slate-400 hover:text-white transition"
                    >
                        ×
                    </button>

                </div>


                {/* Profile Section */}
                <div className="flex flex-col items-center px-6 py-6 border-b border-slate-800">

                    <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-cyan-400">

                        <img
                            src={user.profileImage ? `${axiosInstance.defaults.baseURL}/uploads/${user.profileImage}` : "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"}
                            alt={user.username}
                            className="h-full w-full object-cover"
                        />

                    </div>

                    <h3 className="mt-4 text-xl font-semibold text-white">
                        {user.username}
                    </h3>

                    <p className="text-sm text-slate-400">
                        {user.email}
                    </p>

                    {/* Role */}
                    <span className="mt-3 rounded-full bg-purple-500/20 px-4 py-1 text-sm font-medium text-purple-400">
                        {user.role}
                    </span>

                </div>


                {/* User Information */}
                <div className="grid grid-cols-1 gap-5 px-6 py-6 md:grid-cols-2">

                    {/* Email */}
                    <div>
                        <p className="text-sm text-slate-400">
                            Email
                        </p>

                        <p className="mt-1 text-white">
                            {user.email}
                        </p>
                    </div>


                    {/* Phone */}
                    <div>
                        <p className="text-sm text-slate-400">
                            Phone Number
                        </p>

                        <p className="mt-1 text-white">
                            {user.phonenumber}
                        </p>
                    </div>


                    {/* Organization */}
                    <div>
                        <p className="text-sm text-slate-400">
                            Organization
                        </p>

                        <p className="mt-1 text-white">
                            {user.organization || "Not provided"}
                        </p>
                    </div>


                    {/* Location */}
                    <div>
                        <p className="text-sm text-slate-400">
                            Location
                        </p>

                        <p className="mt-1 text-white">
                            {user.location || "Not provided"}
                        </p>
                    </div>


                    {/* Website */}
                    <div className="md:col-span-2">

                        <p className="text-sm text-slate-400">
                            Website
                        </p>

                        {user.website ? (
                            <a
                                href={user.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-1 block truncate text-cyan-400 hover:underline"
                            >
                                {user.website}
                            </a>
                        ) : (
                            <p className="mt-1 text-white">
                                Not provided
                            </p>
                        )}

                    </div>


                    {/* Status */}
                    <div>

                        <p className="text-sm text-slate-400">
                            Account Status
                        </p>

                        <span
                            className={`mt-2 inline-block rounded-full px-4 py-1 text-sm font-medium ${user.status === "Verified"
                                ? "bg-green-500/20 text-green-400"
                                : user.status === "Blocked"
                                    ? "bg-red-500/20 text-red-400"
                                    : "bg-yellow-500/20 text-yellow-400"
                                }`}
                        >
                            {user.status}
                        </span>

                    </div>


                    {/* Role */}
                    <div>

                        <p className="text-sm text-slate-400">
                            Role
                        </p>

                        <p className="mt-1 text-white">
                            {user.role}
                        </p>

                    </div>


                    {/* Bio */}
                    <div className="md:col-span-2">

                        <p className="text-sm text-slate-400">
                            Bio
                        </p>

                        <div className="mt-2 rounded-xl bg-slate-800/70 p-4">

                            <p className="text-sm leading-6 text-slate-300">
                                {user.bio || "No bio available"}
                            </p>

                        </div>

                    </div>

                </div>


                {/* Footer */}
                <div className="flex justify-end border-t border-slate-800 px-6 py-4">

                    <button
                        onClick={onClose}
                        className="rounded-lg border border-slate-600 px-6 py-2 text-slate-300 transition hover:bg-slate-800"
                    >
                        Close
                    </button>

                </div>

            </div>

        </div>
    )
}

export default ViewUserModal
