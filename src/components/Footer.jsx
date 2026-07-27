import React from "react";
import { MessageCircle } from "lucide-react";
import { BRAND } from "../lib/brand";
import { useApp } from "../context/AppContext";

export function Footer() {
  const { setPage } = useApp();
  return (
    <footer style={{ background: BRAND.dark }} className="text-white/70 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3">
              {/* Header-matching red circle logo */}
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-lg shadow-sm" 
                style={{ background: BRAND.red }}
              >
                G
              </div>
              <div className="font-extrabold text-lg text-white" style={{ fontFamily: "Manrope, sans-serif" }}>
                Gozak Shopping Mall
              </div>
            </div>
            <p className="text-sm mt-4 leading-relaxed max-w-xs text-white/50">
              Trusted Pharmacy Care &amp; Everyday Essentials Under One Roof. Serving Ondo State since 2012.
            </p>
            <div className="flex gap-2.5 mt-5">
              {/* Icons removed temporarily */}
            </div>
          </div>
          <div>
            <h5 className="text-white font-bold text-sm mb-4">Shop</h5>
            {["pharmacy", "supermarket", "mall", "service"].map((p) => (
              <button key={p} onClick={() => setPage(p)} className="block text-sm py-1.5 text-white/50 hover:text-white transition capitalize">
                {p === "mall" ? "Shopping Mall" : p}
              </button>
            ))}
          </div>
          <div>
            <h5 className="text-white font-bold text-sm mb-4">Company</h5>
            {["about", "contact"].map((p) => (
              <button key={p} onClick={() => setPage(p)} className="block text-sm py-1.5 text-white/50 hover:text-white transition capitalize">
                {p}
              </button>
            ))}
            <span className="block text-sm py-1.5 text-white/50">Careers</span>
            <span className="block text-sm py-1.5 text-white/50">Privacy Policy</span>
          </div>
          <div>
            <h5 className="text-white font-bold text-sm mb-4">Visit Us</h5>
            <p className="text-sm leading-loose text-white/50">
              No.1 Adenikpekun Close<br />Akure Garage Roundabout<br />Ondo Town, Ondo State<br /><br />
              +234 814 600 8685<br />director@gozakonline.com
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-3 pt-6 text-xs text-white/35">
          <span>© {new Date().getFullYear()} Gozak Pharmacy &amp; Supermarket. All rights reserved.</span>
          <span>Founded by Stanley Nzerem · Ondo State, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a 
      href="https://wa.me/2348146008685" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed right-6 bottom-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white anim-pulsering shadow-lg" 
      style={{ background: "#25D366" }}
    >
      <MessageCircle size={26} fill="white" />
    </a>
  );
}