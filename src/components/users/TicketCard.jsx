import {
  Calendar,
  MapPin,
  User,
  Armchair
} from "lucide-react";

// import qrCode from "../assets/qr-code.png";

export default function TicketCard({data}) {
console.log(data);

  return (

    <div className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-white/5 backdrop-blur-xl shadow-[0_0_35px_rgba(34,211,238,.15)]">

      {/* Decorative Glow */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="relative p-8">

        <div className="flex justify-between items-center mb-8">

          <div>

            <h2 className="text-3xl font-bold text-white">
              {data.eventname}
            </h2>

            {/* <p className="text-cyan-400 mt-2">
              Fusion Events
            </p> */}

          </div>

          {/* <img
            src={qrCode}
            alt="QR Code"
            className="w-32 h-32 rounded-lg bg-white p-2"
          /> */}

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="flex items-center gap-3">

            <User className="text-cyan-400"/>

            <div>

              <p className="text-slate-400 text-sm">
                Name
              </p>

              <h3 className="text-white">
                {data.name}
              </h3>

            </div>

          </div>

          <div>

            <p className="text-slate-400 text-sm">
              Ticket Number
            </p>

            <h3 className="text-white font-semibold">
              {`TI-${data._id}`}
            </h3>

          </div>

          {/* <div className="flex items-center gap-3">

            <Calendar className="text-cyan-400"/>

            <div>

              <p className="text-slate-400 text-sm">
                Date
              </p>

              <h3 className="text-white">
                25 December 2026
              </h3>

            </div>

          </div> */}

          {/* <div className="flex items-center gap-3">

            <Armchair className="text-cyan-400"/>

            <div>

              <p className="text-slate-400 text-sm">
                Seat
              </p>

              <h3 className="text-white">
                A-18
              </h3>

            </div>

          </div> */}

          <div className="md:col-span-2 flex items-center gap-3">

            <MapPin className="text-cyan-400"/>

            {/* <div>

              <p className="text-slate-400 text-sm">
                Venue
              </p>

              <h3 className="text-white">
                Kochi Marriott Hotel
              </h3>

            </div> */}

          </div>

        </div>

      </div>

      {/* Bottom Strip */}

      <div className="border-t border-dashed border-cyan-400/30 px-8 py-5 bg-cyan-500/5">

        <div className="flex justify-between">

          <span className="text-slate-400">
            Status
          </span>

          <span className="text-green-400 font-semibold">
            Confirmed
          </span>

        </div>

      </div>

    </div>

  );

}