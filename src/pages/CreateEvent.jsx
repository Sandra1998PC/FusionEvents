import { Calendar, Clock3, ImagePlus, Images, MapPin, X } from "lucide-react";
import { useEffect, useState } from "react";
import OrganizerSidebar from "../components/organizer/OrganizerSidebar";
import OrganizerHeader from "../components/organizer/OrganizerHeader";
import Swal from "sweetalert2";
import { addEventAPI } from "../components/services/allAPIs";

export default function CreateEvent() {
    const [banner, setBanner] = useState(null);
    const [gallery, setGallery] = useState([]);
    const [event, setEvent] = useState({
        eventname: "", category: "Technology", description: "", venue: "",
        date: "", time: "", price: 0, seats: 0, bannerImage: "", organizername: "", organizerId: ""
    })
    const [preview, setPreview] = useState("")
    console.log("event : ", event)

    const organizerData = () =>{
        const data = JSON.parse(sessionStorage.getItem("user"))
        console.log("data : ", data)
        setEvent({ ...event, organizername: data.username, organizerId: data._id })
    }

    useEffect(() => {
        organizerData()
    }, [])

    const handleBanner = (e) => {
        setBanner(e.target.files[0]);
        const imgFile = e.target.files[0]

        if (imgFile.type.startsWith("image/")) {
            setEvent({ ...event, bannerImage: imgFile })
            const imageURL = URL.createObjectURL(imgFile)
            console.log(imageURL);
            setPreview(imageURL)
        }
    };

    const handleGallery = (e) => {
        setGallery([...e.target.files]);
    };

    const imgClose = () => {
        setPreview("")
        setEvent({ ...event, bannerImage: "" })
    }


    const addEvent = async (e) => {
        e.preventDefault();
        organizerData()
        console.log("inside handle update")
        const { eventname, category, description, venue, date, time, price, seats, bannerImage, organizername, organizerId } = event;

        if (!eventname || !category || !description || !venue || !date || !time || !price || !seats
        ) {
            Swal.fire({
                title: "Please Fill the form Completely!!!",
                icon: "error"
            });
            return;
        }

        const reqBody = new FormData();

        reqBody.append("eventname", eventname);
        reqBody.append("category", category);
        reqBody.append("description", description);
        reqBody.append("venue", venue);
        reqBody.append("date", date);
        reqBody.append("time", time);
        reqBody.append("price", price);
        reqBody.append("seats", seats);
        reqBody.append("organizername", organizername);
        reqBody.append("organizerId", organizerId);

        if (bannerImage instanceof File) {
            reqBody.append("bannerImage", bannerImage);
        }

        try {
            const result = await addEventAPI(reqBody);

            if (result.status === 200) {
                Swal.fire({
                    title: "Event Added Successfully !!!",
                    icon: "success"
                });
                setEvent({
                    eventname: "", category: "Technology", description: "", venue: "",
                    date: "", time: "", price: 0, seats: 0, bannerImage: "", organizername: "", organizerId: ""
                })
                setPreview("")
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

    return (
        <div className="flex bg-slate-950 min-h-screen">

            <OrganizerSidebar />

            <main className="flex-1 lg:ml-72">

                <OrganizerHeader />

                <div className="p-8">

                    <div className="min-h-screen bg-[#020617] p-8 text-white">

                        {/* Heading */}

                        <div className="mb-10">
                            <h1 className="text-4xl font-bold">
                                Create Event
                            </h1>

                            <p className="text-slate-400 mt-2">
                                Create and publish a new event for Fusion Events.
                            </p>
                        </div>

                        {/* Form */}

                        <form className="bg-slate-900/70 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8">

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                                {/* Event Name */}

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Event Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter event name"
                                        value={event.eventname}
                                        onChange={(e) => setEvent({ ...event, eventname: e.target.value })}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none"
                                    />
                                </div>

                                {/* Category */}

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Category
                                    </label>

                                    <select
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none"
                                        value={event.category}
                                        onChange={(e) => setEvent({ ...event, category: e.target.value })}
                                    >
                                        <option>Technology</option>
                                        <option>Business</option>
                                        <option>Music</option>
                                        <option>Education</option>
                                        <option>Sports</option>
                                        <option>Art</option>
                                    </select>
                                </div>

                                {/* Description */}

                                <div className="lg:col-span-2">
                                    <label className="block mb-2 font-medium">
                                        Description
                                    </label>

                                    <textarea
                                        rows="5"
                                        placeholder="Write event description..."
                                        value={event.description}
                                        onChange={(e) => setEvent({ ...event, description: e.target.value })}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none resize-none"
                                    ></textarea>
                                </div>

                                {/* Venue */}

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Venue
                                    </label>

                                    <div className="relative">

                                        <MapPin
                                            className="absolute left-4 top-4 text-cyan-400"
                                            size={18}
                                        />

                                        <input
                                            type="text"
                                            placeholder="Venue"
                                            value={event.venue}
                                            onChange={(e) => setEvent({ ...event, venue: e.target.value })}
                                            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-3 focus:border-cyan-400 outline-none"
                                        />

                                    </div>
                                </div>

                                {/* Date */}

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Date
                                    </label>

                                    <div className="relative">

                                        <Calendar
                                            className="absolute left-4 top-4 text-cyan-400"
                                            size={18}
                                        />

                                        <input
                                            type="date"
                                            value={event.date}
                                            onChange={(e) => setEvent({ ...event, date: e.target.value.toString() })}
                                            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-3 focus:border-cyan-400 outline-none"
                                        />

                                    </div>
                                </div>

                                {/* Time */}

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Time
                                    </label>

                                    <div className="relative">

                                        <Clock3
                                            className="absolute left-4 top-4 text-cyan-400"
                                            size={18}
                                        />

                                        <input
                                            type="time"
                                            value={event.time}
                                            onChange={(e) => setEvent({ ...event, time: e.target.value.toString() })}
                                            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-3 focus:border-cyan-400 outline-none"
                                        />

                                    </div>
                                </div>

                                {/* Price */}

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Price (₹)
                                    </label>

                                    <input
                                        type="number"
                                        placeholder="500"
                                        value={event.price}
                                        onChange={(e) => setEvent({ ...event, price: e.target.value })}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none"
                                    />
                                </div>

                                {/* Seats */}

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Seats
                                    </label>

                                    <input
                                        type="number"
                                        placeholder="100"
                                        value={event.seats}
                                        onChange={(e) => setEvent({ ...event, seats: e.target.value })}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none"
                                    />
                                </div>

                                {/* Banner Upload */}

                                <div className="relative" >
                                    <label className="block mb-2 font-medium">
                                        Banner Upload
                                    </label>

                                    <label className="cursor-pointer flex flex-col items-center justify-center h-48 rounded-2xl 
                                     border-2 border-dashed border-cyan-500/30 hover:border-cyan-400 transition">
                                        {
                                            preview != "" ?
                                                (<img
                                                    src={preview}
                                                    alt="user"
                                                    className="w-100 h-100 md:w-28 md:h-28 border border-gray-300 object-cover"
                                                />) :
                                                (<ImagePlus
                                                    size={45}
                                                    className="text-cyan-400 mb-3"
                                                />)
                                        }

                                        <p className="text-slate-400">
                                            Click to upload banner
                                        </p>

                                        {banner && (
                                            <p className="text-cyan-400 mt-2">
                                                {banner.name}
                                            </p>
                                        )}

                                        <input
                                            type="file"
                                            hidden
                                            onChange={handleBanner}
                                        />
                                    </label>
                                    {
                                        preview != "" && < X className="absolute right-1 top-1 bg-red-500 text-white-400" onClick={imgClose} />
                                    }
                                </div>

                                {/* Gallery Upload */}

                                {/* <div>
                                    <label className="block mb-2 font-medium">
                                        Gallery Upload
                                    </label>

                                    <label className="cursor-pointer flex flex-col items-center justify-center h-48 rounded-2xl border-2 border-dashed border-cyan-500/30 hover:border-cyan-400 transition">

                                        <Images
                                            size={45}
                                            className="text-cyan-400 mb-3"
                                        />

                                        <p className="text-slate-400">
                                            Upload gallery images
                                        </p>

                                        {gallery.length > 0 && (
                                            <p className="text-cyan-400 mt-2">
                                                {gallery.length} Files Selected
                                            </p>
                                        )}

                                        <input
                                            type="file"
                                            multiple
                                            hidden
                                            onChange={handleGallery}
                                        />

                                    </label>
                                </div> */}

                            </div>

                            {/* Buttons */}

                            <div className="flex flex-wrap justify-center gap-5 mt-10">

                                {/* <button
                                    type="button"
                                    className="px-8 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition"
                                >
                                    Save Draft
                                </button> */}

                                <button
                                    type="submit"
                                    onClick={addEvent}
                                    className="px-8 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition shadow-[0_0_20px_rgba(34,211,238,.4)]"
                                >
                                    Publish Event
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </main>

        </div>

    );
}