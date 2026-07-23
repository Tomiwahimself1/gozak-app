import React from "react";
import { MapPin, Phone, Mail, Clock, PhoneCall, Send } from "lucide-react";
import { BRAND } from "../lib/brand";
import { Reveal } from "../components/Reveal";
import { Btn } from "../components/Btn";
import { PageHero } from "../components/Shared";

export default function ContactPage() {
  const info = [
    { Icon: MapPin, t: "Visit Us", d: "No.1 Adenikpekun Close, Akure Garage Roundabout, Ondo Town, Ondo State" },
    { Icon: Phone, t: "Call Us", d: "+234 811 111 6110" },
    { Icon: Mail, t: "Email Us", d: "director@gozakonline.com" },
    { Icon: Clock, t: "Opening Hours", d: "Mon – Sat: 8:00 AM – 9:00 PM · Sun: 10:00 AM – 6:00 PM" },
  ];

  return (
    <>
      <PageHero eyebrow="Contact" title="We'd love to hear from you." desc="Questions, feedback, or an emergency? Reach our team any way that's convenient for you." Icon={Phone} />

      <section className="py-8 pb-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {info.map((c, i) => (
                <div key={i} className="bg-white rounded-2xl border border-stone-100 p-6 hover:shadow-lg transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(193,18,31,0.08)", color: BRAND.red }}><c.Icon size={20} /></div>
                  <h4 className="font-extrabold text-sm" style={{ color: BRAND.dark }}>{c.t}</h4>
                  <p className="text-sm text-stone-500 mt-1.5 leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden border border-stone-100 h-64 relative" style={{ background: "linear-gradient(150deg, rgba(193,18,31,0.12), rgba(244,161,0,0.15))" }}>
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
                <MapPin size={30} color={BRAND.red} />
                <span className="text-sm font-bold" style={{ color: BRAND.dark }}>Interactive map — Akure Garage Roundabout</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-2xl p-5" style={{ background: "rgba(193,18,31,0.05)" }}>
              <PhoneCall size={20} color={BRAND.red} />
              <div>
                <div className="text-xs font-bold" style={{ color: BRAND.red }}>Emergency Line</div>
                <div className="text-xs text-stone-500">Available 24/7 for urgent medication needs</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-white rounded-3xl border border-stone-100 p-9 shadow-sm">
              <h3 className="text-xl font-extrabold" style={{ color: BRAND.dark }}>Send us a message</h3>
              <p className="text-sm text-stone-500 mt-1.5">We typically respond within a few hours.</p>
              <form className="mt-7 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="First name" className="px-4 py-3 rounded-xl border border-stone-200 outline-none text-sm" />
                  <input placeholder="Last name" className="px-4 py-3 rounded-xl border border-stone-200 outline-none text-sm" />
                </div>
                <input placeholder="Email address" type="email" className="w-full px-4 py-3 rounded-xl border border-stone-200 outline-none text-sm" />
                <input placeholder="Phone number" type="tel" className="w-full px-4 py-3 rounded-xl border border-stone-200 outline-none text-sm" />
                <textarea placeholder="Your message" rows={4} className="w-full px-4 py-3 rounded-xl border border-stone-200 outline-none text-sm resize-none" />
                <Btn variant="primary" className="w-full" icon={Send}>Send Message</Btn>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
