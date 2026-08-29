import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    Calendar,
    MapPin,
    User,
    CreditCard,
    ShieldCheck,
    ArrowLeft,
    CheckCircle,
} from "lucide-react";
import { loadStripe } from '@stripe/stripe-js';
import { makePaymentAPI } from "../services/allAPIs";
import Swal from "sweetalert2";

function RegisterEvent() {

    const location = useLocation();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({})

    // Example event data
    const event = location.state?.event || {
        eventname: "FutureTech Summit 2026",
        category: "Technology",
        venue: "Kochi, Kerala",
        date: "25 September 2026",
        price: 499,
        image: ""
    };

    const number = location.state?.number

    const [paymentMethod, setPaymentMethod] = useState("card");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        console.log(formData);
        
        if(!formData.name || !formData.email || !formData.phone){
            Swal.fire({
                            title: "Please enter valid details !!!",
                            icon: "error"
                        });
            return
        }
        console.log(import.meta.env.VITE_Stripe_Publish_key);

        try {
            const stripe = await loadStripe(
                import.meta.env.VITE_Stripe_Publish_key
            );
            console.log(stripe);
            const data = {eventname : event.eventname, eventId : event._id, userId : userData._id, organizerId : event.organizerId, 
                name : formData.name, email : formData.email, phone : formData.phone, price : event.price, quantity : number}
            console.log(data);
            const result = await makePaymentAPI(data)
            console.log(result);

            window.location.href = result.data.checkoutURL
        }
        catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem("user"))
        console.log("data : ", data)
        setUserData(data)
    }, [])


    return (
        <div className="min-h-screen bg-slate-950 text-white">

            {/* Header */}
            <div className="border-b border-cyan-500/20 bg-slate-950/90 backdrop-blur-xl">

                <div className="max-w-7xl mx-auto px-6 py-5">

                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition"
                    >
                        <ArrowLeft size={20} />
                        Back to Event
                    </button>

                </div>

            </div>


            {/* Main */}
            <main className="max-w-7xl mx-auto px-6 py-10">

                <div className="mb-10">

                    <p className="text-cyan-400 uppercase tracking-widest text-sm font-semibold">
                        Event Registration
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold mt-2">
                        Register & Pay
                    </h1>

                    <p className="text-slate-400 mt-3">
                        Complete your details and secure your place at the event.
                    </p>

                </div>


                <div className="grid lg:grid-cols-3 gap-8">


                    {/* LEFT SIDE */}
                    <div className="lg:col-span-2 space-y-8">


                        {/* Event Card */}
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                            <h2 className="text-xl font-semibold mb-5">
                                Event Details
                            </h2>

                            <div className="flex flex-col md:flex-row gap-6">

                                <div className="w-full md:w-52 h-36 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 flex items-center justify-center">

                                    {event.image ? (
                                        <img
                                            src={event.image}
                                            alt={event.eventname}
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                    ) : (
                                        <Calendar
                                            size={45}
                                            className="text-cyan-400"
                                        />
                                    )}

                                </div>


                                <div className="flex-1">

                                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-sm">
                                        {event.category}
                                    </span>

                                    <h3 className="text-2xl font-bold mt-3">
                                        {event.eventname}
                                    </h3>

                                    <div className="space-y-2 mt-4 text-slate-400">

                                        <p className="flex items-center gap-2">
                                            <Calendar size={17} className="text-cyan-400" />
                                            {event.date}
                                        </p>

                                        <p className="flex items-center gap-2">
                                            <MapPin size={17} className="text-cyan-400" />
                                            {event.venue}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* Personal Details */}
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                            <div className="flex items-center gap-3 mb-6">

                                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                                    <User className="text-cyan-400" size={20} />
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold">
                                        Participant Details
                                    </h2>

                                    <p className="text-sm text-slate-500">
                                        Enter your contact information
                                    </p>
                                </div>

                            </div>


                            <form className="space-y-5">

                                <div>

                                    <label className="block text-sm text-slate-300 mb-2">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 outline-none focus:border-cyan-400 transition"
                                    />

                                </div>


                                <div className="grid md:grid-cols-2 gap-5">

                                    <div>

                                        <label className="block text-sm text-slate-300 mb-2">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 outline-none focus:border-cyan-400 transition"
                                        />

                                    </div>


                                    <div>

                                        <label className="block text-sm text-slate-300 mb-2">
                                            Phone Number
                                        </label>

                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 XXXXX XXXXX"
                                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 outline-none focus:border-cyan-400 transition"
                                        />

                                    </div>

                                </div>

                            </form>

                        </div>


                        

                    </div>


                    {/* RIGHT SIDE - ORDER SUMMARY */}
                    <div>

                        <div className="lg:sticky lg:top-8 bg-white/5 border border-white/10 rounded-3xl p-6">

                            <h2 className="text-xl font-semibold mb-6">
                                Order Summary
                            </h2>


                            <div className="space-y-4">

                                <div className="flex justify-between text-slate-400">
                                    <span>Ticket Price</span>
                                    <span>₹{event.price}</span>
                                </div>

                                <div className="flex justify-between text-slate-400">
                                    <span>Platform Fee</span>
                                    <span>₹0</span>
                                </div>

                                <div className="border-t border-white/10 pt-4">

                                    <div className="flex justify-between">

                                        <span className="text-lg font-semibold">
                                            Total
                                        </span>

                                        <span className="text-2xl font-bold text-cyan-400">
                                            ₹{event.price}
                                        </span>

                                    </div>

                                </div>

                            </div>


                            <button
                                onClick={handlePayment}
                                className="w-full mt-7 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600 font-semibold text-white hover:scale-[1.02] transition shadow-[0_0_25px_rgba(0,194,255,0.35)]"
                            >
                                Pay ₹{event.price}
                            </button>


                            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 mt-5">

                                <ShieldCheck size={15} className="text-green-400" />

                                Secure payment & encrypted transaction

                            </div>


                            <div className="mt-6 p-4 rounded-xl bg-green-500/5 border border-green-500/10">

                                <div className="flex gap-3">

                                    <CheckCircle
                                        size={18}
                                        className="text-green-400 shrink-0"
                                    />

                                    <p className="text-xs text-slate-400">
                                        After successful payment, your event
                                        registration and ticket will be available
                                        in your profile.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </main>

        </div>
    );
}

export default RegisterEvent;
