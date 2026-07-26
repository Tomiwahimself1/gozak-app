import React from "react";
import { motion } from "framer-motion";
import {
  Building2, Shield, Award, Users, Sparkles, Tv, Smartphone, Package, Sofa, Shirt,
  CheckCircle2, Eye, Store, MapPin
} from "lucide-react";
import { BRAND } from "../lib/brand";
import { CategoryTile } from "../components/Shared";

export default function AboutPage() {
  const values = [
    { Icon: Shield, t: "Trust", d: "Every product and every consultation is backed by our word." },
    { Icon: Award, t: "Integrity", d: "Honest pricing and honest advice, always." },
    { Icon: Users, t: "Community", d: "We grew up in Ondo, and we serve Ondo first." },
    { Icon: Sparkles, t: "Affordable Quality", d: "Premium care shouldn't be out of reach." },
  ];

  const mallCats = [
    { Icon: Tv, label: "Electronics", count: "110+ items" },
    { Icon: Smartphone, label: "Mobile Phones", count: "85+ items" },
    { Icon: Package, label: "Accessories", count: "140+ items" },
    { Icon: Sofa, label: "Furniture", count: "60+ items" },
    { Icon: Shirt, label: "Fashion", count: "200+ items" },
    { Icon: Building2, label: "Home Appliances", count: "75+ items" },
  ];

  const galleryImages = [
    {
      title: "Main Mall Atrium",
      src: "/images/mall/mall-1.jpg",
      fallback: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Pharmacy & Wellness Counter",
      src: "/images/mall/mall-2.jpg",
      fallback: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Electronics & Gadgets Hub",
      src: "/images/mall/mall-3.jpg",
      fallback: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Supermarket Aisles",
      src: "/images/mall/mall-4.jpg",
      fallback: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Fashion & Lifestyle Store",
      src: "/images/mall/mall-5.jpg",
      fallback: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Beauty & Cosmetics Display",
      src: "/images/mall/mall-6.jpg",
      fallback: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Home Appliances Showcase",
      src: "/images/mall/mall-7.jpg",
      fallback: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Customer Support Desk",
      src: "/images/mall/mall-8.jpg",
      fallback: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <>
      {/* ================= HERO HEADER ================= */}
      <header className="relative pt-36 md:pt-44 pb-28 overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 text-white">
        
        {/* Dynamic Glowing Ambient Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.5, 0.3] }} 
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute -top-10 -left-10 w-[550px] h-[550px] rounded-full bg-red-600/20 blur-[140px] pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} 
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-20 -right-10 w-[500px] h-[500px] rounded-full bg-amber-500/20 blur-[130px] pointer-events-none" 
        />

        <div className="max-w-7xl mx-auto px-6 relative z-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Header Eyebrow Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/30 bg-stone-800/80 backdrop-blur-md text-amber-300 text-xs font-extrabold mb-6 shadow-sm"
            >
              <Building2 size={16} className="text-amber-400" />
              <span>About Gozak &amp; Shopping Mall</span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black leading-[1.08] tracking-tight text-white"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Built on perseverance,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">
                trust &amp; dedication.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base md:text-lg leading-relaxed text-stone-300 max-w-xl font-medium"
            >
              From a modest street counter in 2012 to Ondo Town's multi-level retail destination — discover our journey, explore our mall, and experience the Gozak promise.
            </motion.p>

            {/* Key Stat Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10"
            >
              <div>
                <div className="text-2xl md:text-3xl font-black text-amber-400" style={{ fontFamily: "Manrope, sans-serif" }}>2012</div>
                <div className="text-xs text-stone-400 font-semibold mt-1">Established in Ondo</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-red-500" style={{ fontFamily: "Manrope, sans-serif" }}>3+</div>
                <div className="text-xs text-stone-400 font-semibold mt-1">Retail Levels</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: "Manrope, sans-serif" }}>100%</div>
                <div className="text-xs text-stone-400 font-semibold mt-1">Genuine Care</div>
              </div>
            </motion.div>
          </div>

          {/* Hero Feature Graphic Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-stone-900/60 p-8 backdrop-blur-xl shadow-2xl">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative mb-6 border border-white/10">
                <img 
                  src="/images/mall/mall-1.jpg" 
                  alt="Gozak Mall Atrium"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=800&q=80"; }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="flex items-center gap-1.5 text-xs font-bold bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-md">
                    <MapPin size={14} className="text-red-500" /> Akure Garage Rd, Ondo
                  </span>
                  <span className="text-xs font-bold bg-amber-500 text-stone-950 px-3 py-1.5 rounded-full">
                    Multi-Level Mall
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-300 font-semibold p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="flex items-center gap-2"><Store size={16} className="text-amber-400" /> Level 1: Licensed Pharmacy &amp; Supermarket</span>
                  <CheckCircle2 size={16} className="text-amber-400" />
                </div>
                <div className="flex items-center justify-between text-xs text-stone-300 font-semibold p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="flex items-center gap-2"><Store size={16} className="text-red-500" /> Level 2: Bakery &amp; Confectionery Hall</span>
                  <CheckCircle2 size={16} className="text-red-500" />
                </div>
                <div className="flex items-center justify-between text-xs text-stone-300 font-semibold p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="flex items-center gap-2"><Store size={16} className="text-amber-400" /> Level 3: Electronics, Phones &amp; Fashion</span>
                  <CheckCircle2 size={16} className="text-amber-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ================= TIMELINE SECTION ================= */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-800 text-xs font-black uppercase tracking-widest mb-3">
              <span>Timeline</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-stone-900 tracking-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
              How our journey unfolded
            </h2>
          </div>

          <div className="relative pl-8 md:pl-10 border-l-2 border-red-500/20 space-y-12">
            {[
              ["2012", "The Beginning", "Stanley Nzerem moved from Imo State to Ondo with very little, selling over-the-counter medication on the streets."],
              ["2014", "First Physical Shop", "Perseverance paid off — a small rented pharmacy shop opened in Ondo Town."],
              ["2016", "Growing Trust", "Word of mouth spread. The shop expanded its shelves and its reputation for honesty and accurate prescriptions."],
              ["2019", "The Supermarket Wing", "Gozak added a full supermarket wing — groceries, household items and daily essentials under one roof."],
              ["2022", "The Shopping Mall Expansion", "Electronics, phones, furniture and lifestyle products joined the Gozak family on upper floors."],
              ["Today", "A Community Institution", "Gozak Pharmacy & Supermarket stands as one of Ondo's most trusted multi-level retail destinations."],
            ].map(([y, t, d], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                <div 
                  className="absolute -left-[41px] md:-left-[49px] top-1.5 w-6 h-6 rounded-full border-4 border-stone-50 transition-transform group-hover:scale-125 duration-300" 
                  style={{ background: BRAND.red }} 
                />

                <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black tracking-wider mb-2">
                  {y}
                </div>
                <h4 className="font-black text-xl text-stone-900" style={{ fontFamily: "Manrope, sans-serif" }}>{t}</h4>
                <p className="text-stone-600 text-sm mt-2 max-w-xl leading-relaxed font-medium">{d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SHOPPING MALL CATEGORIES ================= */}
      <section className="py-24 bg-white border-y border-stone-200/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-black tracking-widest uppercase mb-3">
              <Sparkles size={14} className="text-amber-600" />
              <span>Shopping Mall</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-stone-900 tracking-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
              Electronics, fashion &amp; home — under one roof
            </h2>
            <p className="text-stone-500 text-sm md:text-base mt-3 font-medium">
              From the latest smartphones to furniture and lifestyle finds, Level 3 has it all.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {mallCats.map((c, i) => (
              <CategoryTile key={i} {...c} delay={i * 60} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION SECTION ================= */}
      <section className="py-24 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md hover:bg-white/10 transition duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-300 border border-amber-400/30 mb-6">
              <Sparkles size={28} />
            </div>
            <h3 className="text-2xl font-black text-white" style={{ fontFamily: "Manrope, sans-serif" }}>Our Mission</h3>
            <p className="text-stone-300 text-sm md:text-base mt-4 leading-relaxed font-medium">
              To provide accessible, trustworthy healthcare and everyday essentials to every family in Ondo State — with honesty, professionalism and care at every counter.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md hover:bg-white/10 transition duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center text-red-400 border border-red-500/30 mb-6">
              <Award size={28} />
            </div>
            <h3 className="text-2xl font-black text-white" style={{ fontFamily: "Manrope, sans-serif" }}>Our Vision</h3>
            <p className="text-stone-300 text-sm md:text-base mt-4 leading-relaxed font-medium">
              To be the most trusted pharmacy and retail brand in Southwest Nigeria — a name synonymous with quality, community, and genuine care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CORE VALUES SECTION ================= */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-800 text-xs font-black tracking-widest uppercase mb-3">
              <span>What We Stand For</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-stone-900 tracking-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
              Our core values
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl border border-stone-200/80 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 mb-6">
                    <v.Icon size={24} />
                  </div>
                  <h4 className="font-extrabold text-xl text-stone-900" style={{ fontFamily: "Manrope, sans-serif" }}>{v.t}</h4>
                  <p className="text-stone-500 text-xs mt-3 leading-relaxed font-medium">{v.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY SECTION (Without Filter Navbar) ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-black tracking-widest uppercase mb-3">
              <Eye size={14} className="text-amber-600" />
              <span>In Pictures</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-stone-900" style={{ fontFamily: "Manrope, sans-serif" }}>
              A look inside Gozak
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {galleryImages.map((img) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                key={img.title}
                className="group relative aspect-square rounded-3xl overflow-hidden bg-stone-100 shadow-sm border border-stone-200/80"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  onError={(e) => { e.target.src = img.fallback; }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-white font-extrabold text-xs leading-snug">
                    {img.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}