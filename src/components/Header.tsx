
import { Pizza } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import AuthModal from "./AuthModal";

const navs = [
  { to: "/menu", label: "Menu" },
  { to: "/offers", label: "Offers" },
  { to: "/track", label: "Track Order" },
  { to: "/cart", label: "Cart" }
];

export default function Header() {
  const [authOpen, setAuthOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-20 shadow-pz bg-white">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto py-3 px-8">
        <Link to="/" className="flex items-center space-x-2 text-pz-blue font-bold text-2xl">
          <Pizza size={32} className="text-pz-red" /> <span>PizzaCraft</span>
        </Link>
        <nav className="flex gap-2 md:gap-6">
          {navs.map(nav => (
            <Link
              key={nav.to}
              to={nav.to}
              className={`rounded-btn px-4 py-2 text-base font-medium transition 
                ${
                  (location.pathname === nav.to || (nav.to==='/menu' && location.pathname.startsWith('/menu')))
                    ? "text-pz-red bg-pz-blue/10"
                    : "hover:text-pz-blue hover:bg-pz-blue/5"
                }`
              }
            >
              {nav.label}
            </Link>
          ))}
          <button
            className="rounded-btn px-4 py-2 bg-pz-blue text-white hover:bg-pz-red transition font-semibold ml-2"
            onClick={() => setAuthOpen(true)}
          >
            Login
          </button>
        </nav>
      </div>
      {authOpen && <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />}
    </header>
  );
}
