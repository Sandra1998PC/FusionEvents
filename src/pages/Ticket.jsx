import Swal from "sweetalert2";
import Sidebar from "../components/users/Sidebar";
import TicketActions from "../components/users/TicketActions";
import TicketCard from "../components/users/TicketCard";
import TopBar from "../components/users/TopBar";
import { useEffect, useState } from "react";
import { getUserTicketsAPI } from "../components/services/allAPIs";

export default function Ticket() {
    const [data, setData] = useState([]);
    const [userData, setUserData] = useState({});

    console.log("User ID:", userData?._id);
    console.log("Tickets:", data);

    const getTickets = async () => {
        try {
            const result = await getUserTicketsAPI(userData._id);

            console.log("API Result:", result);

            if (result.status === 200) {
                console.log("Ticket Data:", result.data);
                setData(result.data);
            } else {
                Swal.fire({
                    title: "Something went Wrong !!!",
                    icon: "error"
                });
            }
        } catch (error) {
            console.log(error);

            Swal.fire({
                title: "Something went Wrong !!!",
                icon: "error"
            });
        }
    };

    // Get logged-in user
    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("user"));

        console.log("Logged User:", user);

        if (user) {
            setUserData(user);
        }
    }, []);

    // Get tickets after user data is available
    useEffect(() => {
        if (userData?._id) {
            getTickets();
        }
    }, [userData]);

    return (
        <div className="flex min-h-screen bg-slate-950">

            <Sidebar />

            <div className="flex-1">

                <TopBar />

                <main className="p-8">

                    <div className="min-h-screen bg-slate-950 py-16 px-6">

                        <div className="max-w-5xl mx-auto">

                            <h1 className="text-4xl font-bold text-center text-white mb-10">
                                My Event Tickets
                            </h1>

                            {data.length > 0 ? (

                                data.map((item) => (
                                    <div
                                        className="grid lg:grid-cols-3 gap-8 mb-8"
                                        key={item._id}
                                    >

                                        <div className="lg:col-span-2">
                                            <TicketCard data={item} />
                                        </div>

                                        <TicketActions data={item} />

                                    </div>
                                ))

                            ) : (

                                <div className="text-center text-slate-400 py-20">
                                    <p className="text-xl">
                                        You haven't registered for any events yet.
                                    </p>
                                </div>

                            )}

                        </div>

                    </div>

                </main>

            </div>

        </div>
    );
}