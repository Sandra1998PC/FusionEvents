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

const registrationData = [
  { month: "Jan", registrations: 40 },
  { month: "Feb", registrations: 65 },
  { month: "Mar", registrations: 78 },
  { month: "Apr", registrations: 92 },
  { month: "May", registrations: 125 },
  { month: "Jun", registrations: 160 },
];

const revenueData = [
  { month: "Jan", revenue: 45000 },
  { month: "Feb", revenue: 72000 },
  { month: "Mar", revenue: 98000 },
  { month: "Apr", revenue: 132000 },
  { month: "May", revenue: 168000 },
  { month: "Jun", revenue: 235000 },
];

const attendanceData = [
  { month: "Jan", attendance: 85 },
  { month: "Feb", attendance: 89 },
  { month: "Mar", attendance: 91 },
  { month: "Apr", attendance: 94 },
  { month: "May", attendance: 96 },
  { month: "Jun", attendance: 98 },
];

const cardStyle =
  "bg-slate-900/70 border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-xl hover:border-cyan-400 transition duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,.25)]";

export default function OrganizerCharts() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10">

      {/* Monthly Registrations */}

      <div className={cardStyle}>
        <h2 className="text-xl font-semibold text-white mb-6">
          Monthly Registrations
        </h2>

        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={registrationData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

            <XAxis
              dataKey="month"
              stroke="#94A3B8"
            />

            <YAxis stroke="#94A3B8" />

            <Tooltip
              contentStyle={{
                background: "#0F172A",
                border: "1px solid #06B6D4",
                borderRadius: "12px",
              }}
            />

            <Legend />

            <Line
              type="monotone"
              dataKey="registrations"
              stroke="#22D3EE"
              strokeWidth={4}
              dot={{ r: 6 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Revenue */}

      <div className={cardStyle}>
        <h2 className="text-xl font-semibold text-white mb-6">
          Revenue
        </h2>

        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

            <XAxis
              dataKey="month"
              stroke="#94A3B8"
            />

            <YAxis stroke="#94A3B8" />

            <Tooltip
              contentStyle={{
                background: "#0F172A",
                border: "1px solid #22D3EE",
                borderRadius: "12px",
              }}
            />

            <Legend />

            <Bar
              dataKey="revenue"
              fill="#22D3EE"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Attendance */}

      <div className={`${cardStyle} xl:col-span-2`}>
        <h2 className="text-xl font-semibold text-white mb-6">
          Attendance
        </h2>

        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={attendanceData}>
            <defs>
              <linearGradient
                id="attendance"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#22D3EE"
                  stopOpacity={0.8}
                />

                <stop
                  offset="95%"
                  stopColor="#22D3EE"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

            <XAxis
              dataKey="month"
              stroke="#94A3B8"
            />

            <YAxis stroke="#94A3B8" />

            <Tooltip
              contentStyle={{
                background: "#0F172A",
                border: "1px solid #22D3EE",
                borderRadius: "12px",
              }}
            />

            <Legend />

            <Area
              type="monotone"
              dataKey="attendance"
              stroke="#22D3EE"
              strokeWidth={3}
              fill="url(#attendance)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}