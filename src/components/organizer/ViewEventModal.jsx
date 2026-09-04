import React from "react";
import {
    X,
    MapPin,
    CalendarDays,
    Clock,
    Users,
    Ticket,
    User
} from "lucide-react";
import axiosInstance from "../services/axiosInstance";
import eventDetails from "../../assets/eventDetails.png";

const ViewEventModal = ({ event, onClose }) => {

    if (!event) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">

            {/* Modal */}
            <div className="w-full max-w-4xl h-[70vh] flex flex-col rounded-2xl bg-[#0f0f1a] border border-cyan-500/20 shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 bg-[#11111f] border-b border-gray-700">

                    <h2 className="text-xl font-bold text-white">
                        Event Details
                    </h2>

                    <button
                        onClick={onClose}
                        className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-red-500/20 transition"
                    >
                        <X size={22} />
                    </button>

                </div>


                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto">

                    {/* Banner */}
                    <div className="relative">

                        <img
                            src= {event.bannerImage ? `${axiosInstance.defaults.baseURL}/uploads/${event.bannerImage}` : eventDetails}
                            alt={event.eventname}
                            className="w-full h-64 object-cover"
                        />

                        {/* Category */}
                        <span className="absolute top-4 left-4 px-4 py-1 rounded-full text-sm font-medium bg-cyan-400 text-black">
                            {event.category}
                        </span>

                    </div>


                    {/* Content */}
                    <div className="p-6">

                        {/* Event Name */}
                        <h1 className="text-3xl font-bold text-white mb-3">
                            {event.eventname}
                        </h1>


                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed mb-6">
                            {event.description}
                        </p>


                        {/* Event Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            {/* Venue */}
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#171725]">

                                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                                    <MapPin size={22} />
                                </div>

                                <div>
                                    <p className="text-xs text-gray-500">
                                        Venue
                                    </p>

                                    <p className="text-white font-medium">
                                        {event.venue}
                                    </p>
                                </div>

                            </div>


                            {/* Date */}
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#171725]">

                                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                                    <CalendarDays size={22} />
                                </div>

                                <div>
                                    <p className="text-xs text-gray-500">
                                        Date
                                    </p>

                                    <p className="text-white font-medium">
                                        {event.date}
                                    </p>
                                </div>

                            </div>


                            {/* Time */}
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#171725]">

                                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                                    <Clock size={22} />
                                </div>

                                <div>
                                    <p className="text-xs text-gray-500">
                                        Time
                                    </p>

                                    <p className="text-white font-medium">
                                        {event.time}
                                    </p>
                                </div>

                            </div>


                            {/* Seats */}
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#171725]">

                                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                                    <Users size={22} />
                                </div>

                                <div>
                                    <p className="text-xs text-gray-500">
                                        Available Seats
                                    </p>

                                    <p className="text-white font-medium">
                                        {event.seats}
                                    </p>
                                </div>

                            </div>

                        </div>


                        {/* Price + Organizer */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                            {/* Ticket Price */}
                            <div className="p-5 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">

                                <div className="flex items-center gap-3">

                                    <Ticket
                                        className="text-cyan-400"
                                        size={24}
                                    />

                                    <div>

                                        <p className="text-sm text-gray-400">
                                            Ticket Price
                                        </p>

                                        <p className="text-2xl font-bold text-cyan-400">
                                            ₹{event.price}
                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* Organizer */}
                            <div className="p-5 rounded-xl bg-[#171725]">

                                <div className="flex items-center gap-3">

                                    <User
                                        className="text-purple-400"
                                        size={24}
                                    />

                                    <div>

                                        <p className="text-sm text-gray-400">
                                            Organizer
                                        </p>

                                        <p className="text-white font-medium">
                                            {event.organizerName ||
                                                "FusionEvents Organizer"}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* Status */}
                        <div className="mt-5 flex items-center justify-between p-4 rounded-xl bg-[#171725]">

                            <span className="text-gray-400">
                                Event Status
                            </span>

                            <span className="px-4 py-1 rounded-full text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                                {event.status || "Active"}
                            </span>

                        </div>

                    </div>

                </div>


                {/* Footer - Always Visible */}
                <div className="flex-shrink-0 flex justify-end gap-3 px-6 py-4 bg-[#11111f] border-t border-gray-700">

                    <button
                        onClick={onClose}
                        className="px-5 py-2.5 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition"
                    >
                        Close
                    </button>

                </div>

            </div>

        </div>
    );
};

export default ViewEventModal;