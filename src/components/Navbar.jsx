import React, { useEffect, useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { BRAND } from "../lib/brand";
import { useApp, NAV_ITEMS } from "../context/AppContext";
import { Btn } from "./Btn";
import { AppointmentModal } from "./Modals"; // Kept AppointmentModal only

export function Navbar() {
  const { page, setPage, apptOpen, setApptOpen } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (p) => {
    setPage(p);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,252,246,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(28,16,6,0.08)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 24px rgba(28,16,6,0.06)" : "none",
          padding: scrolled ? "12px 0" : "20px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button onClick={() => go("home")} className="flex items-center gap-2.5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-extrabold text-lg"
              style={{ background: `linear-gradient(135deg, ${BRAND.red}, ${BRAND.gold})`, fontFamily: "Manrope, sans-serif", boxShadow: "0 6px 16px rgba(193,18,31,0.3)" }}
            >
              G
            </div>
            <div className="font-extrabold text-lg" style={{ color: BRAND.dark, fontFamily: "Manrope, sans-serif" }}> 
              Gozak <span style={{ color: BRAND.red }}></span>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="text-sm font-semibold transition-colors underline-grow"
                style={{ color: page === item.id ? BRAND.red : "#5B4636" }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setApptOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold px-5 py-2.5 rounded-full text-white transition hover:-translate-y-0.5"
              style={{ backgroundColor: BRAND.red, boxShadow: "0 8px 20px -6px rgba(193,18,31,0.5)" }}
            >
              <Calendar size={15} /> Book Appointment
            </button>
            <button className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg" style={{ color: BRAND.dark }} onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden mt-4 mx-4 rounded-2xl bg-white border border-stone-200 shadow-xl p-5 space-y-1" style={{ animation: "fadeInUp .3s ease" }}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="block w-full text-left px-3 py-3 rounded-xl font-semibold text-sm"
                style={{ color: page === item.id ? BRAND.red : BRAND.ink, background: page === item.id ? "rgba(193,18,31,0.06)" : "transparent" }}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3">
              <Btn variant="primary" className="w-full" onClick={() => setApptOpen(true)}>Book Appointment</Btn>
            </div>
          </div>
        )}
      </nav>

      {/* --- RENDER MODALS --- */}
      <AppointmentModal 
        open={apptOpen} 
        onClose={() => setApptOpen(false)} 
      />
    </>
  );
}