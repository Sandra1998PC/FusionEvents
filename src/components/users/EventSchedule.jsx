const schedule = [

    {
        time: "9:00 AM",
        title: "Registration"
    },
    {
        time: "10:00 AM",
        title: "Keynote"
    },
    {
        time: "12:00 PM",
        title: "Lunch"
    },
    {
        time: "2:00 PM",
        title: "Workshop"
    }

];

export default function EventSchedule() {

    return (

        <div className="bg-white/5 rounded-3xl p-8 border border-white/10">

            <h2 className="text-3xl font-bold text-white mb-8">
                Schedule
            </h2>

            <div className="space-y-8">

                {schedule.map((item, index) => (

                    <div
                        key={index}
                        className="flex gap-6 items-start"
                    >

                        <div className="text-cyan-400 font-semibold w-24">
                            {item.time}
                        </div>

                        <div className="w-4 h-4 bg-cyan-400 rounded-full mt-1" />

                        <div className="flex-1 border-l border-cyan-400 pl-6">

                            <h3 className="text-white font-semibold">

                                {item.title}

                            </h3>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    )

}