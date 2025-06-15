
import { X } from "lucide-react";
import { useState } from "react";

export default function AuthModal({
  open,
  onClose
}: { open: boolean, onClose: () => void }) {
  const [mode, setMode] = useState<"login"|"signup">("login");

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
      <div className="bg-white w-[90vw] max-w-md shadow-lg rounded-2xl p-8 animate-fade-in relative">
        <button
          className="absolute top-3 right-3 p-2 hover:bg-pz-gray rounded-full"
          onClick={onClose}
        >
          <X />
        </button>
        <h2 className="text-2xl font-bold mb-1 text-pz-blue">
          {mode === "login" ? "Login" : "Sign Up"}
        </h2>
        <form
          onSubmit={e => { e.preventDefault(); onClose(); }}
          className="space-y-4 mt-4"
        >
          <input type="email" placeholder="Email" required className="w-full border px-4 py-2 rounded"/>
          <input type="password" placeholder="Password" required className="w-full border px-4 py-2 rounded"/>
          {mode === "signup" && (
            <input type="text" placeholder="Name" required className="w-full border px-4 py-2 rounded"/>
          )}
          <button type="submit" className="bg-pz-blue text-white font-semibold w-full rounded-btn py-2 mt-2 hover:bg-pz-red transition">
            {mode === "login" ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          {mode === "login" ? (
            <>
              New here? <button
                className="text-pz-blue underline"
                onClick={() => setMode("signup")}
              >Sign Up</button>
            </>
          ) : (
            <>
              Already have an account? <button
                className="text-pz-blue underline"
                onClick={() => setMode("login")}
              >Login</button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
