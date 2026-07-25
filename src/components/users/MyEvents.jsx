const events = [
  {
    title: "Tech Summit 2026",
    date: "25 Dec 2026",
    venue: "Kochi"
  },
  {
    title: "Startup Expo",
    date: "10 Jan 2027",
    venue: "Bangalore"
  }
];

export default function MyEvents() {

  return (

    <div className="space-y-5">

      {events.map((event, index) => (

        <div
          key={index}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition"
        >

          <h3 className="text-white text-xl font-semibold">
            {event.title}
          </h3>

          <p className="text-slate-400 mt-2">
            {event.date}
          </p>

          <p className="text-cyan-400">
            {event.venue}
          </p>

        </div>

      ))}

    </div>

  );

}