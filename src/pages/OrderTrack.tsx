
import Header from "../components/Header";
import { useState } from "react";

const fakeStatuses = [
  "Order Received",
  "Preparing Pizza",
  "Baking",
  "Packing",
  "Out for Delivery",
  "Delivered"
];

export default function OrderTrack() {
  const [orderId, setOrderId] = useState("");
  const [stage, setStage] = useState<number|null>(null);

  function startTrack() {
    setStage(0);
    let curr = 0;
    const interval = setInterval(() => {
      curr++;
      setStage(curr);
      if (curr >= fakeStatuses.length-1) clearInterval(interval);
    }, 1300);
  }

  return (
    <div className="bg-pz-gray min-h-screen">
      <Header />
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-pzCard mt-14 p-8">
        <h1 className="text-pz-blue text-2xl font-bold mb-6 flex items-center gap-2">
          <span role="img" aria-label="track">🚚</span>
          Track Your Order
        </h1>
        <form
          className="flex flex-col sm:flex-row items-center gap-4 mb-8"
          onSubmit={e=>{e.preventDefault();startTrack();}}
        >
          <input
            className="border rounded px-4 py-2 flex-1 text-lg"
            value={orderId}
            onChange={e=>setOrderId(e.target.value)}
            placeholder="Enter Order ID (try 12345)"
            required
          />
          <button type="submit" className="rounded-btn bg-pz-blue text-white px-6 py-2 font-bold hover:bg-pz-red transition mt-2 sm:mt-0">
            Track
          </button>
        </form>
        {stage!==null && (
          <div className="flex flex-col gap-3 items-center">
            {fakeStatuses.map((status, i) => (
              <div key={status} className={`flex gap-3 items-center transition ${i<=stage?"text-pz-red":"text-gray-400"}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center border-2 font-bold ${i<=stage?"border-pz-red bg-pz-red/10":"border-gray-200"}`}>
                  {i+1}
                </div>
                <div className="text-lg">{status}</div>
              </div>
            ))}
            {stage === fakeStatuses.length-1 && <div className="mt-4 font-bold text-pz-blue text-xl">Delivered! Enjoy your meal 🍕</div>}
          </div>
        )}
      </div>
    </div>
  );
}
