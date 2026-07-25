import { Star } from "lucide-react";

export default function ReviewSection() {

    return (

        <div className="bg-white/5 rounded-3xl border border-white/10 p-8">

            <h2 className="text-white text-3xl font-bold mb-6">
                Reviews
            </h2>

            <div className="flex gap-2 mb-6">

                {[1, 2, 3, 4, 5].map((star) => (

                    <Star
                        key={star}
                        className="fill-yellow-400 text-yellow-400 cursor-pointer hover:scale-110 transition"
                    />

                ))}

            </div>

            <textarea
                rows={5}
                placeholder="Write your review..."
                className="w-full bg-slate-900 rounded-xl p-4 text-white"
            />

            <button className="mt-5 bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300">

                Submit Review

            </button>

        </div>

    )
}