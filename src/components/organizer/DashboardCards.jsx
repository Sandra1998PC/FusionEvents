import {
    CalendarDays,
    Users,
    IndianRupee,
    Clock3
} from "lucide-react";

const cards = [

    {
        title: "Events",
        value: "18",
        icon: CalendarDays,
        color: "text-cyan-400"
    },

    {
        title: "Participants",
        value: "2,450",
        icon: Users,
        color: "text-green-400"
    },

    {
        title: "Revenue",
        value: "₹2.8L",
        icon: IndianRupee,
        color: "text-yellow-400"
    },

    {
        title: "Pending Requests",
        value: "16",
        icon: Clock3,
        color: "text-red-400"
    }

];

export default function DashboardCards() {

    return (

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

            {

                cards.map((card, index) => {

                    const Icon = card.icon;

                    return (

                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-3xl p-6
                            hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,.3)]
                            transition"
                        >

                            <div className="flex justify-between">

                                <div>

                                    <p className="text-slate-400">

                                        {card.title}

                                    </p>

                                    <h2 className="text-4xl font-bold text-white mt-3">

                                        {card.value}

                                    </h2>

                                </div>

                                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center">

                                    <Icon
                                        className={card.color}
                                        size={28}
                                    />

                                </div>

                            </div>

                        </div>

                    );

                })

            }

        </div>

    );

}