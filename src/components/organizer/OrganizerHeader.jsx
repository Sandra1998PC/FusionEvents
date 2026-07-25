import {
    Bell,
    Search,
    UserCircle
} from "lucide-react";

export default function OrganizerHeader() {

    return (

        <header className="sticky top-0 bg-slate-950/90 backdrop-blur-lg border-b border-white/10 p-6 flex justify-between items-center z-50">

            <div>

                <h1 className="text-3xl font-bold text-white">

                    Dashboard

                </h1>

                <p className="text-slate-400">

                    Welcome back, Organizer 👋

                </p>

            </div>

            <div className="flex items-center gap-5">

                <div className="relative">

                    <Search
                        className="absolute left-4 top-3 text-slate-400"
                        size={18}
                    />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-white/5 border border-white/10 rounded-xl
                        pl-12 pr-4 py-3 text-white outline-none
                        focus:border-cyan-400"
                    />

                </div>

                <button className="w-48 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white">

                    {/* <Bell className="text-yellow-400" /> */}
                    Notifications

                </button>

                <UserCircle
                    className="text-cyan-400"
                    size={40}
                />

            </div>

        </header>

    );

}