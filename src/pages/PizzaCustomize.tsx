
import { useParams, useNavigate } from "react-router-dom";
import pizzas from "../data/pizzas.json";
import { useState } from "react";
import Header from "../components/Header";

const CRUSTS = [
  { name: "Classic", price: 0 },
  { name: "Cheese Burst", price: 2 },
  { name: "Thin Crust", price: 1 }
];

const SIZES = [
  { name: "Regular", factor: 1 },
  { name: "Medium", factor: 1.5 },
  { name: "Large", factor: 2 }
];

const TOPPINGS = [
  { name: "Extra Cheese", price: 1 },
  { name: "Mushroom", price: 1 },
  { name: "Jalapenos", price: 1 },
  { name: "Onion", price: 0.5 },
  { name: "Tomato", price: 0.5 },
  { name: "Chicken", price: 2 }
];

const isVeg = (type:any) => type === "Veg" || type === "Desserts";

export default function PizzaCustomize() {
  const { pizzaId } = useParams();
  const pizza = pizzas.find(p => String(p.id) === pizzaId);
  const nav = useNavigate();

  const [crust, setCrust] = useState(CRUSTS[0]);
  const [size, setSize] = useState(SIZES[0]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [qty, setQty] = useState(1);

  if (!pizza) return <div>Pizza not found.</div>;

  const base = pizza.basePrice * size.factor + crust.price;
  const toppingsTotal = selectedToppings.map(name => TOPPINGS.find(t=>t.name===name)!.price).reduce((a,b)=>a+b, 0);

  const total = (base + toppingsTotal) * qty;

  function toggleTopping(name:string) {
    setSelectedToppings(ts => ts.includes(name) ? ts.filter(t=>t!==name) : [...ts, name]);
  }

  return (
    <div className="bg-pz-gray min-h-screen pb-12">
      <Header />
      <main className="max-w-[900px] mx-auto p-6 flex flex-col md:flex-row mt-8 gap-8 bg-white rounded-xl shadow-pzCard">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-72 h-72 object-cover rounded-xl border-8 border-pz-yellow mx-auto"
        />
        <div className="flex-1 flex flex-col">
          <h2 className="text-3xl font-bold text-pz-blue mb-1">{pizza.name}</h2>
          <div className="text-gray-700">{pizza.desc}</div>
          {/* Crust */}
          <div className="mt-5 font-semibold">Crust</div>
          <div className="flex gap-4 mt-1">
            {CRUSTS.map(c =>
              <button key={c.name}
                onClick={()=>setCrust(c)}
                className={`rounded-btn px-4 py-2 text-base border transition ${crust.name===c.name?"bg-pz-blue text-white border-pz-blue":"bg-white text-pz-blue border-pz-blue/50 hover:bg-pz-blue/5"}`}
              >{c.name} {c.price>0 ? <>+${c.price}</> : null}</button>
            )}
          </div>
          {/* Size */}
          <div className="mt-4 font-semibold">Size</div>
          <div className="flex gap-4 mt-1">
            {SIZES.map(s =>
              <button key={s.name}
                onClick={()=>setSize(s)}
                className={`rounded-btn px-4 py-2 text-base border transition ${size.name===s.name?"bg-pz-blue text-white border-pz-blue":"bg-white text-pz-blue border-pz-blue/50 hover:bg-pz-blue/5"}`}
              >{s.name} {s.factor>1 ? <>x{s.factor}</>:null}</button>
            )}
          </div>
          {/* Toppings */}
          <div className="mt-4 font-semibold flex items-center gap-2">
            Toppings
            <span className={isVeg(pizza.type)?"text-green-600":"text-pz-red"}>
              {isVeg(pizza.type) ? "🟢 Veg" : "🔴 Non-Veg"}
            </span>
          </div>
          <div className="flex flex-wrap gap-4 mt-2">
            {TOPPINGS
              .filter(t=>isVeg(pizza.type)? t.name!=="Chicken":true)
              .map(t => (
                <label key={t.name} className={`flex items-center gap-2 px-4 py-2 border rounded-btn cursor-pointer transition ${selectedToppings.includes(t.name)?"bg-pz-blue text-white":"bg-white text-pz-blue border-pz-blue/40 hover:bg-pz-blue/5"}`}>
                  <input
                    type="checkbox"
                    className="accent-pz-blue"
                    checked={selectedToppings.includes(t.name)}
                    onChange={()=>toggleTopping(t.name)}
                  />
                  {t.name} {t.price>0 ? <span className="ml-1 font-normal opacity-70">+${t.price}</span> : ""}
                </label>
            ))}
          </div>
          {/* Quantity and Add to Cart */}
          <div className="flex items-center mt-6 space-x-4">
            <div className="font-semibold">Qty</div>
            <input
              type="number"
              min={1}
              max={10}
              className="w-16 text-center border rounded px-2 py-1"
              value={qty}
              onChange={e => setQty(Math.max(1,parseInt(e.target.value)||1))}
            />
          </div>
          {/* Price & Button */}
          <div className="mt-6 flex flex-col gap-3">
            <div className="font-bold text-pz-red text-2xl">Total: ${total.toFixed(2)}</div>
            <button className="rounded-btn bg-pz-blue text-white px-6 py-3 font-bold uppercase shadow-pz text-lg hover:bg-pz-red transition">
              Add to Cart
            </button>
            <button className="text-pz-blue mt-2 underline hover:text-pz-red" onClick={()=>nav(-1)}>Back to Menu</button>
          </div>
        </div>
      </main>
    </div>
  );
}
