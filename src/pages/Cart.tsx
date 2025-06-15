
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function CartPage() {
  // For now: empty cart/placeholder
  return (
    <div className="bg-pz-gray min-h-screen">
      <Header />
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-pzCard mt-12 p-8">
        <h1 className="text-pz-blue text-2xl font-bold mb-2 flex items-center gap-2">
          <span role="img" aria-label="Cart">🛒</span>
          Your Cart
        </h1>
        <div className="text-gray-500 py-14 text-center text-lg font-medium">Cart is empty! <br/>Go to <Link to="/menu" className="text-pz-red underline hover:text-pz-blue">Menu</Link> to order something tasty 🍕.</div>
      </div>
    </div>
  );
}
