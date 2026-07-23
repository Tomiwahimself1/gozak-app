import React from "react";
import { Tv, Smartphone, Package, Sofa, Shirt, Building2, Sparkles } from "lucide-react";
import { BRAND } from "../lib/brand";
import { Reveal } from "../components/Reveal";
import { Btn } from "../components/Btn";
import { PageHero, SectionHead, ProductCard, CategoryTile } from "../components/Shared";

export default function MallPage() {
  const cats = [
    { Icon: Tv, label: "Electronics", count: "110+ items" },
    { Icon: Smartphone, label: "Mobile Phones", count: "85+ items" },
    { Icon: Package, label: "Accessories", count: "140+ items" },
    { Icon: Sofa, label: "Furniture", count: "60+ items" },
    { Icon: Shirt, label: "Fashion", count: "200+ items" },
    { Icon: Building2, label: "Home Appliances", count: "75+ items" },
  ];

  const products = [
    { name: "Smart LED TV 43\"", cat: "Electronics", price: "₦185,000", rating: 5, Icon: Tv, tag: "New" },
    { name: "Android Smartphone", cat: "Mobile Phones", price: "₦95,000", oldPrice: "₦110,000", rating: 4, Icon: Smartphone, tag: "Popular" },
    { name: "3-Seater Fabric Sofa", cat: "Furniture", price: "₦145,000", rating: 4, Icon: Sofa },
    { name: "Men's Casual Shirt", cat: "Fashion", price: "₦8,500", rating: 5, Icon: Shirt },
  ];

  return (
    <>
      <PageHero eyebrow="Shopping Mall" title="Electronics, fashion & home — all in one visit." desc="From the latest gadgets to furniture and lifestyle finds, Level 3 has it all." Icon={Building2} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead eyebrow="Browse" title="Mall categories" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {cats.map((c, i) => <CategoryTile key={i} {...c} delay={i * 60} />)}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "rgba(193,18,31,0.03)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead eyebrow="Featured" title="Trending in the mall" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((p, i) => <ProductCard key={i} {...p} delay={i * 80} />)}
          </div>
        </div>
      </section>

      <section className="py-28">
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
    </>
  );
}
