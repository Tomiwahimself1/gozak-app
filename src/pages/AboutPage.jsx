import React from "react";
import {
  Building2, Shield, Award, Users, Sparkles, Tv, Smartphone, Package, Sofa, Shirt
} from "lucide-react";
import { BRAND } from "../lib/brand";
import { Reveal } from "../components/Reveal";
import { Btn } from "../components/Btn";
import { PageHero, SectionHead, CategoryTile } from "../components/Shared";

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
      <PageHero
        eyebrow="About Gozak & Shopping Mall"
        title="Built on perseverance, trust and one small pharmacy shop."
        desc="From a street vendor's cart in 2012 to a multi-level shopping destination — browse our story, explore our mall, and discover the Gozak experience."
        Icon={Building2}
      />

      {/* Timeline Section */}
      <section className="py-12 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHead eyebrow="Timeline" title="How we grew" center={false} />
          <div className="relative pl-8 border-l-2" style={{ borderColor: "rgba(193,18,31,0.15)" }}>
            {[
              ["2012", "The Beginning", "Stanley Nzerem moved from Imo State to Ondo with very little, selling over-the-counter medication on the streets."],
              ["2014", "First Shop", "Perseverance paid off — a small rented pharmacy shop opened in Ondo Town."],
              ["2016", "Growing Trust", "Word of mouth spread. The shop expanded its shelves and its reputation for honesty."],
              ["2019", "The Supermarket", "Gozak added a full supermarket wing — groceries, household items and more, under one roof."],
              ["2022", "The Shopping Mall", "Electronics, phones, furniture and lifestyle products joined the Gozak family."],
              ["Today", "A Community Institution", "Gozak Pharmacy & Supermarket stands as one of Ondo's most trusted multi-level retail destinations."],
            ].map(([y, t, d], i) => (
              <Reveal delay={i * 90} key={i}>
                <div className="mb-10 relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white" style={{ background: BRAND.red }} />
                  <div className="text-xs font-bold uppercase tracking-wide" style={{ color: BRAND.gold }}>{y}</div>
                  <h4 className="font-extrabold text-lg mt-1" style={{ color: BRAND.dark }}>{t}</h4>
                  <p className="text-sm text-stone-500 mt-1.5 max-w-lg leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Mall - Categories Section */}
      <section className="py-16 bg-stone-50/60 border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead eyebrow="Shopping Mall" title="Electronics, fashion & home — all in one visit" desc="From the latest gadgets to furniture and lifestyle finds, Level 3 has it all." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {mallCats.map((c, i) => <CategoryTile key={i} {...c} delay={i * 60} />)}
          </div>
        </div>
      </section>

      {/* Shopping Mall Promo Box */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="rounded-3xl p-10 md:p-14 text-center" style={{ background: BRAND.dark }}>
              <Sparkles className="mx-auto mb-4" size={30} color={BRAND.goldLight} />
              <h3 className="text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: "Manrope, sans-serif" }}>New arrivals every week</h3>
              <p className="text-white/60 text-sm mt-3 max-w-md mx-auto">Visit Level 3 in-store or check back online for the latest electronics and lifestyle drops.</p>
              <Btn variant="gold" className="mt-6">Browse Full Catalog</Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24" style={{ background: BRAND.dark }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <Reveal>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-9 h-full">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(244,161,0,0.15)", color: BRAND.goldLight }}>
                <Sparkles size={22} />
              </div>
              <h3 className="text-xl font-extrabold text-white">Our Mission</h3>
              <p className="text-sm mt-3 text-white/60 leading-relaxed">
                To provide accessible, trustworthy healthcare and everyday essentials to every family in Ondo State — with honesty, professionalism and care at every counter.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-9 h-full">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(193,18,31,0.2)", color: "#ff8a8a" }}>
                <Award size={22} />
              </div>
              <h3 className="text-xl font-extrabold text-white">Our Vision</h3>
              <p className="text-sm mt-3 text-white/60 leading-relaxed">
                To be the most trusted pharmacy and retail brand in Southwest Nigeria — a name synonymous with quality, community, and care.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead eyebrow="What We Stand For" title="Our core values" />
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal delay={i * 90} key={i}>
                <div className="bg-white rounded-2xl border border-stone-100 p-7 h-full hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(193,18,31,0.08)", color: BRAND.red }}>
                    <v.Icon size={22} />
                  </div>
                  <h4 className="font-extrabold text-base" style={{ color: BRAND.dark }}>{v.t}</h4>
                  <p className="text-sm text-stone-500 mt-2 leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* In Pictures Gallery Section */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead eyebrow="In Pictures" title="A look inside Gozak" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {galleryImages.map((img, i) => (
              <Reveal delay={i * 60} key={i}>
                <div className="group relative aspect-square rounded-2xl overflow-hidden bg-stone-100 shadow-sm border border-stone-100">
                  <img
                    src={img.src}
                    alt={img.title}
                    onError={(e) => {
                      e.target.src = img.fallback;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-bold text-xs leading-snug">
                      {img.title}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}