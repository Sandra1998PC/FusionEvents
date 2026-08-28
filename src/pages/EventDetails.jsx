import React, { useEffect, useState } from 'react'
import Banner from '../components/users/Banner';
import EventInfo from '../components/users/EventInfo';
import EventSchedule from '../components/users/EventSchedule';
import SpeakerCard from '../components/users/SpeakerCard';
import VenueMap from '../components/users/VenueMap';
import ReviewSection from '../components/users/ReviewSection';
import RegistrationBox from '../components/users/RegistrationBox';
import john from '../assets/John.png'
import sarah from '../assets/Sarah.png'
import { useNavigate, useParams } from 'react-router-dom';
import { viewEventAPI } from '../components/services/allAPIs';
import Swal from 'sweetalert2';

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
    const idObj = useParams()
    console.log(idObj.id)
    const [eventData, setEventData] = useState({})
    const navigate = useNavigate()
    const [eventDetails, setEventDetails] = useState({date : "",time : "",venue : "",date : "",price : "",description : "", organization : ""})
    console.log(eventDetails);

    const getEventDetails = async () => {
        try {
            const result = await viewEventAPI(idObj.id)
            if (result.status == 200) {
                const data = result.data
                console.log(`Event Data : `, data)
                setEventData(data)
            }
            else {
                Swal.fire({
                    title: "Something went Wrong !!!",
                    icon: "error"
                });
                navigate('users/events')
            }
        }
        catch (error) {
            console.log(error)
            Swal.fire({
                title: "Something went Wrong !!!",
                icon: "error"
            });
            navigate('users/events')
        }
    }

    useEffect(() => {
        getEventDetails()
    }, [])

    useEffect(() => {
        setEventDetails({...eventDetails,date : eventData.date,time : eventData.time,venue : eventData.venue,
            date : eventData.date,price : eventData.price,description : eventData.description,organization : eventData.organization})
    },[eventData])

    return (
        <div className="bg-slate-950 min-h-screen">

            <Banner banner={eventData.bannerImage} name={eventData.eventname} />

            <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-8">

                <div className="lg:col-span-2 space-y-10">

                    <EventInfo eventDetails={eventDetails} />

                    {/* <EventSchedule />

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

                    </div> */}

                    <VenueMap venue = {eventData.venue} />

                    <ReviewSection data = {{ eventname : eventData.eventname, eventId : eventData._id, organizerId : eventData.organizerId }} />

                </div>

                <RegistrationBox />

            </div>

        </div>
    )
}

export default EventDetails
