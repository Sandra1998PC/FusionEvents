import {
  Users,
  UserCheck,
  CalendarDays,
  IndianRupee,
  TrendingUp,
} from "lucide-react";

const cards = [
  {
    title: "Users",
    value: "12,486",
    icon: Users,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    growth: "+18%",
  },
  {
    title: "Organizers",
    value: "246",
    icon: UserCheck,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    growth: "+12%",
  },
  {
    title: "Events",
    value: "854",
    icon: CalendarDays,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    growth: "+32%",
  },
  {
    title: "Revenue",
    value: "₹12.8L",
    icon: IndianRupee,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    growth: "+25%",
  },
];

export default function AdminCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className={`relative overflow-hidden rounded-3xl border ${card.border}
            bg-slate-900/70 backdrop-blur-xl p-6
            hover:-translate-y-2
            hover:shadow-[0_0_30px_rgba(34,211,238,.2)]
            transition-all duration-500`}
          >
            <div
              className={`absolute -top-8 -right-8 w-28 h-28 rounded-full blur-3xl ${card.bg}`}
            />

            <div className="flex justify-between items-center relative z-10">
              <div>
                <p className="text-slate-400">{card.title}</p>

                <h2 className="text-3xl font-bold mt-2 text-white">
                  {card.value}
                </h2>

                <div className="flex items-center gap-2 mt-4 text-green-400">
                  <TrendingUp size={16} />
                  {card.growth}
                </div>
              </div>

              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center ${card.bg}`}
              >
                <Icon size={30} className={card.color} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}