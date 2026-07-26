import React, { useEffect, useState } from "react";
import {
  ShoppingBag, Calendar, MessageCircle, ChevronRight, Stethoscope,
  ShoppingBasket, Smartphone, HeartPulse, Sofa, Syringe, Percent,
  ArrowRight, Quote, Star,
} from "lucide-react";
import { BRAND } from "../lib/brand";
import { useApp } from "../context/AppContext";
import { Reveal, Counter } from "../components/Reveal";
import { Btn } from "../components/Btn";
import { Eyebrow, SectionHead } from "../components/Shared";


export default function HomePage() {
  const { setApptOpen, setPage } = useApp();
  const [testi, setTesti] = useState(0);
  const testimonials = [
    { text: "Gozak is my first stop for both medication and groceries. The pharmacists actually take time to explain your prescription.", name: "Adeola F.", role: "Ondo Town resident" },
    { text: "I can do my full weekly shopping and pick up my father's medication refill in one trip. It has saved us so much time.", name: "Tunde O.", role: "Customer since 2016" },
    { text: "Watching Gozak grow from a small shop to this mall has been inspiring — it says a lot about the founder's integrity.", name: "Grace A.", role: "Community member" },
  ];

  useEffect(() => {
    const t = setInterval(() => setTesti((v) => (v + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [testimonials.length]);

  const brands = ["GSK", "Emzor", "Fidson", "Nestlé", "PZ Cussons", "May & Baker", "Unilever", "Dangote"];

  return (
    <>
      {/* ================= HERO ================= */}
      <header
        className="relative pt-40 md:pt-48 pb-24 overflow-hidden"
        style={{ background: `radial-gradient(1000px 520px at 85% -10%, rgba(244,161,0,0.18), transparent 60%), radial-gradient(700px 480px at -10% 30%, rgba(193,18,31,0.08), transparent 60%), ${BRAND.cream}` }}
      >
        <div className="absolute top-24 -left-10 w-64 h-64 rounded-full opacity-[0.07] anim-blob" style={{ background: BRAND.red }} />
        <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full opacity-[0.08] anim-blob" style={{ background: BRAND.gold, animationDelay: "3s" }} />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center relative">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full mb-6" style={{ color: BRAND.red, background: "rgba(193,18,31,0.08)" }}>
                <span className="w-1.5 h-1.5 rounded-full anim-pulsering" style={{ background: "#10B981" }} />
                Est. 2012 · Akure Garage Roundabout, Ondo Town
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]" style={{ fontFamily: "Manrope, sans-serif", color: BRAND.dark }}>
                Trusted{" "}
                <span style={{ background: `linear-gradient(100deg, ${BRAND.red}, ${BRAND.gold} 65%)`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  pharmacy care
                </span>{" "}
                &amp; everyday essentials, under one roof.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg leading-relaxed max-w-lg" style={{ color: "#5B4636" }}>
                From prescription medicines to your weekly groceries, electronics and lifestyle finds Gozak has served Ondo families with honesty and quality since 2012.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-wrap gap-3 mt-9">
                <Btn variant="primary" icon={ShoppingBag} onClick={() => setPage("about")}>Shop Now</Btn>
                <Btn variant="gold" icon={Calendar} onClick={() => setApptOpen(true)}>Book Appointment</Btn>
                <a
                  href="https://wa.me/2348111116110"
                  className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3.5 rounded-full text-white transition hover:-translate-y-0.5"
                  style={{ background: "#25D366", boxShadow: "0 10px 26px -6px rgba(37,211,102,0.45)" }}
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          {/* Supermarket Video Container */}
          <Reveal delay={150} scale className="relative h-[440px] hidden md:block">
            <div
              className="absolute inset-0 rounded-[28px] overflow-hidden flex items-center justify-center bg-black border border-white/20"
              style={{ boxShadow: "0 30px 70px -22px rgba(90,10,14,0.5)" }}
            >
              <video 
                controls 
                autoPlay 
                muted 
                loop 
                className="w-full h-full object-cover rounded-[28px]"
              >
                <source src="/videos/supermarket-tour.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Floating Open Now Badge */}
            <div className="absolute top-6 -left-6 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3.5 shadow-2xl flex items-center gap-3 anim-float z-10">
              <span className="w-2.5 h-2.5 rounded-full anim-pulsering" style={{ background: "#10B981" }} />
              <div>
                <div className="text-xs font-bold" style={{ color: BRAND.dark }}>Open Now</div>
                <div className="text-[11px] text-stone-500">Closes 9:00 PM · Mon–Sat</div>
              </div>
            </div>

            {/* Floating Address Badge */}
            <div className="absolute bottom-6 -right-5 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3.5 shadow-2xl max-w-[230px] z-10" style={{ animation: "floatSlow 6s ease-in-out infinite reverse" }}>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: BRAND.dark }}>
                <ShoppingBasket size={14} color={BRAND.red} /> No.1 Adenikpekun Close
              </div>
              <div className="text-[11px] text-stone-500 mt-1 leading-relaxed">Akure Garage Roundabout, Ondo Town</div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={400}>
          <div className="mt-20 overflow-hidden relative" style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
            <div className="flex gap-16 marquee-track w-max">
              {[...brands, ...brands, ...brands].map((b, i) => (
                <span key={i} className="text-xl font-extrabold whitespace-nowrap" style={{ color: "rgba(36,21,5,0.25)", fontFamily: "Manrope, sans-serif" }}>{b}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </header>

      {/* ================= STATS ================= */}
      <section className="py-16" style={{ background: BRAND.dark }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { n: 10, s: "+", l: "Years of Experience" },
            { n: 3, s: "", l: "Branches Across Ondo" },
            { n: 500, s: "K+", l: "Community Visits" },
            { n: 98, s: "%", l: "Customer Satisfaction" },
          ].map((s, i) => (
            <Reveal delay={i * 100} key={i}>
              <div className="text-3xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "Manrope, sans-serif" }}>
                <Counter target={s.n} suffix={s.s} />
              </div>
              <div className="text-sm mt-2 text-white/50 font-medium">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= DIRECTORY ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead eyebrow="Building Directory" title="One address, three worlds of shopping." desc="Gozak operates as a multi-level destination in Ondo Town. Find your floor below — just like walking through our doors." />
          <Reveal>
            <div className="rounded-[28px] border border-stone-100 bg-white overflow-hidden shadow-[0_24px_60px_-30px_rgba(28,16,6,0.15)]">
              {[
                { lvl: "Ground Floor", n: "01", bar: BRAND.red, title: "Pharmacy & Healthcare", desc: "Licensed pharmacists, prescription care and wellness services.", cats: ["Prescription Drugs", "OTC Medicines", "Baby Care", "Supplements", "Medical Devices"], page: "pharmacy" },
                { lvl: "Level 2", n: "02", bar: BRAND.gold, title: "Supermarket", desc: "Fresh groceries and household essentials for everyday living.", cats: ["Groceries", "Beverages", "Frozen Foods", "Snacks", "Cleaning Supplies"], page: "about" },
                { lvl: "Level 3", n: "03", bar: BRAND.goldLight, title: "Shopping Mall & Lifestyle", desc: "Electronics, fashion and home essentials, all in one visit.", cats: ["Electronics", "Mobile Phones", "Furniture", "Fashion", "Accessories"], page: "about" },
              ].map((f, i) => (
                <button key={i} onClick={() => setPage(f.page)} className="w-full text-left grid md:grid-cols-[120px_1fr_1.3fr] border-b last:border-b-0 border-stone-100 hover:bg-stone-50/70 transition-colors group">
                  <div className="relative flex flex-col justify-center px-8 py-8">
                    <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: f.bar }} />
                    <div className="text-[11px] font-bold uppercase tracking-wide text-stone-400">{f.lvl}</div>
                    <div className="text-3xl font-extrabold mt-0.5" style={{ fontFamily: "Manrope, sans-serif", color: BRAND.dark }}>{f.n}</div>
                  </div>
                  <div className="px-2 md:px-0 py-4 md:py-8 flex flex-col justify-center gap-1.5">
                    <h3 className="text-xl font-extrabold flex items-center gap-2" style={{ color: BRAND.dark }}>
                      {f.title}
                      <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" style={{ color: BRAND.red }} />
                    </h3>
                    <p className="text-sm text-stone-500 max-w-xs">{f.desc}</p>
                  </div>
                  <div className="px-8 py-6 md:py-8 flex flex-wrap gap-2 items-center">
                    {f.cats.map((c) => (
                      <span key={c} className="text-xs font-semibold px-3.5 py-2 rounded-full bg-stone-50 border border-stone-100 group-hover:bg-white transition">{c}</span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= FEATURED CATEGORIES BENTO ================= */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead eyebrow="Featured" title="Shop by category" desc="Everything on our shelves, organized the way you shop." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 auto-rows-[190px]">
            
            {/* Featured Image Box */}
            <Reveal className="col-span-2 row-span-2">
              <div className="h-full rounded-3xl p-7 flex flex-col justify-end relative overflow-hidden shadow-lg group">
                <img 
                  src="/images/pharmacy-consultation.jpg" 
                  alt="Gozak Pharmacy Care"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80";
                  }}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Red Gradient Overlay */}
                <div 
                  className="absolute inset-0" 
                  style={{ background: `linear-gradient(180deg, rgba(193,18,31,0.2) 0%, rgba(130,10,20,0.88) 100%)` }} 
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-md text-white mb-4">
                    <Stethoscope size={22} />
                  </div>
                  <h4 className="text-white font-extrabold text-xl">Telemedicine &amp; Consultation</h4>
                  <span className="text-white/90 text-sm mt-1 block">Talk to a pharmacist or book a doctor visit, online or in-store.</span>
                </div>
              </div>
            </Reveal>

            {[
              { Icon: ShoppingBasket, t: "Groceries", d: "Fresh & pantry staples" },
              { Icon: Smartphone, t: "Mobile Phones", d: "Latest devices & accessories" },
              { Icon: HeartPulse, t: "Personal Care", d: "Beauty & wellness" },
              { Icon: Sofa, t: "Furniture", d: "Home & office" },
              { Icon: Syringe, t: "Health Screening", d: "BP, sugar & wellness checks" },
            ].map((c, i) => (
              <Reveal delay={(i + 1) * 80} key={i}>
                <div className="h-full bg-white rounded-3xl border border-stone-100 p-6 flex flex-col justify-end hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-auto" style={{ background: "rgba(193,18,31,0.08)", color: BRAND.red }}><c.Icon size={20} /></div>
                  <h4 className="font-extrabold text-base" style={{ color: BRAND.dark }}>{c.t}</h4>
                  <span className="text-xs text-stone-400 mt-1">{c.d}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROMO STRIP ================= */}
      {/*<section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden" style={{ background: `linear-gradient(120deg, ${BRAND.gold}, ${BRAND.goldLight})` }}>
              <div className="absolute -left-10 -bottom-16 w-56 h-56 rounded-full bg-white/20 anim-blob" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full bg-white/40 mb-3" style={{ color: BRAND.dark }}>
                  <Percent size={13} /> Latest Promotion
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold" style={{ color: BRAND.dark, fontFamily: "Manrope, sans-serif" }}>15% off all supplements this week</h3>
                <p className="text-sm mt-2" style={{ color: "rgba(28,16,6,0.7)" }}>Valid in-store and online. While stocks last.</p>
              </div>
              <Btn variant="dark" icon={ArrowRight}>Shop Promotions</Btn>
            </div>
          </Reveal>
        </div>
      </section>*/}

      {/* ================= FOUNDER STORY ================= */}
      <section className="py-28 relative overflow-hidden" style={{ background: BRAND.dark }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-center">
          <Reveal scale>
            <div className="aspect-[4/5] rounded-3xl relative overflow-hidden border border-white/10 group shadow-2xl bg-stone-900">
              <img
                src="/images/founder.jpg"
                alt="Stanley Nzerem - Founder, Gozak Pharmacy & Supermarket"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80";
                }}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute left-5 bottom-5 right-5 bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3.5 text-white z-10">
                <div className="text-sm font-extrabold">Stanley Nzerem</div>
                <div className="text-xs text-white/70 font-medium">Founder, Gozak Pharmacy &amp; Supermarket</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow light>Our Story</Eyebrow>
            <Quote size={30} color={BRAND.gold} className="mb-3" />
            <p className="text-xl md:text-2xl font-semibold leading-relaxed text-stone-100" style={{ fontFamily: "Manrope, sans-serif" }}>
              "I arrived in Ondo with very little, selling medications on the street. Through perseverance, honesty and consistency, that small effort grew into a home for our community's health and everyday needs."
            </p>
            <div className="mt-7 font-extrabold text-white">Stanley Nzerem</div>
            <div className="text-sm mt-0.5" style={{ color: BRAND.goldLight }}>Founder &amp; Managing Director</div>
            <div className="flex flex-wrap gap-8 mt-11 pt-8 border-t border-white/10">
              {[
                ["2012", "Started selling OTC medication on the streets of Ondo."],
                ["2014", "Opened our first rented pharmacy shop."],
                ["2019", "Expanded into a full supermarket."],
                ["Today", "A multi-level pharmacy, supermarket & mall."],
              ].map(([y, t], i) => (
                <div key={i} className="max-w-[150px]">
                  <div className="font-extrabold text-sm" style={{ color: BRAND.goldLight, fontFamily: "Manrope, sans-serif" }}>{y}</div>
                  <div className="text-xs text-white/50 mt-1.5 leading-relaxed">{t}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead eyebrow="Google Reviews" title="What our community says" />
          <div className="max-w-2xl mx-auto text-center relative min-h-[220px]">
            <div key={testi} style={{ animation: "fadeInUp .5s ease" }}>
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} fill={BRAND.gold} color={BRAND.gold} />)}
              </div>
              <p className="text-xl font-medium leading-relaxed" style={{ color: BRAND.dark }}>"{testimonials[testi].text}"</p>
              <div className="mt-6">
                <div className="font-bold text-sm" style={{ color: BRAND.dark }}>{testimonials[testi].name}</div>
                <div className="text-xs text-stone-400 mt-0.5">{testimonials[testi].role}</div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-9">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTesti(i)} className="h-2 rounded-full transition-all duration-300" style={{ width: i === testi ? 24 : 8, background: i === testi ? BRAND.red : "#e5e0d8" }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      {/*<section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8" style={{ background: `linear-gradient(120deg, ${BRAND.red}, ${BRAND.redDark})` }}>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: "Manrope, sans-serif" }}>Health tips &amp; promotions, delivered.</h3>
                <p className="text-sm mt-2 text-white/75 max-w-md">Join our newsletter for medication reminders, weekly promotions and community health tips.</p>
              </div>
              <form className="flex gap-2.5 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="you@email.com" className="px-5 py-3.5 rounded-full bg-white/10 border border-white/30 text-white placeholder-white/60 outline-none text-sm flex-1 md:w-64" />
                <button className="px-6 py-3.5 rounded-full bg-white font-extrabold text-sm hover:-translate-y-0.5 transition" style={{ color: BRAND.red }}>Subscribe</button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>*/}
    </>
  );
}