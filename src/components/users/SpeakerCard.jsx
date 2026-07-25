import React from 'react'

function SpeakerCard({ speaker }) {
    return (
        <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden hover:border-cyan-400 duration-300">

            <img
                src={speaker.image}
                className="h-72 w-full object-cover"
            />

            <div className="p-6">

                <h3 className="text-white text-xl font-semibold">
                    {speaker.name}
                </h3>

                <p className="text-cyan-400 mt-2">
                    {speaker.designation}
                </p>

                <p className="text-slate-400">
                    {speaker.company}
                </p>

            </div>

        </div>
    )
}

export default SpeakerCard
