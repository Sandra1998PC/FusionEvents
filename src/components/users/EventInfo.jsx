import {
    Calendar,
    Clock,
    MapPin,
    User,
    IndianRupee
} from "lucide-react";

export default function EventInfo({eventDetails}) {

    return (

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-white mb-6">
                Event Details
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

                <div className="flex items-center gap-3">
                    <Calendar className="text-cyan-400" />
                    <p className="text-slate-300">
                        {eventDetails.date}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <Clock className="text-cyan-400" />
                    <p className="text-slate-300">
                        {eventDetails.time}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <MapPin className="text-cyan-400" />
                    <p className="text-slate-300">
                        {eventDetails.venue}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <IndianRupee className="text-cyan-400" />
                    <p className="text-slate-300">
                        {eventDetails.price}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <User className="text-cyan-400" />
                    <p className="text-slate-300">
                       {eventDetails.organization}
                    </p>
                </div>

            </div>

            <div className="mt-8">

                <h3 className="text-2xl text-white font-semibold mb-4">
                    Description
                </h3>

                <p className="text-slate-400 leading-8">

                    {eventDetails.description}

                </p>

            </div>

        </div>

    )
}