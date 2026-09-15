import React, { useEffect, useState } from 'react'
import { Eye, Pencil, Trash2 } from "lucide-react";
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import Swal from 'sweetalert2';
import { deleteEventAPI, getAllEvents, updateEventStatusAPI } from '../services/allAPIs';
import ViewEventModal from './ViewEventModal';
import AdminEventStatusModal from './AdminEventStatusModal';
import Loader from '../../pages/Loader';

const badgeColor = (status) => {
    switch (status) {
        case "Active":
        case "Upcoming":
            return "bg-emerald-500/20 text-emerald-400";

        case "Pending":
            return "bg-yellow-500/20 text-yellow-400";

        case "Cancelled":
            return "bg-red-500/20 text-red-400";

        case "Live":
            return "bg-cyan-500/20 text-cyan-400";

        case "Completed":
            return "bg-purple-500/20 text-purple-400";

        default:
            return "bg-slate-500/20 text-slate-300";
    }
};

const approvalBadgeColor = (status) => {
    switch (status) {
        case "Approved":
            return "bg-green-500/20 text-green-400";
        case "Rejected":
            return "bg-red-500/20 text-red-400";
        default:
            return "bg-slate-500/20 text-slate-300";
    }
};

const iconBtn =
    "p-2 rounded-lg transition hover:bg-slate-700 hover:text-cyan-400";

function AdminOrganizer() {
    const [events, setEvents] = useState([])
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showStatusModal, setShowStatusModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 5;
    const [loader,setLoader] = useState(false)

    const handleEditEvent = (event) => {
        setSelectedEvent(event);
        setShowStatusModal(true);
    };

    const handleViewEvent = (event) => {
        setSelectedEvent(event);
        setShowModal(true);
    };
    const allEvents = async () => {
        setLoader(true)
        try {
            const result = await getAllEvents()
            console.log(result);
            if (result.status == 200) {
                setEvents(result.data)
            }
            else {
                Swal.fire({
                    title: "Something Went wrong !!!",
                    icon: "error"
                });
            }
        }
        catch (error) {
            Swal.fire({
                title: "Something Went wrong !!!",
                icon: "error"
            });
        }
        setLoader(false)
    }

    const handleStatusUpdate = async (eventId, status) => {
        setLoader(true)
        try {
            console.log("Event ID:", eventId);
            console.log("New Status:", status);
            const result = await updateEventStatusAPI(eventId, status);
            if (result.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Status Updated",
                    text: `Event has been ${status.toLowerCase()}.`,
                    timer: 1500,
                    showConfirmButton: false
                });
                setShowStatusModal(false);
                // Refresh events
                allEvents();
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Update Failed",
                text: "Something went wrong while updating the event."
            });
        }
        setLoader(false)
    };

     const deleteEvent = async (eventID) => {
        setLoader(true)
            try{
                const deleteResult = await deleteEventAPI(eventID);
                console.log("Delete API Result:", deleteResult);
                if (deleteResult.status === 200) {
                    Swal.fire({
                        title: "Event Deleted Successfully",
                        icon: "success"
                    });
                    allEvents();
                } else {
                    Swal.fire({
                        title: "Something Went Wrong !!!",
                        icon: "error"
                    });
                }

            }catch (error) {
                console.log("API Error:", error);
                Swal.fire({
                    title: "Something Went Wrong !!!",
                    icon: "error"
                });
            }
            setLoader(false)
        }

    const totalPages = Math.ceil(events.length / eventsPerPage);

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;

    const currentEvents = events.slice(
        indexOfFirstEvent,
        indexOfLastEvent
    );

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        allEvents()
    }, [])
    return (
        <div className="flex bg-slate-950 min-h-screen">

            <AdminSidebar />
            {loader ? (<Loader/>) :
            (<main className="flex-1 lg:ml-72">

                <AdminHeader />

                <div className="p-8">
                    {showModal && (
                        <ViewEventModal
                            event={selectedEvent}
                            onClose={() => setShowModal(false)}
                        />
                    )}

                    {showStatusModal && (
                        <AdminEventStatusModal
                            event={selectedEvent}
                            onClose={() => setShowStatusModal(false)}
                            onStatusUpdate={handleStatusUpdate}
                        />
                    )}

                    <div className="min-h-screen bg-[#020617] text-white p-8">

                        <div className="space-y-10">
                            {/* EVENTS TABLE */}

                            <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">

                                <div className="px-8 py-6 border-b border-slate-800 flex items-center justify-between">

                                    <h2 className="text-xl font-bold text-white">
                                        Events
                                    </h2>

                                    <button className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition">
                                        View All
                                    </button>

                                </div>

                                <div className="overflow-x-auto">

                                    <table className="w-full">

                                        <thead className="bg-slate-950">

                                            <tr className="text-slate-400">

                                                <th className="text-left px-6 py-4">
                                                    Title
                                                </th>

                                                <th className="text-left px-6 py-4">
                                                    Organizer
                                                </th>

                                                <th className="text-left px-6 py-4">
                                                    Participants
                                                </th>

                                                {/* <th className="text-left px-6 py-4">
                                                    Revenue
                                                </th> */}

                                                <th className="text-left px-6 py-4">
                                                    Status
                                                </th>

                                                <th className="text-left px-6 py-4">
                                                    Approval Status
                                                </th>

                                                <th className="text-center px-6 py-4">
                                                    Actions
                                                </th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            {currentEvents.map((event) => (

                                                <tr
                                                    key={event._id}
                                                    className="border-b border-slate-800 hover:bg-slate-800/40 transition"
                                                >
                                                    <td className="px-6 py-5 text-white font-medium">
                                                        {event.eventname}
                                                    </td>

                                                    <td className="px-6 py-5 text-slate-300">
                                                        {event.organizername}
                                                    </td>

                                                    <td className="px-6 py-5 text-slate-300">
                                                        {event.ticketsSold}
                                                    </td>

                                                    {/* <td className="px-6 py-5 text-cyan-400 font-semibold">
                                                        {event.revenue}
                                                    </td> */}

                                                    <td className="px-6 py-5">

                                                        <span
                                                            className={`px-4 py-1 rounded-full text-sm font-medium ${badgeColor(
                                                                event.status
                                                            )}`}
                                                        >
                                                            {event.status}
                                                        </span>

                                                    </td>

                                                    <td className="px-6 py-5">

                                                        <span
                                                            className={`px-4 py-1 rounded-full text-sm font-medium ${approvalBadgeColor(
                                                                event.approvalstatus
                                                            )}`}
                                                        >
                                                            {event.approvalstatus}
                                                        </span>

                                                    </td>

                                                    <td className="px-6 py-5">

                                                        <div className="flex justify-center gap-3">

                                                            <button className={iconBtn} onClick={() => handleViewEvent(event)}>
                                                                <Eye size={18} />
                                                            </button>

                                                            <button className={iconBtn} onClick={() => handleEditEvent(event)}>
                                                                <Pencil size={18} />
                                                            </button>

                                                            <button className="p-2 rounded-lg hover:bg-red-500/20 hover:text-red-400 transition"
                                                            onClick={() => deleteEvent(event._id)}>
                                                                <Trash2 size={18} />
                                                            </button>

                                                        </div>

                                                    </td>

                                                </tr>

                                            ))}

                                        </tbody>

                                    </table>
                                    <div className="flex items-center justify-between border-t border-slate-800 px-6 py-4">

                                        {/* Showing information */}
                                        <p className="text-sm text-slate-400">
                                            Showing{" "}
                                            <span className="text-white font-medium">
                                                {events.length === 0 ? 0 : indexOfFirstEvent + 1}
                                            </span>
                                            {" "}to{" "}
                                            <span className="text-white font-medium">
                                                {Math.min(indexOfLastEvent, events.length)}
                                            </span>
                                            {" "}of{" "}
                                            <span className="text-white font-medium">
                                                {events.length}
                                            </span>
                                            {" "}events
                                        </p>

                                        {/* Pagination */}
                                        <div className="flex items-center gap-2">

                                            {/* Previous */}
                                            <button
                                                onClick={() => setCurrentPage(currentPage - 1)}
                                                disabled={currentPage === 1}
                                                className="px-3 py-2 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition"
                                            >
                                                Previous
                                            </button>

                                            {/* Page Numbers */}
                                            {Array.from({ length: totalPages }, (_, index) => (
                                                <button
                                                    key={index + 1}
                                                    onClick={() => handlePageChange(index + 1)}
                                                    className={`w-9 h-9 rounded-lg transition ${currentPage === index + 1
                                                            ? "bg-cyan-500 text-white"
                                                            : "border border-slate-700 text-slate-300 hover:bg-slate-800"
                                                        }`}
                                                >
                                                    {index + 1}
                                                </button>
                                            ))}

                                            {/* Next */}
                                            <button
                                                onClick={() => setCurrentPage(currentPage + 1)}
                                                disabled={currentPage === totalPages || totalPages === 0}
                                                className="px-3 py-2 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition"
                                            >
                                                Next
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </main>)}

        </div>
    )
}

export default AdminOrganizer
