import React, { useState } from "react";
import {
  Pill, ClipboardList, Baby, HeartPulse, Syringe, Sparkles, Search,
  Clock, Shield, Truck, Stethoscope, Eye, CheckCircle2, Phone, MapPin, X,
  PhoneCall, Calendar, ChevronRight
} from "lucide-react";
import { BRAND } from "../lib/brand";
import { useApp } from "../context/AppContext";
import { Reveal } from "../components/Reveal";
import { Btn } from "../components/Btn";
import { PageHero, SectionHead, CategoryTile } from "../components/Shared";

export default function PharmacyPage() {
  const { setApptOpen } = useApp();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const cats = [
    { Icon: Pill, label: "Prescription Drugs", count: "320+ items" },
    { Icon: ClipboardList, label: "OTC Medicines", count: "210+ items" },
    { Icon: Baby, label: "Baby Care", count: "95+ items" },
    { Icon: HeartPulse, label: "Supplements", count: "160+ items" },
    { Icon: Syringe, label: "Medical Devices", count: "70+ items" },
    { Icon: Sparkles, label: "Personal Care", count: "140+ items" },
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
    ["01", "Choose a Service", "Pick from consultation, screening, or a refill request."],
    ["02", "Pick a Time", "Select a date and time that works for you."],
    ["03", "Get Confirmed", "We confirm by SMS or WhatsApp within minutes."],
    ["04", "Visit or Connect", "See us in-store, or join your telemedicine call."],
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
      <PageHero 
        eyebrow="Pharmacy & Healthcare" 
        title="Licensed pharmacy care you can trust." 
        desc="Prescription medicines, OTC essentials, healthcare services, and professional guidance from our registered pharmacists." 
        Icon={Pill} 
      />

      {/* Search Bar */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="bg-white rounded-2xl border border-stone-100 p-4 flex flex-col md:flex-row gap-3 shadow-sm">
              <div className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl bg-stone-50">
                <Search size={17} className="text-stone-400" />
                <input placeholder="Search medicines, health products, categories..." className="bg-transparent outline-none text-sm w-full" />
              </div>
              <select className="px-4 py-2.5 rounded-xl bg-stone-50 text-sm outline-none">
                <option>All Categories</option>
                <option>Prescription</option>
                <option>OTC Medicines</option>
                <option>Supplements</option>
              </select>
              <Btn variant="primary" icon={Search}>Search Stock</Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead eyebrow="Browse" title="Pharmacy categories" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {cats.map((c, i) => <CategoryTile key={i} {...c} delay={i * 60} />)}
          </div>
        </div>
      </section>

      {/* Popular Pharmacy Products Showcase */}
      <section className="py-20" style={{ background: "rgba(193,18,31,0.03)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead 
            eyebrow="Featured Counter" 
            title="Popular pharmacy products" 
            desc="Explore our genuine healthcare range available in-store at Gozak Pharmacy." 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {showcaseProducts.map((p, i) => (
              <Reveal delay={i * 90} key={p.id}>
                <div className="group bg-white rounded-2xl border border-stone-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  
                  {/* Photo Container */}
                  <div className="relative h-56 overflow-hidden bg-stone-100">
                    <img 
                      src={p.image} 
                      alt={p.name}
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80";
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <button 
                        onClick={() => setSelectedProduct(p)}
                        className="w-full py-2.5 bg-white/95 text-stone-900 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-white transition"
                      >
                        <Eye size={15} /> Quick Info
                      </button>
                    </div>

                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-stone-800 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                      {p.badge}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 mb-1">{p.cat}</span>
                    <h4 className="font-extrabold text-base leading-snug mb-2" style={{ color: BRAND.dark }}>{p.name}</h4>
                    <p className="text-xs text-stone-500 leading-relaxed mb-4 flex-1">{p.desc}</p>
                    
                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-600">
                      <span className="flex items-center gap-1 text-emerald-600">
                        <CheckCircle2 size={14} /> Available In-Store
                      </span>
                      <button 
                        onClick={() => setSelectedProduct(p)}
                        className="text-stone-400 hover:text-red-600 transition"
                      >
                        Details →
                      </button>
                    </div>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Merged Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead 
            eyebrow="Clinical Care" 
            title="Healthcare services, made convenient" 
            desc="From routine checks to telemedicine, our medical team is here for your family's wellbeing."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal delay={i * 60} key={i}>
                <div className="bg-white rounded-2xl border border-stone-100 p-7 h-full hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300" style={{ background: "rgba(193,18,31,0.08)", color: BRAND.red }}>
                    <s.Icon size={22} />
                  </div>
                  <h4 className="font-extrabold text-base" style={{ color: BRAND.dark }}>{s.t}</h4>
                  <p className="text-sm text-stone-500 mt-2 leading-relaxed">{s.d}</p>
                  <button onClick={() => setApptOpen(true)} className="mt-4 text-xs font-bold flex items-center gap-1.5 underline-grow" style={{ color: BRAND.red }}>
                    Book this service <ChevronRight size={13} />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Steps Section */}
      <section className="py-24" style={{ background: BRAND.dark }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead light eyebrow="How It Works" title="Booking takes less than a minute" />
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map(([n, t, d], i) => (
              <Reveal delay={i * 100} key={i}>
                <div className="relative">
                  <div className="text-4xl font-extrabold mb-4" style={{ color: "rgba(255,255,255,0.12)", fontFamily: "Manrope, sans-serif" }}>{n}</div>
                  <h4 className="font-extrabold text-white text-base">{t}</h4>
                  <p className="text-sm text-white/50 mt-2 leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <div className="text-center mt-14">
              <Btn variant="gold" icon={Calendar} onClick={() => setApptOpen(true)}>Book an Appointment</Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pharmacy Features Section */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead eyebrow="Pharmacy Features" title="More than a medicine counter" desc="Tools that make managing your family's health easier." />
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Reveal delay={i * 70} key={i}>
                <div className="bg-white rounded-2xl border border-stone-100 p-7 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(193,18,31,0.08)", color: BRAND.red }}><f.Icon size={20} /></div>
                  <h4 className="font-extrabold text-sm" style={{ color: BRAND.dark }}>{f.t}</h4>
                  <p className="text-sm text-stone-500 mt-2 leading-relaxed">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Info Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative">
            <button 
              onClick={() => setSelectedProduct(null)} 
              className="absolute top-4 right-4 bg-stone-100 hover:bg-stone-200 text-stone-600 p-2 rounded-full transition z-10"
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
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">{selectedProduct.cat}</span>
              <h3 className="text-xl font-extrabold mt-1" style={{ color: BRAND.dark }}>{selectedProduct.name}</h3>
              <p className="text-sm text-stone-600 mt-3 leading-relaxed">{selectedProduct.desc}</p>

              <div className="mt-5 space-y-2">
                <div className="text-xs font-bold text-stone-400 uppercase tracking-wide">Highlights</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.features.map((feat, idx) => (
                    <span key={idx} className="text-xs font-medium bg-stone-100 text-stone-700 px-3 py-1 rounded-full">
                      ✓ {feat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://wa.me/2348111116110" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition"
                >
                  <Phone size={15} /> Inquire via WhatsApp
                </a>
                <div className="flex items-center justify-center gap-1.5 text-xs text-stone-500 font-medium px-4">
                  <MapPin size={15} color={BRAND.red} /> Akure Garage Branch
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}