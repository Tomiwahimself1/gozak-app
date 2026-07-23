import React from "react";
import {
  ClipboardList, HeartPulse, Syringe, Pill, Stethoscope, Shield, Truck,
  PhoneCall, Calendar, ChevronRight,
} from "lucide-react";
import { BRAND } from "../lib/brand";
import { useApp } from "../context/AppContext";
import { Reveal } from "../components/Reveal";
import { Btn } from "../components/Btn";
import { PageHero, SectionHead } from "../components/Shared";

export default function ServicePage() {
  const { setApptOpen } = useApp();

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

  return (
    <>
      <PageHero eyebrow="Services" title="Healthcare services, made convenient." desc="From routine checks to telemedicine, our team is here for your family's wellbeing." Icon={Stethoscope} />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
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

      <section className="py-28" style={{ background: BRAND.dark }}>
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
    </>
  );
}
