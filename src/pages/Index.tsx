
import Header from "../components/Header";
import PromoBanner from "../components/PromoBanner";
import FeaturedPizzas from "../components/FeaturedPizzas";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="bg-pz-gray min-h-screen">
      <Header />
      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-br from-pz-blue to-pz-red text-white px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 md:ml-16 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold drop-shadow-lg">Hot, Fresh <span className="text-pz-yellow">Pizza</span> Delivered <span className="text-pz-red">FAST</span></h1>
          <p className="opacity-90 text-lg md:text-xl mb-4">Order your favorite pizza, sides, and desserts from the comfort of your home with PizzaCraft 🍕</p>
          <Link to="/menu">
            <button className="mt-3 rounded-btn bg-pz-red text-white px-8 py-3 text-xl font-semibold shadow-pz hover:bg-pz-blue transition uppercase">Order Now</button>
          </Link>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400"
          alt="Pizza Hero"
          className="rounded-2xl border-8 border-pz-yellow w-96 md:w-[420px] mx-auto md:mr-16 drop-shadow-xl"
        />
      </div>
      <PromoBanner />
      <FeaturedPizzas />
    </div>
  );
}
