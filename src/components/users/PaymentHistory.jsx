const payments = [
  {
    event: "Tech Summit",
    amount: "₹999",
    date: "25 Dec 2026",
    status: "Paid"
  },
  {
    event: "Startup Expo",
    amount: "₹799",
    date: "12 Jan 2027",
    status: "Paid"
  }
];

export default function PaymentHistory() {

  return (

    <div className="bg-white/5 rounded-3xl border border-white/10 p-8">

      <h2 className="text-white text-2xl font-semibold mb-6">
        Payment History
      </h2>

      <table className="w-full">

        <thead>

          <tr className="text-left text-cyan-400">

            <th className="pb-4">Event</th>
            <th className="pb-4">Amount</th>
            <th className="pb-4">Date</th>
            <th className="pb-4">Status</th>

          </tr>

        </thead>

        <tbody>

          {payments.map((payment, index) => (

            <tr
              key={index}
              className="border-t border-white/10"
            >

              <td className="py-4 text-white">
                {payment.event}
              </td>

              <td className="text-white">
                {payment.amount}
              </td>

              <td className="text-slate-400">
                {payment.date}
              </td>

              <td className="text-green-400">
                {payment.status}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}