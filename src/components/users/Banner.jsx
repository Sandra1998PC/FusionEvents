import React from 'react'
import EventDetails from '../../assets/eventDetails.png'

function Banner() {
    return (
        <div
            className="h-[420px] bg-bottom bg-right relative"
            style={{
               backgroundImage: `url(${EventDetails})`//,backgroundRepeat: 'no-repeat'
            }}
        >

            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">

                <div>

                    <h1 className="text-5xl font-bold text-white">
                        Tech Summit 2026
                    </h1>

                    <p className="text-slate-300 mt-4 text-lg">
                        The largest technology conference in Kerala.
                    </p>

                </div>

            </div>

        </div>

    )
}

export default Banner
