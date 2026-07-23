import React from "react";
import {
  Pill, ClipboardList, Baby, HeartPulse, Syringe, Sparkles, Search,
  Clock, Shield, Truck, Stethoscope,
} from "lucide-react";
import { BRAND } from "../lib/brand";
import { Reveal } from "../components/Reveal";
import { Btn } from "../components/Btn";
import { PageHero, SectionHead, ProductCard, CategoryTile } from "../components/Shared";

export default function PharmacyPage() {
  const cats = [
    { Icon: Pill, label: "Prescription Drugs", count: "320+ items" },
    { Icon: ClipboardList, label: "OTC Medicines", count: "210+ items" },
    { Icon: Baby, label: "Baby Care", count: "95+ items" },
    { Icon: HeartPulse, label: "Supplements", count: "160+ items" },
    { Icon: Syringe, label: "Medical Devices", count: "70+ items" },
    { Icon: Sparkles, label: "Personal Care", count: "140+ items" },
  ];

  const products = [
    { name: "Paracetamol 500mg", cat: "OTC Medicines", price: "₦500", rating: 5, Icon: Pill, tag: "Popular" },
    { name: "Digital BP Monitor", cat: "Medical Devices", price: "₦18,500", rating: 4, Icon: Syringe, tag: "New" },
    { name: "Baby Multivitamin Drops", cat: "Baby Care", price: "₦3,200", rating: 5, Icon: Baby },
    { name: "Omega-3 Fish Oil", cat: "Supplements", price: "₦6,800", oldPrice: "₦8,000", rating: 4, Icon: HeartPulse },
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
      <PageHero eyebrow="Pharmacy" title="Licensed pharmacy care you can trust." desc="Prescription medicines, OTC essentials, and professional guidance from our registered pharmacists." Icon={Pill} />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="bg-white rounded-2xl border border-stone-100 p-4 flex flex-col md:flex-row gap-3 shadow-sm">
              <div className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl bg-stone-50">
                <Search size={17} className="text-stone-400" />
                <input placeholder="Search medicines, brands, categories..." className="bg-transparent outline-none text-sm w-full" />
              </div>
              <select className="px-4 py-2.5 rounded-xl bg-stone-50 text-sm outline-none">
                <option>All Categories</option><option>Prescription</option><option>OTC</option>
              </select>
              <select className="px-4 py-2.5 rounded-xl bg-stone-50 text-sm outline-none">
                <option>Sort: Popular</option><option>Price: Low to High</option><option>Price: High to Low</option>
              </select>
              <Btn variant="primary" icon={Search}>Search</Btn>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead eyebrow="Browse" title="Pharmacy categories" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {cats.map((c, i) => <CategoryTile key={i} {...c} delay={i * 60} />)}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "rgba(193,18,31,0.03)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead eyebrow="Featured" title="Popular pharmacy products" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((p, i) => <ProductCard key={i} {...p} delay={i * 80} />)}
          </div>
        </div>
      </section>

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
    </>
  );
}
