
import { Link } from "react-router-dom";

export default function ProductCard({pizza}:{pizza:any}) {
  return (
    <div className="bg-white rounded-xl shadow-pzCard p-5 flex flex-col items-center transition hover:scale-105 hover:shadow-lg">
      <img src={pizza.image} alt={pizza.name} className="rounded-xl object-cover w-40 h-40 mb-4 border-4 border-pz-gray"/>
      <div className="font-bold text-lg text-pz-blue mb-1">{pizza.name}</div>
      <div className="text-gray-600 text-sm text-center mb-2">{pizza.desc}</div>
      <div className="mb-3 font-semibold text-pz-red text-xl">${pizza.basePrice}</div>
      <Link to={`/menu/${pizza.id}`} className="w-full">
        <button className="w-full rounded-btn bg-pz-blue text-white py-2 font-bold uppercase tracking-wide hover:bg-pz-red transition">
          Customize
        </button>
      </Link>
    </div>
  );
}
