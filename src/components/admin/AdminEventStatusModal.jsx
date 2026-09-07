import React from 'react'

function AdminEventStatusModal({ event, onClose, onStatusUpdate }) {
    if (!event) return null;

    const handleStatusChange = (status) => {
        onStatusUpdate(event._id, status);
    };
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">

            <div className="w-full max-w-md rounded-2xl border border-cyan-500/20 bg-[#111827] shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-700 px-6 py-4">

                    <div>
                        <h2 className="text-xl font-bold text-white">
                            Update Event Status
                        </h2>

                        <p className="text-sm text-gray-400">
                            Admin Action
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="text-2xl text-gray-400 hover:text-white"
                    >
                        ×
                    </button>

                </div>

                {/* Content */}
                <div className="space-y-5 px-6 py-6">

                    {/* Event Name */}
                    <div>
                        <label className="text-sm text-gray-400">
                            Event Name
                        </label>

                        <div className="mt-2 rounded-lg bg-gray-800 px-4 py-3 text-white">
                            {event.eventname}
                        </div>
                    </div>

                    {/* Current Status */}
                    <div>
                        <label className="text-sm text-gray-400">
                            Current Status
                        </label>

                        <div className="mt-2">
                            <span
                                className={`rounded-full px-4 py-2 text-sm font-medium ${event.status === "Approved"
                                        ? "bg-green-500/20 text-green-400"
                                        : event.status === "Rejected"
                                            ? "bg-red-500/20 text-red-400"
                                            : "bg-yellow-500/20 text-yellow-400"
                                    }`}
                            >
                                {event.status}
                            </span>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="rounded-lg bg-gray-800/70 p-4">
                        <p className="text-sm leading-6 text-gray-300">
                            Review this event and choose whether to approve or reject it.
                        </p>
                    </div>

                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 border-t border-gray-700 px-6 py-4">

                    <button
                        onClick={onClose}
                        className="rounded-lg border border-gray-600 px-5 py-2 text-gray-300 hover:bg-gray-800"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={() => handleStatusChange("Rejected")}
                        className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700"
                    >
                        Reject
                    </button>

                    <button
                        onClick={() => handleStatusChange("Approved")}
                        className="rounded-lg bg-green-600 px-5 py-2 font-medium text-white transition hover:bg-green-700"
                    >
                        Approve
                    </button>

                </div>

            </div>
        </div>
    )
}

export default AdminEventStatusModal
