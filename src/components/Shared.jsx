import React from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { BRAND } from "../lib/brand";
import { Reveal } from "./Reveal";

export function Eyebrow({ children, light = false }) {
  return (
    <div
      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
      style={{ color: light ? BRAND.goldLight : BRAND.red, background: light ? "rgba(255,209,102,0.12)" : "rgba(193,18,31,0.08)" }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: light ? BRAND.goldLight : BRAND.gold }} />
      {children}
    </div>
  );
}

export function SectionHead({ eyebrow, title, desc, light = false, center = true }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-14`}>
      <Reveal><Eyebrow light={light}>{eyebrow}</Eyebrow></Reveal>
      <Reveal delay={80}>
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight" style={{ fontFamily: "Manrope, sans-serif", color: light ? "#fff" : BRAND.dark }}>
          {title}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={160}>
          <p className="mt-4 text-base leading-relaxed" style={{ color: light ? "rgba(255,255,255,0.65)" : "#5B4636" }}>{desc}</p>
        </Reveal>
      )}
    </div>
  );
}

export function PageHero({ eyebrow, title, desc, Icon }) {
  return (
    <header
      className="relative pt-40 pb-24 overflow-hidden"
      style={{ background: `radial-gradient(900px 480px at 85% -10%, rgba(244,161,0,0.16), transparent 60%), ${BRAND.cream}` }}
    >
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-[0.06] anim-blob" style={{ background: BRAND.red }} />
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <Reveal>
          <div
            className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 anim-float"
            style={{ background: `linear-gradient(135deg, ${BRAND.red}, ${BRAND.gold})`, boxShadow: "0 14px 30px -8px rgba(193,18,31,0.4)" }}
          >
            <Icon size={28} color="#fff" />
          </div>
        </Reveal>
        <Reveal delay={80}><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={140}>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight" style={{ fontFamily: "Manrope, sans-serif", color: BRAND.dark }}>{title}</h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-5 text-lg leading-relaxed max-w-xl mx-auto" style={{ color: "#5B4636" }}>{desc}</p>
        </Reveal>
      </div>
    </header>
  );
}

export function ProductCard({ name, cat, price, oldPrice, rating, Icon, tag, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="group bg-white rounded-2xl border border-stone-100 p-5 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400 relative overflow-hidden">
        {tag && (
          <span className="absolute top-4 left-4 text-[10px] font-bold uppercase px-2.5 py-1 rounded-full text-white z-10" style={{ background: tag === "New" ? BRAND.gold : BRAND.red }}>
            {tag}
          </span>
        )}
        <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-stone-400 hover:text-red-600 transition z-10 shadow-sm">
          <Heart size={14} />
        </button>
        <div
          className="h-36 rounded-xl mb-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
          style={{ background: "linear-gradient(155deg, rgba(193,18,31,0.08), rgba(244,161,0,0.12))" }}
        >
          <Icon size={44} style={{ color: BRAND.red }} strokeWidth={1.4} />
        </div>
        <div className="text-[11px] font-bold uppercase tracking-wide" style={{ color: BRAND.gold }}>{cat}</div>
        <h4 className="font-bold text-sm mt-1" style={{ color: BRAND.dark }}>{name}</h4>
        <div className="flex items-center gap-1 mt-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={11} fill={i < rating ? BRAND.gold : "none"} color={BRAND.gold} />
          ))}
        </div>
        <div className="flex items-center gap-2 mt-2.5">
          <span className="font-extrabold text-base" style={{ color: BRAND.dark }}>{price}</span>
          {oldPrice && <span className="text-xs text-stone-400 line-through">{oldPrice}</span>}
        </div>
        <button
          className="w-full mt-3 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition group-hover:text-white"
          style={{ background: "rgba(193,18,31,0.06)", color: BRAND.red }}
          onMouseEnter={(e) => { e.currentTarget.style.background = BRAND.red; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(193,18,31,0.06)"; e.currentTarget.style.color = BRAND.red; }}
        >
          <ShoppingCart size={13} /> Add to Cart
        </button>
      </div>
    </Reveal>
  );
}

export function CategoryTile({ Icon, label, count, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="group bg-white rounded-2xl border border-stone-100 p-6 flex flex-col items-center text-center gap-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ background: "rgba(193,18,31,0.08)", color: BRAND.red }}>
          <Icon size={24} />
        </div>
        <div>
          <div className="font-bold text-sm" style={{ color: BRAND.dark }}>{label}</div>
          <div className="text-xs text-stone-400 mt-0.5">{count}</div>
        </div>
      </div>
    </Reveal>
  );
}
