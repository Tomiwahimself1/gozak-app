import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Pill, ClipboardList, Baby, HeartPulse, Syringe, Sparkles, Search,
  Clock, Shield, Truck, Stethoscope, Eye, CheckCircle2, Phone, MapPin, X,
  PhoneCall, Calendar, ChevronRight, ArrowRight, ShieldCheck, Activity
} from "lucide-react";
import { BRAND } from "../lib/brand";
import { useApp } from "../context/AppContext";
import { Reveal } from "../components/Reveal";
import { Btn } from "../components/Btn";

export default function PharmacyPage() {
  const { setPage } = useApp();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const goToContact = () => {
    setPage("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cats = [
    { Icon: Pill, label: "Prescription Drugs", color: "from-red-500/10 to-rose-500/5", text: "text-red-500" },
    { Icon: ClipboardList, label: "OTC Medicines",  color: "from-amber-500/10 to-orange-500/5", text: "text-amber-600" },
    { Icon: Baby, label: "Baby Care", color: "from-blue-500/10 to-sky-500/5", text: "text-blue-600" },
    { Icon: HeartPulse, label: "Supplements", color: "from-emerald-500/10 to-teal-500/5", text: "text-emerald-600" },
    { Icon: Syringe, label: "Medical Devices", color: "from-purple-500/10 to-violet-500/5", text: "text-purple-600" },
    { Icon: Sparkles, label: "Personal Care", color: "from-pink-500/10 to-rose-500/5", text: "text-pink-500" },
  ];

  const showcaseProducts = [
    {
      id: 1,
      name: "Prescription & OTC Medications",
      cat: "Pharmacy Essentials",
      desc: "Comprehensive selection of genuine pain relievers, antibiotics, and daily medications dispensed by licensed pharmacists.",
      image: "/images/pharmacy/medications.jpg",
      badge: "In Stock",
      features: ["Verified Quality", "Licensed Pharmacist On-site"]
    },
    {
      id: 2,
      name: "Digital Health & BP Monitors",
      cat: "Medical Devices",
      desc: "Accurate blood pressure monitors, pulse oximeters, and diagnostic tools for easy at-home health tracking.",
      image: "/images/pharmacy/bp-monitor.jpg",
      badge: "Popular",
      features: ["Clinically Tested", "Warranty Included"]
    },
    {
      id: 3,
      name: "Baby & Pediatric Care Essentials",
      cat: "Baby Care",
      desc: "Gentle multivitamins, infant formula, skincare, and growth supplements trusted by pediatric specialists.",
      image: "/images/pharmacy/baby-care.jpg",
      badge: "Essential",
      features: ["Dermatologist Approved", "Safe Formula"]
    },
    {
      id: 4,
      name: "Wellness Supplements & Vitamins",
      cat: "Supplements",
      desc: "Premium Omega-3s, Vitamin C, Multivitamins, and immune boosters sourced from certified international brands.",
      image: "/images/pharmacy/supplements.jpg",
      badge: "Top Rated",
      features: ["100% Authentic", "Immune Support"]
    },
  ];

  const services = [
    { Icon: ClipboardList, t: "Medication Counseling", d: "One-on-one guidance on how to safely take your medication." },
    { Icon: HeartPulse, t: "Blood Pressure Check", d: "Quick, accurate BP readings from our health team." },
    { Icon: Syringe, t: "Blood Sugar Test", d: "Fast glucose testing with same-day results." },
    { Icon: Pill, t: "Prescription Refill", d: "Renew ongoing prescriptions without the wait." },
    { Icon: Stethoscope, t: "Health Consultation", d: "Speak with a licensed pharmacist about any concern." },
    { Icon: Shield, t: "Vaccination", d: "Routine and travel vaccinations administered safely." },
    { Icon: ClipboardList, t: "Health Screening", d: "Comprehensive wellness checks for early detection." },
    { Icon: Truck, t: "Medication Delivery", d: "Have your order delivered to your doorstep same-day." },
    { Icon: PhoneCall, t: "Telemedicine", d: "Video consultations from the comfort of your home." },
  ];

  const steps = [
    { n: "01", t: "Choose a Service", d: "Pick from consultation, screening, or a refill request." },
    { n: "02", t: "Pick a Time", d: "Select a date and time that works for you." },
    { n: "03", t: "Get Confirmed", d: "We confirm by SMS or WhatsApp within minutes." },
    { n: "04", t: "Visit or Connect", d: "See us in-store, or join your telemedicine call." },
  ];

  const features = [
    { Icon: ClipboardList, t: "Prescription Upload", d: "Snap a photo of your prescription and our pharmacists verify and prepare it for pickup or delivery." },
    { Icon: Clock, t: "Medicine Reminders", d: "Never miss a dose — set reminders synced to your refill schedule." },
    { Icon: Shield, t: "Drug Interaction Warnings", d: "Our system flags potential interactions before you check out." },
    { Icon: Truck, t: "Refill Requests", d: "Request a refill in one tap and we'll have it ready." },
    { Icon: HeartPulse, t: "Health Tips", d: "Curated advice from our in-house pharmacists, weekly." },
    { Icon: Stethoscope, t: "Medication Information", d: "Clear, plain-language info sheets on every medicine we stock." },
  ];

  return (
    <>
      {/* ================= LIGHTER VIBRANT HERO HEADER ================= */}
      <header className="relative pt-36 md:pt-44 pb-28 overflow-hidden bg-gradient-to-br from-red-600 via-rose-600 to-red-700 text-white">
        
        {/* Animated Background Glow Elements */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} 
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-rose-400/40 blur-[120px] pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }} 
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-amber-300/30 blur-[120px] pointer-events-none" 
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Header Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-xs font-extrabold mb-6 shadow-sm"
            >
              <Activity size={16} className="text-amber-300 animate-pulse" />
              <span>NAFDAC Licensed Pharmacy</span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold leading-[1.08] tracking-tight"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Licensed pharmacy care{" "}
              <span className="text-amber-300">
                you can trust.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base md:text-lg leading-relaxed text-red-50 max-w-xl font-medium"
            >
              Prescription medicines, OTC essentials, healthcare screenings, and expert guidance from registered pharmacists serving Ondo Town.
            </motion.p>

            {/* Call To Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mt-8"
            >
              <Btn variant="gold" icon={Calendar} onClick={goToContact}>Book Appointment</Btn>
              <a
                href="https://wa.me/2348146008685"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition shadow-lg shadow-black/10 hover:-translate-y-0.5"
              >
                <Phone size={16} /> Chat Pharmacist
              </a>
            </motion.div>
          </div>

          {/* Floating Healthcare Card Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-white/10 p-8 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white border border-white/30">
                  <Pill size={30} />
                </div>
                <div>
                  <h3 className="font-extrabold text-xl text-white">100% Genuine Medicine</h3>
                  <p className="text-xs text-red-100">Verified Sourcing &amp; Temperature Controlled</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "On-site Licensed Pharmacists",
                  "Prescription Verification & Refills",
                  "Free Blood Pressure Screenings"
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/15 border border-white/10 text-xs font-semibold text-white"
                  >
                    <CheckCircle2 size={16} className="text-amber-300 shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ================= CATEGORIES WITH ANIMATED TILES ================= */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold tracking-widest text-red-500 uppercase">Browse Store</span>
            <h2 className="text-3xl font-extrabold text-stone-900 mt-2" style={{ fontFamily: "Manrope, sans-serif" }}>
              Pharmacy Categories
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {cats.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`bg-gradient-to-b ${c.color} bg-white border border-stone-200/70 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col items-center text-center`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${c.text}`}>
                  <c.Icon size={24} />
                </div>
                <h4 className="font-extrabold text-stone-900 text-sm leading-tight">{c.label}</h4>
                <span className="text-[11px] font-semibold text-stone-400 mt-1">{c.count}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= POPULAR PRODUCTS SHOWCASE ================= */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold tracking-widest text-red-500 uppercase">Featured Counter</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mt-2" style={{ fontFamily: "Manrope, sans-serif" }}>
              Popular Pharmacy Essentials
            </h2>
            <p className="text-sm text-stone-500 mt-2">Explore genuine healthcare medications available in-store at Gozak Pharmacy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {showcaseProducts.map((p, i) => (
              <motion.div 
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Photo Container */}
                <div className="relative h-56 overflow-hidden bg-stone-100">
                  <img 
                    src={p.image} 
                    alt={p.name}
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80";
                    }}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <button 
                      onClick={() => setSelectedProduct(p)}
                      className="w-full py-2.5 bg-white text-stone-900 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg hover:bg-stone-100 transition"
                    >
                      <Eye size={15} /> Quick Info
                    </button>
                  </div>

                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-stone-900 text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                    {p.badge}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-500 mb-1">{p.cat}</span>
                  <h4 className="font-extrabold text-base leading-snug mb-2" style={{ color: BRAND.dark }}>{p.name}</h4>
                  <p className="text-xs text-stone-500 leading-relaxed mb-4 flex-1">{p.desc}</p>
                  
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-600">
                    <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                      <CheckCircle2 size={14} /> Available
                    </span>
                    <button 
                      onClick={() => setSelectedProduct(p)}
                      className="text-stone-400 hover:text-red-500 font-bold flex items-center gap-1 transition"
                    >
                      Details <ChevronRight size={13} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLINICAL SERVICES ================= */}
      <section className="py-24 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-red-500 uppercase">Clinical Care</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mt-2" style={{ fontFamily: "Manrope, sans-serif" }}>
              Healthcare Services, Made Convenient
            </h2>
            <p className="text-sm text-stone-500 mt-2">From routine checks to telemedicine, our medical team is here for your family's wellbeing.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl border border-stone-200/80 p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-red-50 text-red-500 transition-transform group-hover:scale-110 duration-300">
                    <s.Icon size={22} />
                  </div>
                  <h4 className="font-extrabold text-lg text-stone-900">{s.t}</h4>
                  <p className="text-xs md:text-sm text-stone-500 mt-2 leading-relaxed">{s.d}</p>
                </div>
                
                <button 
                  onClick={goToContact} 
                  className="mt-6 text-xs font-extrabold flex items-center gap-1.5 transition-all text-red-500 hover:text-red-600 group-hover:gap-2"
                >
                  Book this service <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS (Dark Banner with Animated Steps) ================= */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-amber-400 uppercase">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2" style={{ fontFamily: "Manrope, sans-serif" }}>
              Booking takes less than a minute
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md"
              >
                <div className="text-4xl font-black text-amber-400/30 mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>{step.n}</div>
                <h4 className="font-extrabold text-white text-base">{step.t}</h4>
                <p className="text-xs text-stone-400 mt-2 leading-relaxed">{step.d}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Btn variant="gold" icon={Calendar} onClick={goToContact}>Book an Appointment</Btn>
          </div>
        </div>
      </section>

      {/* ================= PHARMACY FEATURES ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-red-500 uppercase">Pharmacy Features</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mt-2" style={{ fontFamily: "Manrope, sans-serif" }}>
              More than a medicine counter
            </h2>
            <p className="text-sm text-stone-500 mt-2">Tools that make managing your family's health easier.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="bg-stone-50/60 rounded-3xl border border-stone-200/80 p-7 h-full hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-red-50 text-red-500">
                  <f.Icon size={22} />
                </div>
                <h4 className="font-extrabold text-base text-stone-900">{f.t}</h4>
                <p className="text-xs md:text-sm text-stone-500 mt-2 leading-relaxed">{f.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL WITH ANIMATE PRESENCE ================= */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative z-10"
            >
              <button 
                onClick={() => setSelectedProduct(null)} 
                className="absolute top-4 right-4 bg-white/80 backdrop-blur-md hover:bg-stone-200 text-stone-700 p-2 rounded-full transition z-20 shadow"
              >
                <X size={18} />
              </button>

              <div className="h-56 relative bg-stone-100">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80";
                  }}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <span className="text-xs font-extrabold text-red-500 uppercase tracking-wider">{selectedProduct.cat}</span>
                <h3 className="text-xl font-extrabold text-stone-900 mt-1">{selectedProduct.name}</h3>
                <p className="text-xs md:text-sm text-stone-600 mt-3 leading-relaxed">{selectedProduct.desc}</p>

                <div className="mt-5 space-y-2">
                  <div className="text-xs font-bold text-stone-400 uppercase tracking-wide">Highlights</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.features.map((feat, idx) => (
                      <span key={idx} className="text-xs font-medium bg-red-50 text-red-600 border border-red-100 px-3 py-1 rounded-full">
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a 
                    href="https://wa.me/2348146008685" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3.5 rounded-xl flex items-center justify-center gap-2 transition shadow-md shadow-emerald-600/20"
                  >
                    <Phone size={15} /> Inquire via WhatsApp
                  </a>
                  <div className="flex items-center justify-center gap-1.5 text-xs text-stone-500 font-medium px-4">
                    <MapPin size={15} className="text-red-500" /> Akure Garage Branch
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}