import React from "react";
import { CheckCircle, CalendarDays, Ticket, ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

function PaymentSuccess() {

    const navigate = useNavigate();
    const location = useLocation();

    const event = location.state?.event;

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

            <div className="w-full max-w-xl">

                {/* Success Card */}
                <div className="bg-white/5 border border-green-400/20 rounded-3xl p-8 md:p-10 text-center shadow-[0_0_50px_rgba(34,197,94,0.08)]">

                    {/* Icon */}
                    <div className="flex justify-center mb-7">

                        <div className="w-24 h-24 rounded-full bg-green-400/10 border border-green-400/20 flex items-center justify-center">

                            <CheckCircle
                                size={55}
                                className="text-green-400"
                            />

                        </div>

                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Payment Successful!
                    </h1>

                    <p className="text-slate-400 mt-3">
                        Your payment has been completed successfully.
                        Your event registration is confirmed.
                    </p>


                    {/* Event Information */}
                    {event && (
                        <div className="mt-8 bg-slate-900/70 border border-white/10 rounded-2xl p-5 text-left">

                            <h2 className="text-xl font-semibold text-white mb-4">
                                {event.eventname}
                            </h2>

                            <div className="space-y-3 text-slate-400">

                                <div className="flex items-center gap-3">
                                    <CalendarDays
                                        size={18}
                                        className="text-cyan-400"
                                    />
                                    <span>
                                        {event.date}
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Ticket
                                        size={18}
                                        className="text-violet-400"
                                    />
                                    <span>
                                        Your ticket has been generated
                                    </span>
                                </div>

                            </div>

                        </div>
                    )}


                    {/* Payment Status */}
                    <div className="mt-6 p-4 rounded-xl bg-green-400/5 border border-green-400/10">

                        <p className="text-sm text-green-400">
                            ✓ Registration confirmed
                        </p>

                        <p className="text-xs text-slate-500 mt-1">
                            You can view your ticket from your profile.
                        </p>

                    </div>


                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">

                        <button
                            onClick={() => navigate("/users/events")}
                            className="flex-1 py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition"
                        >
                            Browse Events
                        </button>

                        <button
                            onClick={() => navigate("/users/tickets")}
                            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600 text-white font-semibold hover:scale-[1.02] transition flex items-center justify-center gap-2"
                        >
                            View Ticket
                            <ArrowRight size={18} />
                        </button>

                    </div>

                </div>

                {/* Footer */}
                <p className="text-center text-slate-600 text-sm mt-6">
                    Thank you for choosing FusionEvents ✦
                </p>

            </div>

        </div>
    );
}

export default PaymentSuccess;