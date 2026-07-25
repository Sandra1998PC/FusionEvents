import React from 'react'

function VenueMap() {
    return (
        <div className="bg-white/5 p-8 rounded-3xl border border-white/10">

            <h2 className="text-white text-3xl font-bold mb-6">
                Venue
            </h2>

            <iframe
                title="Venue Map"
                src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_LINK"
                className="rounded-2xl w-full h-96"
                loading="lazy"
            />

        </div>
    )
}

export default VenueMap
