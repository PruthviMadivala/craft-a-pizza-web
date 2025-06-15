
import { useState } from "react";
import pizzas from "../data/pizzas.json";
import Header from "../components/Header";
import MenuFilter from "../components/MenuFilter";
import ProductCard from "../components/ProductCard";

export default function MenuPage() {
  const categories = ["All", "Veg", "Non-Veg", "Desserts"];
  const [cat, setCat] = useState<string>("All");
  const filtered = cat==="All" ? pizzas : pizzas.filter(p=>p.type===cat);

  return (
    <div className="bg-pz-gray min-h-screen">
      <Header />
      <div className="max-w-screen-2xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-pz-blue mb-2 flex items-center gap-2">
          <span role="img" aria-label="pizza">🍕</span>
          Menu
        </h1>
        <MenuFilter categories={categories} current={cat} onChange={setCat}/>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-6">
          {filtered.map(pizza => <ProductCard key={pizza.id} pizza={pizza} />)}
        </div>
      </div>
    </div>
  );
}
