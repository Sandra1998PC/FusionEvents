import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { addReviewAPI } from "../services/allAPIs";

export default function ReviewSection({data}) {
    const [stars, setStars] = useState(0)
    const [review, setReview] = useState("")
    const [userData, setUserData] = useState({})

    const onReviewSubmit = async () => {
        const input = {
            "eventname": data.eventname,
            "eventId": data.eventId,
            "userId": userData._id,
            "organizerId": data.organizerId,
            "stars": stars,
            "review": review
        }
        console.log(input);
        try {
            const result = await addReviewAPI(input)
            if (result.status == 200){
                Swal.fire({
                title: "Review Submitted Successfully!!!",
                icon: "success"
            });
            }
            else{
                Swal.fire({
                title: "Something went wrong!!!",
                icon: "error"
            });
            }
        }
        catch (error) {
            Swal.fire({
                title: "Something went wrong!!!",
                icon: "error"
            });
        }
        setStars(0)
        setReview("")
    }

    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem("user"))
        console.log("data : ", data)
        setUserData(data)
    }, [])

    return (

        <div className="bg-white/5 rounded-3xl border border-white/10 p-8">

            <h2 className="text-white text-3xl font-bold mb-6">
                Reviews
            </h2>

            <div className="flex gap-2 mb-6">

                {[1, 2, 3, 4, 5].map((star) => (

                    <Star
                        key={star}
                        className={stars >= star ? "fill-yellow-400 text-yellow-400 cursor-pointer hover:scale-110 transition"
                            : "fill-yellow-100 text-yellow-100 cursor-pointer hover:scale-110 transition"
                        }
                        onClick={() => setStars(star)}
                    />

                ))}

            </div>

            <textarea
                rows={5}
                placeholder="Write your review..."
                className="w-full bg-slate-900 rounded-xl p-4 text-white"
                value={review}
                onChange={(e) => setReview(e.target.value)}
            />

            <button className="mt-5 bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300"
            onClick={onReviewSubmit}>

                Submit Review

            </button>

        </div>

    )
}