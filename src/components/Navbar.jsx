import React, { useEffect, useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { BRAND } from "../lib/brand";
import { useApp, NAV_ITEMS } from "../context/AppContext";

// Custom Emblem SVG modeled directly from the Gozak Shopping Mall building sign
function GozakBuildingLogo({ className = "w-10 h-10" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Circle Ring */}
      <circle cx="50" cy="50" r="45" stroke="#C1121F" strokeWidth="7" fill="#FFFFFF" />
      
      {/* Central 'G' Letterform */}
      <path 
        d="M 68 35 C 62 25 48 22 35 30 C 22 38 20 58 30 70 C 40 82 60 82 70 70 C 76 63 76 52 76 52 L 50 52 L 50 60 L 67 60 C 66 66 60 72 50 72 C 38 72 30 62 30 50 C 30 38 40 30 52 30 C 60 30 65 34 68 38 Z" 
        fill="#C1121F" 
      />
      
      {/* Accent Orbit Arc */}
      <path 
        d="M 25 32 C 38 18 68 18 82 32" 
        stroke="#F4A100" 
        strokeWidth="6" 
        strokeLinecap="round" 
      />
    </svg>
  );
}

export function Navbar() {
  const { page, setPage } = useApp();
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
    <nav
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(255, 255, 255, 0.95)"
          : isDarkHeroPage
          ? "rgba(0, 0, 0, 0.25)"
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
        {/* Brand Logo with Building Emblem */}
        <button onClick={() => go("home")} className="flex items-center gap-2.5 outline-none group">
          <div className="transition-transform duration-300 group-hover:scale-105 shadow-md rounded-full">
            <GozakBuildingLogo className="w-10 h-10" />
          </div>
          <div
            className="font-extrabold text-lg transition-colors"
            style={{
              color: !scrolled && isDarkHeroPage ? "#FFFFFF" : BRAND.dark,
              fontFamily: "Manrope, sans-serif",
            }}
          >
            Gozak Shopping Mall
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-2 bg-stone-900/10 backdrop-blur-md p-1.5 rounded-full border border-white/20">
          {NAV_ITEMS.map((item) => {
            const isActive = page === item.id;

            let textColor = "#5B4636";
            if (!scrolled && isDarkHeroPage) {
              textColor = isActive ? "#FBBF24" : "#FFFFFF";
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

        {/* Right Action: Navigates to Contact Page */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => go("contact")}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold px-5 py-2.5 rounded-full transition hover:-translate-y-0.5 shadow-md"
            style={{
              backgroundColor: !scrolled && isDarkHeroPage ? "#F59E0B" : BRAND.red,
              color: !scrolled && isDarkHeroPage ? "#000000" : "#FFFFFF",
            }}
          >
            <Calendar size={15} /> Book Appointment
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors"
            style={{ color: !scrolled && isDarkHeroPage ? "#FFFFFF" : BRAND.dark }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
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
            <button
              onClick={() => go("contact")}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm bg-red-600 text-white shadow-md"
            >
              <Calendar size={16} /> Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}