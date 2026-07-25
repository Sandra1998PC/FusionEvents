import {
  CheckCircle,
  Download,
  XCircle,
} from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Registered for Tech Summit",
    time: "2 hours ago",
    icon: CheckCircle,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    id: 2,
    title: "Downloaded Ticket",
    time: "Yesterday",
    icon: Download,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    id: 3,
    title: "Cancelled Registration",
    time: "3 days ago",
    icon: XCircle,
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
  },
];

const RecentActivity = () => {
  return (
    <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-lg mt-20">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">
          Recent Activity
        </h2>

        <span className="text-xs text-slate-400">
          Last 7 Days
        </span>
      </div>

      {/* Activity List */}
      <div className="space-y-4">

        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className={`flex items-center gap-4 rounded-2xl p-4 border ${activity.border} ${activity.bg}
              hover:scale-[1.02] transition duration-300`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${activity.bg}`}
              >
                <Icon className={`${activity.color}`} size={22} />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-white font-medium">
                  {activity.title}
                </h3>

                <p className="text-slate-400 text-sm">
                  {activity.time}
                </p>
              </div>

              {/* Status */}
              <span
                className={`text-xs px-3 py-1 rounded-full ${activity.bg} ${activity.color}`}
              >
                Completed
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;