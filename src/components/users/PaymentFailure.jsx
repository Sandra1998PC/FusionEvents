import React from "react";
import { XCircle, RefreshCcw, ArrowLeft, HelpCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

function PaymentFailure() {

    const navigate = useNavigate();
    const location = useLocation();

    const event = location.state?.event;

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

            <div className="w-full max-w-xl">

                {/* Failure Card */}
                <div className="bg-white/5 border border-red-400/20 rounded-3xl p-8 md:p-10 text-center shadow-[0_0_50px_rgba(239,68,68,0.08)]">

                    {/* Icon */}
                    <div className="flex justify-center mb-7">

                        <div className="w-24 h-24 rounded-full bg-red-400/10 border border-red-400/20 flex items-center justify-center">

                            <XCircle
                                size={55}
                                className="text-red-400"
                            />

                        </div>

                    </div>


                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Payment Failed
                    </h1>

                    <p className="text-slate-400 mt-3">
                        Unfortunately, your payment could not be completed.
                        Your registration has not been confirmed.
                    </p>


                    {/* Event */}
                    {event && (
                        <div className="mt-8 bg-slate-900/70 border border-white/10 rounded-2xl p-5 text-left">

                            <p className="text-sm text-slate-500">
                                Event
                            </p>

                            <h2 className="text-xl font-semibold text-white mt-1">
                                {event.eventname}
                            </h2>

                        </div>
                    )}


                    {/* Error Message */}
                    <div className="mt-6 p-4 rounded-xl bg-red-400/5 border border-red-400/10 flex items-start gap-3 text-left">

                        <HelpCircle
                            size={20}
                            className="text-red-400 mt-0.5 shrink-0"
                        />

                        <div>

                            <p className="text-sm text-red-400 font-medium">
                                What happened?
                            </p>

                            <p className="text-xs text-slate-500 mt-1">
                                Your payment may have been cancelled,
                                declined, or interrupted. No registration
                                has been created.
                            </p>

                        </div>

                    </div>


                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">

                        <button
                            onClick={() => navigate(-1)}
                            className="flex-1 py-3 rounded-xl border border-white/10 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition flex items-center justify-center gap-2"
                        >
                            <ArrowLeft size={18} />
                            Back
                        </button>

                        <button
                            onClick={() => navigate("/register-event", {
                                state: { event }
                            })}
                            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600 text-white font-semibold hover:scale-[1.02] transition flex items-center justify-center gap-2"
                        >
                            <RefreshCcw size={18} />
                            Try Again
                        </button>

                    </div>

                </div>


                {/* Footer */}
                <p className="text-center text-slate-600 text-sm mt-6">
                    Need help? Contact FusionEvents support.
                </p>

            </div>

        </div>
    );
}

export default PaymentFailure;