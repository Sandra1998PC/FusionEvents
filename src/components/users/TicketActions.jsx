import {
  Download,
  Share2,
  Trash2
} from "lucide-react";
import Swal from "sweetalert2";
import { removeTicketAPI } from "../services/allAPIs";

export default function TicketActions({ data }) {
  const cancelTicket = async () => {
    try {
      const result = await removeTicketAPI(data._id)
      
      if (result.status == 200) {
        Swal.fire({
          title: "Ticket Canceled Successfully",
          icon: "success"
        });
      }
      else {
        Swal.fire({
          title: "Something went Wrong !!!",
          icon: "error"
        });
      }
    }
    catch (error) {
      Swal.fire({
        title: "Something went Wrong !!!",
        icon: "error"
      });
    }
  }
  return (

    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 h-fit sticky top-24">

      <h2 className="text-white text-2xl font-semibold mb-6">
        Actions
      </h2>

      {/* <button className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition mb-4">

        <Download size={20}/>

        Download PDF

      </button>

      <button className="w-full flex items-center justify-center gap-3 py-4 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition mb-4">

        <Share2 size={20}/>

        Share Ticket

      </button> */}

      <button className="w-full flex items-center justify-center gap-3 py-4 rounded-xl border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition"
      onClick={cancelTicket}>

        <Trash2 size={20} />

        Cancel Ticket

      </button>

    </div>

  );

}