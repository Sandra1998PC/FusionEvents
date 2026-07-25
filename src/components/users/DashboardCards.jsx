import {
  CalendarDays,
  Users,
  Ticket,
  Bell,
} from "lucide-react";

const cards = [
  {
    title: "Events Joined",
    count: 18,
    icon: Users,
    color: "text-cyan-400",
    glow: "hover:shadow-[0_0_25px_rgba(34,211,238,.35)]",
  },
  {
    title: "Upcoming Events",
    count: 6,
    icon: CalendarDays,
    color: "text-violet-400",
    glow: "hover:shadow-[0_0_25px_rgba(124,58,237,.35)]",
  },
  {
    title: "Tickets",
    count: 12,
    icon: Ticket,
    color: "text-green-400",
    glow: "hover:shadow-[0_0_25px_rgba(74,222,128,.35)]",
  },
  {
    title: "Notifications",
    count: 4,
    icon: Bell,
    color: "text-orange-400",
    glow: "hover:shadow-[0_0_25px_rgba(251,146,60,.35)]",
  },
];

export default function DashboardCards() {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card) => {

        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className={`group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 ${card.glow}`}
          >

            <div className="flex justify-between items-center">

              <div>

                <p className="text-slate-400">
                  {card.title}
                </p>

                <h2 className="text-4xl font-bold text-white mt-2">
                  {card.count}
                </h2>

              </div>

              <div
                className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center ${card.color} group-hover:scale-110 transition`}
              >
                <Icon size={30} />
              </div>

            </div>

          </div>
        );

      })}
    </div>
  );
}