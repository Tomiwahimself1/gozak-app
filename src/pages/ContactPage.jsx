import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, PhoneCall, Send, CheckCircle2 } from "lucide-react";
import { BRAND } from "../lib/brand";
import { Reveal } from "../components/Reveal";
import { Btn } from "../components/Btn";
import { PageHero } from "../components/Shared";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const info = [
    { Icon: MapPin, t: "Visit Us", d: "No.1 Adenikpekun Close, Akure Garage Roundabout, Ondo Town, Ondo State" },
    { Icon: Phone, t: "Call Us", d: "+234 811 111 6110" },
    { Icon: Mail, t: "Email Us", d: "adedinsewoadetomiwa@gmail.com" },
    { Icon: Clock, t: "Opening Hours", d: "Mon – Sat: 8:00 AM – 9:00 PM · Sun: 10:00 AM – 6:00 PM" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Prepare payload for Web3Forms API
    const object = {
      access_key: "25aa4e2f-49a1-4112-8921-d9612b1e596f", // <-- PASTE YOUR KEY FROM EMAIL HERE
      subject: `New Inquiry from ${formData.firstName} ${formData.lastName}`,
      from_name: `${formData.firstName} ${formData.lastName}`,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(object),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please check your network and try again.");
    } finally {
      setLoading(false);
    }
  };

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

              {submitted ? (
                <div className="mt-8 p-8 rounded-2xl bg-green-50 border border-green-200 text-center">
                  <CheckCircle2 size={42} className="text-green-600 mx-auto mb-3" />
                  <h4 className="font-extrabold text-green-900 text-lg">Message Sent Successfully!</h4>
                  <p className="text-sm text-green-700 mt-1">Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      required
                      className="px-4 py-3 rounded-xl border border-stone-200 outline-none text-sm focus:border-red-500 transition"
                    />
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      required
                      className="px-4 py-3 rounded-xl border border-stone-200 outline-none text-sm focus:border-red-500 transition"
                    />
                  </div>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 outline-none text-sm focus:border-red-500 transition"
                  />
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 outline-none text-sm focus:border-red-500 transition"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 outline-none text-sm resize-none focus:border-red-500 transition"
                  />

                  <Btn type="submit" variant="primary" className="w-full" icon={Send} disabled={loading}>
                    {loading ? "Sending Message..." : "Send Message"}
                  </Btn>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}