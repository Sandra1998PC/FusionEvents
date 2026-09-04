import React, { useState } from "react";
import {
    X,
    Save,
    Upload,
    CalendarDays,
    Clock,
    MapPin,
    Ticket,
    Users
} from "lucide-react";
import eventDetails from "../../assets/eventDetails.png";
import axiosInstance from "../services/axiosInstance";
import Swal from "sweetalert2";
import { updateEventAPI } from "../services/allAPIs";

const EditEventModal = ({ event, onClose, saveChanges }) => {

    const [formData, setFormData] = useState({
        eventname: event?.eventname || "",
        category: event?.category || "Technology",
        description: event?.description || "",
        venue: event?.venue || "",
        date: event?.date || "",
        time: event?.time || "",
        seats: event?.seats || "",
        price: event?.price || "",
        status: event?.status || "Active",
        bannerImage: event?.bannerImage || ""
    });

    console.log("Initial Form Data:", event);

    const [preview, setPreview] = useState("");

    // Handle input changes
    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };


    // Handle banner image
    const handleImageChange = (e) => {

        const file = e.target.files[0];
        if (file.type.startsWith("image/")) {
            setFormData({ ...formData, bannerImage: file });
            const imageURL = URL.createObjectURL(file);
            console.log(imageURL);
            setPreview(imageURL)
        }
    };


    // Save
    const handleSubmit = async (e) => {

        e.preventDefault();
        const reqBody = new FormData();

        reqBody.append("eventname", formData.eventname);
        reqBody.append("category", formData.category);
        reqBody.append("description", formData.description);
        reqBody.append("venue", formData.venue);
        reqBody.append("date", formData.date);
        reqBody.append("time", formData.time);
        reqBody.append("price", formData.price);
        reqBody.append("seats", formData.seats);
        reqBody.append("status", formData.status);

        if (formData.bannerImage instanceof File) {
            reqBody.append("bannerImage", formData.bannerImage);
        }

        console.log("FormData:");

        for (let pair of reqBody.entries()) {
            console.log(pair[0], pair[1]);
        }
        try {
            const result = await updateEventAPI(event._id, reqBody);
            console.log("Update Result:", result);
            if (result.status === 200) {
                Swal.fire({
                    title: "Event Updated Successfully!",
                    icon: "success"
                });
                saveChanges(); // Call the saveChanges function to refresh the events list
            }
            else {
                Swal.fire({
                    title: "Something went Wrong !!!",
                    icon: "error"
                });
            }
        } catch (error) {
            console.error("Error updating event:", error);
            Swal.fire({
                title: "Something went Wrong !!!",
                icon: "error"
            });
        }
    };


    return (

        <div className="fixed inset-0 z-[9999]
                        flex items-center justify-center
                        bg-black/70 backdrop-blur-sm p-4">

            {/* Modal */}
            <div className="w-full max-w-4xl
                            h-[70vh]
                            bg-[#0f0f1a]
                            rounded-2xl
                            border border-cyan-500/20
                            shadow-2xl
                            overflow-hidden
                            flex flex-col">


                {/* ================= HEADER ================= */}

                <div className="flex-shrink-0
                                flex items-center justify-between
                                px-6 py-4
                                bg-[#11111f]
                                border-b border-gray-700">

                    <div>
                        <h2 className="text-xl font-bold text-white">
                            Edit Event
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            Update your event details
                        </p>
                    </div>


                    <button
                        type="button"
                        onClick={onClose}
                        className="p-2 rounded-full
                                   text-gray-400
                                   hover:text-white
                                   hover:bg-red-500/20
                                   transition"
                    >
                        <X size={22} />
                    </button>

                </div>


                {/* ================= FORM CONTENT ================= */}

                <form
                    onSubmit={handleSubmit}
                    className="flex-1 overflow-y-auto"
                >

                    <div className="p-6">

                        {/* ================= BANNER ================= */}

                        <div className="mb-6">

                            <label className="block text-sm
                                              font-medium
                                              text-gray-300 mb-3">
                                Event Banner
                            </label>

                            <div className="relative
                                            w-full h-56
                                            rounded-xl
                                            overflow-hidden
                                            border border-gray-700
                                            bg-[#171725]">

                                {preview ? (
                                    // New image selected
                                    <img
                                        src={preview}
                                        alt="Event Banner"
                                        className="w-full h-full object-cover"
                                    />
                                ) : event.bannerImage ? (
                                    // Existing image from database
                                    <img
                                        src={`${axiosInstance.defaults.baseURL}/uploads/${event.bannerImage}`}
                                        alt="Event Banner"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    // No image
                                    <img
                                        src={eventDetails}
                                        alt="Event Banner"
                                        className="w-full h-full object-cover"
                                    />
                                )}

                                {/* Upload button */}
                                <label
                                    className="absolute
                                               bottom-4 right-4
                                               flex items-center gap-2
                                               px-4 py-2
                                               rounded-lg
                                               bg-black/70
                                               text-white
                                               cursor-pointer
                                               hover:bg-black
                                               transition"
                                >

                                    <Upload size={18} />

                                    Change Banner

                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />

                                </label>

                            </div>

                        </div>


                        {/* ================= EVENT NAME ================= */}

                        <div className="mb-5">

                            <label className="block text-sm
                                              text-gray-400 mb-2">
                                Event Name
                            </label>

                            <input
                                type="text"
                                name="eventname"
                                value={formData.eventname}
                                onChange={handleChange}
                                placeholder="Enter event name"
                                required
                                className="w-full px-4 py-3
                                           rounded-lg
                                           bg-[#171725]
                                           border border-gray-700
                                           text-white
                                           placeholder-gray-600
                                           outline-none
                                           focus:border-cyan-400
                                           transition"
                            />

                        </div>


                        {/* ================= CATEGORY ================= */}

                        <div className="mb-5">

                            <label className="block text-sm
                                              text-gray-400 mb-2">
                                Category
                            </label>

                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full px-4 py-3
                                           rounded-lg
                                           bg-[#171725]
                                           border border-gray-700
                                           text-white
                                           outline-none
                                           focus:border-cyan-400"
                            >

                                <option value="Technology">
                                    Technology
                                </option>

                                <option value="Business">
                                    Business
                                </option>

                                <option value="Music">
                                    Music
                                </option>

                                <option value="Sports">
                                    Sports
                                </option>

                                <option value="Education">
                                    Education
                                </option>

                                <option value="Workshop">
                                    Workshop
                                </option>

                                <option value="Other">
                                    Other
                                </option>

                            </select>

                        </div>


                        {/* ================= DESCRIPTION ================= */}

                        <div className="mb-5">

                            <label className="block text-sm
                                              text-gray-400 mb-2">
                                Description
                            </label>

                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="5"
                                placeholder="Describe your event..."
                                required
                                className="w-full px-4 py-3
                                           rounded-lg
                                           bg-[#171725]
                                           border border-gray-700
                                           text-white
                                           placeholder-gray-600
                                           outline-none
                                           resize-none
                                           focus:border-cyan-400"
                            />

                        </div>


                        {/* ================= VENUE ================= */}

                        <div className="mb-5">

                            <label className="flex items-center gap-2
                                              text-sm text-gray-400 mb-2">

                                <MapPin size={16}
                                    className="text-cyan-400" />

                                Venue

                            </label>

                            <input
                                type="text"
                                name="venue"
                                value={formData.venue}
                                onChange={handleChange}
                                placeholder="Enter venue"
                                required
                                className="w-full px-4 py-3
                                           rounded-lg
                                           bg-[#171725]
                                           border border-gray-700
                                           text-white
                                           outline-none
                                           focus:border-cyan-400"
                            />

                        </div>


                        {/* ================= DATE + TIME ================= */}

                        <div className="grid grid-cols-1
                                        md:grid-cols-2
                                        gap-4 mb-5">


                            {/* Date */}
                            <div>

                                <label className="flex items-center gap-2
                                                  text-sm text-gray-400 mb-2">

                                    <CalendarDays
                                        size={16}
                                        className="text-cyan-400"
                                    />

                                    Date

                                </label>

                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3
                                               rounded-lg
                                               bg-[#171725]
                                               border border-gray-700
                                               text-white
                                               outline-none
                                               focus:border-cyan-400"
                                />

                            </div>


                            {/* Time */}
                            <div>

                                <label className="flex items-center gap-2
                                                  text-sm text-gray-400 mb-2">

                                    <Clock
                                        size={16}
                                        className="text-cyan-400"
                                    />

                                    Time

                                </label>

                                <input
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3
                                               rounded-lg
                                               bg-[#171725]
                                               border border-gray-700
                                               text-white
                                               outline-none
                                               focus:border-cyan-400"
                                />

                            </div>

                        </div>


                        {/* ================= SEATS + PRICE ================= */}

                        <div className="grid grid-cols-1
                                        md:grid-cols-2
                                        gap-4 mb-5">


                            {/* Seats */}
                            <div>

                                <label className="flex items-center gap-2
                                                  text-sm text-gray-400 mb-2">

                                    <Users
                                        size={16}
                                        className="text-cyan-400"
                                    />

                                    Available Seats

                                </label>

                                <input
                                    type="number"
                                    name="seats"
                                    value={formData.seats}
                                    onChange={handleChange}
                                    min="1"
                                    required
                                    className="w-full px-4 py-3
                                               rounded-lg
                                               bg-[#171725]
                                               border border-gray-700
                                               text-white
                                               outline-none
                                               focus:border-cyan-400"
                                />

                            </div>


                            {/* Price */}
                            <div>

                                <label className="flex items-center gap-2
                                                  text-sm text-gray-400 mb-2">

                                    <Ticket
                                        size={16}
                                        className="text-cyan-400"
                                    />

                                    Ticket Price (₹)

                                </label>

                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    min="0"
                                    required
                                    className="w-full px-4 py-3
                                               rounded-lg
                                               bg-[#171725]
                                               border border-gray-700
                                               text-white
                                               outline-none
                                               focus:border-cyan-400"
                                />

                            </div>

                        </div>


                        {/* ================= STATUS ================= */}

                        <div className="mb-5">

                            <label className="block text-sm
                                              text-gray-400 mb-2">
                                Event Status
                            </label>

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full px-4 py-3
                                           rounded-lg
                                           bg-[#171725]
                                           border border-gray-700
                                           text-white
                                           outline-none
                                           focus:border-cyan-400"
                            >

                                <option value="Active">
                                    Active
                                </option>

                                <option value="Pending">
                                    Pending
                                </option>

                                <option value="Completed">
                                    Completed
                                </option>

                                <option value="Cancelled">
                                    Cancelled
                                </option>

                            </select>

                        </div>

                    </div>


                    {/* ================= FOOTER ================= */}

                    <div className="sticky bottom-0
                                    flex justify-end gap-3
                                    px-6 py-4
                                    bg-[#11111f]
                                    border-t border-gray-700">

                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2.5
                                       rounded-lg
                                       border border-gray-600
                                       text-gray-300
                                       hover:bg-gray-800
                                       transition"
                        >
                            Cancel
                        </button>


                        <button
                            type="submit"
                            className="flex items-center gap-2
                                       px-6 py-2.5
                                       rounded-lg
                                       bg-cyan-400
                                       text-black
                                       font-semibold
                                       hover:bg-cyan-300
                                       transition
                                       shadow-lg
                                       shadow-cyan-500/20"
                        >

                            <Save size={18} />

                            Save Changes

                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default EditEventModal;