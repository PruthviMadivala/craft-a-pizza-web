
export default function PromoBanner() {
  const promos = [
    { title: "50% off on 2nd Pizza!", desc: "Order any pizza & get 50% OFF your second pizza.", color: "bg-pz-blue" },
    { title: "BOGO Mania", desc: "Buy one get one free on Classic Range.", color: "bg-pz-red" },
    { title: "Free Brownie", desc: "Free dessert on orders over $30.", color: "bg-pz-blue" }
  ];
  return (
    <div className="flex flex-wrap gap-4 py-6 justify-center">
      {promos.map((promo, i) => (
        <div key={i} className={`rounded-xl px-6 py-4 min-w-[220px] min-h-[120px] shadow-pzCard text-white ${promo.color} animate-fade-in transition-transform hover:scale-105`}>
          <div className="font-semibold text-lg mb-1">{promo.title}</div>
          <div className="text-sm">{promo.desc}</div>
        </div>
      ))}
    </div>
  );
}
