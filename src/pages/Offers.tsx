
import Header from "../components/Header";
import { Link } from "react-router-dom";
import PromoBanner from "../components/PromoBanner";

export default function OffersPage() {
  return (
    <div className="bg-pz-gray min-h-screen">
      <Header />
      <div className="max-w-screen-2xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-pz-blue mb-3 flex items-center gap-2 justify-center">
          <span role="img" aria-label="gift">🎁</span>
          Offers & Promotions
          <span role="img" aria-label="gift">🎁</span>
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          Enjoy exclusive deals and limited-time pizza offers only at PizzaCraft!
        </p>
        <PromoBanner />
        <div className="flex justify-center mt-10">
          <Link to="/menu">
            <button className="rounded-btn bg-pz-red text-white px-8 py-3 text-lg font-semibold shadow-pz hover:bg-pz-blue transition uppercase">
              Order Now &amp; Save
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
