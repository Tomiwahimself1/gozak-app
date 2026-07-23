import React from "react";
import { Building2, Shield, Award, Users, Sparkles } from "lucide-react";
import { BRAND } from "../lib/brand";
import { Reveal } from "../components/Reveal";
import { PageHero, SectionHead } from "../components/Shared";

export default function AboutPage() {
  const values = [
    { Icon: Shield, t: "Trust", d: "Every product and every consultation is backed by our word." },
    { Icon: Award, t: "Integrity", d: "Honest pricing and honest advice, always." },
    { Icon: Users, t: "Community", d: "We grew up in Ondo, and we serve Ondo first." },
    { Icon: Sparkles, t: "Affordable Quality", d: "Premium care shouldn't be out of reach." },
  ];

  return (
    <>
      <PageHero
        eyebrow="About Gozak"
        title="Built on perseverance, trust and one small pharmacy shop."
        desc="From a street vendor's cart in 2012 to a multi-level shopping destination — this is the Gozak story."
        Icon={Building2}
      />

      <section className="py-8 pb-24">
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

      <section className="py-24" style={{ background: BRAND.dark }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <Reveal>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-9 h-full">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(244,161,0,0.15)", color: BRAND.goldLight }}><Sparkles size={22} /></div>
              <h3 className="text-xl font-extrabold text-white">Our Mission</h3>
              <p className="text-sm mt-3 text-white/60 leading-relaxed">To provide accessible, trustworthy healthcare and everyday essentials to every family in Ondo State — with honesty, professionalism and care at every counter.</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-9 h-full">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(193,18,31,0.2)", color: "#ff8a8a" }}><Award size={22} /></div>
              <h3 className="text-xl font-extrabold text-white">Our Vision</h3>
              <p className="text-sm mt-3 text-white/60 leading-relaxed">To be the most trusted pharmacy and retail brand in Southwest Nigeria — a name synonymous with quality, community, and care.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead eyebrow="What We Stand For" title="Our core values" />
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal delay={i * 90} key={i}>
                <div className="bg-white rounded-2xl border border-stone-100 p-7 h-full hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(193,18,31,0.08)", color: BRAND.red }}><v.Icon size={22} /></div>
                  <h4 className="font-extrabold text-base" style={{ color: BRAND.dark }}>{v.t}</h4>
                  <p className="text-sm text-stone-500 mt-2 leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead eyebrow="In Pictures" title="A look inside Gozak" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[BRAND.red, BRAND.gold, BRAND.redDark, BRAND.goldLight, "#2a1200", BRAND.red, BRAND.gold, BRAND.redDeep].map((c, i) => (
              <Reveal delay={i * 60} key={i}>
                <div className="aspect-square rounded-2xl hover:scale-[1.03] transition-transform duration-300" style={{ background: `linear-gradient(160deg, ${c}, rgba(0,0,0,0.15))` }} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
