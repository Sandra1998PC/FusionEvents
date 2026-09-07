import React from 'react'
import axiosInstance from '../services/axiosInstance';

function UserApprovalModal({ user, onClose, onStatusUpdate }) {
      if (!user) return null;

    const handleStatusChange = (status) => {
        onStatusUpdate(user._id, status);
    };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">

            <div className="w-full max-w-md rounded-2xl border border-cyan-500/20 bg-slate-900 shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-700 px-6 py-5">

                    <div>
                        <h2 className="text-xl font-bold text-white">
                            Update User Status
                        </h2>

                        <p className="mt-1 text-sm text-slate-400">
                            Admin Approval
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="text-2xl text-slate-400 hover:text-white transition"
                    >
                        ×
                    </button>

                </div>


                {/* User Information */}
                <div className="px-6 py-6">

                    {/* User */}
                    <div className="flex items-center gap-4 rounded-xl bg-slate-800/70 p-4">

                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/20 text-xl font-bold text-cyan-400 rounded-full border-2 ">
                            <img
                        src= {user.profileImage ? `${axiosInstance.defaults.baseURL}/uploads/${user.profileImage}` : "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"}
                            alt={user.username}
                            className="h-full w-full object-cover"
                        />
                        </div>

                        <div>
                            <h3 className="font-semibold text-white">
                                {user.username}
                            </h3>

                            <p className="text-sm text-slate-400">
                                {user.email}
                            </p>

                            <p className="mt-1 text-xs text-purple-400">
                                {user.role}
                            </p>
                        </div>

                    </div>


                    {/* Current Status */}
                    <div className="mt-6">

                        <p className="text-sm text-slate-400">
                            Current Status
                        </p>

                        <span
                            className={`mt-2 inline-block rounded-full px-4 py-1 text-sm font-medium ${
                                user.status === "Verified"
                                    ? "bg-green-500/20 text-green-400"
                                    : user.status === "Blocked"
                                        ? "bg-red-500/20 text-red-400"
                                        : "bg-yellow-500/20 text-yellow-400"
                            }`}
                        >
                            {user.status}
                        </span>

                    </div>


                    {/* Confirmation Message */}
                    <div className="mt-6 rounded-xl border border-slate-700 bg-slate-800/40 p-4">

                        <p className="text-sm leading-6 text-slate-300">
                            Review this user's registration and choose
                            whether to Verify or Block the account.
                        </p>

                    </div>

                </div>


                {/* Footer */}
                <div className="flex justify-end gap-3 border-t border-slate-700 px-6 py-4">

                    <button
                        onClick={onClose}
                        className="rounded-lg border border-slate-600 px-5 py-2 text-slate-300 transition hover:bg-slate-800"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={() => handleStatusChange("Blocked")}
                        className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700"
                    >
                        Block
                    </button>

                    <button
                        onClick={() => handleStatusChange("Verified")}
                        className="rounded-lg bg-green-600 px-5 py-2 font-medium text-white transition hover:bg-green-700"
                    >
                        Verify
                    </button>

                </div>

            </div>

        </div>
  )
}

export default UserApprovalModal
