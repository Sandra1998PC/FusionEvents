import React from 'react'
import axiosInstance from '../services/axiosInstance';

function ViewEventModal({ event, onClose }) {
    if (!event) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">

            <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#111827] shadow-2xl border border-cyan-500/20">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-700 px-6 py-4">
                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            Event Details
                        </h2>
                        <p className="text-sm text-gray-400">
                            Admin View
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="text-2xl text-gray-400 hover:text-white"
                    >
                        ×
                    </button>
                </div>

                {/* Event Image */}
                <div className="px-6 pt-5">
                    <img
                            src= {event.bannerImage ? `${axiosInstance.defaults.baseURL}/uploads/${event.bannerImage}` : eventDetails}
                            alt={event.eventname}
                            className="w-full h-64 object-cover"
                        />
                </div>

                {/* Event Information */}
                <div className="grid grid-cols-1 gap-5 px-6 py-6 md:grid-cols-2">

                    {/* Event Name */}
                    <div className="md:col-span-2">
                        <p className="text-sm text-gray-400">Event Name</p>
                        <h3 className="mt-1 text-xl font-semibold text-cyan-400">
                            {event.eventname}
                        </h3>
                    </div>

                    {/* Category */}
                    <div>
                        <p className="text-sm text-gray-400">Category</p>
                        <p className="mt-1 text-white">
                            {event.category}
                        </p>
                    </div>

                    {/* Status */}
                    <div>
                        <p className="text-sm text-gray-400">Status</p>
                        <span
                            className={`mt-1 inline-block rounded-full px-3 py-1 text-sm font-medium ${event.status === "Approved"
                                    ? "bg-green-500/20 text-green-400"
                                    : event.status === "Pending"
                                        ? "bg-yellow-500/20 text-yellow-400"
                                        : "bg-red-500/20 text-red-400"
                                }`}
                        >
                            {event.status}
                        </span>
                    </div>

                    {/* Date */}
                    <div>
                        <p className="text-sm text-gray-400">Date</p>
                        <p className="mt-1 text-white">
                            {event.date}
                        </p>
                    </div>

                    {/* Time */}
                    <div>
                        <p className="text-sm text-gray-400">Time</p>
                        <p className="mt-1 text-white">
                            {event.time}
                        </p>
                    </div>

                    {/* Venue */}
                    <div className="md:col-span-2">
                        <p className="text-sm text-gray-400">Venue</p>
                        <p className="mt-1 text-white">
                            {event.venue}
                        </p>
                    </div>

                    {/* Price */}
                    <div>
                        <p className="text-sm text-gray-400">Ticket Price</p>
                        <p className="mt-1 font-semibold text-white">
                            ₹{event.price}
                        </p>
                    </div>

                    {/* Participants */}
                    <div>
                        <p className="text-sm text-gray-400">Registered Participants</p>
                        <p className="mt-1 font-semibold text-white">
                            {event.participants || 0}
                        </p>
                    </div>

                    {/* Organizer */}
                    <div className="md:col-span-2">
                        <p className="text-sm text-gray-400">Organizer</p>
                        <p className="mt-1 text-white">
                            {event.organizerName}
                        </p>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <p className="text-sm text-gray-400">Description</p>

                        <div className="mt-2 rounded-xl bg-gray-800/70 p-4">
                            <p className="leading-7 text-gray-300">
                                {event.description}
                            </p>
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 border-t border-gray-700 px-6 py-4">

                    <button
                        onClick={onClose}
                        className="rounded-lg border border-gray-600 px-5 py-2 text-gray-300 hover:bg-gray-800"
                    >
                        Close
                    </button>

                    {/* {event.status === "Pending" && (
                        <>
                            <button
                                className="rounded-lg bg-green-600 px-5 py-2 font-medium text-white hover:bg-green-700"
                            >
                                Approve Event
                            </button>

                            <button
                                className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white hover:bg-red-700"
                            >
                                Reject Event
                            </button>
                        </>
                    )} */}

                </div>

            </div>
        </div>
    )
}

export default ViewEventModal
