import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flame, Sparkles, Truck, Star, Utensils, CheckCircle2,
  HeartHandshake, ChevronRight, Award, ShieldCheck, ArrowRight,
  Eye, ShoppingBag, Wheat, MessageSquare
} from "lucide-react";
import { BRAND } from "../lib/brand";
import { Btn } from "../components/Btn";

export default function BakeryPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-play testimonial carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // 🍞 Our Flagship Bread Varieties
  const breads = [
    {
      name: "GOZAK Super-Loaf",
      tag: "Best Seller",
      desc: "Our signature flagship loaf, rich, fluffy, and stays oven-fresh soft for days.",
      badgeColor: "bg-red-500 text-white",
      img: "/images/bakery/super-loaf.jpg",
      fallback: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "MIG-DAV Bread",
      tag: "Family Favorite",
      desc: "Specially formulated for maximum energy and a rich, golden buttery breakfast taste.",
      badgeColor: "bg-amber-500 text-white",
      img: "/images/bakery/mig-dav.jpg",
      fallback: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chocolate Swirl Bread",
      tag: "Kids' Pick",
      desc: "Infused with rich cocoa swirls, a sweet, delicious treat for breakfast or snacking.",
      badgeColor: "bg-amber-900 text-white",
      img: "/images/bakery/chocolate-bread.jpg",
      fallback: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Mini Super-Loaf",
      tag: "Quick Snack",
      desc: "The exact same beloved Super-Loaf recipe, perfectly sized for quick single-serving meals.",
      badgeColor: "bg-stone-800 text-white",
      img: "/images/bakery/small-super-loaf.jpg",
      fallback: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // 🚚 Production & Process Steps
  const processSteps = [
    {
      step: "01",
      title: "Precision Mixing & Kneading",
      desc: "High-grade wheat flour mixed under strict hygiene standards for maximum softness.",
      img: "/images/bakery/mixing.jpg",
      fallback: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80",
    },
    {
      step: "02",
      title: "Oven Fresh Daily Baking",
      desc: "Baked around the clock in high-capacity ovens so every loaf reaches you fresh and warm.",
      img: "/images/bakery/baking.jpg",
      fallback: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=600&q=80",
    },
    {
      step: "03",
      title: "Fleet Loading & Dispatch",
      desc: "Loaded straight into delivery trucks to supply depots, shops, and vendors across Ondo State.",
      img: "/images/bakery/truck-loading.jpg",
      fallback: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // ⭐ Customer & Distributor Reviews
  const reviews = [
    { text: "GOZAK Super-Loaf is hands-down the softest bread in Ondo Town. Even after 3 days, it still tastes like it came straight out of the oven!", name: "Mrs. Blessing A.", location: "Ondo Town Resident" },
    { text: "As a wholesale distributor, Gozak Bakery never disappoints. Their fleet loading is fast, and my shop sells out MIG-DAV bread every morning.", name: "Chief K. Ogundele", location: "Distributor, Akure Highway" },
    { text: "My kids won't eat tea without Gozak Chocolate Bread! The cocoa flavor is rich and authentic.", name: "Mr. Chukwuma E.", location: "Regular Shopper" },
  ];

  return (
    <>
      {/* ================= HERO HEADER WITH NAVBAR CONTRAST SCRIM ================= */}
      <header className="relative pt-44 md:pt-52 pb-28 overflow-hidden bg-gradient-to-br from-amber-700 via-amber-600 to-amber-800 text-white">
        
        {/* Top Scrim Overlay: Guarantees full legibility for the Navbar text */}
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-10 pointer-events-none" />

        {/* Ambient Glowing Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.5, 0.35] }} 
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
          className="absolute -top-10 -left-10 w-[550px] h-[550px] rounded-full bg-amber-400/30 blur-[130px] pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }} 
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-20 -right-10 w-[500px] h-[500px] rounded-full bg-red-600/30 blur-[120px] pointer-events-none" 
        />

        <div className="max-w-7xl mx-auto px-6 relative z-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Header Eyebrow Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-300/30 bg-amber-950/40 backdrop-blur-md text-amber-200 text-xs font-extrabold mb-6 shadow-sm"
            >
              <Flame size={16} className="text-amber-400 animate-bounce" />
              <span>Gozak Bakery &amp; Confectionery</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold leading-[1.08] tracking-tight"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Ondo's favorite{" "}
              <span className="text-amber-300 underline decoration-amber-400/40 underline-offset-8">
                oven-fresh
              </span>{" "}
              breads, baked daily.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base md:text-lg leading-relaxed text-amber-100 max-w-xl font-medium"
            >
              From our signature GOZAK Super-Loaf to daily wholesale supply fleets, explore our bromate-free bread varieties and distributor network.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mt-8"
            >
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-amber-950 font-extrabold text-sm px-7 py-3.5 rounded-full shadow-lg transition hover:-translate-y-0.5"
              >
                <ShoppingBag size={18} /> Explore Breads
              </a>
              <a
                href="https://wa.me/2348111116110?text=Hello,%20I%20want%20to%20order%20breads%20from%20Gozak%20Bakery."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition shadow-lg hover:-translate-y-0.5"
              >
                <MessageSquare size={16} className="text-amber-300" /> WhatsApp Wholesale
              </a>
            </motion.div>
          </div>

          {/* Graphic Card Floating Feature */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden border border-amber-300/30 shadow-2xl bg-amber-950/40 p-8 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-300 border border-amber-400/30">
                  <Wheat size={30} />
                </div>
                <div>
                  <h3 className="font-extrabold text-xl text-white">100% Bromate-Free Guaranteed</h3>
                  <p className="text-xs text-amber-200">Hygienic Preparation &amp; Certified Ingredients</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Freshly Baked Every Single Morning",
                  "Enriched with Natural Vitamin Essentials",
                  "Automated Kneading & Hygienic Packaging"
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/10 text-xs font-semibold text-amber-50"
                  >
                    <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ================= BREAD COLLECTION SECTION ================= */}
      <section id="products" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Animated Section Heading Design */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-black tracking-widest uppercase mb-3"
            >
              <Sparkles size={14} className="text-amber-600" />
              <span>Our Bread Collection</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-stone-900 tracking-tight" 
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Freshly baked for every home &amp; appetite
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-stone-500 mt-3 font-medium"
            >
              Made with 100% bromate-free ingredients and baked to soft perfection.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {breads.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                    <img
                      src={b.img}
                      alt={b.name}
                      onError={(e) => { e.target.src = b.fallback; }}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div
                      className={`absolute top-3 left-3 ${b.badgeColor} px-3 py-1 rounded-full text-[11px] font-black shadow-md`}
                    >
                      {b.tag}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-extrabold text-xl text-stone-900 leading-snug" style={{ fontFamily: "Manrope, sans-serif" }}>
                      {b.name}
                    </h3>
                    <p className="text-stone-500 text-xs mt-2 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-800">
                  <span className="flex items-center gap-1.5"><Sparkles size={14} className="text-amber-500" /> Soft &amp; Fluffy</span>
                  <span className="flex items-center gap-1.5"><Utensils size={14} className="text-amber-500" /> Oven Fresh</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCTION & LOGISTICS SHOWCASE ================= */}
      <section className="py-24 bg-stone-950 text-white relative overflow-hidden">
        
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-xs font-extrabold px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-4">
                <Truck size={14} /> Wholesale &amp; Supply Logistics
              </div>

              <h2 className="text-3xl md:text-5xl font-black leading-tight text-white tracking-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
                Daily production &amp; statewide dispatch
              </h2>

              <p className="text-stone-400 text-sm md:text-base mt-4 leading-relaxed font-medium">
                Gozak Bakery supplies hundreds of supermarkets, retail shops, and independent bread vendors across Ondo State. Our fleet of trucks loads every morning directly from our automated baking hall.
              </p>

              <div className="mt-8 space-y-3.5">
                {[
                  "100% Bromate-free and NAFDAC certified standards",
                  "Automated flour mixing and dough cutting for uniform weight",
                  "Dedicated wholesale logistics for high-volume distributors",
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex items-center gap-3 text-xs md:text-sm text-stone-200 font-semibold"
                  >
                    <CheckCircle2 size={18} className="text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Featured Image Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl group"
            >
              <img
                src="/images/bakery/mixing.jpg"
                alt="Flour Mixing and Production"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"; }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-amber-400 font-black text-xs uppercase tracking-wider">Hygienic Bakery Hall</div>
                <div className="text-white font-extrabold text-lg mt-0.5">Automated Kneading &amp; Flour Processing</div>
              </div>
            </motion.div>
          </div>

          {/* Process Cards */}
          <div className="grid md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:bg-white/10 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-stone-800">
                    <img
                      src={step.img}
                      alt={step.title}
                      onError={(e) => { e.target.src = step.fallback; }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-2xl font-black text-amber-400 mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>{step.step}</div>
                  <h4 className="font-extrabold text-white text-base">{step.title}</h4>
                  <p className="text-stone-400 text-xs mt-2 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= REVIEWS SECTION ================= */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-black tracking-widest uppercase mb-3">
            <Star size={14} className="text-amber-600 fill-amber-600" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900" style={{ fontFamily: "Manrope, sans-serif" }}>
            Loved by families &amp; distributors
          </h2>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200/80 shadow-lg mt-10 relative">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} className="fill-amber-400 text-amber-400" />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg md:text-2xl font-bold leading-relaxed text-stone-800" style={{ fontFamily: "Manrope, sans-serif" }}>
                  "{reviews[activeTestimonial].text}"
                </p>
                <div className="mt-6">
                  <div className="font-extrabold text-stone-900 text-sm">{reviews[activeTestimonial].name}</div>
                  <div className="text-xs text-amber-700 font-extrabold mt-0.5">{reviews[activeTestimonial].location}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Controls */}
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${activeTestimonial === idx ? "w-8 bg-amber-600" : "w-2.5 bg-stone-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHOLESALE CTA BANNER ================= */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-10 md:p-14 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden bg-gradient-to-r from-red-600 via-rose-600 to-red-700 shadow-2xl"
          >
            {/* Subtle overlay shine */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-black px-3.5 py-1.5 rounded-full bg-white/20 mb-4 backdrop-blur-md">
                <HeartHandshake size={15} /> Wholesale Partner Program
              </div>
              <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
                Become a Gozak Bread Distributor
              </h3>
              <p className="text-white/90 text-sm mt-2 max-w-xl font-medium">
                Interested in supplying GOZAK Super-Loaf or MIG-DAV bread to your store or region? Contact our wholesale department today for depot pricing.
              </p>
            </div>

            <a
              href="https://wa.me/2348111116110?text=Hello,%20I%20am%20interested%20in%20becoming%20a%20Gozak%20Bread%20distributor."
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full bg-white font-extrabold text-sm text-red-600 hover:bg-stone-100 hover:-translate-y-0.5 transition flex-shrink-0 shadow-lg relative z-10 flex items-center gap-2"
            >
              Distributor Inquiry <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}