import Sidebar from "../components/users/Sidebar";
import TicketActions from "../components/users/TicketActions";
import TicketCard from "../components/users/TicketCard";
import TopBar from "../components/users/TopBar";


export default function Ticket() {
    return (
        <div className="flex bg-slate-950">

            <Sidebar />

            <div className="flex-1">

                <TopBar />

                <main className="p-8">

                    <div className="min-h-screen bg-slate-950 py-16 px-6">
                        <div className="max-w-5xl mx-auto">

                            <h1 className="text-4xl font-bold text-center text-white mb-10">
                                My Event Ticket
                            </h1>

                            <div className="grid lg:grid-cols-3 gap-8">

                                <div className="lg:col-span-2">
                                    <TicketCard />
                                </div>

                                <TicketActions />

                            </div>

                        </div>
                    </div>

                </main>

            </div>

        </div>

    );
}