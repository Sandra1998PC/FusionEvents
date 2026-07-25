import React, { useState } from 'react'
import ProfileCard from '../components/users/ProfileCard';
import MyEvents from '../components/users/MyEvents';
import SavedEvents from '../components/users/SavedEvents';
import MyTickets from '../components/users/MyTickets';
import PaymentHistory from '../components/users/PaymentHistory';
import Sidebar from '../components/users/Sidebar';
import TopBar from '../components/users/TopBar';

function UserProfile() {
    const [activeTab, setActiveTab] = useState("events");
    return (
        <>
        <div className="flex bg-slate-950">

      <Sidebar />

      <div className="flex-1">

        <TopBar  />

        <main className="p-8">

           <div className="min-h-screen bg-slate-950 py-12 px-6">
    
                <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8">
    
                    <ProfileCard />
    
                    <div className="lg:col-span-3">
    
                        {/* Tabs */}
    
                        <div className="flex flex-wrap gap-3 mb-8">
    
                            <button
                                onClick={() => setActiveTab("events")}
                                className={`px-6 py-3 rounded-xl transition ${activeTab === "events"
                                        ? "bg-cyan-400 text-slate-900"
                                        : "bg-white/5 text-white"
                                    }`}
                            >
                                My Events
                            </button>
    
                            <button
                                onClick={() => setActiveTab("saved")}
                                className={`px-6 py-3 rounded-xl transition ${activeTab === "saved"
                                        ? "bg-cyan-400 text-slate-900"
                                        : "bg-white/5 text-white"
                                    }`}
                            >
                                Saved Events
                            </button>
    
                            <button
                                onClick={() => setActiveTab("tickets")}
                                className={`px-6 py-3 rounded-xl transition ${activeTab === "tickets"
                                        ? "bg-cyan-400 text-slate-900"
                                        : "bg-white/5 text-white"
                                    }`}
                            >
                                Tickets
                            </button>
    
                            <button
                                onClick={() => setActiveTab("payments")}
                                className={`px-6 py-3 rounded-xl transition ${activeTab === "payments"
                                        ? "bg-cyan-400 text-slate-900"
                                        : "bg-white/5 text-white"
                                    }`}
                            >
                                Payment History
                            </button>
    
                        </div>
    
                        {activeTab === "events" && <MyEvents />}
                        {activeTab === "saved" && <SavedEvents />}
                        {activeTab === "tickets" && <MyTickets />}
                        {activeTab === "payments" && <PaymentHistory />}
    
                    </div>
    
                </div>
    
            </div>

        </main>

      </div>

    </div>
        
           
        </>
    )
}

export default UserProfile
