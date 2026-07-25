import React from 'react'

function RegistrationBox() {
    return (
        <div className="sticky top-24">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

                <h2 className="text-white text-2xl font-bold mb-6">
                    Register
                </h2>

                <label className="text-slate-300">
                    Ticket Type
                </label>

                <select className="w-full mt-2 mb-5 bg-slate-900 rounded-xl p-3 text-white">

                    <option>Standard</option>

                    <option>VIP</option>

                    <option>Student</option>

                </select>

                <label className="text-slate-300">
                    Quantity
                </label>

                <input
                    type="number"
                    defaultValue={1}
                    className="w-full mt-2 bg-slate-900 rounded-xl p-3 text-white"
                />

                <div className="flex justify-between mt-6">

                    <p className="text-slate-300">
                        Price
                    </p>

                    <p className="text-cyan-400 text-xl">
                        ₹999
                    </p>

                </div>

                <button className="mt-8 w-full py-4 rounded-xl bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300">

                    Register Now

                </button>

            </div>

        </div>
    )
}

export default RegistrationBox
