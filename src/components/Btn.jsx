import React from "react";
import { BRAND } from "../lib/brand";

export function Btn({ children, variant = "primary", className = "", onClick, icon: Icon, type = "button" }) {
  const base =
    "inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-300 whitespace-nowrap active:scale-95";

  const styles = {
    primary: { backgroundColor: BRAND.red, color: "#fff", boxShadow: "0 10px 26px -6px rgba(193,18,31,0.45)" },
    gold: { backgroundColor: BRAND.gold, color: BRAND.dark, boxShadow: "0 10px 26px -6px rgba(244,161,0,0.45)" },
    ghost: { backgroundColor: "#fff", color: BRAND.red, border: "1.5px solid rgba(193,18,31,0.25)" },
    outlineLight: { backgroundColor: "rgba(255,255,255,0.1)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)" },
    dark: { backgroundColor: BRAND.dark, color: "#fff" },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} hover:-translate-y-0.5 ${className}`}
      style={styles[variant]}
    >
      {Icon && <Icon size={16} strokeWidth={2.4} />}
      {children}
    </button>
  );
}
