
import pizzas from "../data/pizzas.json";
import ProductCard from "./ProductCard";

export default function FeaturedPizzas() {
  const featured = pizzas.filter(p => p.featured);
  return (
    <section className="my-8 max-w-screen-2xl mx-auto">
      <h2 className="text-pz-red text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2">
        <span role="img" aria-label="Pizza">🍕</span>
        Featured Pizzas
        <span role="img" aria-label="Pizza">🍕</span>
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-4">
        {featured.map(p => <ProductCard key={p.id} pizza={p} />)}
      </div>
    </section>
  );
}
