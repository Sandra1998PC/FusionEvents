import React from 'react'
import Banner from '../components/users/Banner';
import EventInfo from '../components/users/EventInfo';
import EventSchedule from '../components/users/EventSchedule';
import SpeakerCard from '../components/users/SpeakerCard';
import VenueMap from '../components/users/VenueMap';
import ReviewSection from '../components/users/ReviewSection';
import RegistrationBox from '../components/users/RegistrationBox';
import john from '../assets/John.png'
import sarah from '../assets/Sarah.png'

const speakers = [
    {
        id: 1,
        image: john,
        name: "John Anderson",
        designation: "Senior Software Engineer",
        company: "Google"
    },
    {
        id: 2,
        image: sarah,
        name: "Sarah Williams",
        designation: "UI/UX Designer",
        company: "Adobe"
    }
];

function EventDetails() {
    return (
        <div className="bg-slate-950 min-h-screen">

            <Banner />

            <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-8">

                <div className="lg:col-span-2 space-y-10">

                    <EventInfo />

                    <EventSchedule />

                    <div>

                        <h2 className="text-3xl font-bold text-white mb-6">
                            Speakers
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">

                            {speakers.map((speaker) =>

                                <SpeakerCard
                                    key={speaker.id}
                                    speaker={speaker}
                                />

                            )}

                        </div>

                    </div>

                    <VenueMap />

                    <ReviewSection />

                </div>

                <RegistrationBox />

            </div>

        </div>
    )
}

export default EventDetails
