import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

const usersData = [
  { month: "Jan", users: 120 },
  { month: "Feb", users: 220 },
  { month: "Mar", users: 340 },
  { month: "Apr", users: 510 },
  { month: "May", users: 760 },
  { month: "Jun", users: 980 },
];

const eventsData = [
  { month: "Jan", events: 10 },
  { month: "Feb", events: 18 },
  { month: "Mar", events: 25 },
  { month: "Apr", events: 36 },
  { month: "May", events: 48 },
  { month: "Jun", events: 60 },
];

const growthData = [
  { month: "Jan", growth: 18 },
  { month: "Feb", growth: 26 },
  { month: "Mar", growth: 38 },
  { month: "Apr", growth: 46 },
  { month: "May", growth: 58 },
  { month: "Jun", growth: 72 },
];

const revenueData = [
  { month: "Jan", revenue: 120000 },
  { month: "Feb", revenue: 185000 },
  { month: "Mar", revenue: 260000 },
  { month: "Apr", revenue: 340000 },
  { month: "May", revenue: 460000 },
  { month: "Jun", revenue: 590000 },
];

const card =
  "bg-slate-900/70 border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-xl";

export default function AdminCharts() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10">

      {/* Monthly Users */}
      <div className={card}>
        <h2 className="text-xl font-semibold mb-5 text-white">Monthly Users</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={usersData}>
            <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#94A3B8" />
            <YAxis stroke="#94A3B8" />
            <Tooltip />
            <Legend />
            <Line
              dataKey="users"
              stroke="#22D3EE"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Monthly Events */}
      <div className={card}>
        <h2 className="text-xl font-semibold mb-5 text-white">Monthly Events</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={eventsData}>
            <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#94A3B8" />
            <YAxis stroke="#94A3B8" />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="events"
              fill="#22D3EE"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Growth */}
      <div className={card}>
        <h2 className="text-xl font-semibold mb-5 text-white">Growth</h2>

        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={growthData}>
            <defs>
              <linearGradient id="growth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22D3EE" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#22D3EE" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#94A3B8" />
            <YAxis stroke="#94A3B8" />
            <Tooltip />
            <Legend />

            <Area
              dataKey="growth"
              stroke="#22D3EE"
              fill="url(#growth)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Revenue */}
      <div className={card}>
        <h2 className="text-xl font-semibold mb-5 text-white">Revenue</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#94A3B8" />
            <YAxis stroke="#94A3B8" />
            <Tooltip />
            <Legend />

            <Line
              dataKey="revenue"
              stroke="#10B981"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}