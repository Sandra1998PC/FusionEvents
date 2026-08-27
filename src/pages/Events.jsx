import { Search, MapPin, CalendarDays, User, Filter } from "lucide-react";
import TopBar from "../components/users/TopBar";
import Sidebar from "../components/users/Sidebar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getAllEvents } from "../components/services/allAPIs";
import axiosInstance from "../components/services/axiosInstance";

export default function Events() {
    const navigate = useNavigate()
    const [events, setEvents] = useState([])
    const [displayEvents, setDisplayEvents] = useState([])
    const [eventName, setEventName] = useState("")
    const [organizer, setOrganizer] = useState("")
    const [location, setLocation] = useState("")
    console.log("displayEvents : ", displayEvents)

    const getAllEventsToDisplay = async () => {
        try {
            const result = await getAllEvents()
            console.log("event result : ", result)
            if (result.status == 200) {
                setEvents(result.data)
                setDisplayEvents(result.data)
            }
            else {
                Swal.fire({
                    title: "Something went wrong!!!",
                    icon: "error"
                });
            }
        }
        catch (error) {
            Swal.fire({
                title: "Something went wrong!!!",
                icon: "error"
            });
        }
    }

    const onEventChange = (e) => {
        const value = e.target.value
        setEventName(value)
        let filteredEvents
        if (organizer != "" || location != "") {
            filteredEvents = displayEvents.filter((event) =>
                event.eventname.toLowerCase().includes(value.toLowerCase())
            )
        }
        else {
            filteredEvents = events.filter((event) =>
                event.eventname.toLowerCase().includes(value.toLowerCase())
            )
        }
        setDisplayEvents(filteredEvents)
    }

    const onOrganizerChange = (e) => {
        const value = e.target.value
        setOrganizer(value)
        console.log("Organizer : ", organizer);
        let filteredEvents
        if (eventName != "" || location != "") {
            filteredEvents = displayEvents.filter((event) =>
                event.organizername.toLowerCase().includes(value.toLowerCase())
            )
        }
        else {
            filteredEvents = events.filter((event) =>
                event.organizername.toLowerCase().includes(value.toLowerCase())
            )
        }
        setDisplayEvents(filteredEvents)
    }

    const onLocationChange = (e) => {
        const value = e.target.value
        setLocation(value)
        let filteredEvents
        if (eventName != "" || organizer != "") {
            filteredEvents = displayEvents.filter((event) =>
                event.venue.toLowerCase().includes(value.toLowerCase())
            )
        }
        else {
            filteredEvents = events.filter((event) =>
                event.venue.toLowerCase().includes(value.toLowerCase())
            )
        }
        setDisplayEvents(filteredEvents)
    }

    useEffect(() => {
        getAllEventsToDisplay()
    }, [])
    return (
        <div className="flex bg-slate-950">

            <Sidebar />

            <div className="flex-1">

                <TopBar />

                <main className="p-8">

                    <section className="min-h-screen bg-slate-950 text-white px-6 py-10">

                        {/* Heading */}

                        <div className="text-center mb-10">

                            <h1 className="text-5xl font-bold">
                                Explore
                                <span className="text-cyan-400"> Events</span>
                            </h1>

                            <p className="text-slate-400 mt-3">
                                Find amazing experiences around you.
                            </p>

                        </div>

                        {/* Search */}

                        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">

                            <div className="grid md:grid-cols-4 gap-5">

                                <div className="relative">

                                    <Search
                                        className="absolute left-4 top-4 text-cyan-400"
                                        size={20}
                                    />

                                    <input
                                        type="text"
                                        placeholder="Event Name"
                                        value={eventName}
                                        onChange={onEventChange}
                                        className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-12 pr-4 py-3 focus:border-cyan-400 outline-none"
                                    />

                                </div>

                                <div className="relative">

                                    <MapPin
                                        className="absolute left-4 top-4 text-cyan-400"
                                        size={20}
                                    />

                                    <input
                                        type="text"
                                        placeholder="Location"
                                        value={location}
                                        onChange={onLocationChange}
                                        className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-12 pr-4 py-3 focus:border-cyan-400 outline-none"
                                    />

                                </div>

                                <div className="relative">

                                    <User
                                        className="absolute left-4 top-4 text-cyan-400"
                                        size={20}
                                    />

                                    <input
                                        type="text"
                                        placeholder="Organizer"
                                        value={organizer}
                                        onChange={onOrganizerChange}
                                        className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-12 pr-4 py-3 focus:border-cyan-400 outline-none"
                                    />

                                </div>

                                {/* <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-xl font-semibold transition">

                                    Search Events

                                </button> */}

                            </div>

                        </div>

                        {/* Filters */}
                        {/* 
                        <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4 mb-12">

                            <select className="bg-slate-900 border border-slate-700 rounded-xl p-3">
                                <option>Category</option>
                                <option>Technology</option>
                                <option>Business</option>
                                <option>Music</option>
                                <option>Sports</option>
                            </select>

                            <select className="bg-slate-900 border border-slate-700 rounded-xl p-3">
                                <option>Price</option>
                                <option>Free</option>
                                <option>Paid</option>
                            </select>

                            <input
                                type="date"
                                className="bg-slate-900 border border-slate-700 rounded-xl p-3"
                            />

                            <select className="bg-slate-900 border border-slate-700 rounded-xl p-3">
                                <option>Location</option>
                                <option>Kochi</option>
                                <option>Calicut</option>
                                <option>Bangalore</option>
                            </select>

                            <select className="bg-slate-900 border border-slate-700 rounded-xl p-3">
                                <option>Free/Paid</option>
                                <option>Free</option>
                                <option>Paid</option>
                            </select>

                            <select className="bg-slate-900 border border-slate-700 rounded-xl p-3">
                                <option>Online/Offline</option>
                                <option>Online</option>
                                <option>Offline</option>
                            </select>

                        </div> */}

                        {/* Event Cards */}

                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

                            {displayEvents.map((event) => (

                                <div
                                    key={event._id}
                                    className="group relative rounded-3xl p-[1px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:scale-105 transition duration-500"
                                >

                                    <div className="bg-slate-900 h-140 rounded-3xl overflow-hidden shadow-lg group-hover:shadow-cyan-500/40 transition">

                                        <img
                                            src={event?.bannerImage != "" ? `${axiosInstance.defaults.baseURL}/uploads/${event?.bannerImage}` : "https://static.vecteezy.com/system/resources/thumbnails/029/470/256/small_2x/ai-generated-ai-generative-stage-scene-event-night-live-concerp-show-spotlight-perfomance-background-graphic-art-photo.jpg"}
                                            alt={event.eventname}
                                            className="w-full h-56 object-cover"
                                        />

                                        <div className="p-6">

                                            <h2 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition">
                                                {event.eventname}
                                            </h2>

                                            <div className="space-y-3 text-slate-400">

                                                <div className="flex items-center gap-2">

                                                    <MapPin size={18} className="text-cyan-400" />

                                                    {event.venue}

                                                </div>

                                                <div className="flex items-center gap-2">

                                                    <CalendarDays size={18} className="text-cyan-400" />

                                                    {event.date}

                                                </div>

                                                <div className="flex items-center gap-2">

                                                    <User size={18} className="text-cyan-400" />

                                                    {event.organizername}

                                                </div>

                                            </div>

                                            <div className="flex justify-between items-center mt-6">

                                                <h3 className="text-cyan-400 text-2xl font-bold">
                                                    {event.price}
                                                </h3>

                                                <button className="px-5 py-2 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition"
                                                    onClick={() => { navigate('/users/:id/events/details') }}>

                                                    View Details

                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </section>

                </main>

            </div>

        </div>
    );
}