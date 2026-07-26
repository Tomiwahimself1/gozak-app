import React, { useEffect, useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { BRAND } from "../lib/brand";
import { useApp, NAV_ITEMS } from "../context/AppContext";
import { Btn } from "./Btn";
import { AppointmentModal } from "./Modals";

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

  // Check if current page has a dark/colorful hero background (Pharmacy & Bakery)
  const isDarkHeroPage = page === "pharmacy" || page === "bakery";

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(255, 255, 255, 0.92)"
            : isDarkHeroPage
            ? "rgba(0, 0, 0, 0.25)" // Subtle dark overlay at the top of Pharmacy/Bakery
            : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : isDarkHeroPage ? "blur(8px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(0, 0, 0, 0.08)"
            : isDarkHeroPage
            ? "1px solid rgba(255, 255, 255, 0.15)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.06)" : "none",
          padding: scrolled ? "12px 0" : "18px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <button onClick={() => go("home")} className="flex items-center gap-2.5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-extrabold text-lg shadow-md"
              style={{
                background: `linear-gradient(135deg, ${BRAND.red}, ${BRAND.gold})`,
                fontFamily: "Manrope, sans-serif",
              }}
            >
              G
            </div>
            <div
              className="font-extrabold text-lg transition-colors"
              style={{
                color: !scrolled && isDarkHeroPage ? "#FFFFFF" : BRAND.dark,
                fontFamily: "Manrope, sans-serif",
              }}
            >
              Gozak
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-2 bg-stone-900/10 backdrop-blur-md p-1.5 rounded-full border border-white/20">
            {NAV_ITEMS.map((item) => {
              const isActive = page === item.id;
              
              // Dynamic colors depending on active page & scroll state
              let textColor = "#5B4636"; // Default dark link
              if (!scrolled && isDarkHeroPage) {
                textColor = isActive ? "#FBBF24" : "#FFFFFF"; // Gold active, pure white inactive on dark headers
              } else if (isActive) {
                textColor = BRAND.red;
              }

              return (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className={`text-xs font-extrabold px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive && scrolled ? "bg-white shadow-sm" : ""
                  }`}
                  style={{ color: textColor }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setApptOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold px-5 py-2.5 rounded-full text-white transition hover:-translate-y-0.5 shadow-md"
              style={{
                backgroundColor: !scrolled && isDarkHeroPage ? "#F59E0B" : BRAND.red,
                color: !scrolled && isDarkHeroPage ? "#000000" : "#FFFFFF",
              }}
            >
              <Calendar size={15} /> Book Appointment
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors"
              style={{ color: !scrolled && isDarkHeroPage ? "#FFFFFF" : BRAND.dark }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div
            className="lg:hidden mt-4 mx-4 rounded-2xl bg-white border border-stone-200 shadow-xl p-5 space-y-1"
            style={{ animation: "fadeInUp .3s ease" }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="block w-full text-left px-4 py-3 rounded-xl font-bold text-sm transition"
                style={{
                  color: page === item.id ? BRAND.red : BRAND.ink,
                  background: page === item.id ? "rgba(193,18,31,0.06)" : "transparent",
                }}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3">
              <Btn variant="primary" className="w-full" onClick={() => setApptOpen(true)}>
                Book Appointment
              </Btn>
            </div>
          </div>
        )}
      </nav>

      {/* RENDER MODAL */}
      <AppointmentModal open={apptOpen} onClose={() => setApptOpen(false)} />
    </>
  );
}